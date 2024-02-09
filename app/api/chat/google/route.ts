import { checkApiKey, getServerProfile } from "@/lib/server/server-chat-helpers"
import { ChatSettings } from "@/types"
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai"

export const runtime = "edge"

const safetySettings = {
  [HarmCategory.HARM_CATEGORY_HARASSMENT]: HarmBlockThreshold.BLOCK_NONE,
  [HarmCategory.HARM_CATEGORY_HATE_SPEECH]: HarmBlockThreshold.BLOCK_NONE,
  [HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT]: HarmBlockThreshold.BLOCK_NONE,
  [HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT]: HarmBlockThreshold.BLOCK_NONE,
};

export async function POST(request: Request) {
  const json = await request.json()
  const { chatSettings, messages } = json as {
    chatSettings: ChatSettings
    messages: any[]
  }

  try {
    const profile = await getServerProfile()

    checkApiKey(profile.google_gemini_api_key, "Google")

    const genAI = new GoogleGenerativeAI(profile.google_gemini_api_key || "")
    const googleModel = genAI.getGenerativeModel({ model: chatSettings.model })

    if (chatSettings.model === "gemini-pro") {
      const lastMessage = messages.pop()

      // Assuming startChat can accept safety settings at the same level as generationConfig
      const chat = googleModel.startChat({
        history: messages,
        generationConfig: {
          temperature: chatSettings.temperature,
        },
        safetySettings: safetySettings, // Adjusted to be a top-level property if supported
      })

      // Continue with your existing logic for sending the message and streaming the response
    } else if (chatSettings.model === "gemini-pro-vision") {
      // Assuming generateContent can accept safety settings at the same level as the content and generationConfig
      const HACKY_MESSAGE = messages[messages.length - 1]

      const result = await googleModel.generateContent({
        content: [HACKY_MESSAGE.prompt, HACKY_MESSAGE.imageParts],
        generationConfig: {
          // Any specific generation config here
        },
        safetySettings: safetySettings, // Adjusted to be a top-level property if supported
      })

      // Continue with your existing logic for handling the response
    }
  } catch (error: any) {
    let errorMessage = error.message || "An unexpected error occurred"
    const errorCode = error.status || 500

    if (errorMessage.toLowerCase().includes("api key not found")) {
      errorMessage =
        "Google Gemini API Key not found. Please set it in your profile settings."
    } else if (errorMessage.toLowerCase().includes("api key not valid")) {
      errorMessage =
        "Google Gemini API Key is incorrect. Please fix it in your profile settings."
    }

    return new Response(JSON.stringify({ message: errorMessage }), {
      status: errorCode
    })
  }
}
