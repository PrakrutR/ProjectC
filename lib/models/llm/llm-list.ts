import { LLM } from "@/types"
import { ANTHROPIC_LLM_LIST } from "./anthropic-llm-list"
import { GOOGLE_LLM_LIST } from "./google-llm-list"
import { MISTRAL_LLM_LIST } from "./mistral-llm-list"
import { GROQ_LLM_LIST } from "./groq-llm-list"
import { OPENAI_LLM_LIST } from "./openai-llm-list"
import { PERPLEXITY_LLM_LIST } from "./perplexity-llm-list"
import { TOGETHER_LLM_LIST } from "./together-llm-list"
import { GOOSEAI_LLM_LIST } from "./gooseai-llm-list"
import { COHERE_LLM_LIST } from "./cohere-llm-list"
import { CLOUDFLARE_LLM_LIST } from "./cloudflare-llm-list"

export const LLM_LIST: LLM[] = [
  ...OPENAI_LLM_LIST,
  ...GOOGLE_LLM_LIST,
  ...MISTRAL_LLM_LIST,
  ...GROQ_LLM_LIST,
  ...PERPLEXITY_LLM_LIST,
  ...ANTHROPIC_LLM_LIST,
  ...TOGETHER_LLM_LIST,
  ...GOOSEAI_LLM_LIST,
  ...COHERE_LLM_LIST,
  ...CLOUDFLARE_LLM_LIST
]

export const LLM_LIST_MAP: Record<string, LLM[]> = {
  openai: OPENAI_LLM_LIST,
  azure: OPENAI_LLM_LIST,
  google: GOOGLE_LLM_LIST,
  mistral: MISTRAL_LLM_LIST,
  groq: GROQ_LLM_LIST,
  perplexity: PERPLEXITY_LLM_LIST,
  anthropic: ANTHROPIC_LLM_LIST,
  together: TOGETHER_LLM_LIST,
  gooseai: GOOSEAI_LLM_LIST,
  cohere: COHERE_LLM_LIST,
  cloudflare: CLOUDFLARE_LLM_LIST
}
