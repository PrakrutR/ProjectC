import { checkApiKey, getServerProfile } from "@/lib/server/server-chat-helpers"
import { ChatSettings } from "@/types"
import { OpenAIStream, StreamingTextResponse } from "ai"
import { ServerRuntime } from "next"
import OpenAI from "openai"
import { ChatCompletionCreateParamsBase } from "openai/resources/chat/completions.mjs"

export const runtime: ServerRuntime = "edge"

export async function POST(request: Request) {
  const json = await request.json()
  const { chatSettings, messages } = json as {
    chatSettings: ChatSettings
    messages: any[]
  }

  try {
    const profile = await getServerProfile()
    checkApiKey(profile.cloudflare_api_key, "Cloudflare")

    const cloudflare = new OpenAI({
      apiKey: profile.cloudflare_api_key || "",
      baseURL:
        "https://api.cloudflare.com/client/v4/accounts/2289e874518b229dd2bbfb474a552b2f/ai/v1"
    })

    const response = await cloudflare.chat.completions.create({
      model: chatSettings.model,
      messages: messages,
      temperature: chatSettings.temperature,
      stream: true
    })

    // Convert the response into a friendly text-stream.
    const stream = OpenAIStream(response)

    // Respond with the stream
    return new StreamingTextResponse(stream)
  } catch (error: any) {
    let errorMessage = error.message || "An unexpected error occurred"
    const errorCode = error.status || 500

    console.error(`Error: ${errorMessage}`, error)

    if (errorMessage.toLowerCase().includes("api key not found")) {
      errorMessage =
        "Cloudflare API Key not found. Please set it in your profile settings."
    } else if (errorMessage.toLowerCase().includes("incorrect api key")) {
      errorMessage =
        "Cloudflare API Key is incorrect. Please fix it in your profile settings."
    }

    return new Response(JSON.stringify({ message: errorMessage }), {
      status: errorCode,
      headers: { "Content-Type": "application/json" }
    })
  }
}
