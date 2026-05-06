"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { staggerContainer, staggerItem } from "@/lib/animations";

type Credential = {
  number: string;
  title: string;
  status: string;
  icon: React.ReactNode;
};

const credentials: Credential[] = [
  {
    number: "01",
    title: "Certified & Insured",
    status: "Verified",
    icon: (
      <svg className="credential-icon" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        {/* Shield */}
        <path d="M16 3 L27 7 V15 C27 21.5 22.5 26.5 16 29 C9.5 26.5 5 21.5 5 15 V7 L16 3 Z" />
        {/* Rosette ribbon tails */}
        <path d="M11 26 L9 31 L13 29 L14 26" opacity="0.55" />
        <path d="M21 26 L23 31 L19 29 L18 26" opacity="0.55" />
        {/* Check (animates on hover) */}
        <path className="shield-check" d="M11 16 L14.5 19.5 L21 12.5" strokeWidth={2.2} />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Local Houston Team",
    status: "On-site",
    icon: (
      <svg className="credential-icon" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        {/* Simplified Texas outline */}
        <path d="M5 7 L19 7 L19 4 L23 4 L23 8 L27 9 L27 15 L24 18 L23 22 L21 24 L19 27 L17 27 L15 25 L12 25 L11 22 L8 21 L7 18 L5 16 L5 7 Z" opacity="0.85" />
        {/* Houston pin pulse */}
        <circle className="pin-pulse" cx="20.5" cy="17" r="2.5" stroke="currentColor" opacity="0.6" />
        {/* Houston pin dot */}
        <circle cx="20.5" cy="17" r="1.6" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Comprehensive Solutions",
    status: "All-in-one",
    icon: (
      <svg className="credential-icon" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        {/* Connecting lines */}
        <line x1="9"  y1="9"  x2="23" y2="9"  opacity="0.35" />
        <line x1="23" y1="9"  x2="23" y2="23" opacity="0.35" />
        <line x1="23" y1="23" x2="9"  y2="23" opacity="0.35" />
        <line x1="9"  y1="23" x2="9"  y2="9"  opacity="0.35" />
        <line x1="9"  y1="9"  x2="23" y2="23" opacity="0.2" />
        <line x1="23" y1="9"  x2="9"  y2="23" opacity="0.2" />
        {/* Nodes */}
        <circle className="node node-1" cx="9"  cy="9"  r="3" fill="currentColor" stroke="none" />
        <circle className="node node-2" cx="23" cy="9"  r="3" fill="currentColor" stroke="none" />
        <circle className="node node-3" cx="23" cy="23" r="3" fill="currentColor" stroke="none" />
        <circle className="node node-4" cx="9"  cy="23" r="3" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Trained & Professional",
    status: "Certified Staff",
    icon: (
      <svg className="credential-icon" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        {/* Lanyard */}
        <path d="M6 4 Q14 8 18 12" opacity="0.45" />
        {/* Whistle body */}
        <ellipse cx="19" cy="18" rx="9" ry="6" />
        {/* Mouthpiece */}
        <path d="M28 16 L31 14 L31 22 L28 20 Z" />
        {/* Air hole */}
        <circle cx="15" cy="18" r="1.4" fill="currentColor" stroke="none" opacity="0.6" />
        {/* Sound puffs */}
        <path className="whistle-puff" d="M31 11 q3 3 0 6" opacity="0" />
        <path className="whistle-puff whistle-puff-2" d="M31 9 q5 4 0 10" opacity="0" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section className="trust-strip py-14 md:py-16">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        >
          {credentials.map((c) => (
            <motion.div
              key={c.number}
              variants={staggerItem}
              className="credential-card"
            >
              <span className="credential-status">{c.status}</span>
              <span className="credential-number">{c.number}</span>
              {c.icon}
              <h3 className="credential-label">{c.title}</h3>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
