import { LLM } from "@/types"

const COHERE_PLATFORM_LINK = "https://docs.cohere.com/docs"

// Together Models (UPDATED 5/5/24) -----------------------------

// command-r-plus
const COMMAND_R_PLUS: LLM = {
  modelId: "command-r-plus",
  modelName: "Command R Plus",
  provider: "cohere",
  hostedId: "command-r-plus",
  platformLink: COHERE_PLATFORM_LINK,
  imageInput: false
}
// command-r
const COMMAND_R: LLM = {
  modelId: "command-r",
  modelName: "Command R",
  provider: "cohere",
  hostedId: "command-r",
  platformLink: COHERE_PLATFORM_LINK,
  imageInput: false
}
// command
const COMMAND: LLM = {
  modelId: "command",
  modelName: "Command",
  provider: "cohere",
  hostedId: "command",
  platformLink: COHERE_PLATFORM_LINK,
  imageInput: false
}
// command-nightly
const COMMAND_NIGHTLY: LLM = {
  modelId: "command-nightly",
  modelName: "Command Nightly",
  provider: "cohere",
  hostedId: "command-nightly",
  platformLink: COHERE_PLATFORM_LINK,
  imageInput: false
}
// command-light
const COMMAND_LIGHT: LLM = {
  modelId: "command-light",
  modelName: "Command Light",
  provider: "cohere",
  hostedId: "command-light",
  platformLink: COHERE_PLATFORM_LINK,
  imageInput: false
}
// command-light-nightly
const COMMAND_LIGHT_NIGHTLY: LLM = {
  modelId: "command-light-nightly",
  modelName: "Command Light Nightly",
  provider: "cohere",
  hostedId: "command-light-nightly",
  platformLink: COHERE_PLATFORM_LINK,
  imageInput: false
}

export const COHERE_LLM_LIST = [
  COMMAND_R_PLUS,
  COMMAND_R,
  COMMAND,
  COMMAND_NIGHTLY,
  COMMAND_LIGHT,
  COMMAND_LIGHT_NIGHTLY
]
