import { checkApiKey, getServerProfile } from "@/lib/server/server-chat-helpers"
import { ChatSettings } from "@/types"
import { Configuration, OpenAIApi } from "openai1"

export async function POST(request: Request) {
  const json = await request.json()
  const { chatSettings, messages } = json as {
    chatSettings: ChatSettings
    messages: any[]
  }

  try {
    const profile = await getServerProfile()
    checkApiKey(profile.gooseai_api_key, "Goose AI")

    const configuration = new Configuration({
      apiKey: profile.gooseai_api_key || "",
      basePath: "https://api.goose.ai/v1"
    })

    const gooseAI = new OpenAIApi(configuration)

    const response = await gooseAI.createCompletion(chatSettings.model, {
      prompt: messages.map(message => message.content).join("\n"),
      temperature: chatSettings.temperature
    })

    const completionText = response.data.choices
      .map(choice => choice.text)
      .join("\n")

    return new Response(JSON.stringify({ message: completionText }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    })
  } catch (error: any) {
    let errorMessage = error.message || "An unexpected error occurred"
    const errorCode = error.status || 500

    if (errorMessage.toLowerCase().includes("api key not found")) {
      errorMessage =
        "Goose AI API Key not found. Please set it in your profile settings."
    } else if (errorCode === 401) {
      errorMessage =
        "Goose AI API Key is incorrect. Please fix it in your profile settings."
    }

    return new Response(JSON.stringify({ message: errorMessage }), {
      status: errorCode,
      headers: { "Content-Type": "application/json" }
    })
  }
}
