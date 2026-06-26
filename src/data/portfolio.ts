export const profile = {
  name: "Earl Benedict C. Dumaraog",
  initials: "ED",
  level: "Mid-level Developer",
  yearsExperience: "3-4",
  email: "earl.dumaraog@email.com",
  photo: "/photo-placeholder.svg",
} as const

export const techMarquee = [
  "Python",
  "JavaScript",
  "TypeScript",
  "Django",
  "React",
  "Vue",
  "Tailwind CSS",
  "Git",
] as const

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const

export const stats = [
  { value: "3-4", label: "Years Experience" },
  { value: "15+", label: "Projects Shipped" },
  { value: "8", label: "Core Technologies" },
] as const

export const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "JavaScript", "TypeScript"],
  },
  {
    title: "Frameworks",
    skills: ["Django", "React", "Vue", "Tailwind CSS"],
  },
  {
    title: "Tools",
    skills: ["Git"],
  },
] as const

export type ProjectPreviewType = "ecommerce" | "kanban" | "saas" | "dashboard"

export const projects = [
  {
    title: "E-Commerce Platform",
    preview: "ecommerce" as const,
    description:
      "Full-stack marketplace with real-time inventory, Stripe payments, and admin analytics dashboard.",
    highlights: [
      "Stripe checkout with webhook-driven order fulfillment",
      "Admin analytics for sales, inventory, and customer cohorts",
      "Role-based access for vendors, admins, and customers",
    ],
    tags: ["React", "Django", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "#",
    repoUrl: "#",
    featured: true,
  },
  {
    title: "Task Collaboration App",
    preview: "kanban" as const,
    description:
      "Real-time project management tool with drag-and-drop boards, team chat, and role-based access.",
    highlights: [
      "Drag-and-drop kanban boards with optimistic UI updates",
      "Team chat and activity feed tied to task events",
      "Permissions for owners, editors, and viewers",
    ],
    tags: ["Vue", "Django", "JavaScript", "Tailwind CSS"],
    liveUrl: "#",
    repoUrl: "#",
    featured: true,
  },
  {
    title: "AI Content Generator",
    preview: "saas" as const,
    description:
      "SaaS platform leveraging LLM APIs for content generation with usage tracking and subscription billing.",
    highlights: [
      "Prompt templates with tone and length controls",
      "Token usage metering and plan-based rate limits",
      "Subscription billing with usage dashboards",
    ],
    tags: ["TypeScript", "Python", "React", "Django"],
    liveUrl: "#",
    repoUrl: "#",
    featured: false,
  },
  {
    title: "DevOps Dashboard",
    preview: "dashboard" as const,
    description:
      "Infrastructure monitoring dashboard aggregating metrics from multiple cloud providers in one view.",
    highlights: [
      "Unified metrics from AWS, GCP, and on-prem sources",
      "Alert routing with severity-based escalation",
      "Historical charts for CPU, memory, and latency",
    ],
    tags: ["Vue", "Python", "Git", "Tailwind CSS"],
    liveUrl: "#",
    repoUrl: "#",
    featured: false,
  },
] as const

export type Project = (typeof projects)[number]

export const experience = [
  {
    role: "Mid-level Full Stack Developer",
    company: "Tech Company Inc.",
    period: "2023 - Present",
    highlights: [
      "Built and maintained full stack features using React, Django, and TypeScript",
      "Developed REST APIs and integrated them with responsive front-end interfaces",
      "Collaborated with cross-functional teams through Git-based workflows and code reviews",
    ],
  },
  {
    role: "Junior Full Stack Developer",
    company: "Startup Labs",
    period: "2021 - 2023",
    highlights: [
      "Delivered web applications with Vue, Python, and Tailwind CSS",
      "Implemented backend logic and database models with Django",
      "Contributed to feature development, bug fixes, and production deployments",
    ],
  },
] as const

export const socialLinks = [
  { label: "GitHub", href: "https://github.com", icon: "github" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
  { label: "Twitter", href: "https://twitter.com", icon: "twitter" },
] as const
