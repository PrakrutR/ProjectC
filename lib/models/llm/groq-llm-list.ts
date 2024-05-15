import { LLM } from "@/types"

const GROQ_PLATORM_LINK = "https://groq.com/"

const LLaMA3_70B: LLM = {
  modelId: "llama3-70b-8192",
  modelName: "LLaMA3-70b-chat",
  provider: "groq",
  hostedId: "llama3-70b-8192",
  platformLink: GROQ_PLATORM_LINK,
  imageInput: false,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.7,
    outputCost: 0.8
  }
}

const LLaMA3_8B: LLM = {
  modelId: "llama3-8b-8192",
  modelName: "LLaMA3-8b-chat",
  provider: "groq",
  hostedId: "llama3-8b-8192",
  platformLink: GROQ_PLATORM_LINK,
  imageInput: false,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.7,
    outputCost: 0.8
  }
}

const LLaMA2_70B: LLM = {
  modelId: "llama2-70b-4096",
  modelName: "LLaMA2-70b-chat",
  provider: "groq",
  hostedId: "llama3-8b-8192",
  platformLink: GROQ_PLATORM_LINK,
  imageInput: false,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.05,
    outputCost: 0.1
  }
}

const Gemma_7b_it: LLM = {
  modelId: "gemma-7b-it",
  modelName: "Gemma-7b-it",
  provider: "groq",
  hostedId: "gemma-7b-it",
  platformLink: GROQ_PLATORM_LINK,
  imageInput: false,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.59,
    outputCost: 0.79
  }
}

const MIXTRAL_8X7B: LLM = {
  modelId: "mixtral-8x7b-32768",
  modelName: "Mixtral-8x7b-Instruct-v0.1",
  provider: "groq",
  hostedId: "mixtral-8x7b-32768",
  platformLink: GROQ_PLATORM_LINK,
  imageInput: false,
  pricing: {
    currency: "USD",
    unit: "1M tokens",
    inputCost: 0.27,
    outputCost: 0.27
  }
}

export const GROQ_LLM_LIST: LLM[] = [
  LLaMA3_70B,
  LLaMA3_8B,
  LLaMA2_70B,
  Gemma_7b_it,
  MIXTRAL_8X7B
]
