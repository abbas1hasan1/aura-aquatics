"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { services } from "@/lib/data";

const icons: Record<string, React.ReactNode> = {
  management: (
    <svg className="h-16 w-16 md:h-20 md:w-20" fill="none" viewBox="0 0 64 64" strokeWidth={1.5} stroke="currentColor">
      <rect x="12" y="8" width="40" height="48" rx="4" />
      <path d="M20 8V4" strokeWidth={2} />
      <path d="M44 8V4" strokeWidth={2} />
      <rect x="20" y="18" width="24" height="12" rx="2" strokeWidth={1.2} />
      <path d="M24 24H40" strokeWidth={1} opacity={0.4} />
      <path d="M24 28H36" strokeWidth={1} opacity={0.4} />
      <path d="M20 38H44" strokeWidth={1} opacity={0.3} />
      <path d="M20 43H38" strokeWidth={1} opacity={0.3} />
      <path d="M20 48H32" strokeWidth={1} opacity={0.3} />
      <circle cx="42" cy="46" r="6" fill="currentColor" opacity={0.1} />
      <path d="M40 46L42 48L45 44" strokeWidth={1.5} />
    </svg>
  ),
  lifeguard: (
    <svg className="h-16 w-16 md:h-20 md:w-20" fill="none" viewBox="0 0 64 64" strokeWidth={1.5} stroke="currentColor">
      <circle cx="32" cy="16" r="8" />
      <path d="M20 58C20 46 24 38 32 38C40 38 44 46 44 58" />
      <path d="M26 26L22 30" strokeWidth={2} />
      <ellipse cx="18" cy="32" rx="6" ry="4" strokeWidth={1.5} />
      <path d="M8 52C12 50 16 50 20 52C24 54 28 54 32 52C36 50 40 50 44 52C48 54 52 54 56 52" strokeWidth={2} opacity={0.3} />
      <path d="M8 58C12 56 16 56 20 58C24 60 28 60 32 58C36 56 40 56 44 58C48 60 52 60 56 58" strokeWidth={2} opacity={0.2} />
    </svg>
  ),
  maintenance: (
    <svg className="h-16 w-16 md:h-20 md:w-20" fill="none" viewBox="0 0 64 64" strokeWidth={1.5} stroke="currentColor">
      <rect x="8" y="24" width="48" height="28" rx="4" />
      <path d="M8 36H56" strokeWidth={1} opacity={0.2} />
      <path d="M16 36V52" strokeWidth={1} opacity={0.15} />
      <path d="M24 36V52" strokeWidth={1} opacity={0.15} />
      <path d="M32 36V52" strokeWidth={1} opacity={0.15} />
      <path d="M40 36V52" strokeWidth={1} opacity={0.15} />
      <path d="M48 36V52" strokeWidth={1} opacity={0.15} />
      <path d="M8 44C12 42 16 42 20 44C24 46 28 46 32 44C36 42 40 42 44 44C48 46 52 46 56 44" strokeWidth={1.5} opacity={0.3} />
      <circle cx="46" cy="18" r="10" />
      <path d="M46 12V18H52" strokeWidth={2} />
      <path d="M36 14L40 16" strokeWidth={1} opacity={0.3} />
    </svg>
  ),
  swimming: (
    <svg className="h-16 w-16 md:h-20 md:w-20" fill="none" viewBox="0 0 64 64" strokeWidth={1.5} stroke="currentColor">
      <circle cx="22" cy="18" r="6" />
      <path d="M28 24L40 20L44 28" strokeWidth={2} />
      <path d="M28 24L24 34L32 38" strokeWidth={2} />
      <path d="M40 20L36 30" strokeWidth={1.5} opacity={0.4} />
      <path d="M8 44C12 42 16 42 20 44C24 46 28 46 32 44C36 42 40 42 44 44C48 46 52 46 56 44" strokeWidth={2} />
      <path d="M8 50C12 48 16 48 20 50C24 52 28 52 32 50C36 48 40 48 44 50C48 52 52 52 56 50" strokeWidth={2} opacity={0.4} />
      <path d="M8 56C12 54 16 54 20 56C24 58 28 58 32 56C36 54 40 54 44 56C48 58 52 58 56 56" strokeWidth={2} opacity={0.2} />
    </svg>
  ),
};

function FlipCard({ service }: { service: (typeof services)[number] }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="perspective-[1000px] cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative w-full aspect-[4/3] sm:aspect-square transition-transform duration-500 [transform-style:preserve-3d] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* Front */}
        <div className="absolute inset-0 [backface-visibility:hidden] rounded-3xl bg-navy shadow-sm hover:shadow-lg transition-shadow flex flex-col items-center justify-center p-8">
          <div className="text-white mb-6">
            {icons[service.icon]}
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-white text-center">
            {service.title}
          </h3>
          <span className="mt-4 text-xs text-white/50 uppercase tracking-wider">
            Tap to learn more
          </span>
        </div>

        {/* Back */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-3xl bg-navy flex flex-col items-center justify-center p-8 md:p-10">
          <h3 className="text-xl md:text-2xl font-bold text-white text-center mb-4">
            {service.title}
          </h3>
          <p className="text-slate-300 text-center text-sm md:text-base leading-relaxed">
            {service.description}
          </p>
          <Link
            href={`/services#${service.id}`}
            onClick={(e) => e.stopPropagation()}
            className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-ocean-400 hover:text-ocean-300 transition-colors"
          >
            Learn More
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
          <span className="mt-4 text-xs text-slate-500 uppercase tracking-wider">
            Tap to flip back
          </span>
        </div>
      </div>
    </div>
  );
}

export default function ServicesOverview() {
  return (
    <section className="py-20 md:py-28 bg-ocean-50/50">
      <Container>
        <SectionHeading
          label="What We Do"
          title="Comprehensive Aquatic Services"
          subtitle="From pool management to lifeguard staffing, we provide everything your facility needs."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-4 grid-cols-2"
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={staggerItem}>
              <FlipCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
