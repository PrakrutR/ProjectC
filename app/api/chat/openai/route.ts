import { checkApiKey, getServerProfile } from "@/lib/server/server-chat-helpers"
import { ChatSettings } from "@/types"
import { OpenAIStream, StreamingTextResponse } from "ai"
import { ServerRuntime } from "next"
import OpenAI from "openai"
import { createHeaders, PORTKEY_GATEWAY_URL } from "portkey-ai"

export const runtime: ServerRuntime = "edge"

const PORTKEY_API_KEY = process.env.PORTKEY_API_KEY // Import API key from environment variable
const PORTKEY_CONFIG_ID = "pc-defalu-91be34"

async function getFromPortkeyCache(key: string) {
  const response = await fetch(
    `${PORTKEY_GATEWAY_URL}/cache/${encodeURIComponent(key)}`,
    {
      headers: {
        Authorization: `Bearer ${PORTKEY_API_KEY}`,
        "Content-Type": "application/json"
      }
    }
  )

  if (response.ok) {
    return response.json()
  }

  return null
}

async function setToPortkeyCache(key: string, data: any) {
  await fetch(`${PORTKEY_GATEWAY_URL}/cache`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${PORTKEY_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ key, data })
  })
}

export async function POST(request: Request) {
  const json = await request.json()
  const { chatSettings, messages } = json as {
    chatSettings: ChatSettings
    messages: any[]
  }

  try {
    const profile = await getServerProfile()
    checkApiKey(profile.openai_api_key, "OpenAI")

    const cacheKey = JSON.stringify({ messages }) // Use only messages for cache key

    // Check Portkey cache first
    const cachedResponse = await getFromPortkeyCache(cacheKey)
    if (cachedResponse) {
      return new Response(JSON.stringify(cachedResponse), { status: 200 })
    }

    const openai = new OpenAI({
      apiKey: profile.openai_api_key || "",
      organization: profile.openai_organization_id,
      baseURL:
        "https://gateway.ai.cloudflare.com/v1/2289e874518b229dd2bbfb474a552b2f/genhub/openai"
    })

    const response = await openai.chat.completions.create({
      model: chatSettings.model as ChatCompletionCreateParamsBase["model"],
      messages: messages as ChatCompletionCreateParamsBase["messages"],
      temperature: chatSettings.temperature,
      max_tokens:
        chatSettings.model === "gpt-4-vision-preview" ||
        chatSettings.model === "gpt-4o"
          ? 4096
          : null,
      stream: true
    })

    const stream = OpenAIStream(response)

    // Cache the response in Portkey
    const responseBody = await response.json()
    await setToPortkeyCache(cacheKey, responseBody)

    return new StreamingTextResponse(stream)
  } catch (error: any) {
    let errorMessage = error.message || "An unexpected error occurred"
    const errorCode = error.status || 500

    if (errorMessage.toLowerCase().includes("api key not found")) {
      errorMessage =
        "OpenAI API Key not found. Please set it in your profile settings."
    } else if (errorMessage.toLowerCase().includes("incorrect api key")) {
      errorMessage =
        "OpenAI API Key is incorrect. Please fix it in your profile settings."
    }

    return new Response(JSON.stringify({ message: errorMessage }), {
      status: errorCode
    })
  }
}
