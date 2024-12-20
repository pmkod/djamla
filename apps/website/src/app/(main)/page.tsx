import { HeroSection } from "@/components/sections/hero-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Djamla",
  },
};

const FirstPage = () => {
  return (
    <div>
      <HeroSection />
    </div>
  );
};

export default FirstPage;
