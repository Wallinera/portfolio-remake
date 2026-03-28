import Link from "next/link";
import { notFound } from "next/navigation";
import { connection } from "next/server";

import { ProjectForm } from "@/components/portfolio/dev/project-form";
import { SeedPortfolioForm } from "@/components/portfolio/dev/seed-portfolio-form";
import { SkillForm } from "@/components/portfolio/dev/skill-form";
import {
  getPortfolioStats,
  getProjects,
  getSkillGroups,
} from "@/lib/portfolio-data";

export default async function DevPage() {
  if (process.env.NODE_ENV === "production") {
    notFound();
  }

  await connection();

  const hasMongo = Boolean(process.env.MONGODB_URI);
  const stats = getPortfolioStats();
  const projects = getProjects();
  const skillGroups = getSkillGroups();

  return (
    <div className="mx-auto min-h-screen max-w-[1500px] px-4 py-6 sm:px-5 lg:px-6">
      <Link href="/" className="button-secondary inline-flex">
        Back To Portfolio
      </Link>

      <div className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
        <section className="space-y-6">
          <div className="panel p-6 sm:p-8">
            <p className="eyebrow">Dev Console</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Portfolio data upload route.
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
              This route is prepared for the MongoDB phase. The public site is
              still powered by static repo data, but the actions below can bulk
              seed or manually upsert projects and skills as soon as the
              database connection string exists.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-4">
              <div className="panel-inner p-4">
                <p className="eyebrow">Mongo</p>
                <p className="mt-2 text-lg font-semibold text-slate-950">
                  {hasMongo ? "Configured" : "Missing"}
                </p>
              </div>
              <div className="panel-inner p-4">
                <p className="eyebrow">Projects</p>
                <p className="mt-2 text-lg font-semibold text-slate-950">
                  {stats.projectCount}
                </p>
              </div>
              <div className="panel-inner p-4">
                <p className="eyebrow">Skills</p>
                <p className="mt-2 text-lg font-semibold text-slate-950">
                  {stats.skillCount}
                </p>
              </div>
              <div className="panel-inner p-4">
                <p className="eyebrow">Groups</p>
                <p className="mt-2 text-lg font-semibold text-slate-950">
                  {skillGroups.length}
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 xl:grid-cols-2">
            <ProjectForm />
            <SkillForm />
          </div>

          <div className="panel p-6 sm:p-8">
            <p className="eyebrow">Seed preview</p>
            <div className="mt-5 grid gap-4 lg:grid-cols-2">
              <div className="rounded-[24px] border border-black/5 bg-white/70 p-5">
                <h2 className="text-xl font-semibold text-slate-950">
                  Project slugs
                </h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {projects.map((project) => (
                    <span
                      key={project.slug}
                      className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700"
                    >
                      {project.slug}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-[24px] border border-black/5 bg-white/70 p-5">
                <h2 className="text-xl font-semibold text-slate-950">
                  Skill categories
                </h2>
                <div className="mt-4 space-y-3">
                  {skillGroups.map((group) => (
                    <div
                      key={group.key}
                      className="flex items-center justify-between rounded-[18px] border border-black/5 bg-white px-4 py-3"
                    >
                      <span className="text-sm font-medium text-slate-900">
                        {group.label}
                      </span>
                      <span className="text-sm text-slate-600">
                        {group.skills.length} entries
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <aside className="space-y-6">
          <SeedPortfolioForm
            hasMongo={hasMongo}
            projectCount={stats.projectCount}
            skillCount={stats.skillCount}
          />

          <div className="panel p-5">
            <p className="eyebrow">Project schema</p>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-600">
              <li>`slug`, `name`, `summary`, `description`, `notes`</li>
              <li>`technologies[]`, `liveUrl`, `imageSrc`, `imageAlt`</li>
              <li>`order`, `featured`</li>
              <li>`theme.accent`, `theme.accentText`</li>
            </ul>
          </div>

          <div className="panel p-5">
            <p className="eyebrow">Skill schema</p>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-600">
              <li>`slug`, `name`, `level`, `description`</li>
              <li>
                `categoryKey`, `categoryLabel`, `categoryAccent`, `categoryIcon`
              </li>
              <li>`order`, `special`</li>
              <li>Optional `certificate` object for linked PDFs</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
