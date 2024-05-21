import { LLM } from "@/types"

const CLOUDFLARE_PLATFORM_LINK = "https://developers.cloudflare.com/workers-ai"

// Together Models (UPDATED 5/5/24) -----------------------------

// LLaMa 2 7B Chat fp16
const LLAMA_2_CHAT_FP16: LLM = {
  modelId: "@cf/meta/llama-2-7b-chat-fp16",
  modelName: "LLaMa 2 7B Chat fp16",
  provider: "cloudflare",
  hostedId: "@cf/meta/llama-2-7b-chat-fp16",
  platformLink: CLOUDFLARE_PLATFORM_LINK,
  imageInput: false
}
// LLaMa 2 7B Chat int8
const LLAMA_2_CHAT_INT8: LLM = {
  modelId: "@cf/meta/llama-2-7b-chat-int8",
  modelName: "LLaMa 2 7B Chat int8",
  provider: "cloudflare",
  hostedId: "@cf/meta/llama-2-7b-chat-int8",
  platformLink: CLOUDFLARE_PLATFORM_LINK,
  imageInput: false
}
// @hf/thebloke/deepseek-coder-6.7b-base-awq
const DEEPSEEK_CODER_67B_BASE_AWQ: LLM = {
  modelId: "@hf/thebloke/deepseek-coder-6.7b-base-awq",
  modelName: "DeepSeek Coder 6.7B Base AWQ",
  provider: "cloudflare",
  hostedId: "@hf/thebloke/deepseek-coder-6.7b-base-awq",
  platformLink: CLOUDFLARE_PLATFORM_LINK,
  imageInput: false
}
//@hf/thebloke/deepseek-coder-6.7b-instruct-awq
const DEEPSEEK_CODER_67B_INSTRUCT_AWQ: LLM = {
  modelId: "@hf/thebloke/deepseek-coder-6.7b-instruct-awq",
  modelName: "DeepSeek Coder 6.7B Instruct AWQ",
  provider: "cloudflare",
  hostedId: "@hf/thebloke/deepseek-coder-6.7b-instruct-awq",
  platformLink: CLOUDFLARE_PLATFORM_LINK,
  imageInput: false
}
//@hf/thebloke/discolm-german-7b-v1-awq
const DISCOLM_GERMAN_7B_V1_AWQ: LLM = {
  modelId: "@hf/thebloke/discolm-german-7b-v1-awq",
  modelName: "Discolm German 7B V1 AWQ",
  provider: "cloudflare",
  hostedId: "@hf/thebloke/discolm-german-7b-v1-awq",
  platformLink: CLOUDFLARE_PLATFORM_LINK,
  imageInput: false
}
//@cf/tiiuae/falcon-7b-instruct
const FALCON_7B_INSTRUCT: LLM = {
  modelId: "@cf/tiiuae/falcon-7b-instruct",
  modelName: "Falcon 7B Instruct",
  provider: "cloudflare",
  hostedId: "@cf/tiiuae/falcon-7b-instruct",
  platformLink: CLOUDFLARE_PLATFORM_LINK,
  imageInput: false
}
//@cf/tiiuae/gemma-2b-it-lora
const GEMMA_2B_IT_LORA: LLM = {
  modelId: "@cf/tiiuae/gemma-2b-it-lora",
  modelName: "Gemma 2B IT Lora",
  provider: "cloudflare",
  hostedId: "@cf/tiiuae/gemma-2b-it-lora",
  platformLink: CLOUDFLARE_PLATFORM_LINK,
  imageInput: false
}
//@cf/tiiuae/gemma-7b-it-lora
const GEMMA_7B_IT_LORA: LLM = {
  modelId: "@cf/tiiuae/gemma-7b-it-lora",
  modelName: "Gemma 7B IT Lora",
  provider: "cloudflare",
  hostedId: "@cf/tiiuae/gemma-7b-it-lora",
  platformLink: CLOUDFLARE_PLATFORM_LINK,
  imageInput: false
}
//@cf/nousresearch/hermes-2-pro-mistral-7b
const HERMES_2_PRO_MISTRAL_7B: LLM = {
  modelId: "@cf/nousresearch/hermes-2-pro-mistral-7b",
  modelName: "Hermes 2 Pro Mistral 7B",
  provider: "cloudflare",
  hostedId: "@cf/nousresearch/hermes-2-pro-mistral-7b",
  platformLink: CLOUDFLARE_PLATFORM_LINK,
  imageInput: false
}
//@cf/meta/llama-2-7b-chat-hf-lor
const LLAMA_2_CHAT_HF_LORA: LLM = {
  modelId: "@cf/meta/llama-2-7b-chat-hf-lor",
  modelName: "LLaMa 2 7B Chat HF Lora",
  provider: "cloudflare",
  hostedId: "@cf/meta/llama-2-7b-chat-hf-lor",
  platformLink: CLOUDFLARE_PLATFORM_LINK,
  imageInput: false
}
//@hf/thebloke/llama-2-13b-chat-awq
const LLAMA_2_13B_CHAT_AWQ: LLM = {
  modelId: "@hf/thebloke/llama-2-13b-chat-awq",
  modelName: "LLaMa 2 13B Chat AWQ",
  provider: "cloudflare",
  hostedId: "@hf/thebloke/llama-2-13b-chat-awq",
  platformLink: CLOUDFLARE_PLATFORM_LINK,
  imageInput: false
}
//@cf/meta/llama-3-8b-instruct
const LLAMA_3_8B_INSTRUCT: LLM = {
  modelId: "@cf/meta/llama-3-8b-instruct",
  modelName: "LLaMa 3 8B Instruct",
  provider: "cloudflare",
  hostedId: "@cf/meta/llama-3-8b-instruct",
  platformLink: CLOUDFLARE_PLATFORM_LINK,
  imageInput: false
}
//@hf/mistral/mistral-7b-instruct-v0.2
const MISTRAL_7B_INSTRUCT_V02: LLM = {
  modelId: "@hf/mistral/mistral-7b-instruct-v0.2",
  modelName: "Mistral 7B Instruct V0.2",
  provider: "cloudflare",
  hostedId: "@hf/mistral/mistral-7b-instruct-v0.2",
  platformLink: CLOUDFLARE_PLATFORM_LINK,
  imageInput: false
}
//@hf/thebloke/mistral-7b-instruct-v0.1-awq
const MISTRAL_7B_INSTRUCT_V01_AWQ: LLM = {
  modelId: "@hf/thebloke/mistral-7b-instruct-v0.1-awq",
  modelName: "Mistral 7B Instruct V0.1 AWQ",
  provider: "cloudflare",
  hostedId: "@hf/thebloke/mistral-7b-instruct-v0.1-awq",
  platformLink: CLOUDFLARE_PLATFORM_LINK,
  imageInput: false
}
//@hf/mistral/mistral-7b-instruct-v0.2-lora
const MISTRAL_7B_INSTRUCT_V02_LORA: LLM = {
  modelId: "@hf/mistral/mistral-7b-instruct-v0.2-lora",
  modelName: "Mistral 7B Instruct V0.2 Lora",
  provider: "cloudflare",
  hostedId: "@hf/mistral/mistral-7b-instruct-v0.2-lora",
  platformLink: CLOUDFLARE_PLATFORM_LINK,
  imageInput: false
}
//neural-chat-7b-v3-1-awq
const NEURAL_CHAT_7B_V3_1_AWQ: LLM = {
  modelId: "@hf/thebloke/neural-chat-7b-v3.1-awq",
  modelName: "Neural Chat 7B V3.1 AWQ",
  provider: "cloudflare",
  hostedId: "@hf/thebloke/neural-chat-7b-v3.1-awq",
  platformLink: CLOUDFLARE_PLATFORM_LINK,
  imageInput: false
}
//openchat-3.5-0106
const OPENCHAT_35_0106: LLM = {
  modelId: "@cf/openchat/openchat-3.5-0106",
  modelName: "OpenChat 3.5 0106",
  provider: "cloudflare",
  hostedId: "@cf/openchat/openchat-3.5-0106",
  platformLink: CLOUDFLARE_PLATFORM_LINK,
  imageInput: false
}
//openhermes-2.5-mistral-7b-awq
const OPENHERMES_25_MISTRAL_7B_AWQ: LLM = {
  modelId: "@hf/thebloke/openhermes-2.5-mistral-7b-awq",
  modelName: "OpenHermes 2.5 Mistral 7B AWQ",
  provider: "cloudflare",
  hostedId: "@hf/thebloke/openhermes-2.5-mistral-7b-awq",
  platformLink: CLOUDFLARE_PLATFORM_LINK,
  imageInput: false
}
//phi-2
const PHI_2: LLM = {
  modelId: "@cf/microsoft/phi-2",
  modelName: "Phi 2",
  provider: "cloudflare",
  hostedId: "@cf/microsoft/phi-2",
  platformLink: CLOUDFLARE_PLATFORM_LINK,
  imageInput: false
}
//qwen1.5-0.5b-chat
const QWEN15_05B_CHAT: LLM = {
  modelId: "@cf/qwen/qwen1.5-0.5b-chat",
  modelName: "Qwen1.5 0.5B Chat",
  provider: "cloudflare",
  hostedId: "@cf/qwen/qwen1.5-0.5b-chat",
  platformLink: CLOUDFLARE_PLATFORM_LINK,
  imageInput: false
}
//qwen1.5-1.8b-chat
const QWEN15_18B_CHAT: LLM = {
  modelId: "@cf/qwen/qwen1.5-1.8b-chat",
  modelName: "Qwen1.5 1.8B Chat",
  provider: "cloudflare",
  hostedId: "@cf/qwen/qwen1.5-1.8b-chat",
  platformLink: CLOUDFLARE_PLATFORM_LINK,
  imageInput: false
}
//qwen1.5-14b-chat-awq
const QWEN15_14B_CHAT_AWQ: LLM = {
  modelId: "@cf/qwen/qwen1.5-14b-chat-awq",
  modelName: "Qwen1.5 14B Chat AWQ",
  provider: "cloudflare",
  hostedId: "@cf/qwen/qwen1.5-14b-chat-awq",
  platformLink: CLOUDFLARE_PLATFORM_LINK,
  imageInput: false
}
//qwen1.5-7b-chat-awq
const QWEN15_7B_CHAT_AWQ: LLM = {
  modelId: "@cf/qwen/qwen1.5-7b-chat-awq",
  modelName: "Qwen1.5 7B Chat AWQ",
  provider: "cloudflare",
  hostedId: "@cf/qwen/qwen1.5-7b-chat-awq",
  platformLink: CLOUDFLARE_PLATFORM_LINK,
  imageInput: false
}
//sqlcoder-7b-2
const SQLCODER_7B_2: LLM = {
  modelId: "@cf/defog/sqlcoder-7b-2",
  modelName: "SQLCoder 7B 2",
  provider: "cloudflare",
  hostedId: "@cf/defog/sqlcoder-7b-2",
  platformLink: CLOUDFLARE_PLATFORM_LINK,
  imageInput: false
}
//starling-lm-7b-beta
const STARLING_LM_7B_BETA: LLM = {
  modelId: "@hf/nexusflow/starling-lm-7b-beta",
  modelName: "Starling LM 7B Beta",
  provider: "cloudflare",
  hostedId: "@hf/nexusflow/starling-lm-7b-beta",
  platformLink: CLOUDFLARE_PLATFORM_LINK,
  imageInput: false
}
//tinyllama-1.1b-chat-v1.0
const TINYLLAMA_11B_CHAT_V10: LLM = {
  modelId: "@cf/tinyllama/tinyllama-1.1b-chat-v1.0",
  modelName: "TinyLLaMa 1.1B Chat V1.0",
  provider: "cloudflare",
  hostedId: "@cf/tinyllama/tinyllama-1.1b-chat-v1.0",
  platformLink: CLOUDFLARE_PLATFORM_LINK,
  imageInput: false
}
//una-cybertron-7b-v2-bf16
const UNA_CYBERTRON_7B_V2_BF16: LLM = {
  modelId: "@cf/fblgit/una-cybertron-7b-v2-bf16",
  modelName: "Una Cybertron 7B V2 BF16",
  provider: "cloudflare",
  hostedId: "@cf/fblgit/una-cybertron-7b-v2-bf16",
  platformLink: CLOUDFLARE_PLATFORM_LINK,
  imageInput: false
}
//zephyr-7b-beta-awq
const ZEPHYR_7B_BETA_AWQ: LLM = {
  modelId: "@hf/thebloke/zephyr-7b-beta-awq",
  modelName: "Zephyr 7B Beta AWQ",
  provider: "cloudflare",
  hostedId: "@hf/thebloke/zephyr-7b-beta-awq",
  platformLink: CLOUDFLARE_PLATFORM_LINK,
  imageInput: false
}

export const CLOUDFLARE_LLM_LIST = [
  LLAMA_2_CHAT_FP16,
  LLAMA_2_CHAT_INT8,
  DEEPSEEK_CODER_67B_BASE_AWQ,
  DEEPSEEK_CODER_67B_INSTRUCT_AWQ,
  DISCOLM_GERMAN_7B_V1_AWQ,
  FALCON_7B_INSTRUCT,
  GEMMA_2B_IT_LORA,
  GEMMA_7B_IT_LORA,
  HERMES_2_PRO_MISTRAL_7B,
  LLAMA_2_CHAT_HF_LORA,
  LLAMA_2_13B_CHAT_AWQ,
  LLAMA_3_8B_INSTRUCT,
  MISTRAL_7B_INSTRUCT_V02,
  MISTRAL_7B_INSTRUCT_V01_AWQ,
  MISTRAL_7B_INSTRUCT_V02_LORA,
  NEURAL_CHAT_7B_V3_1_AWQ,
  OPENCHAT_35_0106,
  OPENHERMES_25_MISTRAL_7B_AWQ,
  PHI_2,
  QWEN15_05B_CHAT,
  QWEN15_18B_CHAT,
  QWEN15_14B_CHAT_AWQ,
  QWEN15_7B_CHAT_AWQ,
  SQLCODER_7B_2,
  STARLING_LM_7B_BETA,
  TINYLLAMA_11B_CHAT_V10,
  UNA_CYBERTRON_7B_V2_BF16,
  ZEPHYR_7B_BETA_AWQ
]
