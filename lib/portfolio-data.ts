import type {
  JourneyMilestone,
  Profile,
  ProjectRecord,
  SkillGroup,
  SkillRecord,
} from "@/lib/portfolio-types";

export const profile: Profile = {
  name: "Emirhan Karagöz",
  role: "Web Developer | React, Next.js, MongoDB",
  heroQuote: "Programming is the future form of art.",
  introduction:
    "Passionate about computers and languages since childhood, I later discovered programming as the perfect way to combine creativity, logic, and imagination. With a love for literature and philosophy, I now channel these perspectives into solving complex problems through code.",
  sidebarSummary:
    "This portfolio highlights a progression from front-end fundamentals to full-stack product development with React, Next.js, TypeScript, Supabase, and MongoDB.",
  aboutParagraphs: [
    "I build web applications with a focus on thoughtful user experience, maintainable code, and practical product thinking.",
    "The projects here show a clear progression from front-end fundamentals into routing, state management, authentication, caching, and full-stack application architecture.",
    "Together, they reflect both technical range and a steady move toward building polished, production-minded web products.",
  ],
  email: "emirhan-karagoz1@hotmail.com",
  avatarSrc: "/assets/portfolio/images/faceshot.webp",
  logoSrc: "/assets/portfolio/images/logo.png",
  documents: [
    {
      kind: "cv",
      label: "Current CV",
      href: "/assets/portfolio/documents/cv-2026-03-14.pdf",
      description: "Current Cv, Last update: 14.03.2026",
    },
    {
      kind: "certificate",
      label: "German C1 Certificate",
      href: "/assets/portfolio/documents/C1.pdf",
      description: "TELC C1 HOCHSCHULE",
    },
    {
      kind: "certificate",
      label: "B2 Certificate",
      href: "/assets/portfolio/documents/B2.pdf",
      description: "TELC B2",
    },
  ],
  socialLinks: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/krgze.mir?igsh=OWtleXRzbXFhMjBs",
      displayLabel: "@krgze.mir",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/emirhan-karag%C3%B6z-92a534229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      displayLabel: "Emirhan Karagöz",
    },
    {
      label: "GitHub",
      href: "https://github.com/Wallinera?tab=repositories",
      displayLabel: "Wallinera",
    },
  ],
};

export const projects: ProjectRecord[] = [
  {
    slug: "trackyourjob",
    name: "Track Your Job",
    summary:
      "A Kanban-style job application tracker with customizable boards and drag-and-drop workflow.",
    description:
      "A Kanban-style job application tracker that helps organize and manage the job search process.",
    notes:
      "Built with Next.js, MongoDB, DND Kit, and TypeScript. It reflects a stronger full-stack workflow by combining structured data modeling, interactive UI behavior, and product-focused thinking.",
    technologies: ["Next.js", "MongoDB", "DND Kit", "TypeScript"],
    liveUrl: "https://track-your-job-gilt.vercel.app",
    imageSrc: "/assets/portfolio/images/trackYourJob.webp",
    imageAlt: "Track Your Job application screenshot",
    order: 1,
    featured: true,
    theme: {
      accent: "#f76382",
      accentText: "#ffffff",
    },
  },
  {
    slug: "wildoasisguest",
    name: "The Wild Oasis Guest",
    summary:
      "The customer-facing side of a hotel product, used to learn Next.js, caching, and authentication.",
    description: "Customer side of the management app, built with Next.js.",
    notes:
      "This project deepened my work with Next.js through caching, revalidation, and authentication, while strengthening the backend mindset needed for user-facing product features.",
    technologies: ["Next.js", "Better Auth", "Caching", "Revalidation"],
    liveUrl: "https://the-wild-oasis-guest-six.vercel.app",
    imageSrc: "/assets/portfolio/images/wildOasisGuest.webp",
    imageAlt: "The Wild Oasis Guest screenshot",
    order: 2,
    featured: true,
    theme: {
      accent: "#626973",
      accentText: "#ffffff",
    },
  },
  {
    slug: "wildoasis",
    name: "The Wild Oasis",
    summary:
      "A hotel management application focused on cabins, bookings, and guests.",
    description:
      "A hotel management web app where hotel employees can manage cabins, bookings, and guests.",
    notes:
      "A larger product-style application centered on operational workflows, with React Query, Supabase authentication, and Styled Components shaping both data handling and UI structure.",
    technologies: ["React Query", "Supabase", "Styled Components"],
    liveUrl: "https://the-wild-oasis-umber-five.vercel.app/login",
    imageSrc: "/assets/portfolio/images/wildOasisProject.webp",
    imageAlt: "The Wild Oasis dashboard screenshot",
    order: 3,
    featured: true,
    theme: {
      accent: "#22c55e",
      accentText: "#052e16",
    },
  },
  {
    slug: "pizzaco",
    name: "PizzaCo",
    summary:
      "A pizza delivery web app for orders, customers, and inventory management.",
    description:
      "A pizza delivery web application for managing orders, customers, and inventory.",
    notes:
      "Focused on state-heavy application flows, using Redux, Redux Toolkit, and Supabase to manage orders, customers, and inventory in a more product-oriented environment.",
    technologies: ["Redux", "Redux Toolkit", "Supabase"],
    liveUrl: "https://pizza-co-five.vercel.app",
    imageSrc: "/assets/portfolio/images/pizzaCoProject.webp",
    imageAlt: "PizzaCo screenshot",
    order: 4,
    featured: true,
    theme: {
      accent: "#ef4444",
      accentText: "#ffffff",
    },
  },
  {
    slug: "worldwide",
    name: "Worldwide",
    summary:
      "A location-tracking app that stores and manages favorite travel spots.",
    description:
      "A location-tracking web application that lets users save, view, and manage favorite travel locations worldwide.",
    notes:
      "This project was used to learn React Router, useReducer, and the Context API, making it a key step in application state and navigation patterns.",
    technologies: ["React Router", "useReducer", "Context API"],
    liveUrl: "https://world-wide-omega.vercel.app",
    imageSrc: "/assets/portfolio/images/worldwideProject.PNG",
    imageAlt: "Worldwide project screenshot",
    order: 5,
    featured: false,
    theme: {
      accent: "#ffb545",
      accentText: "#111827",
    },
  },
  {
    slug: "usepopcorn",
    name: "usePopcorn",
    summary:
      "A movie search and rating app built around hooks and reusable behavior.",
    description:
      "A film query website where users can search for movies and rate what they have watched.",
    notes:
      "This project sharpened my use of core React hooks such as useEffect, useRef, and useState, while introducing more reusable logic through custom hooks.",
    technologies: ["React Hooks", "Custom Hooks", "API Requests"],
    liveUrl: "https://usepopcornprojekt.netlify.app",
    imageSrc: "/assets/portfolio/images/usePopcornProject.webp",
    imageAlt: "usePopcorn screenshot",
    order: 6,
    featured: false,
    theme: {
      accent: "#6741d9",
      accentText: "#ffffff",
    },
  },
  {
    slug: "spacetourism",
    name: "Space Tourism",
    summary:
      "A multi-page fictional company site built with React and Tailwind CSS.",
    description: "A multi-page website for a fictional space tourism company.",
    notes:
      "Built with React, Tailwind CSS, and React Router, with a stronger focus on visual polish, reusable layout systems, and multi-page UI consistency.",
    technologies: ["React", "Tailwind CSS", "React Router"],
    liveUrl: "https://space-tourism-alpha-lyart.vercel.app",
    imageSrc: "/assets/portfolio/images/spaceTourismProject.webp",
    imageAlt: "Space Tourism screenshot",
    order: 7,
    featured: false,
    theme: {
      accent: "#0b0d17",
      accentText: "#ffffff",
    },
  },
  {
    slug: "bookmark",
    name: "Bookmark",
    summary:
      "A fictional bookmark manager landing page built with Tailwind utility patterns.",
    description: "Landing page for a fictional bookmark managing app.",
    notes:
      "Built with Tailwind CSS and a mobile-first approach in React using Vite. The older notes emphasized direct practice with utility classes.",
    technologies: ["Tailwind CSS", "React", "Mobile-first"],
    liveUrl: "https://bookmark-project-tan.vercel.app",
    imageSrc: "/assets/portfolio/images/bookmarkProject.webp",
    imageAlt: "Bookmark landing page screenshot",
    order: 8,
    featured: false,
    theme: {
      accent: "#5368df",
      accentText: "#ffffff",
    },
  },
  {
    slug: "fylo",
    name: "Fylo",
    summary:
      "A responsive company landing page with Tailwind CSS and dark-mode ideas.",
    description:
      "A responsive landing page for a fictional company called Fylo.",
    notes:
      "Focused on responsive UI work with Tailwind CSS, utility-first styling, and dark-mode-oriented design decisions in a React and Vite workflow.",
    technologies: ["Tailwind CSS", "React", "Dark Mode"],
    liveUrl: "https://fylo-alpha-liard.vercel.app",
    imageSrc: "/assets/portfolio/images/fyloProject.webp",
    imageAlt: "Fylo landing page screenshot",
    order: 9,
    featured: false,
    theme: {
      accent: "#597197",
      accentText: "#ffffff",
    },
  },
  {
    slug: "shortly",
    name: "Shortly",
    summary:
      "A short-link landing page with Tailwind utilities and custom utility classes.",
    description: "A simple, responsive website for creating short links.",
    notes:
      "Focused on building a responsive marketing page with Tailwind CSS, combining utility classes with custom patterns for cleaner implementation.",
    technologies: ["Tailwind CSS", "React", "Custom Utilities"],
    liveUrl: "https://shortly-alpha.vercel.app",
    imageSrc: "/assets/portfolio/images/shortlyProject.webp",
    imageAlt: "Shortly landing page screenshot",
    order: 10,
    featured: false,
    theme: {
      accent: "#2acfcf",
      accentText: "#082f49",
    },
  },
  {
    slug: "clipboard",
    name: "Clipboard",
    summary:
      "A landing page project that marked the first hands-on Tailwind CSS experience.",
    description: "Landing page of a fictional app called Clipboard.",
    notes:
      "One of my earlier Tailwind CSS projects, where I learned how utility-first styling can speed up layout work while keeping components consistent.",
    technologies: ["Tailwind CSS", "Utility Classes", "Custom Classes"],
    liveUrl: "https://clipboard-omega-six.vercel.app",
    imageSrc: "/assets/portfolio/images/clipboardProject.webp",
    imageAlt: "Clipboard landing page screenshot",
    order: 11,
    featured: false,
    theme: {
      accent: "#26baa4",
      accentText: "#083344",
    },
  },
  {
    slug: "loopstudios",
    name: "Loopstudios",
    summary:
      "A fictional VR company landing page used to learn SCSS and Frontend Mentor workflows.",
    description: "A landing page for a fictional VR company.",
    notes:
      "Focused on SCSS fundamentals and translating a Frontend Mentor design into a polished responsive landing page.",
    technologies: ["SCSS", "Frontend Mentor"],
    liveUrl: "https://loopstudiosprojeckt.netlify.app",
    imageSrc: "/assets/portfolio/images/loopsProject.webp",
    imageAlt: "Loopstudios landing page screenshot",
    order: 12,
    featured: false,
    theme: {
      accent: "#cc6699",
      accentText: "#ffffff",
    },
  },
  {
    slug: "omnifood",
    name: "Omnifood",
    summary:
      "A responsive food delivery landing page that anchored the fundamentals.",
    description:
      "A responsive landing page website for a fictional food delivery company.",
    notes:
      "An early project that built my foundation in HTML, CSS, and JavaScript, especially around responsive layouts and clean front-end structure.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://omniyemek.netlify.app/",
    imageSrc: "/assets/portfolio/images/omnifoodProject.webp",
    imageAlt: "Omnifood landing page screenshot",
    order: 13,
    featured: false,
    theme: {
      accent: "#cf711f",
      accentText: "#ffffff",
    },
  },
  {
    slug: "mapty",
    name: "Mapty",
    summary:
      "An interactive workout map for tracking running and cycling sessions.",
    description:
      "A web application for tracking running and cycling workouts on an interactive map.",
    notes:
      "A strong step into APIs, DOM manipulation, and more interactive JavaScript application logic.",
    technologies: ["APIs", "DOM Manipulation", "JavaScript"],
    liveUrl: "https://maptyprojeckt.netlify.app/",
    imageSrc: "/assets/portfolio/images/maptyProject.webp",
    imageAlt: "Mapty application screenshot",
    order: 14,
    featured: false,
    theme: {
      accent: "#00c46a",
      accentText: "#052e16",
    },
  },
  {
    slug: "forkify",
    name: "Forkify",
    summary:
      "A recipe search app built around modern JavaScript architecture patterns.",
    description: "A recipe search app made with modern JavaScript features.",
    notes:
      "Focused on functional programming ideas, the MVC pattern, and writing more structured JavaScript for a larger feature set.",
    technologies: ["Functional Programming", "MVC", "JavaScript"],
    liveUrl: "https://forkifyprojeckt.netlify.app/",
    imageSrc: "/assets/portfolio/images/forkifyProject.webp",
    imageAlt: "Forkify application screenshot",
    order: 15,
    featured: false,
    theme: {
      accent: "#ff4500",
      accentText: "#ffffff",
    },
  },
  {
    slug: "portfolio",
    name: "Portfolio v1",
    summary:
      "The earlier portfolio build, created while first learning React fundamentals.",
    description: "A portfolio website made with basic React features.",
    notes:
      "An early React project that helped establish the fundamentals of component-based UI, props, and state-driven rendering.",
    technologies: ["React"],
    liveUrl: "https://ekaragoz.com",
    imageSrc: "/assets/portfolio/images/portfolioProject.webp",
    imageAlt: "Previous portfolio screenshot",
    order: 16,
    featured: false,
    theme: {
      accent: "#1e3a8a",
      accentText: "#ffffff",
    },
  },
];

export const skills: SkillRecord[] = [
  {
    slug: "chatgpt",
    name: "ChatGPT",
    level: 90,
    description: "Advanced prompting and code generation.",
    categoryKey: "ai-tools",
    categoryLabel: "A.I. Tools",
    categoryAccent: "#0284c7",
    categoryIcon: "AI",
    special: true,
    order: 1,
  },
  {
    slug: "claude",
    name: "Claude",
    level: 90,
    description: "Technical discussions and analysis.",
    categoryKey: "ai-tools",
    categoryLabel: "A.I. Tools",
    categoryAccent: "#0284c7",
    categoryIcon: "AI",
    special: true,
    order: 2,
  },
  {
    slug: "github-copilot",
    name: "GitHub Copilot",
    level: 78,
    description: "AI-assisted coding workflows.",
    categoryKey: "ai-tools",
    categoryLabel: "A.I. Tools",
    categoryAccent: "#0284c7",
    categoryIcon: "AI",
    special: true,
    order: 3,
  },
  {
    slug: "figma",
    name: "Figma",
    level: 65,
    description: "Design automation and interface planning.",
    categoryKey: "ai-tools",
    categoryLabel: "A.I. Tools",
    categoryAccent: "#0284c7",
    categoryIcon: "AI",
    special: true,
    order: 4,
  },
  {
    slug: "html5",
    name: "HTML5",
    level: 92,
    description: "Semantic markup.",
    categoryKey: "languages",
    categoryLabel: "Languages",
    categoryAccent: "#1d4ed8",
    categoryIcon: "CODE",
    special: false,
    order: 5,
  },
  {
    slug: "css3",
    name: "CSS3",
    level: 84,
    description: "Flexbox, Grid, and Sass.",
    categoryKey: "languages",
    categoryLabel: "Languages",
    categoryAccent: "#1d4ed8",
    categoryIcon: "CODE",
    special: false,
    order: 6,
  },
  {
    slug: "javascript",
    name: "JavaScript",
    level: 80,
    description: "ES6+ and DOM manipulation.",
    categoryKey: "languages",
    categoryLabel: "Languages",
    categoryAccent: "#1d4ed8",
    categoryIcon: "CODE",
    special: false,
    order: 7,
  },
  {
    slug: "typescript",
    name: "TypeScript",
    level: 60,
    description: "Type checking and interfaces.",
    categoryKey: "languages",
    categoryLabel: "Languages",
    categoryAccent: "#1d4ed8",
    categoryIcon: "CODE",
    special: false,
    order: 8,
  },
  {
    slug: "python",
    name: "Python",
    level: 18,
    description: "Scripting and basics.",
    categoryKey: "languages",
    categoryLabel: "Languages",
    categoryAccent: "#1d4ed8",
    categoryIcon: "CODE",
    special: false,
    order: 9,
  },
  {
    slug: "react",
    name: "React",
    level: 90,
    description: "Next.js, Redux, and React Query.",
    categoryKey: "technologies",
    categoryLabel: "Technologies",
    categoryAccent: "#0f766e",
    categoryIcon: "STACK",
    special: false,
    order: 10,
  },
  {
    slug: "responsive-design",
    name: "Responsive Design",
    level: 90,
    description: "Mobile-first implementation.",
    categoryKey: "technologies",
    categoryLabel: "Technologies",
    categoryAccent: "#0f766e",
    categoryIcon: "STACK",
    special: false,
    order: 11,
  },
  {
    slug: "browser-devtools",
    name: "Browser DevTools",
    level: 88,
    description: "Debugging and performance work.",
    categoryKey: "technologies",
    categoryLabel: "Technologies",
    categoryAccent: "#0f766e",
    categoryIcon: "STACK",
    special: false,
    order: 12,
  },
  {
    slug: "git-github",
    name: "Git & GitHub",
    level: 82,
    description: "Version control and collaboration.",
    categoryKey: "technologies",
    categoryLabel: "Technologies",
    categoryAccent: "#0f766e",
    categoryIcon: "STACK",
    special: false,
    order: 13,
  },
  {
    slug: "web-apis",
    name: "Web APIs",
    level: 78,
    description: "Fetch, localStorage, and browser integrations.",
    categoryKey: "technologies",
    categoryLabel: "Technologies",
    categoryAccent: "#0f766e",
    categoryIcon: "STACK",
    special: false,
    order: 14,
  },
  {
    slug: "problem-solving",
    name: "Problem Solving",
    level: 90,
    description: "Analytical thinking.",
    categoryKey: "other",
    categoryLabel: "Other Skills",
    categoryAccent: "#ea580c",
    categoryIcon: "META",
    special: false,
    order: 15,
  },
  {
    slug: "english",
    name: "English",
    level: 90,
    description: "C1 academic fluency.",
    categoryKey: "other",
    categoryLabel: "Other Skills",
    categoryAccent: "#ea580c",
    categoryIcon: "META",
    special: false,
    order: 16,
  },
  {
    slug: "german",
    name: "German",
    level: 90,
    description: "C1, Telc-C1 Hochschule certified.",
    categoryKey: "other",
    categoryLabel: "Other Skills",
    categoryAccent: "#ea580c",
    categoryIcon: "META",
    special: false,
    order: 17,
    certificate: {
      kind: "certificate",
      label: "Open C1 certificate",
      href: "/assets/portfolio/documents/C1.pdf",
      description: "C1 certificate",
    },
  },
  {
    slug: "communication",
    name: "Communication",
    level: 70,
    description: "Team player and collaborative work.",
    categoryKey: "other",
    categoryLabel: "Other Skills",
    categoryAccent: "#ea580c",
    categoryIcon: "META",
    special: false,
    order: 18,
  },
];

const journeyMilestones: JourneyMilestone[] = [
  {
    label: "01",
    heading: "Foundations",
    description:
      "Omnifood, Mapty, and Forkify document the move from responsive markup and styling into APIs, DOM manipulation, and larger JavaScript architecture.",
    projectSlugs: ["omnifood", "mapty", "forkify"],
  },
  {
    label: "02",
    heading: "React habits",
    description:
      "usePopcorn, Worldwide, and the earlier portfolio capture the first strong React patterns: hooks, routing, reducers, and reusable UI composition.",
    projectSlugs: ["usepopcorn", "worldwide", "portfolio"],
  },
  {
    label: "03",
    heading: "State and products",
    description:
      "PizzaCo and The Wild Oasis pushed the work into state libraries, authentication, Supabase, and more product-shaped application thinking.",
    projectSlugs: ["pizzaco", "wildoasis", "wildoasisguest"],
  },
  {
    label: "04",
    heading: "Current direction",
    description:
      "Track Your Job reflects my current direction: building modern full-stack applications with Next.js, MongoDB, TypeScript, and interactive product workflows.",
    projectSlugs: ["trackyourjob"],
  },
];

export function getProjects() {
  return [...projects].sort((left, right) => left.order - right.order);
}

export function getFeaturedProjects(limit = 4) {
  return getProjects()
    .filter((project) => project.featured)
    .slice(0, limit);
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug) ?? null;
}

export function getSkills() {
  return [...skills].sort((left, right) => left.order - right.order);
}

export function getSkillBySlug(slug: string) {
  return skills.find((skill) => skill.slug === slug) ?? null;
}

export function getSkillGroups(): SkillGroup[] {
  const groups = new Map<string, SkillGroup>();

  for (const skill of getSkills()) {
    const currentGroup = groups.get(skill.categoryKey);

    if (currentGroup) {
      currentGroup.skills.push(skill);
      continue;
    }

    groups.set(skill.categoryKey, {
      key: skill.categoryKey,
      label: skill.categoryLabel,
      accent: skill.categoryAccent,
      icon: skill.categoryIcon,
      special: skill.special,
      skills: [skill],
    });
  }

  return [...groups.values()];
}

export function getTechnologyHighlights(limit = 8) {
  const counts = new Map<string, number>();

  for (const project of projects) {
    for (const technology of project.technologies) {
      counts.set(technology, (counts.get(technology) ?? 0) + 1);
    }
  }

  return [...counts.entries()]
    .map(([name, count]) => ({ name, count }))
    .sort((left, right) => {
      if (right.count !== left.count) {
        return right.count - left.count;
      }

      return left.name.localeCompare(right.name);
    })
    .slice(0, limit);
}

export function getJourneyMilestones() {
  return journeyMilestones.map((milestone) => ({
    ...milestone,
    projects: milestone.projectSlugs
      .map((slug) => getProjectBySlug(slug))
      .filter((project): project is ProjectRecord => Boolean(project)),
  }));
}

export function getPortfolioStats() {
  return {
    projectCount: projects.length,
    skillCount: skills.length,
    documentCount: profile.documents.length,
  };
}
