import { CHAT_SETTING_LIMITS } from "@/lib/chat-setting-limits"
import { checkApiKey, getServerProfile } from "@/lib/server/server-chat-helpers"
import { ChatSettings } from "@/types"
import { OpenAIStream, StreamingTextResponse } from "ai"
import { CohereClient } from "cohere-ai"
import { read } from "fs"

export async function POST(request: Request) {
  const json = await request.json()
  const { chatSettings, messages } = json as {
    chatSettings: ChatSettings
    messages: any[]
  }

  try {
    const profile = await getServerProfile()
    checkApiKey(profile.cohere_api_key, "Cohere")

    const cohere = new CohereClient({
      token: profile.cohere_api_key || "",
      environment:
        "https://gateway.ai.cloudflare.com/v1/2289e874518b229dd2bbfb474a552b2f/genhub/cohere"
    })

    // Prepare chat history without the last message
    const chatHistory = messages.slice(0, -1).map(message => ({
      role: message.role,
      message: message.content
    }))

    // The last message to continue the conversation
    const lastMessage = messages[messages.length - 1].content

    const chatStream = await cohere.chatStream({
      model: chatSettings.model,
      chatHistory: chatHistory,
      message: lastMessage,
      temperature: chatSettings.temperature
    })

    const readableStream = new ReadableStream({
      async start(controller) {
        for await (const chat of chatStream) {
          if (chat.eventType === "text-generation") {
            controller.enqueue(chat.text)
          }
        }
        controller.close()
      }
    })

    // Respond with the stream
    return new StreamingTextResponse(readableStream)
  } catch (error: any) {
    let errorMessage = error.message || "An unexpected error occurred"
    const errorCode = error.status || 500

    console.error(`Error: ${errorMessage}`)

    if (errorMessage.toLowerCase().includes("api key not found")) {
      errorMessage =
        "Cohere API Key not found. Please set it in your profile settings."
    } else if (errorCode === 401) {
      errorMessage =
        "Cohere API Key is incorrect. Please fix it in your profile settings."
    }

    return new Response(JSON.stringify({ message: errorMessage }), {
      status: errorCode,
      headers: { "Content-Type": "application/json" }
    })
  }
}
