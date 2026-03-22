import ClientsHero from "@/components/clients/ClientsHero";
import ClientShowcase from "@/components/clients/ClientShowcase";
import ClientsCTA from "@/components/clients/ClientsCTA";

export const metadata = {
  title: "Our Clients | Aura Aquatics",
  description:
    "See how Aura Aquatics serves Houston's most prestigious clubs and facilities with premier pool management and lifeguard staffing.",
};

export default function ClientsPage() {
  return (
    <>
      <ClientsHero />
      <ClientShowcase />
      <ClientsCTA />
    </>
  );
}
