"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { staggerContainer, staggerItem } from "@/lib/animations";

const teamMembers = [
  { name: "Leadership", role: "Management Team", initials: "LT" },
  { name: "Operations", role: "Pool Operations", initials: "OT" },
  { name: "Staffing", role: "Lifeguard Coordination", initials: "ST" },
  { name: "Training", role: "Certification & Safety", initials: "TT" },
];

export default function Team() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeading
          label="Our Team"
          title="Meet the People Behind Aura Aquatics"
          subtitle="Our growing team of pool management professionals, certified lifeguards, and aquatic experts is dedicated to serving Houston communities."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              variants={staggerItem}
              className="group text-center"
            >
              <div className="mx-auto mb-5 flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-ocean-100 to-sky-light text-ocean-500 text-2xl font-bold transition-all group-hover:from-ocean-500 group-hover:to-ocean-600 group-hover:text-white">
                {member.initials}
              </div>
              <h3 className="font-bold text-navy">{member.name}</h3>
              <p className="mt-1 text-sm text-slate-500">{member.role}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-6">
            Interested in joining our team? We&apos;re always looking for passionate individuals.
          </p>
          <Button href="/careers">View Open Positions</Button>
        </div>
      </Container>
    </section>
  );
}
