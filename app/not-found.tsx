import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl items-center px-4 py-10 sm:px-6">
      <section className="panel w-full p-8 sm:p-10">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          Page not found.
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
          The page you are looking for does not exist or is not available in
          this environment.
        </p>
        <div className="mt-8">
          <Link href="/" className="button-primary inline-flex">
            Return Home
          </Link>
        </div>
      </section>
    </main>
  );
}
