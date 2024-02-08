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
        As you enter the GenHub world, each feature is crafted to elevate your AI interaction experience. From adjusting your account settings to creating your AI assistant, here's how to navigate and utilize the platform's capabilities to supercharge your AI adventures.
        </p>
      </div>
      
      {/* Account Settings Subsection */}
      <div className="account-settings-section mb-8">
        <h3 className="text-2xl font-semibold mb-4">Account Settings</h3>
        <p className="text-md mb-4">
        Your account settings are the key to a personalized GenHub experience. You can reshape your identity on the platform at the bottom left of the sidebar. Change your username to something unique, update your profile image to reflect your persona, and set your display name to be recognized by the community. Most importantly, the "profile context" feature allows you to share information about yourself within 1500 characters. All AI models use this context to provide more personalized and relevant responses.
        </p>
        <p className="text-md italic mb-4">
        Example Profile Context: "I'm an avid reader and enjoy exploring fantasy and science fiction genres. My work revolves around environmental science, and I often look for creative ways to explain complex concepts. I appreciate humor and enjoy discussing technological advancements and their societal impacts."
        </p>
      </div>
      {/* Subsequent sections for each feature will be added here */}
    </div>
  );
}