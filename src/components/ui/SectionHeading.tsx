"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={`mb-12 md:mb-16 ${align === "center" ? "text-center" : "text-center lg:text-left"}`}
    >
      {label && (
        <span className="mb-3 inline-block text-sm font-bold uppercase tracking-[0.2em] text-ocean-500">
          {label}
        </span>
      )}
      <h2
        className={`text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mx-auto mt-4 max-w-2xl text-lg ${
            light ? "text-white/70" : "text-slate-600"
          } ${align === "left" ? "lg:mx-0" : ""}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
