"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  slideInLeft,
  slideInRight,
} from "@/lib/animations";

const clients = [
  {
    name: "Dallas Country Club",
    location: "Dallas, TX",
    type: "Private Country Club",
    established: "Est. 1896",
    description:
      "One of the most prestigious private country clubs in Texas, the Dallas Country Club has trusted Aura Aquatics to deliver flawless aquatic operations for their members. Located on the iconic Mockingbird Lane, the club demands nothing less than excellence — and that's exactly what we provide.",
    services: [
      "Full-service pool management",
      "Certified lifeguard staffing",
      "Water chemistry & quality management",
      "Seasonal pool opening & closing",
      "Member event aquatic support",
    ],
    highlights: [
      { label: "Club Established", value: "1896" },
      { label: "Service Type", value: "Year-Round" },
      { label: "Facility Class", value: "Elite Private" },
    ],
    accent: "ocean-500",
    icon: (
      <svg
        className="h-12 w-12"
        fill="none"
        viewBox="0 0 48 48"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M24 4L6 14V34L24 44L42 34V14L24 4Z" />
        <path d="M24 4V44" opacity={0.3} />
        <path d="M6 14L42 14" opacity={0.3} />
        <path d="M6 34L24 24L42 34" opacity={0.3} />
        <circle cx="24" cy="22" r="5" />
        <path d="M19 38L24 34L29 38" />
      </svg>
    ),
  },
  {
    name: "Houston Racquet Club",
    location: "Houston, TX",
    type: "Premier Athletic & Social Club",
    established: "Memorial Drive",
    description:
      "The Houston Racquet Club on Memorial Drive is a premier athletic and social destination featuring world-class aquatic facilities. With a resort-style pool, a 25-yard heated lap pool, diving well, and their competitive Manta Rays Swim Team, this partnership showcases our ability to manage diverse, high-volume aquatic operations.",
    services: [
      "Dual-pool facility management",
      "Competitive swim team support",
      "Lifeguard staffing & training",
      "Lap pool & diving well oversight",
      "Resort pool operations",
    ],
    highlights: [
      { label: "Pools Managed", value: "2" },
      { label: "Lap Pool", value: "25-Yard" },
      { label: "Swim Team", value: "Manta Rays" },
    ],
    accent: "ocean-400",
    icon: (
      <svg
        className="h-12 w-12"
        fill="none"
        viewBox="0 0 48 48"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="8" y="8" width="32" height="32" rx="4" />
        <path d="M8 20H40" />
        <path d="M8 32H40" opacity={0.3} />
        <path d="M16 8V40" opacity={0.3} />
        <path d="M32 8V40" opacity={0.3} />
        <circle cx="24" cy="26" r="6" />
        <path d="M21 26C22 24 26 24 27 26" />
        <path d="M20 30C22 28 26 28 28 30" />
      </svg>
    ),
  },
];

export default function ClientShowcase() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="space-y-32">
          {clients.map((client, index) => {
            const isEven = index % 2 === 0;

            return (
              <div key={client.name}>
                <div
                  className={`grid items-start gap-12 lg:grid-cols-2 lg:gap-20`}
                >
                  {/* Info Card Side */}
                  <motion.div
                    variants={isEven ? slideInLeft : slideInRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className={isEven ? "" : "lg:order-2"}
                  >
                    {/* Visual card instead of image */}
                    <div className="relative rounded-3xl bg-gradient-to-br from-navy to-navy-light p-8 md:p-10 overflow-hidden">
                      {/* Decorative circles */}
                      <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-ocean-500/10 blur-2xl translate-x-10 -translate-y-10" />
                      <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-ocean-400/10 blur-2xl -translate-x-8 translate-y-8" />

                      <div className="relative z-10">
                        {/* Icon */}
                        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-ocean-500/20 text-ocean-400">
                          {client.icon}
                        </div>

                        {/* Club name */}
                        <h3 className="text-2xl font-bold text-white md:text-3xl">
                          {client.name}
                        </h3>
                        <div className="mt-2 flex flex-wrap items-center gap-3">
                          <span className="inline-flex items-center gap-1.5 text-sm text-ocean-300">
                            <svg
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                              />
                            </svg>
                            {client.location}
                          </span>
                          <span className="h-1 w-1 rounded-full bg-slate-500" />
                          <span className="text-sm text-slate-400">
                            {client.type}
                          </span>
                        </div>

                        {/* Highlights */}
                        <div className="mt-8 grid grid-cols-3 gap-4">
                          {client.highlights.map((h) => (
                            <div key={h.label}>
                              <div className="text-2xl font-bold text-ocean-400">
                                {h.value}
                              </div>
                              <div className="mt-1 text-xs text-slate-400 uppercase tracking-wider">
                                {h.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Content Side */}
                  <motion.div
                    variants={isEven ? slideInRight : slideInLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className={isEven ? "" : "lg:order-1"}
                  >
                    <span className="mb-2 inline-block text-sm font-bold uppercase tracking-[0.2em] text-ocean-500">
                      Featured Client
                    </span>
                    <h2 className="text-3xl font-bold text-navy sm:text-4xl">
                      {client.name}
                    </h2>
                    <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                      {client.description}
                    </p>

                    {/* Services provided */}
                    <div className="mt-8">
                      <h4 className="text-sm font-bold uppercase tracking-wider text-navy mb-4">
                        Services We Provide
                      </h4>
                      <ul className="space-y-3">
                        {client.services.map((service) => (
                          <li
                            key={service}
                            className="flex items-start gap-3"
                          >
                            <svg
                              className="mt-0.5 h-5 w-5 shrink-0 text-ocean-500"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={2}
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            <span className="text-slate-700">{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
