"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero-bg.jpg"
        alt="Beautiful swimming pool"
        fill
        priority
        className="object-cover"
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-navy/70" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl text-center lg:text-left"
        >
          <motion.div variants={fadeInUp} className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur-md border border-white/20">
              <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              Now Hiring Lifeguards in Houston
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Houston&apos;s Premier{" "}
            <span className="text-ocean-400">Pool Management</span>{" "}
            &amp; Lifeguard Staffing
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="mt-6 mx-auto lg:mx-0 max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl"
          >
            Comprehensive aquatic services for HOAs, private clubs, and
            residential communities. All you have to do is swim.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-row items-center justify-center gap-4 lg:justify-start"
          >
            <Button href="/contact" size="lg">
              Get a Free Quote
            </Button>
            <Button href="/careers" variant="outline" size="lg">
              Apply Now
            </Button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            variants={fadeInUp}
            className="mt-16 flex flex-wrap items-center justify-center gap-8 border-t border-white/10 pt-8 lg:justify-start"
          >
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-ocean-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
              <span className="text-sm text-white/80">Certified & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-ocean-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
              </svg>
              <span className="text-sm text-white/80">200+ Lifeguards Placed</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-5 w-5 text-ocean-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <span className="text-sm text-white/80">Houston, TX</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-[60px] md:h-[80px]">
          <path
            d="M0 80L60 72C120 64 240 48 360 44C480 40 600 48 720 56C840 64 960 72 1080 68C1200 64 1320 48 1380 40L1440 32V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V80Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
