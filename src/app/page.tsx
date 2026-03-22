import Hero from "@/components/home/Hero";
import ServicesOverview from "@/components/home/ServicesOverview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import HowItWorks from "@/components/home/HowItWorks";
import FunIcons from "@/components/home/FunIcons";
import Testimonials from "@/components/home/Testimonials";
import Stats from "@/components/home/Stats";
import CTABanner from "@/components/home/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <HowItWorks />
      <FunIcons />
      <Stats />
      <Testimonials />
      <CTABanner />
    </>
  );
}
