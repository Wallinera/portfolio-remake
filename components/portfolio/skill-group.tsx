import { skillAccentStyle } from "@/lib/project-theme";
import type { SkillGroup as SkillGroupType } from "@/lib/portfolio-types";

export function SkillGroup({ group }: { group: SkillGroupType }) {
  return (
    <section
      style={skillAccentStyle(group.accent)}
      className={["panel p-6", group.special ? "ring-1 ring-sky-200" : ""].join(" ")}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="eyebrow">{group.icon}</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">
            {group.label}
          </h2>
        </div>
        <span className="skill-soft-badge rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em]">
          {group.skills.length} items
        </span>
      </div>

      <div className="mt-5 space-y-4">
        {group.skills.map((skill) => (
          <article
            key={skill.slug}
            className="rounded-[24px] border border-black/5 bg-white/75 p-4"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-950">
                  {skill.name}
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  {skill.description}
                </p>
                {skill.certificate ? (
                  <a
                    href={skill.certificate.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex text-sm font-medium text-sky-700 transition hover:text-sky-900"
                  >
                    {skill.certificate.label}
                  </a>
                ) : null}
              </div>
              <span className="skill-soft-badge rounded-full px-3 py-1 text-xs font-semibold">
                {skill.level}%
              </span>
            </div>

            <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-200/80">
              <div
                className="skill-progress h-full rounded-full"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
