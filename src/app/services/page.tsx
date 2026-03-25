import type { Metadata } from "next";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesList from "@/components/services/ServicesList";
import ReservationForm from "@/components/services/ReservationForm";
import CTABanner from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Aura Aquatics' full range of pool services: pool management & staffing, maintenance & cleaning, and community reservations & private events.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <ReservationForm />
      <CTABanner />
    </>
  );
}
