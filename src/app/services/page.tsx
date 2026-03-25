import type { Metadata } from "next";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesList from "@/components/services/ServicesList";
import CTABanner from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Aura Aquatics' full range of pool services: management, lifeguard staffing, maintenance, swim lessons, and pool renovations & builds in Houston, TX.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <CTABanner />
    </>
  );
}
