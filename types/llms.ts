import exp from "constants"
import { ModelProvider } from "."

export type LLMID =
  | OpenAILLMID
  | GoogleLLMID
  | AnthropicLLMID
  | MistralLLMID
  | GroqLLMID
  | PerplexityLLMID
  | TogetherLLMID
  | GooseAILLMID
  | CohereLLMID
  | CloudflareLLMID

// OpenAI Models (UPDATED 5/13/24)
export type OpenAILLMID =
  | "gpt-4o" // GPT-4o
  | "gpt-4-turbo" // GPT-4 Turbo
  | "gpt-3.5-turbo" // Updated GPT-3.5 Turbo

// Google Models
export type GoogleLLMID =
  | "gemini-pro" // Gemini Pro
  | "gemini-pro-vision" // Gemini Pro Vision
  | "gemini-1.5-pro-latest" // Gemini 1.5 Pro
  | "gemini-1.5-flash" // Gemini 1.5 Flash

// Anthropic Models
export type AnthropicLLMID =
  | "claude-instant-1.2" // Claude Instant
  | "claude-2.1" // Claude 2.1
  | "claude-3-haiku-20240307" // Claude 3 Haiku
  | "claude-3-sonnet-20240229" // Claude 3 Sonnet
  | "claude-3-opus-20240229" // Claude 3 Opus
  | "claude-3-5-sonnet-20240620" // Claude 3.5 Sonnet

// Mistral Models
export type MistralLLMID =
  | "mistral-tiny" // Mistral Tiny
  | "open-mixtral-8x22b" // Mixtral 8x22B
  | "mistral-medium-latest" // Mistral Medium
  | "mistral-large-latest" // Mistral Large

export type GroqLLMID =
  | "llama3-70b-8192" // LLaMA3-70b
  | "llama3-8b-8192" // LLaMA3-8b
  | "gemma-7b-it" // Gemma-7b-it
  | "mixtral-8x7b-32768" // Mixtral-8x7b
  | "gemma-7b-it" // Gemma-7b IT

// Perplexity Models (UPDATED 1/31/24)
export type PerplexityLLMID =
  | "llama-3-sonar-small-32k-chat" // Sonar Small Chat
  | "llama-3-sonar-small-32k-online" // Sonar Small Online
  | "llama-3-sonar-large-32k-chat" // Sonar Medium Chat
  | "llama-3-sonar-large-32k-online" // Sonar Medium Online

// Together Models
export type TogetherLLMID =
  | "zero-one-ai/Yi-34B-Chat" // 01.AI Yi Chat
  | "allenai/OLMo-7B-Instruct" // OLMo Instruct
  | "allenai/OLMo-7B-Twin-2T" // OLMo Twin-2T
  | "allenai/OLMo-7B" // OLMo (7B)
  | "Austism/chronos-hermes-13b" // Chronos Hermes (13B)
  | "cognitivecomputations/dolphin-2.5-mixtral-8x7b" // Dolphin 2.5 Mixtral 8x7b
  | "databricks/dbrx-instruct" // Databricks Instruct
  | "deepseek-ai/deepseek-coder-33b-instruct" // DeepSeek Coder 33B Instruct
  | "deepseek-ai/deepseek-llm-67b-chat" // DeepSeek LLM Chat 67B
  | "garage-bAInd/Platypus2-70B-instruct" // Platypus2 Instruct 70B
  | "google/gemma-2b-it" // Gemma Instruct 2B
  | "Gryphe/MythoMax-L2-13b" // MythoMax L2 13B
  | "lmsys/vicuna-13b-v1.5b" // Vicuna 13B v1.5b
  | "lmsys/vicuna-7b-v1.5b" // Vicuna 7B v1.5b

// GooseAI Models (UPDATED 5/5/24)
export type GooseAILLMID =
  | "gpt-neo-20b" // GPT NeoX 20B
  | "fairseq-125m" // Fairseq 125M
  | "fairseq-1-3b" // Fairseq 1.3B
  | "fairseq-2-7b" // Fairseq 2.7B
  | "fairseq-6b-7b" // Fairseq 6.7B
  | "fairseq-13b" // Fairseq 13B
  | "gpt-j-6b" // GPT-J 6B
  | "gpt-neo-125m" // GPT Neo 125M
  | "gpt-neo-1-3b" // GPT Neo 1-3B
  | "gpt-neo-2-7b" // GPT Neo 2-7B

// Cohere Models
export type CohereLLMID =
  | "command-r-plus" // Command R Plus
  | "command-r" // Command R
  | "command" // Command
  | "command-nightly" // Command Nightly
  | "command-light" // Command Light
  | "command-light-nightly" // Command Light Nightly

// Cloudflare Models
export type CloudflareLLMID =
  | "@cf/meta/llama-2-7b-chat-fp16" // LLaMa 2 7B Chat fp16
  | "@cf/meta/llama-2-7b-chat-int8" // LLaMa 2 7B Chat int8
  | "@hf/thebloke/deepseek-coder-6.7b-base-awq" // DeepSeek Coder 6.7B Base AWQ
  | "@hf/thebloke/deepseek-coder-6.7b-instruct-awq" // DeepSeek Coder 6.7B Instruct AWQ
  | "@hf/thebloke/discolm-german-7b-v1-awq" // Discolm German 7B V1 AWQ
  | "@cf/tiiuae/falcon-7b-instruct" // Falcon 7B Instruct
  | "@cf/tiiuae/gemma-2b-it-lora" // Gemma 2B IT Lora
  | "@cf/tiiuae/gemma-7b-it-lora" // Gemma 7B IT Lora
  | "@cf/nousresearch/hermes-2-pro-mistral-7b" // Hermes 2 Pro Mistral 7B
  | "@cf/meta/llama-2-7b-chat-hf-lor" // LLaMa 2 7B Chat HF Lora
  | "@hf/thebloke/llama-2-13b-chat-awq" // LLaMa 2 13B Chat AWQ
  | "@cf/meta/llama-3-8b-instruct" // LLaMa 3 8B Instruct
  | "@hf/mistral/mistral-7b-instruct-v0.2" // Mistral 7B Instruct v0.2
  | "@hf/thebloke/mistral-7b-instruct-v0.1-awq" // Mistral 7B Instruct v0.1 AWQ
  | "@hf/mistral/mistral-7b-instruct-v0.2-lora" // Mistral 7B Instruct v0.2 Lora
  | "@hf/thebloke/neural-chat-7b-v3.1-awq" // Neural Chat 7B v3.1 AWQ
  | "@cf/openchat/openchat-3.5-0106" // OpenChat 3.5 0106
  | "@hf/thebloke/openhermes-2.5-mistral-7b-awq" // OpenHermes 2.5 Mistral 7B AWQ
  | "@cf/microsoft/phi-2" // Phi 2
  | "@cf/qwen/qwen1.5-0.5b-chat" // Qwen1.5 0.5B Chat
  | "@cf/qwen/qwen1.5-1.8b-chat" // Qwen1.5 1.8B Chat
  | "@cf/qwen/qwen1.5-14b-chat-awq" // Qwen1.5 14B Chat AWQ
  | "@cf/qwen/qwen1.5-7b-chat-awq" // Qwen1.5 7B Chat AWQ
  | "@cf/defog/sqlcoder-7b-2" // SQLCoder 7B 2
  | "@hf/nexusflow/starling-lm-7b-beta" // Starling LM 7B Beta
  | "@cf/tinyllama/tinyllama-1.1b-chat-v1.0" // TinyLLaMa 1.1B Chat v1.0
  | "@cf/fblgit/una-cybertron-7b-v2-bf16" // Una Cybertron 7B v2 BF16
  | "@hf/thebloke/zephyr-7b-beta-awq" // Zephyr 7B Beta AWQ
export interface LLM {
  modelId: LLMID
  modelName: string
  provider: ModelProvider
  hostedId: string
  platformLink: string
  imageInput: boolean
  pricing?: {
    currency: string
    unit: string
    inputCost: number
    outputCost?: number
  }
}

export interface OpenRouterLLM extends LLM {
  maxContext: number
}
