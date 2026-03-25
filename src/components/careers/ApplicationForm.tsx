"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { fadeInUp } from "@/lib/animations";
import { COMPANY } from "@/lib/constants";

export default function ApplicationForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="apply" className="py-20 md:py-28 scroll-mt-24">
      <Container>
        <SectionHeading
          label="Interested?"
          title="Let Us Know"
          subtitle={`Tell us a bit about yourself and we'll reach out. Not yet certified? No problem — we'll help you get there.`}
        />

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-2xl"
        >
          {submitted ? (
            <div className="rounded-2xl bg-green-50 border border-green-200 p-12 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-navy">Thank You!</h3>
              <p className="mt-2 text-slate-600">
                Your submission has been received. We&apos;ll be reaching out shortly!
              </p>
              <p className="mt-4 text-sm text-slate-500">
                Questions? Call us at{" "}
                <a href={COMPANY.phoneHref} className="text-ocean-500 font-medium">
                  {COMPANY.phone}
                </a>
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm md:p-10"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="mb-2 block text-sm font-medium text-navy">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    required
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-navy transition-colors focus:border-ocean-500 focus:outline-none focus:ring-2 focus:ring-ocean-500/20"
                    placeholder="First name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="mb-2 block text-sm font-medium text-navy">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    required
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-navy transition-colors focus:border-ocean-500 focus:outline-none focus:ring-2 focus:ring-ocean-500/20"
                    placeholder="Last name"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-navy">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-navy transition-colors focus:border-ocean-500 focus:outline-none focus:ring-2 focus:ring-ocean-500/20"
                  placeholder="your@email.com"
                />
              </div>

              <div className="mt-6">
                <label htmlFor="phone" className="mb-2 block text-sm font-medium text-navy">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-navy transition-colors focus:border-ocean-500 focus:outline-none focus:ring-2 focus:ring-ocean-500/20"
                  placeholder="(281) 555-0123"
                />
              </div>

              <div className="mt-6">
                <label htmlFor="position" className="mb-2 block text-sm font-medium text-navy">
                  Position Interested In *
                </label>
                <select
                  id="position"
                  required
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-navy transition-colors focus:border-ocean-500 focus:outline-none focus:ring-2 focus:ring-ocean-500/20"
                >
                  <option value="">Select a position</option>
                  <option value="lifeguard">Lifeguard</option>
                  <option value="assistant-manager">Lifeguard Assistant Manager</option>
                  <option value="manager">Lifeguard Manager</option>
                  <option value="supervisor">Supervisor</option>
                  <option value="pool-cleaning">Pool Cleaning Technician</option>
                </select>
              </div>

              <div className="mt-6">
                <label htmlFor="certification" className="mb-2 block text-sm font-medium text-navy">
                  Certification Status *
                </label>
                <select
                  id="certification"
                  required
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-navy transition-colors focus:border-ocean-500 focus:outline-none focus:ring-2 focus:ring-ocean-500/20"
                >
                  <option value="">Select status</option>
                  <option value="certified">Currently Certified</option>
                  <option value="expired">Expired Certification</option>
                  <option value="need-help">Need Assistance in Becoming Certified</option>
                </select>
              </div>

              <div className="mt-6">
                <label htmlFor="referral" className="mb-2 block text-sm font-medium text-navy">
                  How did you hear about Aura Aquatics?
                </label>
                <input
                  type="text"
                  id="referral"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-navy transition-colors focus:border-ocean-500 focus:outline-none focus:ring-2 focus:ring-ocean-500/20"
                  placeholder="e.g., Social media, referral, job board..."
                />
              </div>

              <div className="mt-6">
                <label htmlFor="availability" className="mb-2 block text-sm font-medium text-navy">
                  What&apos;s a great time to talk?
                </label>
                <input
                  type="text"
                  id="availability"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-navy transition-colors focus:border-ocean-500 focus:outline-none focus:ring-2 focus:ring-ocean-500/20"
                  placeholder="e.g., Weekdays after 3pm, anytime 12–4..."
                />
              </div>

              <div className="mt-8">
                <Button type="submit" size="lg" className="w-full">
                  Submit Inquiry
                </Button>
              </div>

              <p className="mt-4 text-center text-xs text-slate-500">
                By submitting, you agree to be contacted by Aura Aquatics regarding employment opportunities.
              </p>
            </form>
          )}
        </motion.div>
      </Container>
    </section>
  );
}
