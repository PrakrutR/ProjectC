import { FC } from "react"
import chatbotUIPNGDark from '../../public/DARK_BRAND_LOGO.png'; // Path to the dark mode image
import chatbotUIPNGLight from '../../public/LIGHT_BRAND_LOGO.png'; // Path to the light mode image
import Image from 'next/image'
interface ChatbotUISVGProps {
  theme: "dark" | "light"
  scale?: number
}

export const ChatbotUISVG: FC<ChatbotUISVGProps> = ({ theme, scale = 1 }) => {
  const imageSrc = theme === "dark" ? chatbotUIPNGDark : chatbotUIPNGLight;
  const width = 189 * scale; // Replace 189 with the original width of your PNGs
  const height = 194 * scale; // Replace 194 with the original height of your PNGs
  return (
    <img
      src={imageSrc.src}
      width={width}
      height={height}
      alt="GenHub"
    />
  );
};
