"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import { certificationCourse } from "@/lib/data";

export default function CertificationCourse() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeading
          label="Certification"
          title={certificationCourse.title}
          subtitle="American Red Cross blended learning format — online coursework + instructor-led sessions"
        />

        {/* Course Description */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-3xl"
        >
          <p className="text-slate-600 leading-relaxed text-center">
            {certificationCourse.description}
          </p>
        </motion.div>

        {/* Certifications Earned */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {certificationCourse.certifications.map((cert) => (
            <motion.div
              key={cert}
              variants={staggerItem}
              className="rounded-2xl bg-gradient-to-br from-ocean-500 to-ocean-600 p-5 text-center text-white"
            >
              <svg className="mx-auto mb-3 h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>
              <p className="text-sm font-semibold leading-snug">{cert}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Prerequisites */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-navy mb-6">Prerequisites</h3>
          <div className="space-y-4">
            {certificationCourse.prerequisites.map((prereq, i) => (
              <div key={i} className="rounded-2xl bg-navy p-6 text-white">
                <div className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ocean-500 text-sm font-bold">
                    {i + 1}
                  </span>
                  <p className="text-slate-300 leading-relaxed">{prereq}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Before / On First Day */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-2xl bg-navy p-8"
          >
            <h3 className="text-xl font-bold text-white mb-6">Before the First Day of Class</h3>
            <ul className="space-y-3">
              {certificationCourse.beforeFirstDay.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 shrink-0 text-ocean-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-2xl bg-navy p-8"
          >
            <h3 className="text-xl font-bold text-white mb-6">On the First Day of Class</h3>
            <ul className="space-y-3">
              {certificationCourse.onFirstDay.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 shrink-0 text-ocean-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Upcoming Dates */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-navy mb-6">Upcoming Course Dates</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {certificationCourse.dates.map((date) => (
              <div
                key={date.label}
                className="rounded-2xl border-2 border-ocean-200 bg-ocean-50/50 p-6 text-center flex flex-col"
              >
                <svg className="mx-auto mb-3 h-8 w-8 text-ocean-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
                <p className="font-bold text-navy">{date.label}</p>
                <p className="mt-1 text-lg font-bold text-ocean-600">{date.price}</p>
                <span className="mt-2 inline-block rounded-full bg-ocean-100 px-3 py-1 text-xs font-semibold text-ocean-600 capitalize">
                  {date.status}
                </span>
                <a
                  href="/careers#apply"
                  className="mt-4 inline-flex items-center justify-center rounded-xl bg-ocean-500 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-ocean-600 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Enroll Now
                </a>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-600 mb-6">
            Ready to start your lifeguarding career? Get certified with Aura Aquatics.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/careers#application"
              className="inline-flex items-center justify-center rounded-xl bg-ocean-500 px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-ocean-600 hover:scale-[1.02] active:scale-[0.98]"
            >
              Apply Now
            </a>
            <a
              href="tel:+12812148025"
              className="inline-flex items-center justify-center rounded-xl border-2 border-navy px-8 py-3.5 text-sm font-semibold text-navy transition-all hover:bg-navy hover:text-white hover:scale-[1.02] active:scale-[0.98]"
            >
              Call Us: 281-214-8025
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
