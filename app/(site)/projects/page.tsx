import { PageIntro } from "@/components/portfolio/page-intro";
import { ProjectCard } from "@/components/portfolio/project-card";
import { getProjectsFromDb } from "@/lib/portfolio-db";

export default async function ProjectsPage() {
  const projects = await getProjectsFromDb();

  return (
    <div className="space-y-6">
      <PageIntro
        eyebrow="Projects"
        title="All my works"
        description="Each project roughly represents the evolution of tech stacks over the years - from plain HTML-CSS-JS to Full-Stack Frameworks like Next.js."
      />

      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
