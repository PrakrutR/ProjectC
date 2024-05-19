import { checkApiKey, getServerProfile } from "@/lib/server/server-chat-helpers"
import { ChatSettings } from "@/types"
import { OpenAIStream, StreamingTextResponse } from "ai"
import openai from "openai"

export async function POST(request: Request) {
  const json = await request.json()
  const { chatSettings, messages } = json as {
    chatSettings: ChatSettings
    messages: any[]
  }

  try {
    const profile = await getServerProfile()
    checkApiKey(profile.gooseai_api_key, "Together")

    // GooseAI is compatible the OpenAI SDK
    const { Configuration, OpenAIApi } = require("openai")

    const configuration = new Configuration({
      apiKey: profile.gooseai_api_key || "",
      baseURL: "https://api.goose.ai/v1"
    })

    const gooseai = new OpenAIApi(configuration)

    const response = await gooseai.createCompletion({
      engeine_id: chatSettings.model,
      prompt: messages,
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

    if (errorMessage.toLowerCase().includes("api key not found")) {
      errorMessage =
        "GooseAI API Key not found. Please set it in your profile settings."
    } else if (errorCode === 401) {
      errorMessage =
        "GooseAI API Key is incorrect. Please fix it in your profile settings."
    }

    return new Response(JSON.stringify({ message: errorMessage }), {
      status: errorCode
    })
  }
}
