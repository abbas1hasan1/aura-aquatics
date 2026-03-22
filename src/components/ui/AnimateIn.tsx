"use client";

import { motion, type Variants } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface AnimateInProps {
  children: React.ReactNode;
  variants?: Variants;
  delay?: number;
  className?: string;
}

export default function AnimateIn({
  children,
  variants = fadeInUp,
  delay = 0,
  className = "",
}: AnimateInProps) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
