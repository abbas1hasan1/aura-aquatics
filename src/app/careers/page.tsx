import type { Metadata } from "next";
import CareersHero from "@/components/careers/CareersHero";
import Benefits from "@/components/careers/Benefits";
import Positions from "@/components/careers/Positions";
import ApplicationForm from "@/components/careers/ApplicationForm";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the Aura Aquatics team! We're hiring lifeguards, managers, and pool technicians in Houston, TX. Competitive pay, flexible schedules, and training provided.",
};

export default function CareersPage() {
  return (
    <>
      <CareersHero />
      <Benefits />
      <Positions />
      <ApplicationForm />
    </>
  );
}
