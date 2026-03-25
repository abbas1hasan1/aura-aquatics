"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { staggerContainer, staggerItem } from "@/lib/animations";

const stats = [
  { value: "30+", label: "Communities Served" },
  { value: "50+", label: "Pools Managed & Serviced" },
  { value: "200+", label: "Lifeguards Placed" },
];

export default function TrustStats() {
  return (
    <section className="bg-navy py-14 md:py-16">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-3 gap-6 md:gap-12"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={staggerItem}
              className="text-center"
            >
              <p className="text-3xl font-bold text-ocean-400 sm:text-4xl md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium text-slate-300 sm:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
