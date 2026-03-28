import Image from "next/image";
import Link from "next/link";

import { projectThemeStyle } from "@/lib/project-theme";
import type { ProjectRecord } from "@/lib/portfolio-types";

export function ProjectCard({ project }: { project: ProjectRecord }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block h-full">
      <article
        style={projectThemeStyle(project)}
        className="project-surface flex h-full flex-col overflow-hidden rounded-[30px] border border-black/5 p-4 transition duration-300 group-hover:-translate-y-1"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="eyebrow">{project.slug}</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
              {project.name}
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              {project.summary}
            </p>
          </div>
          <span className="project-solid-badge rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em]">
            Live
          </span>
        </div>

        <div className="relative mt-5 aspect-[16/10] overflow-hidden rounded-[24px] border border-black/5 bg-white">
          <Image
            src={project.imageSrc}
            alt={project.imageAlt}
            fill
            sizes="(min-width: 1536px) 30vw, (min-width: 1024px) 42vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-[1.02]"
          />
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((technology) => (
            <span key={technology} className="project-soft-badge">
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-black/5 pt-4 text-sm text-slate-600">
          <span>Open project page</span>
          <span className="font-mono text-xs uppercase tracking-[0.22em] text-slate-500">
            View
          </span>
        </div>
      </article>
    </Link>
  );
}
