"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function CTABanner() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <Image
        src="/images/pool-underwater.jpg"
        alt="Underwater pool view"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-navy/80" />

      <Container className="relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
          >
            Ready to{" "}
            <span className="text-ocean-400">Dive In</span>?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-4 max-w-xl text-lg text-slate-400"
          >
            Whether you need pool management services or want to join our team,
            we&apos;d love to hear from you.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button href="/contact" size="lg">
              Get a Free Quote
            </Button>
            <Button href="/careers" variant="outline" size="lg">
              Join Our Team
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
