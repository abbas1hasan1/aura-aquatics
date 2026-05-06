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
  // Step 3: Staff & Maintain — lifeguard whistle with sound waves
  <svg key="3" className={`${iconClass} step-icon-whistle`} fill="none" viewBox="0 0 36 36" strokeWidth={1.5} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
    {/* Lanyard */}
    <path d="M6 4 C12 8 16 12 18 16" opacity="0.5" />
    {/* Whistle body */}
    <g className="whistle">
      <path d="M14 16 a8 6 0 1 0 16 0 a8 6 0 1 0 -16 0 z" />
      <path d="M30 14 L34 12 L34 20 L30 18 z" />
      <circle cx="20" cy="16" r="1.6" fill="currentColor" stroke="none" opacity="0.7" />
    </g>
    {/* Sound waves */}
    <path className="wave wave-1" d="M34 8 Q36 10 34 12" opacity="0" />
    <path className="wave wave-2" d="M34 8 Q38 11 34 14" opacity="0" />
    <path className="wave wave-3" d="M34 8 Q40 12 34 16" opacity="0" />
  </svg>,
  // Step 4: Swim — swimmer with rotating arm + waves
  <svg key="4" className={`${iconClass} step-icon-swim`} fill="none" viewBox="0 0 36 36" strokeWidth={1.5} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
    {/* Head */}
    <circle cx="10" cy="11" r="2.5" />
    {/* Body */}
    <path d="M12 13 C18 14 22 14 28 14" />
    {/* Stationary arm (back) */}
    <path d="M14 13 L9 9" opacity="0.5" />
    {/* Rotating swim arm */}
    <g className="swim-arm" style={{ transformOrigin: "16px 13.5px" }}>
      <path d="M16 13.5 L22 8" />
    </g>
    {/* Water waves */}
    <path className="swim-wave swim-wave-1" d="M2 22 Q7 20 12 22 T22 22 T32 22" />
    <path className="swim-wave swim-wave-2" d="M2 27 Q7 25 12 27 T22 27 T32 27" opacity="0.6" />
    <path className="swim-wave swim-wave-3" d="M2 32 Q7 30 12 32 T22 32 T32 32" opacity="0.4" />
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
