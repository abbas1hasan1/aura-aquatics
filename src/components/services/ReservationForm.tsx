"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { fadeInUp } from "@/lib/animations";
import { COMPANY } from "@/lib/constants";

type FormData = {
  community: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  eventName: string;
  date: string;
  startTime: string;
  endTime: string;
  partySize: string;
  kids: string;
  adults: string;
};

function formatTime12Hour(time: string): string {
  if (!time) return "";
  const [hStr, m] = time.split(":");
  const h = parseInt(hStr, 10);
  if (isNaN(h)) return time;
  const period = h >= 12 ? "PM" : "AM";
  const hour12 = h % 12 === 0 ? 12 : h % 12;
  return `${hour12}:${m} ${period}`;
}

const EMPTY_FORM: FormData = {
  community: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  eventName: "",
  date: "",
  startTime: "",
  endTime: "",
  partySize: "",
  kids: "",
  adults: "",
};

export default function ReservationForm() {
  const [formData, setFormData] = useState<FormData>(EMPTY_FORM);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const emailRequest = fetch("https://formsubmit.co/ajax/Info@auraaquatics.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        _subject: `New reservation request — ${formData.eventName || "Event"} (${formData.community || "Community"})`,
        _replyto: formData.email,
        _template: "table",
        "Community": formData.community,
        "First Name": formData.firstName,
        "Last Name": formData.lastName,
        "Email": formData.email,
        "Phone": formData.phone,
        "Event Name": formData.eventName,
        "Date": formData.date,
        "Start Time": formatTime12Hour(formData.startTime),
        "End Time": formatTime12Hour(formData.endTime),
        "Party Size": formData.partySize,
        "Kids": formData.kids,
        "Adults": formData.adults,
      }),
    });

    const sheetRequest = fetch(
      "https://script.google.com/a/macros/auraaquatics.com/s/AKfycbxUGxhjWVaRDC5Wuon0FQ2U2MSRgF4b8WgiDx1H9Vw02CXZwkqGK1dEl_ju8GGwsfs/exec",
      {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          ...formData,
          startTime: formatTime12Hour(formData.startTime),
          endTime: formatTime12Hour(formData.endTime),
        }),
      },
    );

    try {
      const [emailRes, sheetRes] = await Promise.allSettled([emailRequest, sheetRequest]);
      const emailOk = emailRes.status === "fulfilled" && emailRes.value.ok;
      const sheetOk = sheetRes.status === "fulfilled" && sheetRes.value.ok;
      if (!emailOk && !sheetOk) throw new Error("Both endpoints failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or call us.");
    } finally {
      setSubmitting(false);
    }
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
              <div>
                <label htmlFor="res-community" className="mb-2 block text-sm font-medium text-navy">
                  Community Name *
                </label>
                <input
                  type="text"
                  id="res-community"
                  name="community"
                  value={formData.community}
                  onChange={handleChange}
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
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
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
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-navy transition-colors focus:border-ocean-500 focus:outline-none focus:ring-2 focus:ring-ocean-500/20"
                    placeholder="Last name"
                  />
                </div>
              </div>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="res-email" className="mb-2 block text-sm font-medium text-navy">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="res-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
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
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-navy transition-colors focus:border-ocean-500 focus:outline-none focus:ring-2 focus:ring-ocean-500/20"
                    placeholder="(281) 555-0123"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="res-eventName" className="mb-2 block text-sm font-medium text-navy">
                  Event Name *
                </label>
                <input
                  type="text"
                  id="res-eventName"
                  name="eventName"
                  value={formData.eventName}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-navy transition-colors focus:border-ocean-500 focus:outline-none focus:ring-2 focus:ring-ocean-500/20"
                  placeholder="e.g., Summer Birthday Party"
                />
              </div>

              <div className="mt-6 grid gap-6 sm:grid-cols-3">
                <div>
                  <label htmlFor="res-date" className="mb-2 block text-sm font-medium text-navy">
                    Requested Date *
                  </label>
                  <input
                    type="date"
                    id="res-date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-navy transition-colors focus:border-ocean-500 focus:outline-none focus:ring-2 focus:ring-ocean-500/20"
                  />
                </div>
                <div>
                  <label htmlFor="res-startTime" className="mb-2 block text-sm font-medium text-navy">
                    Start Time *
                  </label>
                  <input
                    type="time"
                    id="res-startTime"
                    name="startTime"
                    value={formData.startTime}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-navy transition-colors focus:border-ocean-500 focus:outline-none focus:ring-2 focus:ring-ocean-500/20"
                  />
                </div>
                <div>
                  <label htmlFor="res-endTime" className="mb-2 block text-sm font-medium text-navy">
                    End Time *
                  </label>
                  <input
                    type="time"
                    id="res-endTime"
                    name="endTime"
                    value={formData.endTime}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-navy transition-colors focus:border-ocean-500 focus:outline-none focus:ring-2 focus:ring-ocean-500/20"
                  />
                </div>
              </div>

              <div className="mt-6 grid gap-6 sm:grid-cols-3">
                <div>
                  <label htmlFor="res-partySize" className="mb-2 block text-sm font-medium text-navy">
                    Party Size *
                  </label>
                  <input
                    type="number"
                    id="res-partySize"
                    name="partySize"
                    value={formData.partySize}
                    onChange={handleChange}
                    required
                    min="1"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-navy transition-colors focus:border-ocean-500 focus:outline-none focus:ring-2 focus:ring-ocean-500/20"
                    placeholder="Total guests"
                  />
                </div>
                <div>
                  <label htmlFor="res-kids" className="mb-2 block text-sm font-medium text-navy">
                    # of Kids
                  </label>
                  <input
                    type="number"
                    id="res-kids"
                    name="kids"
                    value={formData.kids}
                    onChange={handleChange}
                    min="0"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-navy transition-colors focus:border-ocean-500 focus:outline-none focus:ring-2 focus:ring-ocean-500/20"
                    placeholder="0"
                  />
                </div>
                <div>
                  <label htmlFor="res-adults" className="mb-2 block text-sm font-medium text-navy">
                    # of Adults
                  </label>
                  <input
                    type="number"
                    id="res-adults"
                    name="adults"
                    value={formData.adults}
                    onChange={handleChange}
                    min="0"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-navy transition-colors focus:border-ocean-500 focus:outline-none focus:ring-2 focus:ring-ocean-500/20"
                    placeholder="0"
                  />
                </div>
              </div>

              {error && (
                <div className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {error}
                </div>
              )}

              <div className="mt-8">
                <Button type="submit" size="lg" className="w-full" disabled={submitting}>
                  {submitting ? "Submitting…" : "Submit Reservation Request"}
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
