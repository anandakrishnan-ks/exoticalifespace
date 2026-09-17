// ── Shared site data ────────────────────────────────────────────────────────

export const navItems = [
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Process", to: "/process" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
] as const;

export interface Service {
  slug: string;
  number: string;
  title: string;
  short: string;
  description: string;
  included: readonly string[];
  approach: string;
  projectTypes: readonly string[];
}

export const services: Service[] = [
  {
    slug: "interior-design",
    number: "01",
    title: "Interior Design & Space Planning",
    short: "Efficient layouts, considered materials, lighting and finishes shaped around your needs, style and budget.",
    description:
      "We approach every interior with a clear understanding of how the space will be used, who will use it, and what quality of life it should deliver. Our design process balances aesthetics with functionality—creating spaces that look exceptional and work brilliantly for the people inside them.",
    included: [
      "Conceptual design and mood board",
      "Space planning and layout drawings",
      "Material and finish selection",
      "Lighting design and specification",
      "Furniture and fixture specification",
      "3D visualisations and walkthroughs",
      "Design coordination during execution",
    ],
    approach:
      "We begin with listening. Every brief is different—whether you want a minimal, serene home or a bold, high-energy commercial space. We translate your vision into a coherent design language and execute it with precision, managing every detail from concept to completion.",
    projectTypes: ["Residences", "Apartments", "Villas", "Penthouses", "Studio spaces"],
  },
  {
    slug: "civil-construction",
    number: "02",
    title: "Civil Construction & Renovation",
    short: "New construction, renovation and structural alterations delivered with quality and close coordination.",
    description:
      "From ground-up construction to complex renovations, our civil team handles every structural element with discipline and care. We work directly with architects and engineers to ensure seamless, high-quality execution at every stage of the build.",
    included: [
      "Structural work and RCC",
      "Masonry and brickwork",
      "Plastering and waterproofing",
      "Flooring and tiling",
      "External and internal finishing",
      "Dedicated site supervision",
      "Quality control and documentation",
    ],
    approach:
      "Construction quality is non-negotiable for us. We use tested materials, follow proper processes, and maintain close supervision at every stage—ensuring the structure is built right the first time, within budget and on schedule.",
    projectTypes: ["Homes", "Offices", "Retail spaces", "Hospitality properties", "Renovations"],
  },
  {
    slug: "turnkey-execution",
    number: "03",
    title: "Turnkey Project Execution",
    short: "Complete coordination of design, procurement, manpower and site execution through one accountable team.",
    description:
      "Turnkey delivery means a single point of contact from first consultation to final handover. We manage the entire project lifecycle—design, procurement, construction, interiors, MEP services and finishing—so you have one team, one contract, and one responsibility throughout.",
    included: [
      "End-to-end project management",
      "Vendor and subcontractor coordination",
      "Procurement and logistics",
      "Progress tracking and reporting",
      "Cost control and budget management",
      "Systematic quality inspections",
      "Final handover and documentation",
    ],
    approach:
      "We act as your project partner, not just a contractor. Every decision is made with your interests in mind—from selecting the right materials to managing timelines and costs transparently. One team. One contract. One responsibility.",
    projectTypes: ["Residential projects", "Commercial fit-outs", "Hospitality projects", "Retail interiors"],
  },
  {
    slug: "custom-furniture",
    number: "04",
    title: "Custom Furniture & Interior Fit-Outs",
    short: "Kitchens, wardrobes, cabinetry, panelling, ceilings and furniture made for how you live and work.",
    description:
      "Every piece we make is designed for the specific space, person and purpose it serves. We don't sell catalogue furniture—we design and fabricate bespoke pieces that integrate seamlessly with the interior, are built to last, and reflect your individual taste.",
    included: [
      "Modular kitchen design and installation",
      "Wardrobes and storage systems",
      "TV units and entertainment cabinets",
      "False ceilings and wall panelling",
      "Custom dining and seating",
      "Bathroom vanities and fittings",
      "Commercial furniture and retail counters",
    ],
    approach:
      "Precision in measurement, quality in material selection, and craftsmanship in execution. Every piece is built to fit, designed to function, and finished to the highest standard—whether it's a kitchen that's used every day or a statement reception desk.",
    projectTypes: ["Kitchens", "Bedrooms", "Living areas", "Offices", "Retail fixtures"],
  },
  {
    slug: "mep-services",
    number: "05",
    title: "Electrical, Plumbing & MEP",
    short: "Essential building services integrated carefully into the design and construction process.",
    description:
      "Great interiors rely on invisible infrastructure. Our MEP team ensures electrical, plumbing, HVAC and data systems are planned thoughtfully and installed correctly—working in complete sync with the design and construction teams so nothing is an afterthought.",
    included: [
      "Electrical planning and wiring",
      "Switchboard and distribution",
      "Plumbing and drainage systems",
      "Water supply and storage",
      "Air conditioning and ventilation",
      "Home automation and data points",
      "Safety and fire protection systems",
    ],
    approach:
      "MEP is integrated into the design from day one—not bolted on at the end. This ensures systems are properly concealed, efficiently routed, correctly sized, and fully functional from the moment you move in.",
    projectTypes: ["New constructions", "Renovations", "Commercial fit-outs", "Hospitality projects"],
  },
  {
    slug: "commercial-interiors",
    number: "06",
    title: "Commercial & Hospitality Interiors",
    short: "Offices, boutiques, cafés, hotels and wellness spaces that balance identity with operational needs.",
    description:
      "Commercial spaces need to work hard—for the brand, the people who use them, and the business that runs within them. We design and deliver commercial and hospitality interiors that are distinctive, durable, and operationally sound for the long term.",
    included: [
      "Brand-aligned space concept and design",
      "Customer journey and flow planning",
      "Bespoke furniture and custom fixtures",
      "Lighting and acoustic design",
      "Service area and back-of-house planning",
      "Signage and wayfinding integration",
      "Handover support and aftercare",
    ],
    approach:
      "Commercial interiors require a different lens—one that considers footfall, durability, staff workflow, and brand experience. We bring all of this together in a space that makes a strong first impression and continues to perform over time.",
    projectTypes: ["Offices", "Cafés and restaurants", "Hotels", "Boutiques", "Clinics", "Wellness spaces"],
  },
];

export interface ProcessStep {
  number: string;
  title: string;
  short: string;
  detail: string;
  duration: string;
  points: readonly string[];
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Consultation",
    short: "Understanding your vision, requirements, budget and timeline.",
    detail:
      "We start every project with a thorough briefing session. We listen carefully to understand what you want to achieve, how you live or work, what your timeline looks like, and what budget is realistic. This isn't just information gathering—it's the foundation of everything that follows. The better we understand you, the better the project.",
    duration: "1–2 sessions",
    points: [
      "Detailed project briefing and site visit",
      "Budget scoping and feasibility discussion",
      "Timeline mapping and milestone planning",
      "Clear understanding of scope and priorities",
    ],
  },
  {
    number: "02",
    title: "Design & Planning",
    short: "Concept, layout, technical details and a clear execution strategy.",
    detail:
      "Based on the brief, we develop a design concept that captures the aesthetic direction and spatial logic of the project. This includes layout plans, material palettes, 3D visualisations, and a detailed execution plan with timelines and cost estimates. Nothing moves to site without your full approval.",
    duration: "2–4 weeks",
    points: [
      "Concept development and mood curation",
      "Space planning and layout drawings",
      "Material, finish, and fixture selection",
      "3D visualisations and walkthroughs",
      "Detailed cost estimate and execution schedule",
    ],
  },
  {
    number: "03",
    title: "Execution",
    short: "Procurement, site supervision, coordination and systematic quality checks.",
    detail:
      "Once the design is approved, we move to execution. Our team manages procurement, schedules subcontractors, monitors site progress, and conducts regular quality inspections. You receive progress updates throughout, and our site supervisor is present at all critical stages to ensure nothing is missed.",
    duration: "Varies by scope",
    points: [
      "Material and fixture procurement",
      "Subcontractor scheduling and management",
      "Daily site supervision and coordination",
      "Progress reporting and client updates",
      "Quality inspections at each stage",
    ],
  },
  {
    number: "04",
    title: "Handover",
    short: "Final finishing, inspection, snag clearance and complete project delivery.",
    detail:
      "Before handover, we conduct a thorough snag inspection to identify and rectify any finishing issues. We walk you through the completed space, explain all systems and features, and ensure you are fully satisfied before closing the project. Our commitment doesn't end at handover.",
    duration: "1–2 weeks",
    points: [
      "Comprehensive snag inspection",
      "Finishing and touch-up execution",
      "Client walkthrough and sign-off",
      "Handover documentation and warranties",
      "Post-handover support and aftercare",
    ],
  },
];

export const strengths = [
  [
    "Single-Point Responsibility",
    "Design, procurement, construction and interiors coordinated by one team.",
  ],
  [
    "Experienced Project Management",
    "Structured supervision, progress monitoring and quality control at every stage.",
  ],
  [
    "Transparent Communication",
    "Clarity across scope, materials, costs, timelines and progress—no surprises.",
  ],
  [
    "Quality Without Compromise",
    "Careful material choices, skilled workmanship, precise detailing and premium finishing.",
  ],
  [
    "Practical, Reliable Timelines",
    "Realistic planning with disciplined follow-up across every stage of delivery.",
  ],
  [
    "Designs Tailored to You",
    "Every decision responds to your requirements, preferences, lifestyle and budget.",
  ],
] as const;

export interface Project {
  id: number;
  category: string;
  title: string;
  location: string;
  description: string;
  imageKey: "hero" | "about" | "residence" | "hospitality" | "commercial";
}

export const projects: Project[] = [
  {
    id: 1,
    category: "Residential",
    title: "Luxury Villa",
    location: "Kovalam, Trivandrum",
    description: "A contemporary tropical residence balancing openness with privacy, designed around the landscape.",
    imageKey: "residence",
  },
  {
    id: 2,
    category: "Hospitality",
    title: "Heritage Hotel Interior",
    location: "Fort Kochi, Ernakulam",
    description: "Refined Kerala heritage aesthetics meeting modern comfort in a boutique property.",
    imageKey: "hospitality",
  },
  {
    id: 3,
    category: "Commercial",
    title: "Corporate Headquarters",
    location: "Technopark, Trivandrum",
    description: "A premium workspace that communicates authority, focus, and brand identity.",
    imageKey: "commercial",
  },
  {
    id: 4,
    category: "Residential",
    title: "Penthouse Renovation",
    location: "Vazhuthacaud, Trivandrum",
    description: "Complete turnkey renovation of a city-centre penthouse—design to handover in 14 weeks.",
    imageKey: "about",
  },
  {
    id: 5,
    category: "Commercial",
    title: "Luxury Retail Boutique",
    location: "MG Road, Trivandrum",
    description: "Brand-aligned retail environment designed to elevate the customer experience.",
    imageKey: "commercial",
  },
  {
    id: 6,
    category: "Hospitality",
    title: "Rooftop Restaurant",
    location: "Vanchiyoor, Trivandrum",
    description: "Atmospheric dining space with architectural drama, warm textures and curated lighting.",
    imageKey: "hospitality",
  },
];
