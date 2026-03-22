"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function ClientsCTA() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-aura-gray">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block mb-4 text-sm font-bold uppercase tracking-[0.2em] text-ocean-500"
          >
            Join Our Roster
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold text-navy sm:text-4xl lg:text-5xl"
          >
            Your Facility Could Be Next
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 leading-relaxed"
          >
            Whether you manage a private club, HOA community pool, or
            residential facility — we bring the same level of dedication and
            professionalism that our premier clients trust us with every day.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button href="/contact" size="lg">
              Get a Free Quote
            </Button>
            <Button href="/services" variant="secondary" size="lg">
              View Our Services
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
