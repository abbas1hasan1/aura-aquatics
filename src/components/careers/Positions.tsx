"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { positions } from "@/lib/data";

export default function Positions() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="positions" className="py-20 md:py-28 bg-aura-gray scroll-mt-24">
      <Container>
        <SectionHeading
          label="Open Positions"
          title="Find Your Role"
          subtitle="We're looking for passionate individuals to join our growing team. Explore open positions below."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mx-auto max-w-3xl space-y-4"
        >
          {positions.map((position, i) => (
            <motion.div
              key={position.title}
              variants={staggerItem}
              className="overflow-hidden rounded-2xl bg-navy shadow-sm transition-shadow hover:shadow-md"
            >
              <button
                onClick={() => setExpanded(expanded === i ? null : i)}
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {position.title}
                  </h3>
                  <span className="mt-1 inline-block rounded-full bg-ocean-500/20 px-3 py-0.5 text-xs font-medium text-ocean-300">
                    {position.type}
                  </span>
                </div>
                <div
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-transform ${
                    expanded === i ? "rotate-180 bg-ocean-500 border-ocean-500 text-white" : "border-white/20 text-white/50"
                  }`}
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </div>
              </button>

              <AnimatePresence>
                {expanded === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-white/10 px-6 pb-6 pt-4">
                      <p className="text-slate-300 leading-relaxed">
                        {position.description}
                      </p>
                      <h4 className="mt-4 mb-3 font-semibold text-white">
                        Requirements:
                      </h4>
                      <ul className="space-y-2">
                        {position.requirements.map((req) => (
                          <li
                            key={req}
                            className="flex items-start gap-2 text-sm text-slate-300"
                          >
                            <svg
                              className="mt-0.5 h-4 w-4 shrink-0 text-ocean-500"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 12.75l6 6 9-13.5"
                              />
                            </svg>
                            {req}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6">
                        <Button href="#apply" size="sm">
                          Apply for This Position
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
