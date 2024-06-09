import { LLMID } from "@/types"

type ChatSettingLimits = {
  MIN_TEMPERATURE: number
  MAX_TEMPERATURE: number
  MAX_TOKEN_OUTPUT_LENGTH: number
  MAX_CONTEXT_LENGTH: number
}

export const CHAT_SETTING_LIMITS: Record<LLMID, ChatSettingLimits> = {
  // ANTHROPIC MODELS
  "claude-instant-1.2": {
    MIN_TEMPERATURE: 0.0,
    MAX_TEMPERATURE: 1.0,
    MAX_TOKEN_OUTPUT_LENGTH: 4096,
    MAX_CONTEXT_LENGTH: 100000
  },
  "claude-2.1": {
    MIN_TEMPERATURE: 0.0,
    MAX_TEMPERATURE: 1.0,
    MAX_TOKEN_OUTPUT_LENGTH: 4096,
    MAX_CONTEXT_LENGTH: 200000
  },
  "claude-3-haiku-20240307": {
    MIN_TEMPERATURE: 0.0,
    MAX_TEMPERATURE: 1.0,
    MAX_TOKEN_OUTPUT_LENGTH: 4096,
    MAX_CONTEXT_LENGTH: 200000
  },
  "claude-3-sonnet-20240229": {
    MIN_TEMPERATURE: 0.0,
    MAX_TEMPERATURE: 1.0,
    MAX_TOKEN_OUTPUT_LENGTH: 4096,
    MAX_CONTEXT_LENGTH: 200000
  },
  "claude-3-opus-20240229": {
    MIN_TEMPERATURE: 0.0,
    MAX_TEMPERATURE: 1.0,
    MAX_TOKEN_OUTPUT_LENGTH: 4096,
    MAX_CONTEXT_LENGTH: 200000
  },

  // GOOGLE MODELS

  "gemini-1.5-flash": {
    MIN_TEMPERATURE: 0.0,
    MAX_TEMPERATURE: 1.0,
    MAX_TOKEN_OUTPUT_LENGTH: 8192,
    MAX_CONTEXT_LENGTH: 1040384
  },
  "gemini-1.5-pro-latest": {
    MIN_TEMPERATURE: 0.0,
    MAX_TEMPERATURE: 1.0,
    MAX_TOKEN_OUTPUT_LENGTH: 8192,
    MAX_CONTEXT_LENGTH: 1040384
  },
  "gemini-pro": {
    MIN_TEMPERATURE: 0.0,
    MAX_TEMPERATURE: 1.0,
    MAX_TOKEN_OUTPUT_LENGTH: 2048,
    MAX_CONTEXT_LENGTH: 30720
  },
  "gemini-pro-vision": {
    MIN_TEMPERATURE: 0.0,
    MAX_TEMPERATURE: 1.0,
    MAX_TOKEN_OUTPUT_LENGTH: 4096,
    MAX_CONTEXT_LENGTH: 12288
  },

  // MISTRAL MODELS
  "mistral-tiny": {
    MIN_TEMPERATURE: 0.0,
    MAX_TEMPERATURE: 1.0,
    MAX_TOKEN_OUTPUT_LENGTH: 2000,
    MAX_CONTEXT_LENGTH: 8000
  },
  "open-mixtral-8x22b": {
    MIN_TEMPERATURE: 0.0,
    MAX_TEMPERATURE: 1.0,
    MAX_TOKEN_OUTPUT_LENGTH: 4096,
    MAX_CONTEXT_LENGTH: 64000
  },
  "mistral-medium-latest": {
    MIN_TEMPERATURE: 0.0,
    MAX_TEMPERATURE: 1.0,
    MAX_TOKEN_OUTPUT_LENGTH: 2000,
    MAX_CONTEXT_LENGTH: 32000
  },
  "mistral-large-latest": {
    MIN_TEMPERATURE: 0.0,
    MAX_TEMPERATURE: 1.0,
    MAX_TOKEN_OUTPUT_LENGTH: 2000,
    MAX_CONTEXT_LENGTH: 32000
  },

  // GROQ MODELS
  "llama3-70b-8192": {
    MIN_TEMPERATURE: 0.0,
    MAX_TEMPERATURE: 1.0,
    MAX_TOKEN_OUTPUT_LENGTH: 6000,
    MAX_CONTEXT_LENGTH: 8192
  },
  "llama3-8b-8192": {
    MIN_TEMPERATURE: 0.0,
    MAX_TEMPERATURE: 1.0,
    MAX_TOKEN_OUTPUT_LENGTH: 8192,
    MAX_CONTEXT_LENGTH: 8192
  },
  "gemma-7b-it": {
    MIN_TEMPERATURE: 0.0,
    MAX_TEMPERATURE: 1.0,
    MAX_TOKEN_OUTPUT_LENGTH: 8192,
    MAX_CONTEXT_LENGTH: 8192
  },
  "mixtral-8x7b-32768": {
    MIN_TEMPERATURE: 0.0,
    MAX_TEMPERATURE: 1.0,
    MAX_TOKEN_OUTPUT_LENGTH: 4096,
    MAX_CONTEXT_LENGTH: 32768
  },

  // OPENAI MODELS
  "gpt-3.5-turbo": {
    MIN_TEMPERATURE: 0.0,
    MAX_TEMPERATURE: 2.0,
    MAX_TOKEN_OUTPUT_LENGTH: 4096,
    MAX_CONTEXT_LENGTH: 4096
    // MAX_CONTEXT_LENGTH: 16385 (TODO: Change this back to 16385 when OpenAI bumps the model)
  },
  "gpt-4-turbo": {
    MIN_TEMPERATURE: 0.0,
    MAX_TEMPERATURE: 2.0,
    MAX_TOKEN_OUTPUT_LENGTH: 4096,
    MAX_CONTEXT_LENGTH: 128000
  },
  "gpt-4o": {
    MIN_TEMPERATURE: 0.0,
    MAX_TEMPERATURE: 2.0,
    MAX_TOKEN_OUTPUT_LENGTH: 4096,
    MAX_CONTEXT_LENGTH: 128000
  },

  // PERPLEXITY MODELS
  "llama-3-sonar-small-32k-chat": {
    MIN_TEMPERATURE: 0.0,
    MAX_TEMPERATURE: 1.0,
    MAX_TOKEN_OUTPUT_LENGTH: 16384,
    MAX_CONTEXT_LENGTH: 32768
  },
  "llama-3-sonar-small-32k-online": {
    MIN_TEMPERATURE: 0.0,
    MAX_TEMPERATURE: 1.0,
    MAX_TOKEN_OUTPUT_LENGTH: 12000,
    MAX_CONTEXT_LENGTH: 28000
  },
  "llama-3-sonar-large-32k-chat": {
    MIN_TEMPERATURE: 0.0,
    MAX_TEMPERATURE: 1.0,
    MAX_TOKEN_OUTPUT_LENGTH: 16384,
    MAX_CONTEXT_LENGTH: 32768
  },
  "llama-3-sonar-large-32k-online": {
    MIN_TEMPERATURE: 0.0,
    MAX_TEMPERATURE: 1.0,
    MAX_TOKEN_OUTPUT_LENGTH: 12000,
    MAX_CONTEXT_LENGTH: 28000
  },

  // TOGETHER MODELS
  "zero-one-ai/Yi-34B-Chat": {
    MIN_TEMPERATURE: 0.0,
    MAX_TEMPERATURE: 2.0,
    MAX_TOKEN_OUTPUT_LENGTH: 4096,
    MAX_CONTEXT_LENGTH: 4096
  },
  "allenai/OLMo-7B-Instruct": {
    MIN_TEMPERATURE: 0.0,
    MAX_TEMPERATURE: 2.0,
    MAX_TOKEN_OUTPUT_LENGTH: 2048,
    MAX_CONTEXT_LENGTH: 2048
  },
  "allenai/OLMo-7B-Twin-2T": {
    MIN_TEMPERATURE: 0.0,
    MAX_TEMPERATURE: 2.0,
    MAX_TOKEN_OUTPUT_LENGTH: 2048,
    MAX_CONTEXT_LENGTH: 2048
  },
  "allenai/OLMo-7B": {
    MIN_TEMPERATURE: 0.0,
    MAX_TEMPERATURE: 2.0,
    MAX_TOKEN_OUTPUT_LENGTH: 2048,
    MAX_CONTEXT_LENGTH: 2048
  },
  "Austism/chronos-hermes-13b": {
    MIN_TEMPERATURE: 0.0,
    MAX_TEMPERATURE: 2.0,
    MAX_TOKEN_OUTPUT_LENGTH: 2048,
    MAX_CONTEXT_LENGTH: 2048
  },
  "cognitivecomputations/dolphin-2.5-mixtral-8x7b": {
    MIN_TEMPERATURE: 0.0,
    MAX_TEMPERATURE: 2.0,
    MAX_TOKEN_OUTPUT_LENGTH: 32768,
    MAX_CONTEXT_LENGTH: 32768
  },
  "databricks/dbrx-instruct": {
    MIN_TEMPERATURE: 0.0,
    MAX_TEMPERATURE: 2.0,
    MAX_TOKEN_OUTPUT_LENGTH: 32768,
    MAX_CONTEXT_LENGTH: 32768
  },
  "deepseek-ai/deepseek-coder-33b-instruct": {
    MIN_TEMPERATURE: 0.0,
    MAX_TEMPERATURE: 2.0,
    MAX_TOKEN_OUTPUT_LENGTH: 16384,
    MAX_CONTEXT_LENGTH: 16384
  },
  "deepseek-ai/deepseek-llm-67b-chat": {
    MIN_TEMPERATURE: 0.0,
    MAX_TEMPERATURE: 2.0,
    MAX_TOKEN_OUTPUT_LENGTH: 4096,
    MAX_CONTEXT_LENGTH: 4096
  },
  "garage-bAInd/Platypus2-70B-instruct": {
    MIN_TEMPERATURE: 0.0,
    MAX_TEMPERATURE: 2.0,
    MAX_TOKEN_OUTPUT_LENGTH: 4096,
    MAX_CONTEXT_LENGTH: 4096
  },
  "google/gemma-2b-it": {
    MIN_TEMPERATURE: 0.0,
    MAX_TEMPERATURE: 2.0,
    MAX_TOKEN_OUTPUT_LENGTH: 8192,
    MAX_CONTEXT_LENGTH: 8192
  },
  "Gryphe/MythoMax-L2-13b": {
    MIN_TEMPERATURE: 0.0,
    MAX_TEMPERATURE: 2.0,
    MAX_TOKEN_OUTPUT_LENGTH: 4096,
    MAX_CONTEXT_LENGTH: 4096
  },
  "lmsys/vicuna-13b-v1.5b": {
    MIN_TEMPERATURE: 0.0,
    MAX_TEMPERATURE: 2.0,
    MAX_TOKEN_OUTPUT_LENGTH: 4096,
    MAX_CONTEXT_LENGTH: 4096
  },
  "lmsys/vicuna-7b-v1.5b": {
    MIN_TEMPERATURE: 0.0,
    MAX_TEMPERATURE: 2.0,
    MAX_TOKEN_OUTPUT_LENGTH: 4096,
    MAX_CONTEXT_LENGTH: 4096
  },

  // GOOSEAI MODELS
  "gpt-neo-20b": {
    MIN_TEMPERATURE: 0.0,
    MAX_TEMPERATURE: 1.0,
    MAX_TOKEN_OUTPUT_LENGTH: 2048,
    MAX_CONTEXT_LENGTH: 2048
  },
  "fairseq-125m": {
    MIN_TEMPERATURE: 0.0,
    MAX_TEMPERATURE: 1.0,
    MAX_TOKEN_OUTPUT_LENGTH: 2048,
    MAX_CONTEXT_LENGTH: 2048
  },
  "fairseq-1-3b": {
    MIN_TEMPERATURE: 0.0,
    MAX_TEMPERATURE: 1.0,
    MAX_TOKEN_OUTPUT_LENGTH: 2048,
    MAX_CONTEXT_LENGTH: 2048
  },
  "fairseq-2-7b": {
    MIN_TEMPERATURE: 0.0,
    MAX_TEMPERATURE: 1.0,
    MAX_TOKEN_OUTPUT_LENGTH: 2048,
    MAX_CONTEXT_LENGTH: 2048
  },
  "fairseq-6b-7b": {
    MIN_TEMPERATURE: 0.0,
    MAX_TEMPERATURE: 1.0,
    MAX_TOKEN_OUTPUT_LENGTH: 2048,
    MAX_CONTEXT_LENGTH: 2048
  },
  "fairseq-13b": {
    MIN_TEMPERATURE: 0.0,
    MAX_TEMPERATURE: 1.0,
    MAX_TOKEN_OUTPUT_LENGTH: 2048,
    MAX_CONTEXT_LENGTH: 2048
  },
  "gpt-j-6b": {
    MIN_TEMPERATURE: 0.0,
    MAX_TEMPERATURE: 1.0,
    MAX_TOKEN_OUTPUT_LENGTH: 2048,
    MAX_CONTEXT_LENGTH: 2048
  },
  "gpt-neo-125m": {
    MIN_TEMPERATURE: 0.0,
    MAX_TEMPERATURE: 1.0,
    MAX_TOKEN_OUTPUT_LENGTH: 2048,
    MAX_CONTEXT_LENGTH: 2048
  },
  "gpt-neo-1-3b": {
    MIN_TEMPERATURE: 0.0,
    MAX_TEMPERATURE: 1.0,
    MAX_TOKEN_OUTPUT_LENGTH: 2048,
    MAX_CONTEXT_LENGTH: 2048
  },
  "gpt-neo-2-7b": {
    MIN_TEMPERATURE: 0.0,
    MAX_TEMPERATURE: 1.0,
    MAX_TOKEN_OUTPUT_LENGTH: 2048,
    MAX_CONTEXT_LENGTH: 2048
  },

  // COHERE MODELS
  "command-r-plus": {
    MIN_TEMPERATURE: 0.0,
    MAX_TEMPERATURE: 1.0,
    MAX_TOKEN_OUTPUT_LENGTH: 2048,
    MAX_CONTEXT_LENGTH: 128000
  },
  "command-r": {
    MIN_TEMPERATURE: 0.0,
    MAX_TEMPERATURE: 1.0,
    MAX_TOKEN_OUTPUT_LENGTH: 2048,
    MAX_CONTEXT_LENGTH: 128000
  },
  command: {
    MIN_TEMPERATURE: 0.0,
    MAX_TEMPERATURE: 1.0,
    MAX_TOKEN_OUTPUT_LENGTH: 2048,
    MAX_CONTEXT_LENGTH: 4096
  },
  "command-nightly": {
    MIN_TEMPERATURE: 0.0,
    MAX_TEMPERATURE: 1.0,
    MAX_TOKEN_OUTPUT_LENGTH: 2048,
    MAX_CONTEXT_LENGTH: 128000
  },
  "command-light": {
    MIN_TEMPERATURE: 0.0,
    MAX_TEMPERATURE: 1.0,
    MAX_TOKEN_OUTPUT_LENGTH: 2048,
    MAX_CONTEXT_LENGTH: 4096
  },
  "command-light-nightly": {
    MIN_TEMPERATURE: 0.0,
    MAX_TEMPERATURE: 1.0,
    MAX_TOKEN_OUTPUT_LENGTH: 2048,
    MAX_CONTEXT_LENGTH: 4096
  },

  //Cloudflare Models
  "@cf/meta/llama-2-7b-chat-fp16": {
    MIN_TEMPERATURE: 0.0,
    MAX_TEMPERATURE: 1.0,
    MAX_TOKEN_OUTPUT_LENGTH: 2500,
    MAX_CONTEXT_LENGTH: 3072
  },
  "@cf/meta/llama-2-7b-chat-int8": {
    MIN_TEMPERATURE: 0.0,
    MAX_TEMPERATURE: 1.0,
    MAX_TOKEN_OUTPUT_LENGTH: 1800,
    MAX_CONTEXT_LENGTH: 2048
  },
  "@hf/thebloke/deepseek-coder-6.7b-base-awq": {
    MIN_TEMPERATURE: 0.0,
    MAX_TEMPERATURE: 1.0,
    MAX_TOKEN_OUTPUT_LENGTH: 2048,
    MAX_CONTEXT_LENGTH: 2048
  },
  "@hf/thebloke/deepseek-coder-6.7b-instruct-awq": {
    MIN_TEMPERATURE: 0.0,
    MAX_TEMPERATURE: 1.0,
    MAX_TOKEN_OUTPUT_LENGTH: 2048,
    MAX_CONTEXT_LENGTH: 2048
  },
  "@hf/thebloke/discolm-german-7b-v1-awq": {
    MIN_TEMPERATURE: 0.0,
    MAX_TEMPERATURE: 1.0,
    MAX_TOKEN_OUTPUT_LENGTH: 2048,
    MAX_CONTEXT_LENGTH: 2048
  },
  "@cf/tiiuae/falcon-7b-instruct": {
    MIN_TEMPERATURE: 0.0,
    MAX_TEMPERATURE: 1.0,
    MAX_TOKEN_OUTPUT_LENGTH: 2048,
    MAX_CONTEXT_LENGTH: 2048
  },
  "@cf/tiiuae/gemma-2b-it-lora": {
    MIN_TEMPERATURE: 0.0,
    MAX_TEMPERATURE: 1.0,
    MAX_TOKEN_OUTPUT_LENGTH: 8192,
    MAX_CONTEXT_LENGTH: 8192
  },
  "@cf/tiiuae/gemma-7b-it-lora": {
    MIN_TEMPERATURE: 0.0,
    MAX_TEMPERATURE: 1.0,
    MAX_TOKEN_OUTPUT_LENGTH: 8192,
    MAX_CONTEXT_LENGTH: 8192
  },
  "@cf/nousresearch/hermes-2-pro-mistral-7b": {
    MIN_TEMPERATURE: 0.0,
    MAX_TEMPERATURE: 1.0,
    MAX_TOKEN_OUTPUT_LENGTH: 2048,
    MAX_CONTEXT_LENGTH: 2048
  },
  "@hf/thebloke/llama-2-13b-chat-awq": {
    MIN_TEMPERATURE: 0.0,
    MAX_TEMPERATURE: 1.0,
    MAX_TOKEN_OUTPUT_LENGTH: 2500,
    MAX_CONTEXT_LENGTH: 3072
  },
  "@cf/meta/llama-2-7b-chat-hf-lor": {
    MIN_TEMPERATURE: 0.0,
    MAX_TEMPERATURE: 1.0,
    MAX_TOKEN_OUTPUT_LENGTH: 2500,
    MAX_CONTEXT_LENGTH: 3072
  },
  "@cf/meta/llama-3-8b-instruct": {
    MIN_TEMPERATURE: 0.0,
    MAX_TEMPERATURE: 1.0,
    MAX_TOKEN_OUTPUT_LENGTH: 8192,
    MAX_CONTEXT_LENGTH: 8192
  },
  "@hf/mistral/mistral-7b-instruct-v0.2": {
    MIN_TEMPERATURE: 0.0,
    MAX_TEMPERATURE: 1.0,
    MAX_TOKEN_OUTPUT_LENGTH: 2048,
    MAX_CONTEXT_LENGTH: 2048
  },
  "@hf/mistral/mistral-7b-instruct-v0.2-lora": {
    MIN_TEMPERATURE: 0.0,
    MAX_TEMPERATURE: 1.0,
    MAX_TOKEN_OUTPUT_LENGTH: 2048,
    MAX_CONTEXT_LENGTH: 2048
  },
  "@hf/thebloke/mistral-7b-instruct-v0.1-awq": {
    MIN_TEMPERATURE: 0.0,
    MAX_TEMPERATURE: 1.0,
    MAX_TOKEN_OUTPUT_LENGTH: 2048,
    MAX_CONTEXT_LENGTH: 2048
  },
  "@hf/thebloke/neural-chat-7b-v3.1-awq": {
    MIN_TEMPERATURE: 0.0,
    MAX_TEMPERATURE: 1.0,
    MAX_TOKEN_OUTPUT_LENGTH: 2048,
    MAX_CONTEXT_LENGTH: 2048
  },
  "@cf/openchat/openchat-3.5-0106": {
    MIN_TEMPERATURE: 0.0,
    MAX_TEMPERATURE: 1.0,
    MAX_TOKEN_OUTPUT_LENGTH: 2048,
    MAX_CONTEXT_LENGTH: 2048
  },
  "@hf/thebloke/openhermes-2.5-mistral-7b-awq": {
    MIN_TEMPERATURE: 0.0,
    MAX_TEMPERATURE: 1.0,
    MAX_TOKEN_OUTPUT_LENGTH: 2048,
    MAX_CONTEXT_LENGTH: 2048
  },
  "@cf/microsoft/phi-2": {
    MIN_TEMPERATURE: 0.0,
    MAX_TEMPERATURE: 1.0,
    MAX_TOKEN_OUTPUT_LENGTH: 2048,
    MAX_CONTEXT_LENGTH: 2048
  },
  "@cf/qwen/qwen1.5-0.5b-chat": {
    MIN_TEMPERATURE: 0.0,
    MAX_TEMPERATURE: 1.0,
    MAX_TOKEN_OUTPUT_LENGTH: 2048,
    MAX_CONTEXT_LENGTH: 2048
  },
  "@cf/qwen/qwen1.5-1.8b-chat": {
    MIN_TEMPERATURE: 0.0,
    MAX_TEMPERATURE: 1.0,
    MAX_TOKEN_OUTPUT_LENGTH: 2048,
    MAX_CONTEXT_LENGTH: 2048
  },
  "@cf/qwen/qwen1.5-14b-chat-awq": {
    MIN_TEMPERATURE: 0.0,
    MAX_TEMPERATURE: 1.0,
    MAX_TOKEN_OUTPUT_LENGTH: 2048,
    MAX_CONTEXT_LENGTH: 2048
  },
  "@cf/qwen/qwen1.5-7b-chat-awq": {
    MIN_TEMPERATURE: 0.0,
    MAX_TEMPERATURE: 1.0,
    MAX_TOKEN_OUTPUT_LENGTH: 2048,
    MAX_CONTEXT_LENGTH: 2048
  },
  "@cf/defog/sqlcoder-7b-2": {
    MIN_TEMPERATURE: 0.0,
    MAX_TEMPERATURE: 1.0,
    MAX_TOKEN_OUTPUT_LENGTH: 2048,
    MAX_CONTEXT_LENGTH: 2048
  },
  "@hf/nexusflow/starling-lm-7b-beta": {
    MIN_TEMPERATURE: 0.0,
    MAX_TEMPERATURE: 1.0,
    MAX_TOKEN_OUTPUT_LENGTH: 4096,
    MAX_CONTEXT_LENGTH: 8192
  },
  "@cf/tinyllama/tinyllama-1.1b-chat-v1.0": {
    MIN_TEMPERATURE: 0.0,
    MAX_TEMPERATURE: 1.0,
    MAX_TOKEN_OUTPUT_LENGTH: 2048,
    MAX_CONTEXT_LENGTH: 2048
  },
  "@cf/fblgit/una-cybertron-7b-v2-bf16": {
    MIN_TEMPERATURE: 0.0,
    MAX_TEMPERATURE: 1.0,
    MAX_TOKEN_OUTPUT_LENGTH: 2048,
    MAX_CONTEXT_LENGTH: 2048
  },
  "@hf/thebloke/zephyr-7b-beta-awq": {
    MIN_TEMPERATURE: 0.0,
    MAX_TEMPERATURE: 1.0,
    MAX_TOKEN_OUTPUT_LENGTH: 2048,
    MAX_CONTEXT_LENGTH: 2048
  }
}
