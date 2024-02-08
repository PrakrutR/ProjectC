import React from 'react';
// Import the Next.js Image component
import Image from 'next/image';
// Import the GenHub logo - continue using your actual logo path
import GenHubLogo from '../../../public/DARK_BRAND_LOGO.png';
import ModelSelectionScreenshot from '../../../public/Screenshotmodelselect.png';

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
        <div className="screenshot-container mr-4 flex items-center">
          <Image src={ModelSelectionScreenshot} alt="Model Selection Screenshot" width={40} height={40} />
        </div>
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
      {/* Subsequent sections for each feature will be added here */}
    </div>
  );
}