import React from 'react';
// Import the Next.js Image component
import Image from 'next/image';
// Import the GenHub logo - continue using your actual logo path
import GenHubLogo from '../../../public/DARK_BRAND_LOGO.png';

export default function HelpPage() {
  return (
    <div className="size-screen flex flex-col items-center justify-center p-4">
      {/* Container to constrain the logo size */}
      <div className="logo-container relative" style={{ width: '200px', height: '200px' }}>
        <Image src={GenHubLogo} alt="GenHub Logo" layout="responsive" width={200} height={200} />
      </div>
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to GenHub</h1>
        <p className="text-lg">
          Welcome to GenHub, your comprehensive AI platform that seamlessly integrates diverse AI models to cater to all your needs. Whether engaging with hosted models, connecting through OpenRouter, or utilizing our locally provided services, GenHub offers unparalleled flexibility and power. Dive into direct interactions with any AI model, craft personalized presets and pre-coded prompts, leverage custom models for tailored experiences and easily manage your workflows through file uploads and collection management. Create your assistants and explore tools designed to enhance your productivity and creativity. Let GenHub be your gateway to the future of AI-driven possibilities.
        </p>
      </div>
      {/* Additional sections will go here */}
    </div>
  );
}