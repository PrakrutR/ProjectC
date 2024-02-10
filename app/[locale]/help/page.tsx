import React from 'react';
// Import the Next.js Image component
import Image from 'next/image';
// Import the GenHub logo - continue using your actual logo path
import GenHubLogo from '../../../public/DARK_BRAND_LOGO.png';

export default function HelpPage() {
  return (
    <div className="size-screen flex flex-col items-center justify-center p-4">
      {/* Container to constrain the logo size */}
      <div className="logo-container relative mb-6" style={{ width: '200px', height: '200px' }}>
        <Image src={GenHubLogo} alt="GenHub Logo" layout="responsive" width={200} height={200} />
      </div>
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to GenHub</h1>
        <p className="text-lg">
          Welcome to GenHub, your comprehensive AI platform that seamlessly integrates diverse AI models to cater to all your needs. Whether engaging with hosted models, connecting through OpenRouter, or utilizing our locally provided services, GenHub offers unparalleled flexibility and power. Dive into direct interactions with any AI model, craft personalized presets and pre-coded prompts, leverage custom models for tailored experiences and easily manage your workflows through file uploads and collection management. Create your assistants and explore tools designed to enhance your productivity and creativity. Let GenHub be your gateway to the future of AI-driven possibilities.
        </p>
      </div>
      {/* Getting Started Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Getting Started with GenHub</h2>
        <p className="text-md mb-4">
        As you enter the GenHub world, each feature is crafted to elevate your AI interaction experience. From adjusting your account settings to creating your AI assistant, here&apos;s how to navigate and utilize the platform&apos;s capabilities to supercharge your AI adventures.
        </p>
      </div>
      
      {/* Account Settings Subsection */}
      <div className="account-settings-section mb-8">
        <h3 className="text-2xl font-semibold mb-4">Account Settings</h3>
        <p className="text-md mb-4">
        Your account settings are the key to a personalized GenHub experience. You can reshape your identity on the platform at the bottom left of the sidebar. Change your username to something unique, update your profile image to reflect your persona, and set your display name to be recognized by the community. Most importantly, the &quot;profile context&quot; feature allows you to share information about yourself within 1500 characters. All AI models use this context to provide more personalized and relevant responses.
        </p>
        <p className="text-md italic mb-4">
        Example Profile Context: &quot;I&apos;m an avid reader and enjoy exploring fantasy and science fiction genres. My work revolves around environmental science, and I often look for creative ways to explain complex concepts. I appreciate humor and enjoy discussing technological advancements and their societal impacts.&quot;
        </p>
      </div>
      <div className="ai-models-section mb-8">
        <div>
          <h3 className="text-2xl font-semibold mb-4">Interact with AI Models</h3>
          <p className="text-md mb-4">
            Select your AI model from the top right of the dashboard, with the default set to GPT-4 Turbo. Clicking on the model name opens a menu to search or select a model from the dropdown. The dropdown categorizes models into hosted, OpenRouter, and local models across three tabs, ensuring you find the right AI for your needs.
          </p>
          <p className="text-md mb-4">
            The system prompt sets the tone for your interaction. The default prompt is &quot;You are a friendly, helpful AI assistant.&quot; Alternative system prompts include &quot;You are an expert in environmental science,&quot; &quot;You are a creative story writer,&quot; or &quot;You are a knowledgeable tech advisor.&quot; These prompts guide the AI&apos;s responses to align with your intended use case.
          </p>
          <p className="text-md mb-4">
            Delve into &quot;Advanced Settings&quot; for more control. Set the &apos;temperature&apos; to adjust the AI&apos;s creativity, with zero being the most deterministic and one allowing for maximum variability. &apos;Context length&apos; defines how much previous dialogue the AI considers, impacting its response relevance. You can opt to exclude your profile context and workspace instructions for specific chats, tailoring the AI&apos;s responses to the current conversation only.
          </p>
          <p className="text-md mb-4">
            Lastly, choose your embeddings provider between OpenAI and local. AI embeddings are numerical representations of data that help the AI understand and generate responses. OpenAI&apos;s embeddings are based on vast datasets and sophisticated models, offering broad knowledge and nuanced understanding. Local embeddings, generated within your system, offer privacy and customization but may vary in scope and depth.
          </p>
        </div>
      </div>
      <div className="presets-section mb-8">
        <h3 className="text-2xl font-semibold mb-4">Presets</h3>
        <p className="text-md mb-4">
          Presets in GenHub offer a streamlined way to interact with AI models. With this feature, you can create custom presets for quick access, each with its unique configuration. Name your preset, choose your preferred AI model, set a system prompt, and adjust advanced options like temperature and context length, just as you would in the model selection menu.
        </p>
        <p className="text-md mb-4">
          This flexibility means you no longer need to manually configure model settings for each chat, saving you time and enhancing your workflow. Access your presets from the &quot; Quick Settings &quot; for an efficient and personalized AI interaction experience. Whether you&apos;re drafting emails, generating creative content, or analyzing data, your presets are ready to assist you immediately.
        </p>
      </div>
      <div className="prompts-section mb-8">
        <h3 className="text-2xl font-semibold mb-4">Prompts</h3>
        <p className="text-md mb-4">
          The &quot;Prompts&quot; feature in GenHub elevates your efficiency by allowing you to craft and save custom prompts. Each prompt can be given a distinct name, and you can type it exactly as you wish it to be used. This eliminates the need to retype or remember complex prompts for different interactions.
        </p>
        <p className="text-md mb-4">
          Type &quot;/&quot; in the chat box to access your saved prompts. This action brings up a menu showcasing all the prompts you&apos;ve created. Selecting one will automatically insert its associated data into your message box, ready to be sent. This quality-of-life feature streamlines your workflow, making interactions with AI models more seamless and intuitive.
        </p>
        <p className="text-md italic mb-4">
          Example Prompt Name: &quot;Creative Story Starter&quot; &lt;br /&gt;
          Example Prompt: &quot;Imagine a world where technology has merged with nature. Describe a day in this world.&quot;
        </p>
      </div>
      <div className="file-management-section mb-8">
        <h3 className="text-2xl font-semibold mb-4">File Management</h3>
        <p className="text-md mb-4">
          GenHub&apos;s File Management system simplifies integrating files into your chats. Upload files once and reuse them across multiple chats without the need for repeated uploads. To access your uploaded files, type &quot;#&quot; in the chat box, triggering a menu that displays all available files.
        </p>
        <p className="text-md mb-4">
          Use the &quot;+&quot; icon within a chat box for a one-time file share. However, the File Management feature is your go-to for files you intend to use repeatedly. It supports a wide range of file types, including CSV, JSON, Markdown, XML, PDF, plain text, images, and DOCX, with a maximum size limit of 50MB per file.
        </p>
        <p className="text-md mb-4">
          Uploaded files are automatically given a generated name, but you can assign custom names for easier identification. Organize your files by creating folders using the &quot;Create Folder&quot; button in the files panel, enhancing your workflow and keeping your workspace tidy.
        </p>
      </div>
      <div className="collections-section mb-8">
        <h3 className="text-2xl font-semibold mb-4">Collections</h3>
        <p className="text-md mb-4">
          Collections in GenHub streamline your workflow by enabling you to group related files into easily accessible sets. Whether you&apos;re compiling research documents, images, or data files, Collections help keep your resources organized and ready to use.
        </p>
        <p className="text-md mb-4">
          Select the files you wish to group to create a Collection in the Files tab. Each Collection can be given a custom name, making organising and finding your resources straightforwardly based on project, topic, or any other criteria.
        </p>
        <p className="text-md mb-4">
          When you&apos;re ready to use a Collection in a chat, type the &quot;#&quot; key to bring up the Collections menu. Selecting a Collection will import all associated files into your chat in one action, saving you time and keeping your focus on the conversation. This quality-of-life feature ensures that all the resources you need are just a few clicks away, enhancing your interaction with AI models and collaborators.
        </p>
      </div>
      <div className="folders-section mb-8">
        <h3 className="text-2xl font-semibold mb-4">Folders</h3>
        <p className="text-md mb-4">
          Keep your GenHub workspace organized and clutter-free with the Folders feature. By grouping your chats into folders, you can easily maintain a tidy workspace and navigate various conversations. Whether it&apos;s project-specific discussions, team chats, or individual conversations, Folders help you categorize them in a way that makes sense.
        </p>
        <p className="text-md mb-4">
          To create a new folder, look for the &quot;New Folder&quot; icon at the top right of the sidebar, adjacent to the &quot;New Chat&quot; button. Each folder can be customized with a unique name, allowing you to organize your chats based on projects, topics, or other criteria that fit your workflow.
        </p>
        <p className="text-md mb-4">
          This feature is handy for managing many chats, ensuring that you can always find the conversation you need without sifting through an unorganized list. It&apos;s all about making your GenHub experience as efficient and organized as possible.
        </p>
      </div>
      <div className="workspaces-section mb-8">
        <h3 className="text-2xl font-semibold mb-4">Workspaces</h3>
        <p className="text-md mb-4">
          Workspaces in GenHub are overarching environments designed to streamline your projects and collaborations. You&apos;ll find the dropdown at the top of the sidebar to switch between workspaces, with workspace settings accessible right next to it. Every account has a default workspace named &quot;Home,&quot; setting the stage for your AI-driven endeavours.
        </p>
        <p className="text-md mb-4">
          Within each workspace, the instructions and settings defined in the workspace settings influence every chat, model, preset, and assistant, ensuring a consistent interaction theme. These settings can be individually overridden in the advanced settings for each component if needed.
        </p>
        <p className="text-md mb-4">
          The &quot;Main&quot; tab within workspace settings lets you personalize your workspace with a unique name and image, facilitating quick identification. Here, you can also define a set of workspace instructions (up to 1500 characters) that guide the AI&apos;s responses to align with your workspace&apos;s theme. Examples include instructions for a customer support workspace, creative writing guidelines, or technical assistance protocols.
        </p>
        <p className="text-md mb-4">
          In the &quot;Defaults&quot; tab, you can select the default AI model and system prompt for the workspace alongside all the advanced options available in the model selection and presets menu. This ensures that every new chat within the workspace starts with these pre-configured settings, streamlining the process and maintaining consistency across your interactions.
        </p>
      </div>
      <div className="assistants-section mb-8">
        <h3 className="text-2xl font-semibold mb-4">Assistants</h3>
        <p className="text-md mb-4">
          Unlock the full potential of personalized AI with GenHub&apos;s Assistants feature. Create custom assistants to perform specific roles akin to crafting your GPT models. Each assistant can be tailored with a unique name, description, and an identifying image, establishing a distinct identity within your workspace.
        </p>
        <p className="text-md mb-4">
          Set a foundational prompt for your assistant, such as &quot;Provide expert advice on renewable energy,&quot; &quot;Inspire with creative writing prompts,&quot; or &quot;Summarize complex health articles for easy understanding.&quot; These prompts guide your assistant&apos;s interactions, ensuring relevance and utility in its responses.
        </p>
        <p className="text-md mb-4">
          Utilize advanced settings to fine-tune your assistant&apos;s approach, adjusting its temperature for creativity, context length for memory depth, and more. Integrate files from your GenHub uploads into your assistant&apos;s memory for enhanced specialization, and select from available GenHub tools to expand its capabilities.
        </p>
        <p className="text-md mb-4">
          Access your assistants directly from the &quot;Quick Settings&quot; for seamless integration into your workflow. Easily loop an assistant into any conversation by typing &quot;@&quot; followed by the assistant&apos;s name in the chat box, instantly bringing its expertise and predefined role into play. This flexibility allows you to leverage tailored assistance across multiple contexts and conversations, enriching your interactions and productivity on GenHub.
        </p>
      </div>
      <div className="tools-section mb-8">
        <h3 className="text-2xl font-semibold mb-4">Tools</h3>
        <p className="text-md mb-4">
          GenHub&apos;s Tools feature enriches your AI&apos;s capabilities by incorporating functionalities based on the OpenAI schema. From data analysis and web browsing to image generation with DALL-E 3 or Stable Diffusion, Tools empower your AIs to perform a wide range of tasks.
        </p>
        <p className="text-md mb-4">
          Create custom tools by specifying a name, a description, and an OpenAI-compatible schema. For instance, you could create a tool for retrieving weather data by defining an HTTP header, such as <code>{'{"X-api-key": "1234567890"}'}</code>, and an OpenAI schema that outlines the API&apos;s structure and capabilities.
        </p>
        <div className="text-md mb-4 bg-gray-100 p-4 rounded">
          Example Tool Schema: <br />
          <pre className="bg-gray-100 text-black">{`{
            "openapi": "3.1.0",
            "info": {
              "title": "Get weather data",
              "description": "Retrieves current weather data for a location.",
              "version": "v1.0.0"
            },
            "servers": [
              {
                "url": "https://weather.example.com"
              }
            ],
            "paths": {
              "/location": {
                "get": {
                  "description": "Get temperature for a specific location",
                  "operationId": "GetCurrentWeather",
                  "parameters": [
                    {
                      "name": "location",
                      "in": "query",
                      "description": "The city and state to retrieve the weather for",
                      "required": true,
                      "schema": {
                        "type": "string"
                      }
                    }
                  ],
                  "deprecated": false
                }
              }
            },
            "components": {
              "schemas": {}
            }
          }`}</pre>
        </div>
        <p className="text-md mb-4">
        To access your tools, type &quot;!&quot; in the chat box, which will bring up a menu of your configured tools. Selecting a tool will enable the model to use the specified functionality, provided the schema is correctly configured.
        </p>
        <div className="text-md mb-4 bg-gray-100 p-4 rounded">
          Additional Example Tool Schema: <br />
          <pre className="bg-gray-100 text-black">{`{
            "openapi": "3.1.0",
            "info": {
              "title": "Translate Text",
              "description": "Translates text from one language to another.",
              "version": "v1.0.0"
            },
            "servers": [
              {
                "url": "https://translation.example.com"
              }
            ],
            "paths": {
              "/translate": {
                "post": {
                  "description": "Translate text to a specified language",
                  "operationId": "TranslateText",
                  "parameters": [
                    {
                      "name": "text",
                      "in": "body",
                      "description": "Text to translate",
                      "required": true,
                      "schema": {
                        "type": "string"
                      }
                    },
                    {
                      "name": "targetLanguage",
                      "in": "query",
                      "description": "Language code of the target translation language",
                      "required": true,
                      "schema": {
                        "type": "string"
                      }
                    }
                  ],
                  "deprecated": false
                }
              }
            },
            "components": {
              "schemas": {}
            }
          }`}</pre>
        </div>
    </div>
    <div className="quick-settings-section mb-8">
      <h3 className="text-2xl font-semibold mb-4">Quick Settings</h3>
      <p className="text-md mb-4">
        Positioned at the top left of the chat interface, Quick Settings provides immediate access to your customized tools for an enhanced chat experience. This feature is designed to streamline your workflow, allowing you to quickly apply presets or summon assistants with just a few clicks.
      </p>
      <p className="text-md mb-4">
      Whether you need to switch between different AI models, apply a specific set of parameters, or integrate an assistant into your conversation, Quick Settings makes these actions effortless. Simply click on the Quick Settings icon, and a dropdown menu will appear, listing all the assistants and presets you&apos;ve created. Selecting one instantly loads it into your current chat, adapting the conversation to your chosen configuration without interrupting your workflow.
      </p>
      <p className="text-md mb-4">
        This feature is especially useful for users who frequently switch contexts or require varied AI functionalities in their conversations. Quick Settings ensures that your preferred tools are always at your fingertips, ready to enhance your interaction with AI on GenHub.
      </p>
    </div>
    <div className="ai-models-overview-section mb-8">
      <h3 className="text-2xl font-semibold mb-4">AI Models Overview</h3>
      <p className="text-md mb-4">
        GenHub's test build features a diverse array of cutting-edge AI models, each tailored for different capabilities and use cases. From advanced text and image processing to specialized instruction-following abilities, these models represent the forefront of AI technology.
      </p>
    <ul className="list-disc pl-5 mb-4">
      <li>Gemini Pro</li>
      <li>Gemini Pro Vision</li>
      <li>GPT-4 Turbo</li>
      <li>GPT-4</li>
      <li>GPT-3.5</li>
      <li>GPT-4 Vision</li>
      <li>Mistral Tiny</li>
      <li>Mistral Medium</li>
      <li>Mistral Small</li>
      <li>Nousresearch Nous-Capybara-7b</li>
      <li>Mistralai Mistral-7b Instruct</li>
      <li>Gryphe Mythomist-7b</li>
      <li>Undi95 Toppy-m-7b</li>
      <li>Openrouter Cinematika-7b</li>
      <li>Rwkv Rwkv-5-world-3b</li>
      <li>Recursal Rwkv-5-3b-ai-town</li>
      <li>Recursal Eagle-7b</li>
      <li>Huggingfaceh4 Zephyr-7b-beta</li>
      <li>Openchat-7b</li>
    </ul>
    <p className="text-md mb-4">
      This collection is just the beginning. More models are expected to be added, broadening the scope and versatility of AI applications available to users. Stay tuned for updates as GenHub continues to integrate the latest advancements in AI.
    </p>
    </div>
    <div className="model-guide-section mb-8">
    <h3 className="text-2xl font-semibold mb-4">GPT-4 Turbo</h3>
    <h4 className="text-xl font-semibold mb-2">Purpose:</h4>
    <p className="text-md mb-4">
      GPT-4 Turbo is an evolution of the GPT-4 model, fine-tuned for enhanced performance and efficiency. It is adept at processing natural language on a large scale, enabling comprehensive dialogue and contextual understanding.
    </p>
    <h4 className="text-xl font-semibold mb-2">Use Cases:</h4>
    <p className="text-md mb-4">
      This model excels in various applications that require both speed and depth of language comprehension, including:
      <ul className="list-disc pl-5 mb-4">
        <li>Detailed customer support with extensive contextual referencing.</li>
        <li>Creative writing assistance for maintaining narrative consistency.</li>
        <li>Document summarization by processing large volumes of information.</li>
        <li>Code generation and programming help through understanding complex prompts.</li>
      </ul>
    </p>
    <h4 className="text-xl font-semibold mb-2">Limitations and Best Practices:</h4>
    <p className="text-md mb-4">
      GPT-4 Turbo shares some limitations with its predecessors, such as generating verbose content and occasionally requiring human intervention for precision. To optimize its use:
      <ul className="list-disc pl-5 mb-4">
        <li>Provide clear and specific prompts to guide the model effectively.</li>
        <li>Utilize the model's large context window to include detailed background information when needed.</li>
        <li>Adjust temperature and maximum token settings to refine verbosity and response length.</li>
      </ul>
    </p>
    </div>
    <div className="model-guide-section mb-8">
    <h3 className="text-2xl font-semibold mb-4">GPT-4</h3>
    <h4 className="text-xl font-semibold mb-2">Purpose:</h4>
    <p className="text-md mb-4">
      GPT-4 is a highly advanced language model known for its deep comprehension and generation capabilities. It is built to understand a wide array of contexts and subjects, making it versatile for numerous language-based tasks.
    </p>
    <h4 className="text-xl font-semibold mb-2">Use Cases:</h4>
    <p className="text-md mb-4">
      Ideal for a multitude of scenarios where nuanced language understanding is crucial, such as:
      <ul className="list-disc pl-5 mb-4">
        <li>Content creation and editing across various formats and genres.</li>
        <li>Complex data interpretation and analysis in research.</li>
        <li>Conversational AI for realistic and engaging chatbot experiences.</li>
        <li>Educational tools for personalized learning and tutoring.</li>
      </ul>
    </p>
    <h4 className="text-xl font-semibold mb-2">Limitations and Best Practices:</h4>
    <p className="text-md mb-4">
      Despite its broad knowledge base, GPT-4 may require guidance to generate specific content types and avoid biases present in training data. Effective practices include:
      <ul className="list-disc pl-5 mb-4">
        <li>Refining prompts to elicit the desired level of creativity or factual accuracy.</li>
        <li>Employing iterative feedback loops to hone the model's outputs.</li>
        <li>Staying updated with model enhancements to leverage new features and improvements.</li>
      </ul>
    </p>
    </div>
    <div className="model-guide-section mb-8">
    <h3 className="text-2xl font-semibold mb-4">GPT-4 Vision</h3>
    <h4 className="text-xl font-semibold mb-2">Purpose:</h4>
    <p className="text-md mb-4">
      GPT-4 Vision extends the capabilities of GPT-4 to the visual domain, enabling the model to understand and generate content that involves images and text. It's designed for multimodal tasks where both text and imagery are pivotal.
    </p>
    <h4 className="text-xl font-semibold mb-2">Use Cases:</h4>
    <p className="text-md mb-4">
      This model can be applied to innovative use cases that merge visual and textual understanding, such as:
      <ul className="list-disc pl-5 mb-4">
        <li>Image captioning and metadata generation for digital assets.</li>
        <li>Visual data analysis in conjunction with descriptive analytics.</li>
        <li>Enhanced creative storytelling with integrated visual elements.</li>
        <li>Interactive educational content that combines visual cues with explanatory text.</li>
      </ul>
    </p>
    <h4 className="text-xl font-semibold mb-2">Limitations and Best Practices:</h4>
    <p className="text-md mb-4">
      GPT-4 Vision's performance is contingent on the quality and relevance of the visual data it processes. To ensure optimal outcomes:
      <ul className="list-disc pl-5 mb-4">
        <li>Select high-quality, relevant images to accompany text prompts.</li>
        <li>Test and fine-tune the interplay between visual and textual inputs for your specific application.</li>
        <li>Be aware of the ethical considerations when generating content that blends images and text.</li>
      </ul>
    </p>
    </div>
    <div className="model-guide-section mb-8">
    <h3 className="text-2xl font-semibold mb-4">GPT-3.5</h3>
    <h4 className="text-xl font-semibold mb-2">Purpose:</h4>
    <p className="text-md mb-4">
      GPT-3.5 serves as a bridge between GPT-3 and GPT-4, offering improvements in understanding and response quality. It provides a robust platform for a wide range of natural language processing tasks.
    </p>
    <h4 className="text-xl font-semibold mb-2">Use Cases:</h4>
    <p className="text-md mb-4">
      The model is adept at various applications including, but not limited to:
      <ul className="list-disc pl-5 mb-4">
        <li>Automated content generation for articles, stories, and reports.</li>
        <li>Language translation with improved contextual awareness.</li>
        <li>Human-like interaction for conversational bots in customer service.</li>
        <li>Assistance in educational platforms for tutoring and homework help.</li>
      </ul>
    </p>
    <h4 className="text-xl font-semibold mb-2">Limitations and Best Practices:</h4>
    <p className="text-md mb-4">
      While GPT-3.5 is a powerful tool, users should be aware of its limitations such as occasional factual inaccuracies or misunderstanding complex prompts. To maximize its potential:
      <ul className="list-disc pl-5 mb-4">
        <li>Craft detailed and specific prompts to guide the model's responses.</li>
        <li>Utilize follow-up questions to refine and improve the accuracy of the information provided.</li>
        <li>Regularly update and train the model with the latest data for best performance.</li>
      </ul>
    </p>
    </div>
    <div className="model-guide-section mb-8">
    <h3 className="text-2xl font-semibold mb-4">Gemini Pro</h3>
    <h4 className="text-xl font-semibold mb-2">Purpose:</h4>
    <p className="text-md mb-4">
      Gemini Pro is designed as a versatile AI model for professional-grade applications, excelling in tasks that require advanced reasoning and domain-specific knowledge.
    </p>
    <h4 className="text-xl font-semibold mb-2">Use Cases:</h4>
    <p className="text-md mb-4">
      This model is particularly useful for:
      <ul className="list-disc pl-5 mb-4">
        <li>Legal and medical document analysis with domain-specific understanding.</li>
        <li>Complex data interpretation for business intelligence and analytics.</li>
        <li>Expert-level advice for specialized industries and fields.</li>
        <li>Advanced educational content creation and curriculum development.</li>
      </ul>
    </p>
    <h4 className="text-xl font-semibold mb-2">Limitations and Best Practices:</h4>
    <p className="text-md mb-4">
      Gemini Pro, while robust, may require calibration for niche domains or highly specialized content. Best practices include:
      <ul className="list-disc pl-5 mb-4">
        <li>Providing context-rich prompts to leverage the model's domain expertise.</li>
        <li>Verifying the model's outputs against domain-specific data or expert opinion.</li>
        <li>Continuously training the model with updated, high-quality datasets.</li>
      </ul>
    </p>
    </div>
    <div className="model-guide-section mb-8">
      <h3 className="text-2xl font-semibold mb-4">Gemini Pro Vision</h3>
      <h4 className="text-xl font-semibold mb-2">Purpose:</h4>
      <p className="text-md mb-4">
        Gemini Pro Vision is a specialized AI model that combines visual processing with language understanding to interpret and generate multimodal content. It's designed to seamlessly integrate visual data with text for a comprehensive understanding of both elements in tandem.
      </p>
      <h4 className="text-xl font-semibold mb-2">Use Cases:</h4>
      <p className="text-md mb-4">
        Gemini Pro Vision is adept at tasks that require the synthesis of visual and textual information, such as:
        <ul className="list-disc pl-5 mb-4">
          <li>Generating descriptions for images that require detailed visual recognition.</li>
          <li>Assisting in medical diagnostics by interpreting imagery alongside clinical notes.</li>
          <li>Creating interactive educational content that pairs visual learning with explanatory narratives.</li>
          <li>Automating the generation of marketing material by understanding product photos and associated descriptions.</li>
        </ul>
      </p>
      <h4 className="text-xl font-semibold mb-2">Limitations and Best Practices:</h4>
      <p className="text-md mb-4">
        Like all AI models, Gemini Pro Vision has its constraints, particularly in interpreting complex visual scenes with multiple elements. To get the most out of this model:
        <ul className="list-disc pl-5 mb-4">
          <li>Provide clear and high-resolution images to ensure accurate visual interpretation.</li>
          <li>Pair images with contextually relevant text prompts to guide the model's output.</li>
          <li>Continuously validate and refine the model's performance with a diverse dataset to avoid biases and improve accuracy.</li>
        </ul>
      </p>
    </div>
    <div className="model-guide-section mb-8">
      <h3 className="text-2xl font-semibold mb-4">Mistral Tiny</h3>
      <h4 className="text-xl font-semibold mb-2">Purpose:</h4>
      <p className="text-md mb-4">
        Mistral Tiny is a compact and efficient AI model optimized for applications where speed and low resource usage are priorities. It's designed to perform a variety of language tasks with a small footprint.
      </p>
      <h4 className="text-xl font-semibold mb-2">Use Cases:</h4>
      <p className="text-md mb-4">
        Due to its efficiency, Mistral Tiny is suitable for:
        <ul className="list-disc pl-5 mb-4">
          <li>Embedding within mobile applications for quick language tasks.</li>
          <li>Enabling AI functionality in resource-constrained environments.</li>
          <li>Providing quick responses in chatbots for customer support.</li>
        </ul>
      </p>
      <h4 className="text-xl font-semibold mb-2">Limitations and Best Practices:</h4>
      <p className="text-md mb-4">
        While Mistral Tiny offers the advantage of efficiency, it may not handle deep contextual tasks as robustly as larger models. Best practices include:
        <ul className="list-disc pl-5 mb-4">
          <li>Using simple and direct prompts to maximize performance.</li>
          <li>Implementing in scenarios where quick, surface-level responses are sufficient.</li>
        </ul>
      </p>
    </div>
    <div className="model-guide-section mb-8">
      <h3 className="text-2xl font-semibold mb-4">Mistral Small</h3>
      <h4 className="text-xl font-semibold mb-2">Purpose:</h4>
      <p className="text-md mb-4">
        Mistral Small is designed as a balance between performance and size, offering more nuanced language capabilities while still being resource-efficient. It's aimed at scenarios that need a bit more depth in language understanding.
      </p>
      <h4 className="text-xl font-semibold mb-2">Use Cases:</h4>
      <p className="text-md mb-4">
        Mistral Small is well-suited for:
        <ul className="list-disc pl-5 mb-4">
          <li>Interactive applications requiring more detailed language generation.</li>
          <li>Chatbots with a need for understanding moderate context.</li>
          <li>Language tasks that require a balance of speed and depth.</li>
        </ul>
      </p>
      <h4 className="text-xl font-semibold mb-2">Limitations and Best Practices:</h4>
      <p className="text-md mb-4">
        Mistral Small can perform many language tasks well but might not capture the full depth of context like larger models. To optimize its use:
        <ul className="list-disc pl-5 mb-4">
          <li>Structure prompts to be clear yet allow for a bit more elaboration.</li>
          <li>Consider the model's output in conjunction with user feedback to improve over time.</li>
        </ul>
      </p>
    </div>
    <div className="model-guide-section mb-8">
      <h3 className="text-2xl font-semibold mb-4">Mistral Medium</h3>
      <h4 className="text-xl font-semibold mb-2">Purpose:</h4>
      <p className="text-md mb-4">
        Mistral Medium takes the capabilities of smaller models further, offering substantial language processing power suitable for more complex tasks without the full resource requirements of the largest models.
      </p>
      <h4 className="text-xl font-semibold mb-2">Use Cases:</h4>
      <p className="text-md mb-4">
        This model is ideal for:
        <ul className="list-disc pl-5 mb-4">
          <li>Advanced chatbots that can handle intricate conversations.</li>
          <li>Content creation where more extensive context is beneficial.</li>
          <li>Applications that require detailed analysis of text for insights.</li>
        </ul>
      </p>
      <h4 className="text-xl font-semibold mb-2">Limitations and Best Practices:</h4>
      <p className="text-md mb-4">
        Mistral Medium provides deeper understanding but may still face limitations in certain areas compared to the larger mistral models
      <ul className="list-disc pl-5 mb-4">
        <li>Optimize the model's parameters based on the complexity of the task to ensure a balance between response quality and computational efficiency.</li>
        <li>Regularly update the model to incorporate the latest improvements and data, ensuring that the model's capabilities continue to align with user expectations.</li>
      </ul>
      </p>
    </div>
    <div className="model-guide-section mb-8">
      <h3 className="text-2xl font-semibold mb-4">Mistral-7b Instruct</h3>
      <h4 className="text-xl font-semibold mb-2">Purpose:</h4>
      <p className="text-md mb-4">
        Mistral-7b Instruct is a powerful language model that excels in following instructions and generating responses that closely align with user intents. It's specifically fine-tuned for tasks that require a high level of understanding and adherence to guidelines or prompts provided by users.
      </p>
      <h4 className="text-xl font-semibold mb-2">Use Cases:</h4>
      <p className="text-md mb-4">
        The model is particularly effective in scenarios where precision and compliance with instructions are critical, such as:
        <ul className="list-disc pl-5 mb-4">
          <li>Generating content that adheres to specific styles or formats.</li>
          <li>Answering questions with high accuracy and relevance to the prompt.</li>
          <li>Creating educational materials that follow a curriculum or educational standards.</li>
          <li>Automating tasks that require understanding complex instructions, such as data entry or summarization.</li>
        </ul>
      </p>
      <h4 className="text-xl font-semibold mb-2">Limitations and Best Practices:</h4>
      <p className="text-md mb-4">
        While Mistral-7b Instruct is designed for instruction-following, it may occasionally require prompt refinement to achieve the desired outcome. To utilize this model effectively:
        <ul className="list-disc pl-5 mb-4">
          <li>Formulate prompts that are detailed and unambiguous to guide the model's output more effectively.</li>
          <li>Use iterative prompting to fine-tune the instructions and the model's understanding of the task.</li>
          <li>Review and edit the model's outputs when necessary to ensure they meet the required standards and intentions.</li>
        </ul>
      </p>
    </div>
    <div className="model-guide-section mb-8">
      <h3 className="text-2xl font-semibold mb-4">Nous-Capybara-7b</h3>
      <h4 className="text-xl font-semibold mb-2">Purpose:</h4>
      <p className="text-md mb-4">
        Nous-Capybara-7b is tailored for understanding and generating human-like text, offering nuanced and sophisticated language capabilities. Its large-scale model is trained for a variety of complex tasks that require deep language comprehension.
      </p>
      <h4 className="text-xl font-semibold mb-2">Use Cases:</h4>
      <p className="text-md mb-4">
        This model shines in scenarios where detailed, human-like interaction is paramount, including:
        <ul className="list-disc pl-5 mb-4">
          <li>Engaging narrative and story generation with rich detail.</li>
          <li>Simulating human conversation for AI role-play or virtual assistants.</li>
          <li>Generating informative content for articles, essays, and reports.</li>
        </ul>
      </p>
      <h4 className="text-xl font-semibold mb-2">Limitations and Best Practices:</h4>
      <p className="text-md mb-4">
        While highly capable, Nous-Capybara-7b may produce outputs that need refinement for specific contexts. Best practices include:
        <ul className="list-disc pl-5 mb-4">
          <li>Preparing prompts that are clear and directed towards the model's strengths in generating human-like text.</li>
          <li>Monitoring for biases in the content and adjusting prompts accordingly to mitigate them.</li>
          <li>Reviewing generated content for alignment with the intended purpose and accuracy.</li>
        </ul>
      </p>
    </div>
    <div className="model-guide-section mb-8">
      <h3 className="text-2xl font-semibold mb-4">Mythomist-7b</h3>
      <h4 className="text-xl font-semibold mb-2">Purpose:</h4>
      <p className="text-md mb-4">
        Mythomist-7b is an AI model with a strong focus on creative content generation, especially for crafting stories, myths, and fictional narratives. It is designed to inspire and assist in the creation of rich, imaginative content.
      </p>
      <h4 className="text-xl font-semibold mb-2">Use Cases:</h4>
      <p className="text-md mb-4">
        Perfect for creative endeavours, Mythomist-7b can be utilized for:
        <ul className="list-disc pl-5 mb-4">
          <li>Generating unique and captivating stories, novels, and scripts.</li>
          <li>Providing creative suggestions and expanding on story ideas.</li>
          <li>Creating engaging content for games, including character dialogue and lore.</li>
        </ul>
      </p>
      <h4 className="text-xl font-semibold mb-2">Limitations and Best Practices:</h4>
      <p className="text-md mb-4">
        As a creative aid, Mythomist-7b is not intended for fact-based tasks but rather for embellishing and inventing. When using this model:
        <ul className="list-disc pl-5 mb-4">
          <li>Encourage the model to explore its creative capacity by providing imaginative prompts.</li>
          <li>Use the model as a brainstorming partner, building upon the ideas it generates.</li>
          <li>Ensure that the output aligns with creative goals, and edit for cohesion and style as needed.</li>
        </ul>
      </p>
    </div>
    <div className="model-guide-section mb-8">
      <h3 className="text-2xl font-semibold mb-4">Toppy-m-7b</h3>
      <h4 className="text-xl font-semibold mb-2">Purpose:</h4>
      <p className="text-md mb-4">
        Toppy-m-7b is engineered for high-level analytical and reasoning tasks, combining advanced natural language processing with machine learning to parse, understand, and generate insightful content across various domains.
      </p>
      <h4 className="text-xl font-semibold mb-2">Use Cases:</h4>
      <p className="text-md mb-4">
        Ideal for applications requiring deep analytical capabilities, such as:
        <ul className="list-disc pl-5 mb-4">
          <li>Data analysis and summarization, turning complex datasets into understandable narratives.</li>
          <li>Problem-solving tasks where logical reasoning and clear articulation are key.</li>
          <li>Academic research assistance, synthesizing vast amounts of information into cohesive summaries.</li>
        </ul>
      </p>
      <h4 className="text-xl font-semibold mb-2">Limitations and Best Practices:</h4>
      <p className="text-md mb-4">
        While Toppy-m-7b is adept at analysis and reasoning, it's essential to guide it with specific and well-structured prompts. To maximize effectiveness:
        <ul className="list-disc pl-5 mb-4">
          <li>Frame questions or tasks clearly to leverage the model's analytical strengths.</li>
          <li>Regularly review and refine the model's outputs to ensure accuracy and relevance.</li>
          <li>Utilize feedback loops to continually improve the model's performance on specialized tasks.</li>
        </ul>
      </p>
    </div>
    <div className="model-guide-section mb-8">
      <h3 className="text-2xl font-semibold mb-4">Cinematika-7b</h3>
      <h4 className="text-xl font-semibold mb-2">Purpose:</h4>
      <p className="text-md mb-4">
        Cinematika-7b specializes in understanding and generating content related to film, television, and video production. It's tailored to support creative processes in the visual storytelling industry, offering insights and generating scripts, storyboards, and conceptual ideas.
      </p>
      <h4 className="text-xl font-semibold mb-2">Use Cases:</h4>
      <p className="text-md mb-4">
        Cinematika-7b can be a valuable tool for:
        <ul className="list-disc pl-5 mb-4">
          <li>Scriptwriting and screenplay development, providing creative prompts and narrative structure.</li>
          <li>Generating detailed descriptions for scenes, settings, and character actions.</li>
          <li>Assisting in the ideation phase of video production, from commercials to feature films.</li>
        </ul>
      </p>
      <h4 className="text-xl font-semibold mb-2">Limitations and Best Practices:</h4>
      <p className="text-md mb-4">
        While Cinematika-7b is designed to foster creativity in visual storytelling, the specificity and uniqueness of creative content require careful calibration. Effective usage involves:
        <ul className="list-disc pl-5 mb-4">
          <li>Providing detailed contexts and clear objectives to guide the generation process.</li>
          <li>Collaborating with the model as a creative partner, using its outputs as a springboard for further development.</li>
          <li>Reviewing and editing generated content to ensure it aligns with creative vision and industry standards.</li>
        </ul>
      </p>
    </div>

      {/* Subsequent sections for each feature will be added here */}
  
  </div>
  );
}