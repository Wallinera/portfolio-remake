export function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <header className="space-y-3">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
        {title}
      </h1>
      <p className="max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
        {description}
      </p>
    </header>
  );
}
