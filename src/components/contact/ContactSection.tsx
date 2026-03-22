"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { fadeInUp, slideInLeft, slideInRight } from "@/lib/animations";
import { COMPANY } from "@/lib/constants";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-2"
          >
            <h2 className="text-3xl font-bold text-navy">Get in Touch</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Whether you&apos;re looking for pool management services or have
              questions about our team, we&apos;re here to help.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-ocean-50 text-ocean-500">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-navy">Phone</h3>
                  <a
                    href={COMPANY.phoneHref}
                    className="mt-1 text-ocean-500 font-medium hover:text-ocean-600 transition-colors"
                  >
                    {COMPANY.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-ocean-50 text-ocean-500">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-navy">Email</h3>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="mt-1 text-ocean-500 font-medium hover:text-ocean-600 transition-colors"
                  >
                    {COMPANY.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-ocean-50 text-ocean-500">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-navy">Location</h3>
                  <p className="mt-1 text-slate-600">{COMPANY.location}</p>
                  <p className="text-sm text-slate-500">
                    Serving the Greater Houston Area
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-ocean-50 text-ocean-500">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-navy">Hours</h3>
                  <p className="mt-1 text-slate-600">Mon - Fri: 8am - 6pm</p>
                  <p className="text-slate-600">Sat - Sun: By appointment</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="rounded-2xl bg-green-50 border border-green-200 p-12 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-navy">Message Sent!</h3>
                <p className="mt-2 text-slate-600">
                  Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm md:p-10"
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contactName" className="mb-2 block text-sm font-medium text-navy">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="contactName"
                      required
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-navy transition-colors focus:border-ocean-500 focus:outline-none focus:ring-2 focus:ring-ocean-500/20"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="contactPhone" className="mb-2 block text-sm font-medium text-navy">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="contactPhone"
                      className="w-full rounded-xl border border-slate-200 px-4 py-3 text-navy transition-colors focus:border-ocean-500 focus:outline-none focus:ring-2 focus:ring-ocean-500/20"
                      placeholder="(281) 555-0123"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label htmlFor="contactEmail" className="mb-2 block text-sm font-medium text-navy">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="contactEmail"
                    required
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-navy transition-colors focus:border-ocean-500 focus:outline-none focus:ring-2 focus:ring-ocean-500/20"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="mt-6">
                  <label htmlFor="subject" className="mb-2 block text-sm font-medium text-navy">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    required
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-navy transition-colors focus:border-ocean-500 focus:outline-none focus:ring-2 focus:ring-ocean-500/20"
                  >
                    <option value="">Select a subject</option>
                    <option value="pool-management">Pool Management Inquiry</option>
                    <option value="lifeguard-staffing">Lifeguard Staffing Inquiry</option>
                    <option value="maintenance">Pool Maintenance Services</option>
                    <option value="careers">Career Opportunities</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <div className="mt-6">
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-navy">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-navy transition-colors focus:border-ocean-500 focus:outline-none focus:ring-2 focus:ring-ocean-500/20 resize-none"
                    placeholder="Tell us about your pool management needs, or ask us anything..."
                  />
                </div>

                <div className="mt-8">
                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
