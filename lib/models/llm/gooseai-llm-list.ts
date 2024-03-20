import { LLM } from "@/types"

const GOOSEAI_PLATORM_LINK = "https://goose.ai/docs"

// GooseAI Models (UPDATED 1/25/24) -----------------------------

// GPT-NeoX 20B (UPDATED 1/25/24)
const GPT_NeoX_20B: LLM = {
  modelId: "gpt-neo-20b",
  modelName: "GPT-NeoX 20B",
  provider: "gooseai",
  hostedId: "gpt-neo-20b",
  platformLink: GOOSEAI_PLATORM_LINK,
  imageInput: false
}

// GPT-J 6B (UPDATED 1/25/24)
const GPT_J_6B: LLM = {
  modelId: "gpt-j-6b",
  modelName: "GPT-J 6B",
  provider: "gooseai",
  hostedId: "gpt-j-6b",
  platformLink: GOOSEAI_PLATORM_LINK,
  imageInput: false
}

// GPT-Neo 2.7B (UPDATED 1/25/24)
const GPT_Neo_2_7B: LLM = {
  modelId: "gpt-neo-2-7b",
  modelName: "GPT-Neo 2.7B",
  provider: "gooseai",
  hostedId: "gpt-neo-2-7b",
  platformLink: GOOSEAI_PLATORM_LINK,
  imageInput: false
}

// GPT-Neo 1.3B (UPDATED 1/25/24)
const GPT_Neo_1_3B: LLM = {
  modelId: "gpt-neo-1-3b",
  modelName: "GPT-Neo 1.3B",
  provider: "gooseai",
  hostedId: "gpt-neo-1-3b",
  platformLink: GOOSEAI_PLATORM_LINK,
  imageInput: false
}

// GPT-Neo 125M (UPDATED 1/25/24)
const GPT_Neo_125M: LLM = {
  modelId: "gpt-neo-125m",
  modelName: "GPT-Neo 125M",
  provider: "gooseai",
  hostedId: "gpt-neo-125m",
  platformLink: GOOSEAI_PLATORM_LINK,
  imageInput: false
}

// Fairseq 13B (UPDATED 1/25/24)
const Fairseq_13B: LLM = {
  modelId: "fairseq-13b",
  modelName: "Fairseq 13B",
  provider: "gooseai",
  hostedId: "fairseq-13b",
  platformLink: GOOSEAI_PLATORM_LINK,
  imageInput: false
}

// Fairseq 6.7B (UPDATED 1/25/24)
const Fairseq_6_7B: LLM = {
  modelId: "fairseq-6-7b",
  modelName: "Fairseq 6.7B",
  provider: "gooseai",
  hostedId: "fairseq-6-7b",
  platformLink: GOOSEAI_PLATORM_LINK,
  imageInput: false
}

// Fairseq 2.7B (UPDATED 1/25/24)
const Fairseq_2_7B: LLM = {
  modelId: "fairseq-2-7b",
  modelName: "Fairseq 2.7B",
  provider: "gooseai",
  hostedId: "fairseq-2-7b",
  platformLink: GOOSEAI_PLATORM_LINK,
  imageInput: false
}

// Fairseq 1.3B (UPDATED 1/25/24)
const Fairseq_1_3B: LLM = {
  modelId: "fairseq-1-3b",
  modelName: "Fairseq 1.3B",
  provider: "gooseai",
  hostedId: "fairseq-1-3b",
  platformLink: GOOSEAI_PLATORM_LINK,
  imageInput: false
}

// Fairseq 125M (UPDATED 1/25/24)
const Fairseq_125M: LLM = {
  modelId: "fairseq-125m",
  modelName: "Fairseq 125M",
  provider: "gooseai",
  hostedId: "fairseq-125m",
  platformLink: GOOSEAI_PLATORM_LINK,
  imageInput: false
}

export const GOOSEAI_LLM_LIST: LLM[] = [
  GPT_NeoX_20B,
  GPT_J_6B,
  GPT_Neo_2_7B,
  GPT_Neo_1_3B,
  GPT_Neo_125M,
  Fairseq_13B,
  Fairseq_6_7B,
  Fairseq_2_7B,
  Fairseq_1_3B,
  Fairseq_125M
]
