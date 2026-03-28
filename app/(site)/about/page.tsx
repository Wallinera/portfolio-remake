import Link from "next/link";

import { PageIntro } from "@/components/portfolio/page-intro";
import type { ProjectRecord } from "@/lib/portfolio-types";
import { getProjectsFromDb, getSkillsFromDb } from "@/lib/portfolio-db";
import {
  getJourneyMilestones,
  profile,
} from "@/lib/portfolio-data";

export default async function AboutPage() {
  const [projects, skills] = await Promise.all([
    getProjectsFromDb(),
    getSkillsFromDb(),
  ]);
  const projectMap = new Map(projects.map((project) => [project.slug, project]));
  const milestones = getJourneyMilestones().map((milestone) => ({
    ...milestone,
    projects: milestone.projects
      .map((project) => projectMap.get(project.slug))
      .filter((project): project is ProjectRecord => Boolean(project)),
  }));
  const english = skills.find((skill) => skill.slug === "english") ?? null;
  const german = skills.find((skill) => skill.slug === "german") ?? null;

  return (
    <div className="space-y-8">
      <section className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_300px]">
        <div className="panel p-6 sm:p-8">
          <PageIntro
            eyebrow="About"
            title={`${profile.name}, building thoughtful web products.`}
            description="A portfolio focused on technical growth, practical product work, and turning ideas into polished web experiences."
          />

          <div className="space-y-5 text-base leading-8 text-slate-600">
            {profile.aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <aside className="space-y-5">
          <div className="panel p-5">
            <p className="eyebrow">Documents</p>
            <div className="mt-4 space-y-3">
              {profile.documents.map((document) => (
                <a
                  key={document.href}
                  href={document.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-[22px] border border-black/5 bg-white/70 p-4 transition hover:-translate-y-0.5 hover:bg-white"
                >
                  <p className="text-sm font-semibold text-slate-950">
                    {document.label}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {document.description}
                  </p>
                </a>
              ))}
            </div>
          </div>

          <div className="panel p-5">
            <p className="eyebrow">Languages beyond code</p>
            <div className="mt-4 space-y-3">
              {english ? (
                <div className="rounded-[22px] border border-black/5 bg-white/70 p-4">
                  <p className="text-sm font-semibold text-slate-950">
                    {english.name}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {english.description}
                  </p>
                </div>
              ) : null}
              {german ? (
                <div className="rounded-[22px] border border-black/5 bg-white/70 p-4">
                  <p className="text-sm font-semibold text-slate-950">
                    {german.name}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {german.description}
                  </p>
                  {german.certificate ? (
                    <a
                      href={german.certificate.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex text-sm font-medium text-sky-700 transition hover:text-sky-900"
                    >
                      Open certificate
                    </a>
                  ) : null}
                </div>
              ) : null}
            </div>
          </div>
        </aside>
      </section>

      <section className="space-y-6">
        <PageIntro
          eyebrow="Journey"
          title="Learning milestones."
          description="These milestones highlight the progression from fundamentals to full-stack product development."
        />

        <div className="grid gap-5 lg:grid-cols-2">
          {milestones.map((milestone) => (
            <article key={milestone.label} className="panel p-6">
              <p className="eyebrow">{milestone.label}</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
                {milestone.heading}
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {milestone.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {milestone.projects.map((project) => (
                  <Link
                    key={project.slug}
                    href={`/projects/${project.slug}`}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700 transition hover:border-sky-300 hover:text-slate-950"
                  >
                    {project.name}
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
