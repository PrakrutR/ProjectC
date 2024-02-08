import React from 'react';
// Import the GenHub logo - replace './path/to/logo.png' with your actual logo path
import GenHubLogo from '../../public/DARK_BRAND_LOGO.png';

export default function HelpPage() {
  return (
    <div className="size-screen flex flex-col items-center justify-center p-4">
      <img src={GenHubLogo} alt="GenHub" className="w-40 h-40 mb-4" /> {/* Logo size can be adjusted */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to GenHub</h1>
        <p className="text-lg">
          Welcome to GenHub, your comprehensive AI platform that seamlessly integrates a diverse array of AI models to cater to all your needs. Whether you're engaging with hosted models, connecting through openrouter, or utilizing our locally provided services, GenHub offers unparalleled flexibility and power. Dive into direct interactions with any AI model, craft personalized presets and pre-coded prompts, leverage custom models for tailored experiences, and manage your workflows with ease through file uploads and collection management. Create your own assistants and explore a suite of tools designed to enhance your productivity and creativity. Let GenHub be your gateway to the future of AI-driven possibilities.
        </p>
      </div>
      {/* Additional sections will go here */}
    </div>
  );
}