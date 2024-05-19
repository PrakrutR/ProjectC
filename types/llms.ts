import { ModelProvider } from "."

export type LLMID =
  | OpenAILLMID
  | GoogleLLMID
  | AnthropicLLMID
  | MistralLLMID
  | GroqLLMID
  | PerplexityLLMID
  | TogetherLLMID

// OpenAI Models (UPDATED 5/13/24)
export type OpenAILLMID =
  | "gpt-4o" // GPT-4o
  | "gpt-4-turbo-preview" // GPT-4 Turbo
  | "gpt-4-vision-preview" // GPT-4 Vision
  | "gpt-4" // GPT-4
  | "gpt-3.5-turbo" // Updated GPT-3.5 Turbo

// Google Models
export type GoogleLLMID =
  | "gemini-pro" // Gemini Pro
  | "gemini-pro-vision" // Gemini Pro Vision

// Anthropic Models
export type AnthropicLLMID =
  | "claude-instant-1.2" // Claude Instant
  | "claude-2.1" // Claude 2.1
  | "claude-3-haiku-20240307" // Claude 3 Haiku
  | "claude-3-sonnet-20240229" // Claude 3 Sonnet
  | "claude-3-opus-20240229" // Claude 3 Opus

// Mistral Models
export type MistralLLMID =
  | "mistral-tiny" // Mistral Tiny
  | "open-mixtral-8x22b" // Mixtral 8x22B
  | "mistral-small-latest" // Mistral Small
  | "mistral-medium-latest" // Mistral Medium
  | "mistral-large-latest" // Mistral Large

export type GroqLLMID =
  | "llama3-70b-8192" // LLaMA3-70b
  | "llama3-8b-8192" // LLaMA3-8b
  | "gemma-7b-it" // Gemma-7b-it
  | "mixtral-8x7b-32768" // Mixtral-8x7b

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
