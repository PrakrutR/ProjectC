import React from 'react';
// Import the Next.js Image component
import Image from 'next/image';
// Import the GenHub logo - continue using your actual logo path
import GenHubLogo from '../../../public/DARK_BRAND_LOGO.png';

export default function HelpPage() {
  return (
    <div className="size-screen flex flex-col items-center justify-center p-4">
      {/* Use the Next.js Image component for the logo */}
      <div className="mb-4" style={{ width: 160, height: 160 }}> {/* Adjust the logo container size as needed */}
        <Image src={GenHubLogo} width={192} height={192} alt="GenHub Logo" layout="fill" objectFit="contain" />
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