import type {
  ProjectRecord,
  SkillGroup,
  SkillRecord,
  SiteDocument,
} from "@/lib/portfolio-types";

import {
  getFeaturedProjects,
  getProjectBySlug,
  getProjects,
  getSkillBySlug,
  getSkillGroups,
  getSkills,
} from "@/lib/portfolio-data";
import { connectToDatabase } from "@/lib/mongodb";
import { ProjectModel } from "@/models/Project";
import { SkillModel } from "@/models/Skill";

type ProjectDbRecord = {
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
  theme: {
    accent: string;
    accentText: string;
  };
};

type SkillDbRecord = {
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
  certificate?: {
    kind: "cv" | "certificate";
    label: string;
    href: string;
    description: string;
  } | null;
};

function mapCertificate(
  certificate: SkillDbRecord["certificate"],
): SiteDocument | undefined {
  if (!certificate) {
    return undefined;
  }

  return {
    kind: certificate.kind,
    label: certificate.label,
    href: certificate.href,
    description: certificate.description,
  };
}

function mapProjectDocument(project: ProjectDbRecord): ProjectRecord {
  return {
    slug: project.slug,
    name: project.name,
    summary: project.summary,
    description: project.description,
    notes: project.notes,
    technologies: project.technologies,
    liveUrl: project.liveUrl,
    imageSrc: project.imageSrc,
    imageAlt: project.imageAlt,
    order: project.order,
    featured: project.featured,
    theme: {
      accent: project.theme.accent,
      accentText: project.theme.accentText,
    },
  };
}

function mapSkillDocument(skill: SkillDbRecord): SkillRecord {
  return {
    slug: skill.slug,
    name: skill.name,
    level: skill.level,
    description: skill.description,
    categoryKey: skill.categoryKey,
    categoryLabel: skill.categoryLabel,
    categoryAccent: skill.categoryAccent,
    categoryIcon: skill.categoryIcon,
    special: skill.special,
    order: skill.order,
    certificate: mapCertificate(skill.certificate),
  };
}

function hasMongoConnectionString() {
  return Boolean(process.env.MONGODB_URI);
}

async function withPortfolioFallback<T>(
  readFromDb: () => Promise<T>,
  readFromStaticData: () => T,
) {
  if (!hasMongoConnectionString()) {
    return readFromStaticData();
  }

  try {
    return await readFromDb();
  } catch (error) {
    console.warn(
      "Falling back to static portfolio data because the MongoDB read failed.",
      error,
    );
    return readFromStaticData();
  }
}

export async function getProjectsFromDb() {
  return withPortfolioFallback(
    async () => {
      await connectToDatabase();

      const projects = await ProjectModel.find({})
        .sort({ order: 1 })
        .select("-_id -createdAt -updatedAt")
        .lean<ProjectDbRecord[]>();

      return projects.map(mapProjectDocument);
    },
    () => getProjects(),
  );
}

export async function getProjectBySlugFromDb(slug: string) {
  return withPortfolioFallback(
    async () => {
      await connectToDatabase();

      const project = await ProjectModel.findOne({ slug })
        .select("-_id -createdAt -updatedAt")
        .lean<ProjectDbRecord | null>();

      return project ? mapProjectDocument(project) : null;
    },
    () => getProjectBySlug(slug),
  );
}

export async function getFeaturedProjectsFromDb(limit = 4) {
  return withPortfolioFallback(
    async () => {
      await connectToDatabase();

      const projects = await ProjectModel.find({ featured: true })
        .sort({ order: 1 })
        .limit(limit)
        .select("-_id -createdAt -updatedAt")
        .lean<ProjectDbRecord[]>();

      return projects.map(mapProjectDocument);
    },
    () => getFeaturedProjects(limit),
  );
}

export async function getProjectCountFromDb() {
  return withPortfolioFallback(
    async () => {
      await connectToDatabase();
      return ProjectModel.countDocuments({});
    },
    () => getProjects().length,
  );
}

export async function getTechnologyHighlightsFromDb(limit = 8) {
  const projects = await getProjectsFromDb();
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

export async function getSkillsFromDb() {
  return withPortfolioFallback(
    async () => {
      await connectToDatabase();

      const skills = await SkillModel.find({})
        .sort({ order: 1 })
        .select("-_id -createdAt -updatedAt")
        .lean<SkillDbRecord[]>();

      return skills.map(mapSkillDocument);
    },
    () => getSkills(),
  );
}

export async function getSkillBySlugFromDb(slug: string) {
  return withPortfolioFallback(
    async () => {
      await connectToDatabase();

      const skill = await SkillModel.findOne({ slug })
        .select("-_id -createdAt -updatedAt")
        .lean<SkillDbRecord | null>();

      return skill ? mapSkillDocument(skill) : null;
    },
    () => getSkillBySlug(slug),
  );
}

export async function getSkillGroupsFromDb(): Promise<SkillGroup[]> {
  return withPortfolioFallback(
    async () => {
      const skills = await getSkillsFromDb();
      const groups = new Map<string, SkillGroup>();

      for (const skill of skills) {
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
    },
    () => getSkillGroups(),
  );
}

export async function getSkillCountFromDb() {
  return withPortfolioFallback(
    async () => {
      await connectToDatabase();
      return SkillModel.countDocuments({});
    },
    () => getSkills().length,
  );
}
