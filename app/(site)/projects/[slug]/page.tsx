import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  getProjectBySlugFromDb,
  getProjectsFromDb,
} from "@/lib/portfolio-db";
import { projectThemeStyle } from "@/lib/project-theme";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const projects = await getProjectsFromDb();
  const project = await getProjectBySlugFromDb(slug);

  if (!project) {
    notFound();
  }

  const index = projects.findIndex((entry) => entry.slug === project.slug);
  const previousProject = index > 0 ? projects[index - 1] : null;
  const nextProject = index < projects.length - 1 ? projects[index + 1] : null;

  return (
    <div className="space-y-8">
      <Link href="/projects" className="button-secondary inline-flex">
        Back To Projects
      </Link>

      <article style={projectThemeStyle(project)} className="panel p-6 sm:p-8">
        <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_320px]">
          <div>
            <p className="eyebrow">
              Project {String(project.order).padStart(2, "0")}
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              {project.name}
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
              {project.description}
            </p>

            <div className="project-surface mt-6 rounded-[28px] border border-black/5 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                Notes
              </p>
              <p className="mt-4 text-base leading-8 text-slate-700">
                {project.notes}
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span key={technology} className="project-soft-badge">
                  {technology}
                </span>
              ))}
            </div>
          </div>

          <aside className="space-y-4">
            <div className="project-surface rounded-[30px] border border-black/5 p-4">
              <div className="relative aspect-[16/11] overflow-hidden rounded-[22px] border border-black/5 bg-white">
                <Image
                  src={project.imageSrc}
                  alt={project.imageAlt}
                  fill
                  priority
                  sizes="(min-width: 1280px) 320px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="project-solid-badge flex w-full items-center justify-center rounded-[20px] px-5 py-4 text-sm font-semibold uppercase tracking-[0.14em] transition hover:opacity-90"
            >
              Open Live Project
            </a>

            <div className="rounded-[24px] border border-black/5 bg-white/70 p-5">
              <p className="eyebrow">Why it matters</p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {project.summary}
              </p>
            </div>
          </aside>
        </div>
      </article>

      <section className="grid gap-5 md:grid-cols-2">
        {previousProject ? (
          <Link
            href={`/projects/${previousProject.slug}`}
            className="panel p-5"
          >
            <p className="eyebrow">Previous</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
              {previousProject.name}
            </h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              {previousProject.summary}
            </p>
          </Link>
        ) : (
          <div className="panel border-dashed p-5">
            <p className="eyebrow">Previous</p>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              This is the first entry in the current project ordering.
            </p>
          </div>
        )}

        {nextProject ? (
          <Link href={`/projects/${nextProject.slug}`} className="panel p-5">
            <p className="eyebrow">Next</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
              {nextProject.name}
            </h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              {nextProject.summary}
            </p>
          </Link>
        ) : (
          <div className="panel border-dashed p-5">
            <p className="eyebrow">Next</p>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              This is the final entry in the current project ordering.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
