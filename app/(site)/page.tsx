import Link from "next/link";

import { PageIntro } from "@/components/portfolio/page-intro";
import { ProjectCard } from "@/components/portfolio/project-card";
import {
  getFeaturedProjectsFromDb,
  getProjectCountFromDb,
  getSkillGroupsFromDb,
  getTechnologyHighlightsFromDb,
} from "@/lib/portfolio-db";
import { getPortfolioStats, profile } from "@/lib/portfolio-data";

export default async function HomePage() {
  const featuredProjects = await getFeaturedProjectsFromDb(3);
  const skillGroups = await getSkillGroupsFromDb();
  const technologies = await getTechnologyHighlightsFromDb(10);
  const baseStats = getPortfolioStats();
  const projectCount = await getProjectCountFromDb();
  const skillCount = skillGroups.reduce(
    (total, group) => total + group.skills.length,
    0,
  );
  const stats = {
    ...baseStats,
    projectCount,
    skillCount,
  };

  return (
    <div className="space-y-8">
      <section className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">
        <div className="panel p-6 sm:p-8">
          <p className="eyebrow">Overview</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            &quot;{profile.heroQuote}&quot;
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            {profile.introduction}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/projects" className="button-primary ">
              <span className="text-white dark:text-slate-950">
                {" "}
                Browse Projects
              </span>
            </Link>
            <Link href="/skills" className="button-secondary">
              Explore Skills
            </Link>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="panel-inner p-4">
              <p className="eyebrow">Projects</p>
              <p className="mt-3 text-3xl font-semibold text-slate-950">
                {stats.projectCount}
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Live builds.
              </p>
            </div>
            <div className="panel-inner p-4">
              <p className="eyebrow">Skills</p>
              <p className="mt-3 text-3xl font-semibold text-slate-950">
                {stats.skillCount}
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Structured records, grouped by category.
              </p>
            </div>
            <div className="panel-inner p-4">
              <p className="eyebrow">Documents</p>
              <p className="mt-3 text-3xl font-semibold text-slate-950">
                {stats.documentCount}
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Portrait, CV, and certificates.
              </p>
            </div>
          </div>
        </div>

        <aside className="panel overflow-hidden p-6">
          <div className="mt-5 panel-inner p-4">
            <p className="eyebrow">Most-used stack</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {technologies.map((technology) => (
                <span
                  key={technology.name}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700"
                >
                  {technology.name}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-5 space-y-3">
            {skillGroups.map((group) => (
              <div
                key={group.key}
                className="rounded-[22px] border border-black/5 bg-white/70 p-4"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
                      {group.icon}
                    </p>
                    <h2 className="mt-2 text-lg font-semibold text-slate-950">
                      {group.label}
                    </h2>
                  </div>
                  <span
                    className="rounded-full px-3 py-1 text-xs font-medium"
                    style={{
                      backgroundColor: `color-mix(in srgb, ${group.accent} 14%, white)`,
                      color: group.accent,
                    }}
                  >
                    {group.skills.length} skills
                  </span>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </section>

      <section className="space-y-6">
        <PageIntro
          eyebrow="Featured work"
          title="Recent projects"
          description="Each project has their own theme color coming from MongoDB"
        />

        <div className="grid gap-5 md:grid-cols-2 2xl:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
