"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { staggerContainer, staggerItem } from "@/lib/animations";

interface FunIcon {
  id: string;
  name: string;
  tooltip: string;
  svg: React.ReactNode;
  clickAnimation: {
    animate: Record<string, number | number[]>;
    transition: Record<string, unknown>;
  };
  accentFrom: string;
  accentTo: string;
}

const funIcons: FunIcon[] = [
  {
    id: "whistle",
    name: "Whistle",
    tooltip: "Tweet! Time to swim!",
    accentFrom: "from-ocean-500",
    accentTo: "to-ocean-600",
    clickAnimation: {
      animate: { rotate: [0, -15, 15, -10, 10, -5, 0], scale: [1, 1.2, 1.2, 1.1, 1.1, 1, 1] },
      transition: { duration: 0.6, ease: "easeInOut" },
    },
    svg: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 md:h-12 md:w-12">
        <circle cx="30" cy="24" r="10" />
        <path d="M20 24H10L8 20" />
        <path d="M8 20L6 22" />
        <path d="M20 20V28" />
        <circle cx="30" cy="24" r="3" fill="currentColor" opacity={0.2} />
        <path d="M38 18C40 16 42 17 42 17" />
      </svg>
    ),
  },
  {
    id: "goggles",
    name: "Goggles",
    tooltip: "Crystal clear vision!",
    accentFrom: "from-ocean-400",
    accentTo: "to-sky-light",
    clickAnimation: {
      animate: { scale: [1, 1.3, 0.9, 1.15, 1] },
      transition: { duration: 0.5, ease: "easeOut" },
    },
    svg: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 md:h-12 md:w-12">
        <ellipse cx="16" cy="24" rx="8" ry="6" />
        <ellipse cx="32" cy="24" rx="8" ry="6" />
        <path d="M24 24C24 22 24 22 24 24" />
        <path d="M8 22C4 20 4 18 6 16" />
        <path d="M40 22C44 20 44 18 42 16" />
        <ellipse cx="16" cy="24" rx="4" ry="2.5" fill="currentColor" opacity={0.15} />
        <ellipse cx="32" cy="24" rx="4" ry="2.5" fill="currentColor" opacity={0.15} />
      </svg>
    ),
  },
  {
    id: "pool-float",
    name: "Pool Float",
    tooltip: "Splash! Just chillin'",
    accentFrom: "from-ocean-500",
    accentTo: "to-ocean-700",
    clickAnimation: {
      animate: { y: [0, -30, 0, -15, 0, -5, 0] },
      transition: { duration: 0.8, ease: "easeOut" },
    },
    svg: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 md:h-12 md:w-12">
        <circle cx="24" cy="24" r="14" />
        <circle cx="24" cy="24" r="6" />
        <path d="M24 10V18" />
        <path d="M24 30V38" />
        <path d="M10 24H18" />
        <path d="M30 24H38" />
        <path d="M14.1 14.1L19.8 19.8" opacity={0.4} />
        <path d="M28.2 28.2L33.9 33.9" opacity={0.4} />
      </svg>
    ),
  },
  {
    id: "swim-fins",
    name: "Swim Fins",
    tooltip: "Kick it up a notch!",
    accentFrom: "from-ocean-300",
    accentTo: "to-ocean-500",
    clickAnimation: {
      animate: { x: [0, -12, 12, -8, 8, -4, 0] },
      transition: { duration: 0.6, ease: "easeInOut" },
    },
    svg: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 md:h-12 md:w-12">
        <path d="M12 30C12 26 14 22 18 22H22C22 22 22 28 22 30C22 32 20 34 18 34C14 34 12 34 12 30Z" />
        <path d="M22 22L36 12C38 11 40 12 40 14L40 20C40 22 38 24 36 24L22 30" />
        <path d="M28 16L28 24" opacity={0.3} />
        <path d="M33 14L33 22" opacity={0.3} />
        <path d="M15 26C16 25 17 25 18 26" opacity={0.4} />
      </svg>
    ),
  },
  {
    id: "life-ring",
    name: "Life Ring",
    tooltip: "Safety first, fun always!",
    accentFrom: "from-ocean-500",
    accentTo: "to-ocean-600",
    clickAnimation: {
      animate: { rotate: [0, 360] },
      transition: { duration: 0.7, ease: "easeInOut" },
    },
    svg: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 md:h-12 md:w-12">
        <circle cx="24" cy="24" r="14" />
        <circle cx="24" cy="24" r="7" />
        <path d="M14.1 14.1L19 19" strokeWidth={3} />
        <path d="M29 29L33.9 33.9" strokeWidth={3} />
        <path d="M33.9 14.1L29 19" strokeWidth={3} />
        <path d="M19 29L14.1 33.9" strokeWidth={3} />
      </svg>
    ),
  },
  {
    id: "water-drop",
    name: "Water Drop",
    tooltip: "Make a splash!",
    accentFrom: "from-ocean-400",
    accentTo: "to-ocean-600",
    clickAnimation: {
      animate: { scale: [1, 0.7, 1.4, 1] },
      transition: { duration: 0.6, ease: "easeOut" },
    },
    svg: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 md:h-12 md:w-12">
        <path d="M24 6C24 6 12 20 12 30C12 36.627 17.373 42 24 42C30.627 42 36 36.627 36 30C36 20 24 6 24 6Z" />
        <path d="M18 30C18 26 20 22 24 18" opacity={0.3} />
        <circle cx="20" cy="28" r="2" fill="currentColor" opacity={0.15} />
      </svg>
    ),
  },
];

function IconCard({ icon, index }: { icon: FunIcon; index: number }) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showRipple, setShowRipple] = useState(false);
  const controls = useAnimation();

  const handleClick = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setShowTooltip(true);

    if (icon.id === "water-drop") {
      setShowRipple(true);
      setTimeout(() => setShowRipple(false), 600);
    }

    controls.start({
      ...icon.clickAnimation.animate,
      transition: icon.clickAnimation.transition,
    }).then(() => {
      setIsAnimating(false);
    });

    setTimeout(() => setShowTooltip(false), 2000);
  }, [isAnimating, controls, icon]);

  return (
    <div className="relative flex flex-col items-center">
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.8 }}
            transition={{ duration: 0.25 }}
            className="absolute -top-14 left-1/2 -translate-x-1/2 z-10 whitespace-nowrap"
            role="tooltip"
          >
            <div className="bg-navy text-white text-sm font-medium px-4 py-2 rounded-full shadow-lg">
              {icon.tooltip}
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-2 h-2 bg-navy rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Ripple ring (water drop only) */}
      <AnimatePresence>
        {showRipple && (
          <motion.div
            initial={{ scale: 0, opacity: 0.5 }}
            animate={{ scale: 2.5, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 md:w-32 md:h-32 rounded-full border-2 border-ocean-300 pointer-events-none z-0"
          />
        )}
      </AnimatePresence>

      {/* Icon button */}
      <motion.button
        aria-label={icon.name}
        onClick={handleClick}
        animate={{ y: [0, -4, 0] }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut",
          delay: index * 0.4,
        }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="relative z-[1] flex flex-col items-center justify-center w-28 h-28 md:w-32 md:h-32 rounded-2xl bg-white shadow-md hover:shadow-xl transition-shadow cursor-pointer focus-visible:ring-2 focus-visible:ring-ocean-500 focus-visible:ring-offset-2 outline-none"
      >
        <motion.div animate={controls} className="text-ocean-500">
          {icon.svg}
        </motion.div>
        <span className="mt-2 text-xs font-medium text-slate-500">
          {icon.name}
        </span>
      </motion.button>
    </div>
  );
}

export default function FunIcons() {
  return (
    <section className="py-20 md:py-28 bg-aura-gray">
      <Container>
        <SectionHeading
          label="Dive Into Fun"
          title="Pool Day Essentials"
          subtitle="Click around and explore — every icon has a surprise!"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 justify-items-center"
        >
          {funIcons.map((icon, i) => (
            <motion.div key={icon.id} variants={staggerItem}>
              <IconCard icon={icon} index={i} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
