import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import Story from "@/components/about/Story";
import Values from "@/components/about/Values";
import Team from "@/components/about/Team";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Aura Aquatics — Houston's trusted pool management and lifeguard staffing company. Our mission, values, and team.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Story />
      <Values />
      <Team />
    </>
  );
}
