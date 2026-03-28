import { ContactMailForm } from "@/components/portfolio/contact-mail-form";
import { PageIntro } from "@/components/portfolio/page-intro";
import { profile } from "@/lib/portfolio-data";

export default function ContactPage() {
  return (
    <div className="space-y-8">
      <PageIntro eyebrow="Contact" title="Lets Contact!" description="" />

      <div className="flex flex-col items-center justify-between gap-6">
        <ContactMailForm email={profile.email} />

        <aside className="flex gap-5">
          <a
            href={`mailto:${profile.email}`}
            className="panel block p-5 transition hover:-translate-y-0.5"
          >
            <p className="eyebrow">Email</p>
            <h2 className="mt-3 text-xl font-semibold text-slate-950">
              {profile.email}
            </h2>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              The best way to reach me directly for roles, projects, or collaborations.
            </p>
          </a>

          {profile.socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="panel block p-5 transition hover:-translate-y-0.5"
            >
              <p className="eyebrow">{link.label}</p>
              <h2 className="mt-3 text-xl font-semibold text-slate-950">
                {link.displayLabel}
              </h2>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Open {link.label.toLowerCase()} in a new tab.
              </p>
            </a>
          ))}

          {/* <div className="panel p-5">
            <p className="eyebrow">Documents</p>
            <div className="mt-4 space-y-3">
              {profile.documents.map((document) => (
                <a
                  key={document.href}
                  href={document.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-[22px] border border-black/5 bg-white/70 p-4 transition hover:bg-white"
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
          </div> */}
        </aside>
      </div>
    </div>
  );
}
