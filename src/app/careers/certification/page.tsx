import type { Metadata } from "next";
import CareersHero from "@/components/careers/CareersHero";
import CertificationCourse from "@/components/careers/CertificationCourse";

export const metadata: Metadata = {
  title: "Lifeguard Certification Course",
  description:
    "Get your American Red Cross Lifeguard Certification in Houston, TX with Aura Aquatics. Blended learning format with CPR/AED, First Aid, and Bloodborne Pathogens training included.",
};

export default function CertificationPage() {
  return (
    <>
      <CareersHero />
      <CertificationCourse />
    </>
  );
}
