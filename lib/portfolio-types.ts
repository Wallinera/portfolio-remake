export type SiteDocument = {
  kind: "cv" | "certificate";
  label: string;
  href: string;
  description: string;
};

export type SocialLink = {
  label: string;
  href: string;
  displayLabel: string;
};

export type Profile = {
  name: string;
  role: string;
  heroQuote: string;
  introduction: string;
  sidebarSummary: string;
  aboutParagraphs: string[];
  email: string;
  avatarSrc: string;
  logoSrc: string;
  documents: SiteDocument[];
  socialLinks: SocialLink[];
};

export type ProjectTheme = {
  accent: string;
  accentText: string;
};

export type ProjectRecord = {
  slug: string;
  name: string;
  summary: string;
  description: string;
  notes: string;
  technologies: string[];
  liveUrl: string;
  imageSrc: string;
  imageAlt: string;
  order: number;
  featured: boolean;
  theme: ProjectTheme;
};

export type SkillRecord = {
  slug: string;
  name: string;
  level: number;
  description: string;
  categoryKey: string;
  categoryLabel: string;
  categoryAccent: string;
  categoryIcon: string;
  special: boolean;
  order: number;
  certificate?: SiteDocument | null;
};

export type SkillGroup = {
  key: string;
  label: string;
  accent: string;
  icon: string;
  special: boolean;
  skills: SkillRecord[];
};

export type JourneyMilestone = {
  label: string;
  heading: string;
  description: string;
  projectSlugs: string[];
};
