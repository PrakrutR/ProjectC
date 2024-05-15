import { LLM } from "@/types"

const TOGETHER_PLATFORM_LINK = "https://docs.together.ai/docs/quickstart"

// Together Models (UPDATED 5/5/24) -----------------------------

// 01.AI YI Chat
const zero_one_AI_YI_CHAT: LLM = {
  modelId: "zero-one-ai/Yi-34B-Chat",
  modelName: "01.AI Yi Chat",
  provider: "together",
  hostedId: "zero-one-ai/Yi-34B-Chat",
  platformLink: TOGETHER_PLATFORM_LINK,
  imageInput: false
}

//OLMo Instruct
const OLMo_INSTRUCT: LLM = {
  modelId: "allenai/OLMo-7B-Instruct",
  modelName: "OLMo Instruct",
  provider: "together",
  hostedId: "allenai/OLMo-7B-Instruct",
  platformLink: TOGETHER_PLATFORM_LINK,
  imageInput: false
}

//	OLMo Twin-2T
const OLMo_TWIN_2T: LLM = {
  modelId: "allenai/OLMo-7B-Twin-2T",
  modelName: "OLMo Twin-2T",
  provider: "together",
  hostedId: "allenai/OLMo-7B-Twin-2T",
  platformLink: TOGETHER_PLATFORM_LINK,
  imageInput: false
}

// OLMo (7B)
const OLMo_7B: LLM = {
  modelId: "allenai/OLMo-7B",
  modelName: "OLMo (7B)",
  provider: "together",
  hostedId: "allenai/OLMo-7B",
  platformLink: TOGETHER_PLATFORM_LINK,
  imageInput: false
}

// Chronos Hermes (13B)
const CHRONOS_HERMES_13B: LLM = {
  modelId: "Austism/chronos-hermes-13b",
  modelName: "Chronos Hermes (13B)",
  provider: "together",
  hostedId: "Austism/chronos-hermes-13b",
  platformLink: TOGETHER_PLATFORM_LINK,
  imageInput: false
}

// Dolphin 2.5 Mixtral 8x7b
const DOLPHIN_2_5_MIXTRAL_8X7B: LLM = {
  modelId: "cognitivecomputations/dolphin-2.5-mixtral-8x7b",
  modelName: "Dolphin 2.5 Mixtral 8x7b",
  provider: "together",
  hostedId: "cognitivecomputations/dolphin-2.5-mixtral-8x7b",
  platformLink: TOGETHER_PLATFORM_LINK,
  imageInput: false
}

//DBRX Instruct
const DBRX_INSTRUCT: LLM = {
  modelId: "databricks/dbrx-instruct",
  modelName: "DBRX Instruct",
  provider: "together",
  hostedId: "databricks/dbrx-instruct",
  platformLink: TOGETHER_PLATFORM_LINK,
  imageInput: false
}

//Deepseek Coder Instruct (33B)
const DEEPSEEK_CODER_INSTRUCT_33B: LLM = {
  modelId: "deepseek-ai/deepseek-coder-33b-instruct",
  modelName: "Deepseek Coder Instruct (33B)",
  provider: "together",
  hostedId: "deepseek-ai/deepseek-coder-33b-instruct",
  platformLink: TOGETHER_PLATFORM_LINK,
  imageInput: false
}

//DeepSeek LLM Chat (67B)
const DEEPSEEK_LLM_CHAT_67B: LLM = {
  modelId: "deepseek-ai/deepseek-llm-67b-chat",
  modelName: "DeepSeek LLM Chat (67B)",
  provider: "together",
  hostedId: "deepseek-ai/deepseek-llm-67b-chat",
  platformLink: TOGETHER_PLATFORM_LINK,
  imageInput: false
}

//Platypus2 Instruct (70B)
const PLATYPUS2_INSTRUCT_70B: LLM = {
  modelId: "garage-bAInd/Platypus2-70B-instruct",
  modelName: "Platypus2 Instruct (70B)",
  provider: "together",
  hostedId: "garage-bAInd/Platypus2-70B-instruct",
  platformLink: TOGETHER_PLATFORM_LINK,
  imageInput: false
}

//	Gemma Instruct (2B)
const GEMMA_INSTRUCT_2B: LLM = {
  modelId: "google/gemma-2b-it",
  modelName: "Gemma Instruct (2B)",
  provider: "together",
  hostedId: "google/gemma-2b-it",
  platformLink: TOGETHER_PLATFORM_LINK,
  imageInput: false
}

//MythoMax-L2 (13B)
const MYTHOMAX_L2_13B: LLM = {
  modelId: "Gryphe/MythoMax-L2-13b",
  modelName: "MythoMax-L2 (13B)",
  provider: "together",
  hostedId: "Gryphe/MythoMax-L2-13b",
  platformLink: TOGETHER_PLATFORM_LINK,
  imageInput: false
}

//	Vicuna v1.5 (13B)
const VICUNA_V1_5_13B: LLM = {
  modelId: "lmsys/vicuna-13b-v1.5b",
  modelName: "Vicuna v1.5 (13B)",
  provider: "together",
  hostedId: "lmsys/vicuna-13b-v1.5",
  platformLink: TOGETHER_PLATFORM_LINK,
  imageInput: false
}

//Vicuna v1.5 (7B)
const VICUNA_V1_5_7B: LLM = {
  modelId: "lmsys/vicuna-7b-v1.5b",
  modelName: "Vicuna v1.5 (7B)",
  provider: "together",
  hostedId: "lmsys/vicuna-7b-v1.5",
  platformLink: TOGETHER_PLATFORM_LINK,
  imageInput: false
}

export const TOGETHER_LLM_LIST = [
  zero_one_AI_YI_CHAT,
  OLMo_INSTRUCT,
  OLMo_TWIN_2T,
  OLMo_7B,
  CHRONOS_HERMES_13B,
  DOLPHIN_2_5_MIXTRAL_8X7B,
  DBRX_INSTRUCT,
  DEEPSEEK_CODER_INSTRUCT_33B,
  DEEPSEEK_LLM_CHAT_67B,
  PLATYPUS2_INSTRUCT_70B,
  GEMMA_INSTRUCT_2B,
  MYTHOMAX_L2_13B,
  VICUNA_V1_5_13B,
  VICUNA_V1_5_7B
]
