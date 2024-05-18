import { LLM } from "@/types"

const PERPLEXITY_PLATORM_LINK =
  "https://docs.perplexity.ai/docs/getting-started"

// Perplexity Models (UPDATED 2/25/24) -----------------------------
// Model Deprecation Notice
// Please note that on March 15, the pplx-70b-chat, pplx-70b-online, llama-2-70b-chat, and codellama-34b-instruct models will no longer be available through the Perplexity API.

// Sonar Small Chat (UPDATED 2/25/24)
const PERPLEXITY_SONAR_SMALL_CHAT_7B: LLM = {
  modelId: "llama-3-sonar-small-32k-chat",
  modelName: "Sonar Small Chat",
  provider: "perplexity",
  hostedId: "llama-3-sonar-small-32k-chat",
  platformLink: PERPLEXITY_PLATORM_LINK,
  imageInput: false
}

// Sonar Small Online (UPDATED 2/25/24)
const PERPLEXITY_SONAR_SMALL_ONLINE_7B: LLM = {
  modelId: "llama-3-sonar-small-32k-online",
  modelName: "Sonar Small Online",
  provider: "perplexity",
  hostedId: "llama-3-sonar-small-32k-online",
  platformLink: PERPLEXITY_PLATORM_LINK,
  imageInput: false
}

// Sonar Medium Chat (UPDATED 2/25/24)
const PERPLEXITY_SONAR_LARGE_CHAT_70B: LLM = {
  modelId: "llama-3-sonar-large-32k-chat",
  modelName: "Sonar Large Chat",
  provider: "perplexity",
  hostedId: "llama-3-sonar-large-32k-chat",
  platformLink: PERPLEXITY_PLATORM_LINK,
  imageInput: false
}

// Sonar Medium Online (UPDATED 2/25/24)
const PERPLEXITY_SONAR_LARGE_ONLINE_70B: LLM = {
  modelId: "llama-3-sonar-large-32k-online",
  modelName: "Sonar Large Online",
  provider: "perplexity",
  hostedId: "llama-3-sonar-large-32k-online",
  platformLink: PERPLEXITY_PLATORM_LINK,
  imageInput: false
}

export const PERPLEXITY_LLM_LIST: LLM[] = [
  PERPLEXITY_SONAR_SMALL_CHAT_7B,
  PERPLEXITY_SONAR_SMALL_ONLINE_7B,
  PERPLEXITY_SONAR_LARGE_CHAT_70B,
  PERPLEXITY_SONAR_LARGE_ONLINE_70B
]
