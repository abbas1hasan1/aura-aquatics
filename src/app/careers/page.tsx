import type { Metadata } from "next";
import Link from "next/link";
import CareersHero from "@/components/careers/CareersHero";
import Benefits from "@/components/careers/Benefits";
import Positions from "@/components/careers/Positions";
import ApplicationForm from "@/components/careers/ApplicationForm";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the Aura Aquatics team! We're hiring lifeguards, managers, and pool technicians in Houston, TX. Get your lifeguard certification, competitive pay, flexible schedules, and training provided.",
};

function CertificationBanner() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-r from-ocean-500 to-ocean-600">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center lg:flex-row lg:justify-between lg:text-left gap-6">
          <div>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Get Your Lifeguard Certification
            </h2>
            <p className="mt-2 text-ocean-100 max-w-xl">
              American Red Cross certified training — includes CPR/AED, First Aid, and Bloodborne Pathogens. New courses starting April 2026.
            </p>
          </div>
          <Link
            href="/careers/certification"
            className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-ocean-600 shadow-sm transition-all hover:bg-ocean-50 hover:scale-[1.02] active:scale-[0.98] shrink-0"
          >
            View Course Details
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function CareersPage() {
  return (
    <>
      <CareersHero />
      <CertificationBanner />
      <Benefits />
      <Positions />
      <ApplicationForm />
    </>
  );
}
