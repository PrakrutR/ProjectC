import { ChatbotUIContext } from "@/context/context";
import { LLM, LLMID, ModelProvider } from "@/types";
import { IconCheck, IconChevronDown } from "@tabler/icons-react";
import { FC, useContext, useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Input } from "../ui/input";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";
import { ModelIcon } from "./model-icon";
import { ModelOption } from "./model-option";

interface ModelSelectProps {
  selectedModelId: string;
  onSelectModel: (modelId: LLMID) => void;
}

export const ModelSelect: FC<ModelSelectProps> = ({
  selectedModelId,
  onSelectModel,
}) => {
  const {
    profile,
    models,
    availableHostedModels,
    availableLocalModels,
    availableOpenRouterModels,
  } = useContext(ChatbotUIContext);

  const inputRef = useRef<HTMLInputElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  // Updated to include 'openrouter' in the type for setTab
  const [tab, setTab] = useState<"hosted" | "local" | "openrouter">("hosted");

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  const handleSelectModel = (modelId: LLMID) => {
    onSelectModel(modelId);
    setIsOpen(false);
  };

  // Function to group models based on the provider
  const getFilteredModels = () => {
    let filteredModels = [];
    switch (tab) {
      case "hosted":
        filteredModels = models.filter((model) => availableHostedModels.includes(model.modelId));
        break;
      case "local":
        filteredModels = models.filter((model) => availableLocalModels.includes(model.modelId));
        break;
      case "openrouter":
        filteredModels = models.filter((model) => availableOpenRouterModels.includes(model.modelId));
        break;
      default:
        filteredModels = [];
    }
    return filteredModels.filter((model) =>
      model.modelName.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filteredModels = getFilteredModels();

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button ref={triggerRef} aria-label="Select Model">
          <IconChevronDown size={24} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <Tabs value={tab} onValueChange={setTab}>
          <TabsList aria-label="Model Categories">
            <TabsTrigger value="hosted">Hosted</TabsTrigger>
            <TabsTrigger value="local">Local</TabsTrigger>
            <TabsTrigger value="openrouter">OpenRouter</TabsTrigger> {/* New Tab for OpenRouter */}
          </TabsList>
        </Tabs>
        <Input
          ref={inputRef}
          placeholder="Search models..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="max-h-[300px] overflow-auto">
          {filteredModels.map((model) => (
            <div key={model.modelId} className="flex items-center space-x-2 p-2">
              {selectedModelId === model.modelId && <IconCheck className="w-6 h-6" />}
              <ModelOption model={model} onSelect={() => handleSelectModel(model.modelId)} />
            </div>
          ))}
          {filteredModels.length === 0 && <div className="p-2 text-center text-sm">No models found</div>}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
