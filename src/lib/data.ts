export const services = [
  {
    id: "pool-management",
    title: "Pool Management",
    description:
      "Full-service pool management for HOAs, private clubs, and residential communities. We handle every aspect so all you have to do is swim.",
    icon: "management",
    features: [
      "Comprehensive facility oversight",
      "Staff scheduling & supervision",
      "Safety compliance & inspections",
      "Chemical monitoring & water quality",
      "Equipment maintenance & repairs",
      "Incident reporting & documentation",
    ],
  },
  {
    id: "lifeguard-staffing",
    title: "Lifeguard Staffing",
    description:
      "Trained, certified lifeguards available for seasonal and year-round staffing. Our team is professional, reliable, and ready to keep your facility safe.",
    icon: "lifeguard",
    features: [
      "Certified & insured lifeguards",
      "Seasonal & year-round availability",
      "Background-checked staff",
      "Ongoing training & development",
      "Flexible scheduling options",
      "Emergency response trained",
    ],
  },
  {
    id: "pool-maintenance",
    title: "Pool Maintenance & Cleaning",
    description:
      "Keep your pool pristine with our professional cleaning and maintenance services. From chemical balancing to equipment repairs, we've got you covered.",
    icon: "maintenance",
    features: [
      "Weekly & monthly cleaning packages",
      "Chemical balancing & water testing",
      "Filter & pump maintenance",
      "Equipment inspection & repair",
      "Surface cleaning & vacuuming",
      "Winterization & opening services",
    ],
  },
  {
    id: "swim-lessons",
    title: "Swim Lessons & Pool Parties",
    description:
      "Professional swim instruction for all ages and skill levels. Plus, host unforgettable pool parties with our certified lifeguard supervision.",
    icon: "swimming",
    features: [
      "All ages & skill levels welcome",
      "Certified swim instructors",
      "Private & group lessons available",
      "Birthday party packages",
      "Certified lifeguard supervision",
      "Safe & fun environment",
    ],
  },
] as const;

export const positions = [
  {
    title: "Lifeguard",
    type: "Seasonal / Part-Time",
    description:
      "Join our team as a lifeguard and ensure the safety of swimmers at pools across the Greater Houston area. Great summer opportunity with competitive pay.",
    requirements: [
      "Must be at least 16 years old",
      "Current lifeguard certification (or willingness to get certified — we'll help!)",
      "Strong swimming ability",
      "CPR/AED/First Aid certification preferred",
      "Excellent communication skills",
    ],
  },
  {
    title: "Lifeguard Assistant Manager",
    type: "Seasonal / Part-Time",
    description:
      "Step into a leadership role assisting with daily pool operations, mentoring lifeguards, and ensuring facility standards are met.",
    requirements: [
      "Prior lifeguard experience required",
      "Current lifeguard certification",
      "Leadership & communication skills",
      "Ability to handle emergency situations",
      "Must be at least 18 years old",
    ],
  },
  {
    title: "Supervisor",
    type: "Full-Time",
    description:
      "Oversee pool operations across multiple sites. Ensure quality standards, manage staff, coordinate with clients, and drive operational excellence.",
    requirements: [
      "3+ years in pool management or related field",
      "Proven leadership experience",
      "CPO certification preferred",
      "Strong problem-solving skills",
      "Valid driver's license & reliable transportation",
    ],
  },
  {
    title: "Pool Cleaning Technician",
    type: "Full-Time / Part-Time",
    description:
      "Maintain pool cleanliness and water quality across residential and commercial properties. Hands-on role with training provided.",
    requirements: [
      "Must be at least 18 years old",
      "Ability to lift 50+ lbs",
      "Basic knowledge of pool chemistry (training provided)",
      "Valid driver's license",
      "Reliable transportation",
    ],
  },
  {
    title: "Pool Repair Technician",
    type: "Full-Time",
    description:
      "Diagnose and repair pool equipment including pumps, filters, heaters, and automated systems. Perform on-site troubleshooting and maintenance for residential and commercial pools across the Greater Houston area.",
    requirements: [
      "Experience with pool equipment repair and maintenance",
      "Knowledge of pumps, filters, heaters, and control systems",
      "Ability to diagnose and troubleshoot mechanical and electrical issues",
      "Must be at least 18 years old",
      "Valid driver's license & reliable transportation",
    ],
  },
] as const;

export const testimonials = [
  {
    quote:
      "What started out as a simple summer job ended up being a very enjoyable opportunity to work alongside other high school and college kids. Aura Aquatics has taught me valuable communication, leadership and management skills. They work with a number of private clubs throughout the area, and I would recommend this position to anyone looking to make fun memories and lifelong friendships.",
    name: "Peter S.",
    role: "Former Lifeguard Manager",
  },
  {
    quote:
      "Aura Aquatics transformed our community pool experience. Their professional staff, consistent maintenance, and excellent communication have made pool management effortless for our HOA board. We couldn't be happier with their services.",
    name: "Sarah M.",
    role: "HOA Board President",
  },
  {
    quote:
      "The lifeguard team Aura Aquatics provided for our club was outstanding. Punctual, professional, and great with our members. They handled every situation with care and expertise. Highly recommend their staffing services.",
    name: "James R.",
    role: "Country Club Manager",
  },
] as const;

export const stats = [
  { label: "Pools Managed", value: 50, suffix: "+" },
  { label: "Lifeguards Placed", value: 200, suffix: "+" },
  { label: "Years Experience", value: 10, suffix: "+" },
  { label: "Communities Served", value: 30, suffix: "+" },
] as const;

export const processSteps = [
  {
    step: 1,
    title: "Consultation",
    description:
      "We start with a free consultation to understand your pool management needs and facility requirements.",
  },
  {
    step: 2,
    title: "Site Visit",
    description:
      "Our team visits your location to assess the facility and create a customized management plan.",
  },
  {
    step: 3,
    title: "Staff & Maintain",
    description:
      "We deploy trained staff and begin comprehensive pool management, maintenance, and safety operations.",
  },
  {
    step: 4,
    title: "Swim!",
    description:
      "Sit back and enjoy. We handle everything so your community can focus on having fun in the water.",
  },
] as const;

export const values = [
  {
    title: "Safety First",
    description:
      "Every decision we make prioritizes the safety of swimmers and staff. Certified, trained, and always vigilant.",
  },
  {
    title: "Professional Excellence",
    description:
      "We deliver consistent, high-quality service backed by industry certifications and years of experience.",
  },
  {
    title: "Community Focus",
    description:
      "We're a Houston-based team dedicated to enriching our local communities through exceptional aquatic services.",
  },
  {
    title: "Reliability",
    description:
      "Count on us to show up, deliver, and exceed expectations. Our clients trust us because we earn it every day.",
  },
  {
    title: "Training & Development",
    description:
      "We invest in our team with ongoing training, certification support, and leadership development opportunities.",
  },
  {
    title: "Fun Environment",
    description:
      "We believe work should be enjoyable. Our team culture fosters friendships, growth, and memorable experiences.",
  },
] as const;

export const benefits = [
  {
    title: "Competitive Pay",
    description: "High starting pay with opportunities for raises based on performance and experience.",
  },
  {
    title: "Flexible Schedules",
    description: "Work hours that fit your life — perfect for students, parents, or anyone seeking flexibility.",
  },
  {
    title: "Training Provided",
    description: "Not yet certified? We'll help you get your lifeguard certification and provide ongoing training.",
  },
  {
    title: "Leadership Growth",
    description: "Clear advancement paths from lifeguard to assistant manager, manager, and supervisor roles.",
  },
  {
    title: "Outdoor Environment",
    description: "Enjoy working outdoors in a fun, active environment instead of being stuck behind a desk.",
  },
  {
    title: "Certification Assistance",
    description: "We help cover certification costs and connect you with training programs to get started fast.",
  },
] as const;
