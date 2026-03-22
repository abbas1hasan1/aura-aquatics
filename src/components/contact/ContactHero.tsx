"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function ContactHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <Image
        src="/images/contact-hero.jpg"
        alt="Swimming pool"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-navy/75" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block mb-4 text-sm font-bold uppercase tracking-[0.2em] text-ocean-400"
          >
            Contact Us
          </motion.span>
          <motion.h1
            variants={fadeInUp}
            className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl"
          >
            Let&apos;s <span className="text-ocean-400">Talk</span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="mt-6 max-w-xl text-lg text-slate-300 leading-relaxed"
          >
            Ready to discuss pool management services for your community?
            Have questions about careers? We&apos;d love to hear from you.
          </motion.p>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-[60px] md:h-[80px]">
          <path d="M0 80L60 72C120 64 240 48 360 44C480 40 600 48 720 56C840 64 960 72 1080 68C1200 64 1320 48 1380 40L1440 32V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V80Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
