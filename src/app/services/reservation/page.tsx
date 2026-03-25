import type { Metadata } from "next";
import ReservationForm from "@/components/services/ReservationForm";

export const metadata: Metadata = {
  title: "Reserve a Pool Event",
  description:
    "Book a private pool party, community reservation, or special event with Aura Aquatics. Certified lifeguard supervision included.",
};

export default function ReservationPage() {
  return (
    <>
      <div className="pt-24" />
      <ReservationForm />
    </>
  );
}
