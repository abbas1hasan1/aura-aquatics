"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { fadeInUp, slideInLeft, slideInRight } from "@/lib/animations";

export default function Story() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <span className="mb-4 inline-block text-sm font-bold uppercase tracking-[0.2em] text-ocean-500">
              Our Story
            </span>
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">
              Built on a Passion for Aquatic Excellence
            </h2>
            <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
              <p>
                Aura Aquatics was founded with a simple mission: to provide
                Houston communities with the highest quality pool management
                and lifeguard staffing services available. What started as a
                commitment to safety and professionalism has grown into a
                trusted partner for HOAs, private clubs, and residential
                communities across the Greater Houston area.
              </p>
              <p>
                We believe that every community deserves access to clean, safe,
                and well-managed aquatic facilities. Our team of certified
                professionals brings expertise, reliability, and a genuine
                passion for what they do to every pool we manage.
              </p>
              <p>
                From recruiting and training top-tier lifeguards to delivering
                comprehensive pool maintenance solutions, we handle every
                detail so our clients can focus on enjoying their pools. That&apos;s
                our promise — all you have to do is swim.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-3xl relative mb-6">
              <Image
                src="/images/pool-community.jpg"
                alt="Community pool managed by Aura Aquatics"
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              <div className="rounded-2xl bg-gradient-to-br from-ocean-400 to-ocean-600 p-4 text-white text-center">
                <div className="text-2xl font-bold">50+</div>
                <div className="text-xs text-ocean-100 mt-1">Pools</div>
              </div>
              <div className="rounded-2xl bg-aura-gray p-4 text-center">
                <div className="text-2xl font-bold text-navy">200+</div>
                <div className="text-xs text-slate-500 mt-1">Lifeguards</div>
              </div>
              <div className="rounded-2xl bg-aura-gray p-4 text-center">
                <div className="text-2xl font-bold text-navy">30+</div>
                <div className="text-xs text-slate-500 mt-1">Communities</div>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-navy to-navy-light p-4 text-white text-center">
                <div className="text-2xl font-bold">10+</div>
                <div className="text-xs text-slate-400 mt-1">Years</div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
