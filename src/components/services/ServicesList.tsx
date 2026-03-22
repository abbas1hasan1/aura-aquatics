"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { fadeInUp, slideInLeft, slideInRight } from "@/lib/animations";
import { services } from "@/lib/data";

const serviceImages: Record<string, string> = {
  "pool-management": "/images/service-pool-management.jpg",
  "lifeguard-staffing": "/images/service-lifeguard.jpg",
  "pool-maintenance": "/images/service-maintenance.jpg",
  "swim-lessons": "/images/service-swim-lessons.jpg",
};

export default function ServicesList() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="space-y-24">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            const imageSrc = serviceImages[service.id];

            return (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-24"
              >
                <div
                  className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${
                    isEven ? "" : "lg:direction-rtl"
                  }`}
                >
                  {/* Image */}
                  <motion.div
                    variants={isEven ? slideInLeft : slideInRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className={isEven ? "" : "lg:order-2"}
                  >
                    <div className="aspect-[4/3] rounded-3xl overflow-hidden relative">
                      <Image
                        src={imageSrc}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    variants={isEven ? slideInRight : slideInLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className={isEven ? "" : "lg:order-1"}
                  >
                    <h2 className="text-3xl font-bold text-navy sm:text-4xl">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                      {service.description}
                    </p>

                    <ul className="mt-8 space-y-3">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
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
                          <span className="text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8">
                      <Button href="/contact">Get a Quote</Button>
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
