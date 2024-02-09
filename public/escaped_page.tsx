import React from &apos;react&apos;;
// Import the Next.js Image component
import Image from &apos;next/image&apos;;
// Import the GenHub logo - continue using your actual logo path
import GenHubLogo from &apos;../../../public/DARK_BRAND_LOGO.png&apos;;

export default function HelpPage() {
  return (
    <div className=&quot;size-screen flex flex-col items-center justify-center p-4&quot;>
      {/* Container to constrain the logo size */}
      <div className=&quot;logo-container relative mb-6&quot; style={{ width: &apos;200px&apos;, height: &apos;200px&apos; }}>
        <Image src={GenHubLogo} alt=&quot;GenHub Logo&quot; layout=&quot;responsive&quot; width={200} height={200} />
      </div>
      <div className=&quot;text-center mb-8&quot;>
        <h1 className=&quot;text-4xl font-bold mb-4&quot;>Welcome to GenHub</h1>
        <p className=&quot;text-lg&quot;>
          Welcome to GenHub, your comprehensive AI platform that seamlessly integrates diverse AI models to cater to all your needs. Whether engaging with hosted models, connecting through OpenRouter, or utilizing our locally provided services, GenHub offers unparalleled flexibility and power. Dive into direct interactions with any AI model, craft personalized presets and pre-coded prompts, leverage custom models for tailored experiences and easily manage your workflows through file uploads and collection management. Create your assistants and explore tools designed to enhance your productivity and creativity. Let GenHub be your gateway to the future of AI-driven possibilities.
        </p>
      </div>
      {/* Getting Started Section */}
      <div className=&quot;text-center mb-8&quot;>
        <h2 className=&quot;text-3xl font-bold mb-4&quot;>Getting Started with GenHub</h2>
        <p className=&quot;text-md mb-4&quot;>
        As you enter the GenHub world, each feature is crafted to elevate your AI interaction experience. From adjusting your account settings to creating your AI assistant, here&apos;s how to navigate and utilize the platform&apos;s capabilities to supercharge your AI adventures.
        </p>
      </div>
      
      {/* Account Settings Subsection */}
      <div className=&quot;account-settings-section mb-8&quot;>
        <h3 className=&quot;text-2xl font-semibold mb-4&quot;>Account Settings</h3>
        <p className=&quot;text-md mb-4&quot;>
        Your account settings are the key to a personalized GenHub experience. You can reshape your identity on the platform at the bottom left of the sidebar. Change your username to something unique, update your profile image to reflect your persona, and set your display name to be recognized by the community. Most importantly, the &quot;profile context&quot; feature allows you to share information about yourself within 1500 characters. All AI models use this context to provide more personalized and relevant responses.
        </p>
        <p className=&quot;text-md italic mb-4&quot;>
        Example Profile Context: &quot;I&apos;m an avid reader and enjoy exploring fantasy and science fiction genres. My work revolves around environmental science, and I often look for creative ways to explain complex concepts. I appreciate humor and enjoy discussing technological advancements and their societal impacts.&quot;
        </p>
      </div>
      <div className=&quot;ai-models-section mb-8&quot;>
        <div>
          <h3 className=&quot;text-2xl font-semibold mb-4&quot;>Interact with AI Models</h3>
          <p className=&quot;text-md mb-4&quot;>
            Select your AI model from the top right of the dashboard, with the default set to GPT-4 Turbo. Clicking on the model name opens a menu to search or select a model from the dropdown. The dropdown categorizes models into hosted, OpenRouter, and local models across three tabs, ensuring you find the right AI for your needs.
          </p>
          <p className=&quot;text-md mb-4&quot;>
            The system prompt sets the tone for your interaction. The default prompt is &quot;You are a friendly, helpful AI assistant.&quot; Alternative system prompts include &quot;You are an expert in environmental science,&quot; &quot;You are a creative story writer,&quot; or &quot;You are a knowledgeable tech advisor.&quot; These prompts guide the AI&apos;s responses to align with your intended use case.
          </p>
          <p className=&quot;text-md mb-4&quot;>
            Delve into &quot;Advanced Settings&quot; for more control. Set the &apos;temperature&apos; to adjust the AI&apos;s creativity, with zero being the most deterministic and one allowing for maximum variability. &apos;Context length&apos; defines how much previous dialogue the AI considers, impacting its response relevance. You can opt to exclude your profile context and workspace instructions for specific chats, tailoring the AI&apos;s responses to the current conversation only.
          </p>
          <p className=&quot;text-md mb-4&quot;>
            Lastly, choose your embeddings provider between OpenAI and local. AI embeddings are numerical representations of data that help the AI understand and generate responses. OpenAI&apos;s embeddings are based on vast datasets and sophisticated models, offering broad knowledge and nuanced understanding. Local embeddings, generated within your system, offer privacy and customization but may vary in scope and depth.
          </p>
        </div>
      </div>
      <div className=&quot;presets-section mb-8&quot;>
        <h3 className=&quot;text-2xl font-semibold mb-4&quot;>Presets</h3>
        <p className=&quot;text-md mb-4&quot;>
          Presets in GenHub offer a streamlined way to interact with AI models. With this feature, you can create custom presets for quick access, each with its unique configuration. Name your preset, choose your preferred AI model, set a system prompt, and adjust advanced options like temperature and context length, just as you would in the model selection menu.
        </p>
        <p className=&quot;text-md mb-4&quot;>
          This flexibility means you no longer need to manually configure model settings for each chat, saving you time and enhancing your workflow. Access your presets from the &quot;Quick Settings&quot; for an efficient and personalized AI interaction experience. Whether you&apos;re drafting emails, generating creative content, or analyzing data, your presets are ready to assist you immediately.
        </p>
      </div>
      <div className=&quot;prompts-section mb-8&quot;>
        <h3 className=&quot;text-2xl font-semibold mb-4&quot;>Prompts</h3>
        <p className=&quot;text-md mb-4&quot;>
          The &quot;Prompts&quot; feature in GenHub elevates your efficiency by allowing you to craft and save custom prompts. Each prompt can be given a distinct name, and you can type it exactly as you wish it to be used. This eliminates the need to retype or remember complex prompts for different interactions.
        </p>
        <p className=&quot;text-md mb-4&quot;>
          Type &quot;/&quot; in the chat box to access your saved prompts. This action brings up a menu showcasing all the prompts you&apos;ve created. Selecting one will automatically insert its associated data into your message box, ready to be sent. This quality-of-life feature streamlines your workflow, making interactions with AI models more seamless and intuitive.
        </p>
        <p className=&quot;text-md italic mb-4&quot;>
          Example Prompt Name: &quot;Creative Story Starter&quot; <br />
          Example Prompt: &quot;Imagine a world where technology has merged with nature. Describe a day in this world.&quot;
        </p>
      </div>
      <div className=&quot;file-management-section mb-8&quot;>
        <h3 className=&quot;text-2xl font-semibold mb-4&quot;>File Management</h3>
        <p className=&quot;text-md mb-4&quot;>
          GenHub&apos;s File Management system simplifies integrating files into your chats. Upload files once and reuse them across multiple chats without the need for repeated uploads. To access your uploaded files, type &quot;#&quot; in the chat box, triggering a menu that displays all available files.
        </p>
        <p className=&quot;text-md mb-4&quot;>
          Use the &quot;+&quot; icon within a chat box for a one-time file share. However, the File Management feature is your go-to for files you intend to use repeatedly. It supports a wide range of file types, including CSV, JSON, Markdown, XML, PDF, plain text, images, and DOCX, with a maximum size limit of 50MB per file.
        </p>
        <p className=&quot;text-md mb-4&quot;>
          Uploaded files are automatically given a generated name, but you can assign custom names for easier identification. Organize your files by creating folders using the &quot;Create Folder&quot; button in the files panel, enhancing your workflow and keeping your workspace tidy.
        </p>
      </div>
      <div className=&quot;collections-section mb-8&quot;>
        <h3 className=&quot;text-2xl font-semibold mb-4&quot;>Collections</h3>
        <p className=&quot;text-md mb-4&quot;>
          Collections in GenHub streamline your workflow by enabling you to group related files into easily accessible sets. Whether you&apos;re compiling research documents, images, or data files, Collections help keep your resources organized and ready to use.
        </p>
        <p className=&quot;text-md mb-4&quot;>
          Select the files you wish to group to create a Collection in the Files tab. Each Collection can be given a custom name, making organising and finding your resources straightforwardly based on project, topic, or any other criteria.
        </p>
        <p className=&quot;text-md mb-4&quot;>
          When you&apos;re ready to use a Collection in a chat, type the &quot;#&quot; key to bring up the Collections menu. Selecting a Collection will import all associated files into your chat in one action, saving you time and keeping your focus on the conversation. This quality-of-life feature ensures that all the resources you need are just a few clicks away, enhancing your interaction with AI models and collaborators.
        </p>
      </div>
      <div className=&quot;folders-section mb-8&quot;>
        <h3 className=&quot;text-2xl font-semibold mb-4&quot;>Folders</h3>
        <p className=&quot;text-md mb-4&quot;>
          Keep your GenHub workspace organized and clutter-free with the Folders feature. By grouping your chats into folders, you can easily maintain a tidy workspace and navigate various conversations. Whether it’s project-specific discussions, team chats, or individual conversations, Folders help you categorize them in a way that makes sense.
        </p>
        <p className=&quot;text-md mb-4&quot;>
          To create a new folder, look for the &quot;New Folder&quot; icon at the top right of the sidebar, adjacent to the &quot;New Chat&quot; button. Each folder can be customized with a unique name, allowing you to organize your chats based on projects, topics, or other criteria that fit your workflow.
        </p>
        <p className=&quot;text-md mb-4&quot;>
          This feature is handy for managing many chats, ensuring that you can always find the conversation you need without sifting through an unorganized list. It’s all about making your GenHub experience as efficient and organized as possible.
        </p>
      </div>
      <div className=&quot;workspaces-section mb-8&quot;>
        <h3 className=&quot;text-2xl font-semibold mb-4&quot;>Workspaces</h3>
        <p className=&quot;text-md mb-4&quot;>
          Workspaces in GenHub are overarching environments designed to streamline your projects and collaborations. You&apos;ll find the dropdown at the top of the sidebar to switch between workspaces, with workspace settings accessible right next to it. Every account has a default workspace named &quot;Home,&quot; setting the stage for your AI-driven endeavours.
        </p>
        <p className=&quot;text-md mb-4&quot;>
          Within each workspace, the instructions and settings defined in the workspace settings influence every chat, model, preset, and assistant, ensuring a consistent interaction theme. These settings can be individually overridden in the advanced settings for each component if needed.
        </p>
        <p className=&quot;text-md mb-4&quot;>
          The &quot;Main&quot; tab within workspace settings lets you personalize your workspace with a unique name and image, facilitating quick identification. Here, you can also define a set of workspace instructions (up to 1500 characters) that guide the AI&apos;s responses to align with your workspace&apos;s theme. Examples include instructions for a customer support workspace, creative writing guidelines, or technical assistance protocols.
        </p>
        <p className=&quot;text-md mb-4&quot;>
          In the &quot;Defaults&quot; tab, you can select the default AI model and system prompt for the workspace alongside all the advanced options available in the model selection and presets menu. This ensures that every new chat within the workspace starts with these pre-configured settings, streamlining the process and maintaining consistency across your interactions.
        </p>
      </div>
      <div className=&quot;assistants-section mb-8&quot;>
        <h3 className=&quot;text-2xl font-semibold mb-4&quot;>Assistants</h3>
        <p className=&quot;text-md mb-4&quot;>
          Unlock the full potential of personalized AI with GenHub&apos;s Assistants feature. Create custom assistants to perform specific roles akin to crafting your GPT models. Each assistant can be tailored with a unique name, description, and an identifying image, establishing a distinct identity within your workspace.
        </p>
        <p className=&quot;text-md mb-4&quot;>
          Set a foundational prompt for your assistant, such as &quot;Provide expert advice on renewable energy,&quot; &quot;Inspire with creative writing prompts,&quot; or &quot;Summarize complex health articles for easy understanding.&quot; These prompts guide your assistant&apos;s interactions, ensuring relevance and utility in its responses.
        </p>
        <p className=&quot;text-md mb-4&quot;>
          Utilize advanced settings to fine-tune your assistant&apos;s approach, adjusting its temperature for creativity, context length for memory depth, and more. Integrate files from your GenHub uploads into your assistant&apos;s memory for enhanced specialization, and select from available GenHub tools to expand its capabilities.
        </p>
        <p className=&quot;text-md mb-4&quot;>
          Access your assistants directly from the &quot;Quick Settings&quot; for seamless integration into your workflow. Easily loop an assistant into any conversation by typing &quot;@&quot; followed by the assistant&apos;s name in the chat box, instantly bringing its expertise and predefined role into play. This flexibility allows you to leverage tailored assistance across multiple contexts and conversations, enriching your interactions and productivity on GenHub.
        </p>
      </div>
      <div className=&quot;tools-section mb-8&quot;>
        <h3 className=&quot;text-2xl font-semibold mb-4&quot;>Tools</h3>
        <p className=&quot;text-md mb-4&quot;>
          GenHub&apos;s Tools feature enriches your AI&apos;s capabilities by incorporating functionalities based on the OpenAI schema. From data analysis and web browsing to image generation with DALL-E 3 or Stable Diffusion, Tools empower your AIs to perform a wide range of tasks.
        </p>
        <p className=&quot;text-md mb-4&quot;>
          Create custom tools by specifying a name, a description, and an OpenAI-compatible schema. For instance, you could create a tool for retrieving weather data by defining an HTTP header, such as <code>{&apos;{&quot;X-api-key&quot;: &quot;1234567890&quot;}&apos;}</code>, and an OpenAI schema that outlines the API&apos;s structure and capabilities.
        </p>
        <div className=&quot;text-md mb-4 bg-gray-100 p-4 rounded&quot;>
          Example Tool Schema: <br />
          <pre>{`{
            &quot;openapi&quot;: &quot;3.1.0&quot;,
            &quot;info&quot;: {
              &quot;title&quot;: &quot;Get weather data&quot;,
              &quot;description&quot;: &quot;Retrieves current weather data for a location.&quot;,
              &quot;version&quot;: &quot;v1.0.0&quot;
            },
            &quot;servers&quot;: [
              {
                &quot;url&quot;: &quot;https://weather.example.com&quot;
              }
            ],
            &quot;paths&quot;: {
              &quot;/location&quot;: {
                &quot;get&quot;: {
                  &quot;description&quot;: &quot;Get temperature for a specific location&quot;,
                  &quot;operationId&quot;: &quot;GetCurrentWeather&quot;,
                  &quot;parameters&quot;: [
                    {
                      &quot;name&quot;: &quot;location&quot;,
                      &quot;in&quot;: &quot;query&quot;,
                      &quot;description&quot;: &quot;The city and state to retrieve the weather for&quot;,
                      &quot;required&quot;: true,
                      &quot;schema&quot;: {
                        &quot;type&quot;: &quot;string&quot;
                      }
                    }
                  ],
                  &quot;deprecated&quot;: false
                }
              }
            },
            &quot;components&quot;: {
              &quot;schemas&quot;: {}
            }
          }`}</pre>
        </div>
        <p className=&quot;text-md mb-4&quot;>
          To access your tools, type &quot;!&quot; in the chat box, which will bring up a menu of your configured tools. Selecting a tool will enable the model to use the specified functionality, provided the schema is correctly configured.
        </p>
        <div className=&quot;text-md mb-4 bg-gray-100 p-4 rounded&quot;>
          Additional Example Tool Schema: <br />
          <pre>{`{
            &quot;openapi&quot;: &quot;3.1.0&quot;,
            &quot;info&quot;: {
              &quot;title&quot;: &quot;Translate Text&quot;,
              &quot;description&quot;: &quot;Translates text from one language to another.&quot;,
              &quot;version&quot;: &quot;v1.0.0&quot;
            },
            &quot;servers&quot;: [
              {
                &quot;url&quot;: &quot;https://translation.example.com&quot;
              }
            ],
            &quot;paths&quot;: {
              &quot;/translate&quot;: {
                &quot;post&quot;: {
                  &quot;description&quot;: &quot;Translate text to a specified language&quot;,
                  &quot;operationId&quot;: &quot;TranslateText&quot;,
                  &quot;parameters&quot;: [
                    {
                      &quot;name&quot;: &quot;text&quot;,
                      &quot;in&quot;: &quot;body&quot;,
                      &quot;description&quot;: &quot;Text to translate&quot;,
                      &quot;required&quot;: true,
                      &quot;schema&quot;: {
                        &quot;type&quot;: &quot;string&quot;
                      }
                    },
                    {
                      &quot;name&quot;: &quot;targetLanguage&quot;,
                      &quot;in&quot;: &quot;query&quot;,
                      &quot;description&quot;: &quot;Language code of the target translation language&quot;,
                      &quot;required&quot;: true,
                      &quot;schema&quot;: {
                        &quot;type&quot;: &quot;string&quot;
                      }
                    }
                  ],
                  &quot;deprecated&quot;: false
                }
              }
            },
            &quot;components&quot;: {
              &quot;schemas&quot;: {}
            }
          }`}</pre>
        </div>
    </div>
    <div className=&quot;quick-settings-section mb-8&quot;>
      <h3 className=&quot;text-2xl font-semibold mb-4&quot;>Quick Settings</h3>
      <p className=&quot;text-md mb-4&quot;>
        Positioned at the top left of the chat interface, Quick Settings provides immediate access to your customized tools for an enhanced chat experience. This feature is designed to streamline your workflow, allowing you to quickly apply presets or summon assistants with just a few clicks.
      </p>
      <p className=&quot;text-md mb-4&quot;>
        Whether you need to switch between different AI models, apply a specific set of parameters, or integrate an assistant into your conversation, Quick Settings makes these actions effortless. Simply click on the Quick Settings icon, and a dropdown menu will appear, listing all the assistants and presets you&apos;ve created. Selecting one instantly loads it into your current chat, adapting the conversation to your chosen configuration without interrupting your workflow.
      </p>
      <p className=&quot;text-md mb-4&quot;>
        This feature is especially useful for users who frequently switch contexts or require varied AI functionalities in their conversations. Quick Settings ensures that your preferred tools are always at your fingertips, ready to enhance your interaction with AI on GenHub.
      </p>
    </div>

      {/* Subsequent sections for each feature will be added here */}
    </div>
  );
}