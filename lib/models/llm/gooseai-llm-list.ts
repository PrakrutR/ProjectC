import { LLM } from "@/types"

const GOOSEAI_PLATFORM_LINK = "https://goose.ai/docs"

// GooseAI Models (UPDATED 5/5/24) -----------------------------

// GPT NeoX 20B
const GPT_NEO_X_20B: LLM = {
  modelId: "gpt-neo-20b",
  modelName: "GPT NeoX 20B",
  provider: "gooseai",
  hostedId: "gpt-neo-20b",
  platformLink: GOOSEAI_PLATFORM_LINK,
  imageInput: false
}

// Fairseq 125M
const FAIRSEQ_125M: LLM = {
  modelId: "fairseq-125m",
  modelName: "Fairseq 125M",
  provider: "gooseai",
  hostedId: "fairseq-125m",
  platformLink: GOOSEAI_PLATFORM_LINK,
  imageInput: false
}

// Fairseq 1.3B
const FAIRSEQ_1_3B: LLM = {
  modelId: "fairseq-1-3b",
  modelName: "Fairseq 1.3B",
  provider: "gooseai",
  hostedId: "fairseq-1-3b",
  platformLink: GOOSEAI_PLATFORM_LINK,
  imageInput: false
}

// Fairseq 2.7B
const FAIRSEQ_2_7B: LLM = {
  modelId: "fairseq-2-7b",
  modelName: "Fairseq 2.7B",
  provider: "gooseai",
  hostedId: "fairseq-2-7b",
  platformLink: GOOSEAI_PLATFORM_LINK,
  imageInput: false
}

// Fairseq 6.7B
const FAIRSEQ_6_7B: LLM = {
  modelId: "fairseq-6b-7b",
  modelName: "Fairseq 6.7B",
  provider: "gooseai",
  hostedId: "fairseq-6b-7b",
  platformLink: GOOSEAI_PLATFORM_LINK,
  imageInput: false
}

// Fairseq 13B
const FAIRSEQ_13B: LLM = {
  modelId: "fairseq-13b",
  modelName: "Fairseq 13B",
  provider: "gooseai",
  hostedId: "fairseq-13b",
  platformLink: GOOSEAI_PLATFORM_LINK,
  imageInput: false
}

// GPT J 6B
const GPT_J_6B: LLM = {
  modelId: "gpt-j-6b",
  modelName: "GPT J 6B",
  provider: "gooseai",
  hostedId: "gpt-j-6b",
  platformLink: GOOSEAI_PLATFORM_LINK,
  imageInput: false
}

// GPT NeoX 125M
const GPT_NEO_X_125M: LLM = {
  modelId: "gpt-neo-125m",
  modelName: "GPT NeoX 125M",
  provider: "gooseai",
  hostedId: "gpt-neo-125m",
  platformLink: GOOSEAI_PLATFORM_LINK,
  imageInput: false
}

// GPT NeoX 1.3B
const GPT_NEO_X_1_3B: LLM = {
  modelId: "gpt-neo-1-3b",
  modelName: "GPT NeoX 1.3B",
  provider: "gooseai",
  hostedId: "gpt-neo-1-3b",
  platformLink: GOOSEAI_PLATFORM_LINK,
  imageInput: false
}

// GPT NeoX 2.7B
const GPT_NEO_X_2_7B: LLM = {
  modelId: "gpt-neo-2-7b",
  modelName: "GPT NeoX 2.7B",
  provider: "gooseai",
  hostedId: "gpt-neo-2-7b",
  platformLink: GOOSEAI_PLATFORM_LINK,
  imageInput: false
}

export const GOOSEAI_LLM_LIST = [
  GPT_NEO_X_20B,
  FAIRSEQ_125M,
  FAIRSEQ_1_3B,
  FAIRSEQ_2_7B,
  FAIRSEQ_6_7B,
  FAIRSEQ_13B,
  GPT_J_6B,
  GPT_NEO_X_125M,
  GPT_NEO_X_1_3B,
  GPT_NEO_X_2_7B
]
