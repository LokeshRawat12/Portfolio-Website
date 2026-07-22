export const profile = {
  name: "Lokesh Rawat",
  role: "Full Stack Developer",
  location: "Kalagarh, Uttarakhand, India",
  phone: "+91 8979668105",
  email: "lavi29july@gmail.com",
  github: "https://github.com/LokeshRawat12",
  linkedin: "https://www.linkedin.com/in/lokesh-rawat-127843300/",
  instagram: "https://www.instagram.com/laviii_rawat/",
  resumePath: "/Lokesh_Rawat_CV.pdf",
  versel: "https://corbet-safari-booking-frontend-6chyvnvpl.vercel.app/",
  summary:
    "Full Stack Developer skilled in MERN stack development, REST APIs, responsive web applications, and database-driven solutions. Passionate about building scalable products, writing clean code, and continuously improving technical and problem-solving skills.",
};

export const skillGroups = [
  {
    file: "frontend",
    label: "Frontend",
    accent: "amber",
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "React Native","Next.js","Tailwind CSS", "Material UI"],
  },
  {
    file: "backend",
    label: "Backend",
    accent: "teal",
    skills: ["Node.js", "Express.js", "REST APIs", "Authentication"],
  },
  {
    file: "database",
    label: "Database",
    accent: "rose",
    skills: ["MongoDB", "PostgreSQL"],
  },
  {
    file: "AI/ML",
    label: "AI",
    accent: "rose",
    skills: ["Python", "Numpy","Pandas",,"Fast API","OpenAI sdk","Langchain", "Pydantic"],
  },
  {
    file: "tools",
    label: "Tools",
    accent: "amber",
    skills: ["Git", "GitHub", "VS Code", "Figma","Stich", "npm", "Chrome DevTools"],
  },
  {
    file: "concepts",
    label: "Concepts",
    accent: "teal",
    skills: ["Responsive Design", "JSON", "API Integration", "AI API Integration"],
  },
];

export const projects = [
  {
    id: "corbett",
    name: "Corbett Safari Booking",
    status: "Shipped",
    tagline: "A full-stack safari booking platform for Jim Corbett National Park.",
    description:
      "Lets visitors explore safari zones, tour packages and accommodations, and submit booking requests online. Built a responsive React frontend with interactive package cards, image galleries and booking forms, backed by RESTful APIs for managing bookings, inquiries and package content.",
    highlights: [
      "Responsive React.js frontend with booking forms & destination highlights",
      "REST APIs in Node.js + Express for bookings and dynamic content",
      "MongoDB + Mongoose for customers, bookings and package data",
      "Architected for future payments, auth and an admin dashboard",
      "Deployed on Vercel with Git-based version control",
    ],
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose"],
    github: "https://corbet-safari-booking-frontend-6chyvnvpl.vercel.app/",
    demo: null,
  },
  {
    id: "speakify",
    name: "Speakify",
    status: "In Progress",
    tagline: "An AI-powered English learning platform.",
    description:
      "Frontend screens for an AI-driven English learning experience — onboarding flows, dashboards, speaking sessions and progress tracking, with wireframes, branding and UI/UX planned in Figma.",
    highlights: [
      "Reusable component library for onboarding, dashboards & sessions",
      "Wireframes, branding and user journeys designed in Figma",
      "Planned AI features: pronunciation analysis, grammar correction, personalized recommendations",
    ],
    stack: ["React.Native",".net","Postgress","Gen.Ai","Api","Stich", "Figma",],
    github: null,
    demo: null,
  },
  {
    id: "portfolio",
    name: "Personal Portfolio",
    status: "Shipped",
    tagline: "A responsive personal portfolio, hand-built from scratch.",
    description:
      "Showcases projects, skills and contact details with a modern UI and smooth animations, optimized for performance and cross-device compatibility.",
    highlights: [
      "Built with vanilla HTML, CSS and JavaScript",
      "Smooth scroll animations and modern layout",
      "Optimized for mobile responsiveness and performance",
    ],
    stack: ["React.js",],
    github: "https://github.com/LokeshRawat12",
    demo: null,
  },
];

export const education = {
  degree: "Bachelor of Computer Applications (BCA)",
  period: "2023 – 2026",
  institution: "Shriram Institute of Management and Technology, Kashipur, Uttarakhand",
  detail: "CGPA: 7.0",
};

export const interests = [
  "Football",
  "Music",
  "Fitness",
  "New Technologies",
  "Team Sports",
  "Outdoor Activities",
];
