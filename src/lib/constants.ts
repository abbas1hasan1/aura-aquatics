export const COMPANY = {
  name: "Aura Aquatics",
  phone: "281-214-8025",
  phoneHref: "tel:+12812148025",
  email: "info@auraaquatics.com",
  location: "Houston, TX",
  tagline: "Houston's Premier Pool Management & Lifeguard Staffing",
  description:
    "Providing comprehensive pool management, lifeguard staffing, and aquatic services to HOAs, private clubs, and residential communities across the Greater Houston area.",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  {
    label: "Careers",
    href: "/careers",
    children: [
      { label: "Join Our Team", href: "/careers" },
      { label: "Lifeguard Certification", href: "/careers/certification" },
    ],
  },
  { label: "Contact", href: "/contact" },
] as const;

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/company/aura-aquatics",
  instagram: "https://www.instagram.com/auraaquatics/",
  facebook: "#",
} as const;
