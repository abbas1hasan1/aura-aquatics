"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { processSteps } from "@/lib/data";

const iconClass = "h-9 w-9 overflow-visible";

const stepIcons = [
  // Step 1: Consultation — two chat bubbles + pulsing typing dots
  <svg key="1" className={`${iconClass} step-icon-consult`} fill="none" viewBox="0 0 36 36" strokeWidth={1.5} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
    {/* Back bubble */}
    <path d="M22 4 H32 a2 2 0 0 1 2 2 v8 a2 2 0 0 1 -2 2 H29 l-2 3 v-3 H22 a2 2 0 0 1 -2 -2 V6 a2 2 0 0 1 2 -2 z" opacity="0.4" />
    {/* Front bubble */}
    <path d="M4 12 H18 a2 2 0 0 1 2 2 v8 a2 2 0 0 1 -2 2 H10 l-3 4 v-4 H4 a2 2 0 0 1 -2 -2 V14 a2 2 0 0 1 2 -2 z" />
    {/* Typing dots */}
    <circle className="dot dot-1" cx="7"  cy="18" r="1.2" fill="currentColor" stroke="none" />
    <circle className="dot dot-2" cx="11" cy="18" r="1.2" fill="currentColor" stroke="none" />
    <circle className="dot dot-3" cx="15" cy="18" r="1.2" fill="currentColor" stroke="none" />
  </svg>,
  // Step 2: Site Visit — map pin with radar pulse rings
  <svg key="2" className={`${iconClass} step-icon-visit`} fill="none" viewBox="0 0 36 36" strokeWidth={1.5} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
    {/* Pulse rings */}
    <circle className="ring ring-1" cx="18" cy="30" r="3" stroke="currentColor" opacity="0.6" />
    <circle className="ring ring-2" cx="18" cy="30" r="3" stroke="currentColor" opacity="0.6" />
    <circle className="ring ring-3" cx="18" cy="30" r="3" stroke="currentColor" opacity="0.6" />
    {/* Pin */}
    <g className="pin">
      <path d="M18 4 C12 4 8 8 8 14 C8 20 18 28 18 28 C18 28 28 20 28 14 C28 8 24 4 18 4 z" />
      <circle cx="18" cy="14" r="3.5" fill="currentColor" stroke="none" opacity="0.85" />
    </g>
  </svg>,
  // Step 3: Staff & Maintain — clipboard with three checkmarks drawing in sequence
  <svg key="3" className={`${iconClass} step-icon-clipboard`} fill="none" viewBox="0 0 36 36" strokeWidth={1.5} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
    {/* Clipboard body */}
    <rect x="7" y="6" width="22" height="26" rx="2" />
    {/* Clip */}
    <rect x="13" y="3" width="10" height="5" rx="1.2" fill="currentColor" stroke="none" opacity="0.85" />
    {/* Three rows */}
    <line x1="11" y1="14" x2="25" y2="14" opacity="0.25" />
    <line x1="11" y1="20" x2="25" y2="20" opacity="0.25" />
    <line x1="11" y1="26" x2="25" y2="26" opacity="0.25" />
    {/* Three animated checkmarks (drawn in sequence) */}
    <path className="check check-1" d="M11.5 14 L13 15.5 L16 12.5" strokeWidth={2} />
    <path className="check check-2" d="M11.5 20 L13 21.5 L16 18.5" strokeWidth={2} />
    <path className="check check-3" d="M11.5 26 L13 27.5 L16 24.5" strokeWidth={2} />
  </svg>,
  // Step 4: Swim — sun + water waves + rising bubbles (no human anatomy)
  <svg key="4" className={`${iconClass} step-icon-pool`} fill="none" viewBox="0 0 36 36" strokeWidth={1.5} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
    {/* Sun with rotating rays */}
    <g className="sun">
      <circle cx="26" cy="9" r="3" fill="currentColor" stroke="none" opacity="0.9" />
      <g className="sun-rays" style={{ transformOrigin: "26px 9px" }}>
        <line x1="26" y1="2" x2="26" y2="3.5" />
        <line x1="26" y1="14.5" x2="26" y2="16" />
        <line x1="19" y1="9" x2="20.5" y2="9" />
        <line x1="31.5" y1="9" x2="33" y2="9" />
        <line x1="21" y1="4" x2="22" y2="5" />
        <line x1="30" y1="13" x2="31" y2="14" />
        <line x1="31" y1="4" x2="30" y2="5" />
        <line x1="22" y1="13" x2="21" y2="14" />
      </g>
    </g>
    {/* Rising bubbles */}
    <circle className="bubble bubble-1" cx="9"  cy="22" r="1.2" fill="currentColor" stroke="none" opacity="0.6" />
    <circle className="bubble bubble-2" cx="14" cy="24" r="0.9" fill="currentColor" stroke="none" opacity="0.6" />
    <circle className="bubble bubble-3" cx="6"  cy="25" r="0.7" fill="currentColor" stroke="none" opacity="0.6" />
    {/* Water surface */}
    <path className="pool-wave pool-wave-1" d="M2 26 Q6 24 10 26 T18 26 T26 26 T34 26" strokeWidth={1.7} />
    <path className="pool-wave pool-wave-2" d="M2 30 Q6 28 10 30 T18 30 T26 30 T34 30" opacity="0.7" />
    <path className="pool-wave pool-wave-3" d="M2 34 Q6 32 10 34 T18 34 T26 34 T34 34" opacity="0.5" />
  </svg>,
];

export default function HowItWorks() {
  const lineRef = useRef<HTMLDivElement>(null);
  const lineInView = useInView(lineRef, { once: true, amount: 0.3 });

  return (
    <section className="py-20 md:py-28 bg-ocean-50">
      <Container>
        <SectionHeading
          label="Our Process"
          title="How It Works"
          subtitle="Getting started with Aura Aquatics is simple. Four easy steps to stress-free pool management."
        />

        <motion.div
          ref={lineRef}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="relative"
        >
          {/* Connecting line (desktop) */}
          <div className={`process-line absolute top-16 left-[12.5%] right-[12.5%] hidden h-0.5 bg-gradient-to-r from-ocean-200 via-ocean-400 to-ocean-200 lg:block ${lineInView ? "is-drawn" : ""}`} />

          {/* Desktop: 4 columns with circles + descriptions */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                variants={staggerItem}
                className="relative text-center"
              >
                <div className="relative z-10 mx-auto mb-6 flex h-32 w-32 flex-col items-center justify-center rounded-full bg-gradient-to-br from-ocean-50 to-sky-light border-4 border-white shadow-lg">
                  <div className="text-ocean-500 mb-1">{stepIcons[i]}</div>
                  <span className="text-xs font-bold uppercase tracking-wider text-ocean-400">
                    Step {step.step}
                  </span>
                </div>
                <h3 className="mb-3 text-xl font-bold text-navy">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 max-w-xs mx-auto">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Mobile/Tablet: compact horizontal layout */}
          <div className="lg:hidden relative">
            {/* Single connecting line across all steps */}
            <div className={`process-line absolute top-6 left-[12%] right-[12%] h-0.5 bg-ocean-200 ${lineInView ? "is-drawn" : ""}`} />

            <div className="grid grid-cols-4 gap-2">
              {processSteps.map((step) => (
                <motion.div
                  key={step.step}
                  variants={staggerItem}
                  className="relative flex flex-col items-center text-center"
                >
                  <div className="relative z-10 flex h-12 w-12 flex-col items-center justify-center rounded-full bg-navy text-white shadow-md mb-3">
                    <span className="text-xs font-bold">{step.step}</span>
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-navy leading-tight">
                    {step.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
