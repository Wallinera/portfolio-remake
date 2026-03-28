import { PageIntro } from "@/components/portfolio/page-intro";
import { SkillGroup } from "@/components/portfolio/skill-group";
import { getSkillGroupsFromDb } from "@/lib/portfolio-db";
import { profile } from "@/lib/portfolio-data";

export default async function SkillsPage() {
  const groups = await getSkillGroupsFromDb();

  return (
    <div className="space-y-8">
      <PageIntro
        eyebrow="Skills"
        title="Growth never stops!"
        description="List of tools, languages, and strengths."
      />

      <div className="grid gap-5 xl:grid-cols-2">
        {groups.map((group) => (
          <SkillGroup key={group.key} group={group} />
        ))}
      </div>

      <section className="panel p-6">
        <p className="eyebrow">Certificates and downloads</p>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {profile.documents.map((document) => (
            <a
              key={document.href}
              href={document.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-[24px] border border-black/5 bg-white/70 p-5 transition hover:-translate-y-0.5 hover:bg-white"
            >
              <p className="text-sm font-semibold text-slate-950">
                {document.label}
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                {document.description}
              </p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
