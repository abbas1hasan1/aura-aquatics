"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { fadeInUp } from "@/lib/animations";
import { COMPANY } from "@/lib/constants";

export default function ReservationForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="reservation" className="py-20 md:py-28 bg-aura-gray scroll-mt-24">
      <Container>
        <SectionHeading
          label="Book an Event"
          title="Reserve Your Pool Event"
          subtitle="Planning a private party or community event? Tell us the details and we'll handle the rest."
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
              <h3 className="text-2xl font-bold text-navy">Request Received!</h3>
              <p className="mt-2 text-slate-600">
                We&apos;ll review your event details and get back to you shortly.
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
              <div className="mt-0">
                <label htmlFor="res-community" className="mb-2 block text-sm font-medium text-navy">
                  Community / Neighborhood Name *
                </label>
                <input
                  type="text"
                  id="res-community"
                  required
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-navy transition-colors focus:border-ocean-500 focus:outline-none focus:ring-2 focus:ring-ocean-500/20"
                  placeholder="e.g., Riverstone HOA"
                />
              </div>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="res-firstName" className="mb-2 block text-sm font-medium text-navy">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="res-firstName"
                    required
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-navy transition-colors focus:border-ocean-500 focus:outline-none focus:ring-2 focus:ring-ocean-500/20"
                    placeholder="First name"
                  />
                </div>
                <div>
                  <label htmlFor="res-lastName" className="mb-2 block text-sm font-medium text-navy">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="res-lastName"
                    required
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-navy transition-colors focus:border-ocean-500 focus:outline-none focus:ring-2 focus:ring-ocean-500/20"
                    placeholder="Last name"
                  />
                </div>
              </div>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="res-email" className="mb-2 block text-sm font-medium text-navy">
                    Email
                  </label>
                  <input
                    type="email"
                    id="res-email"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-navy transition-colors focus:border-ocean-500 focus:outline-none focus:ring-2 focus:ring-ocean-500/20"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="res-phone" className="mb-2 block text-sm font-medium text-navy">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="res-phone"
                    required
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-navy transition-colors focus:border-ocean-500 focus:outline-none focus:ring-2 focus:ring-ocean-500/20"
                    placeholder="(281) 555-0123"
                  />
                </div>
              </div>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="res-eventType" className="mb-2 block text-sm font-medium text-navy">
                    Event Type *
                  </label>
                  <select
                    id="res-eventType"
                    required
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-navy transition-colors focus:border-ocean-500 focus:outline-none focus:ring-2 focus:ring-ocean-500/20"
                  >
                    <option value="">Select event type</option>
                    <option value="private-party">Private Party</option>
                    <option value="community-reservation">Community Reservation</option>
                    <option value="birthday-party">Birthday Party</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="res-date" className="mb-2 block text-sm font-medium text-navy">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="res-date"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-navy transition-colors focus:border-ocean-500 focus:outline-none focus:ring-2 focus:ring-ocean-500/20"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="res-details" className="mb-2 block text-sm font-medium text-navy">
                  Additional Details
                </label>
                <textarea
                  id="res-details"
                  rows={4}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-navy transition-colors focus:border-ocean-500 focus:outline-none focus:ring-2 focus:ring-ocean-500/20 resize-none"
                  placeholder="Number of guests, time preferences, special requests..."
                />
              </div>

              <div className="mt-8">
                <Button type="submit" size="lg" className="w-full">
                  Submit Reservation Request
                </Button>
              </div>

              <p className="mt-4 text-center text-xs text-slate-500">
                By submitting, you agree to be contacted by Aura Aquatics regarding your event.
              </p>
            </form>
          )}
        </motion.div>
      </Container>
    </section>
  );
}
