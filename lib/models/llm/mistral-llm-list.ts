import { LLM } from "@/types"

const MISTRAL_PLATORM_LINK = "https://docs.mistral.ai/"

// Mistral Models (UPDATED 12/21/23) -----------------------------

// Mistral 7B (UPDATED 12/21/23)
const MISTRAL_7B: LLM = {
  modelId: "mistral-tiny",
  modelName: "Mistral Tiny",
  provider: "mistral",
  hostedId: "open-mistral-7b",
  platformLink: MISTRAL_PLATORM_LINK,
  imageInput: false
}

// Mistral 7B (UPDATED 12/21/23)
const MISTRAL_8x22B: LLM = {
  modelId: "open-mixtral-8x22b",
  modelName: "Mistral 8x22B",
  provider: "mistral",
  hostedId: "open-mixtral-8x22b",
  platformLink: MISTRAL_PLATORM_LINK,
  imageInput: false
}

// Mistral Medium (UPDATED 12/21/23)
const MISTRAL_MEDIUM: LLM = {
  modelId: "mistral-medium-latest",
  modelName: "Mistral Medium",
  provider: "mistral",
  hostedId: "mistral-medium-latest",
  platformLink: MISTRAL_PLATORM_LINK,
  imageInput: false,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 2.7,
    outputCost: 8.1
  }
}

// Mistral Large (UPDATED 03/05/24)
const MISTRAL_LARGE: LLM = {
  modelId: "mistral-large-latest",
  modelName: "Mistral Large",
  provider: "mistral",
  hostedId: "mistral-large-latest",
  platformLink: MISTRAL_PLATORM_LINK,
  imageInput: false,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 8,
    outputCost: 24
  }
}

export const MISTRAL_LLM_LIST: LLM[] = [
  MISTRAL_7B,
  MISTRAL_8x22B,
  MISTRAL_MEDIUM,
  MISTRAL_LARGE
]
