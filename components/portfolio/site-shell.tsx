"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import type { Profile } from "@/lib/portfolio-types";

const navigationItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

const THEME_STORAGE_KEY = "portfolio-theme";

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") {
    return "light";
  }

  const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);

  return savedTheme === "dark" || savedTheme === "light"
    ? savedTheme
    : getSystemTheme();
}

function getSystemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.dataset.theme = theme;
  document.body.classList.toggle("theme-dark", theme === "dark");
  document.body.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  document.body.style.colorScheme = theme;
}

export function SiteShell({
  children,
  profile,
  stats,
}: {
  children: React.ReactNode;
  profile: Profile;
  stats: {
    projectCount: number;
    skillCount: number;
    documentCount: number;
  };
}) {
  const pathname = usePathname();
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);

    if (savedTheme === "dark" || savedTheme === "light") {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      const systemTheme = getSystemTheme();
      setTheme(systemTheme);
      applyTheme(systemTheme);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    applyTheme(nextTheme);
  }

  return (
    <div
      className={[
        "theme-shell mx-auto min-h-screen w-full max-w-[1600px] px-4 py-4 sm:px-5 lg:px-6 lg:py-6",
        theme === "dark" ? "theme-dark" : "",
      ].join(" ")}
    >
      <div className="grid gap-4 lg:grid-cols-[360px_minmax(0,1fr)]">
        <aside className="panel overflow-hidden lg:sticky lg:top-6 lg:h-[calc(100vh-3rem)]">
          <div className="h-full overflow-y-auto p-6">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-full bg-slate-950 dark:bg-slate-100/10">
                <Image
                  src={profile.logoSrc}
                  alt={`${profile.name} logo`}
                  fill
                  sizes="48px"
                  className="object-contain p-1.5"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="eyebrow">Portfolio</p>
                <p className="mt-1 text-sm font-medium text-slate-700 dark:text-slate-300">
                  {profile.role}
                </p>
              </div>
              <button
                type="button"
                onClick={toggleTheme}
                aria-label="Toggle dark mode"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/70 text-slate-700 transition hover:border-sky-200 hover:bg-white hover:text-slate-950 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-sky-400/40 dark:hover:bg-white/10 dark:hover:text-white"
              >
                {theme === "dark" ? (
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2.5" />
                    <path d="M12 19.5V22" />
                    <path d="M4.93 4.93l1.77 1.77" />
                    <path d="M17.3 17.3l1.77 1.77" />
                    <path d="M2 12h2.5" />
                    <path d="M19.5 12H22" />
                    <path d="M4.93 19.07l1.77-1.77" />
                    <path d="M17.3 6.7l1.77-1.77" />
                  </svg>
                ) : (
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
                  </svg>
                )}
              </button>
            </div>

            <div className="mt-8 rounded-[30px] bg-slate-950 px-5 py-6 text-white shadow-[0_28px_90px_-54px_rgba(15,23,42,0.9)] dark:border dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(15,23,42,0.96),rgba(2,6,23,0.98))] dark:shadow-[0_28px_90px_-54px_rgba(2,6,23,0.95)]">
              <div className="relative mx-auto aspect-square w-full max-w-[240px]">
                <Image
                  src={profile.avatarSrc}
                  alt={`${profile.name} portrait`}
                  fill
                  priority
                  sizes="240px"
                  className="object-contain"
                />
              </div>
              <h1 className="mt-5 text-3xl font-semibold tracking-tight">
                {profile.name}
              </h1>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                {profile.sidebarSummary}
              </p>
            </div>

            <nav className="mt-6">
              <ul className="space-y-2">
                {navigationItems.map((item) => {
                  const active = isActivePath(pathname, item.href);

                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={[
                          "flex items-center justify-between rounded-[22px] border px-4 py-3 text-sm font-medium transition",
                          active
                            ? "border-slate-950 bg-slate-950 text-white shadow-[0_20px_60px_-32px_rgba(15,23,42,0.85)] dark:border-sky-300/30 dark:bg-slate-100 dark:text-slate-950 dark:shadow-[0_20px_60px_-32px_rgba(2,6,23,0.7)]"
                            : "border-black/5 bg-white/70 text-slate-700 hover:border-sky-200 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-sky-400/40 dark:hover:bg-white/10",
                        ].join(" ")}
                      >
                        <span
                          className={`${active ? "text-white dark:text-slate-950" : "text-slate-700 dark:text-slate-300"}`}
                        >
                          {item.label}
                        </span>
                        <span
                          className={`font-mono text-xs uppercase tracking-[0.22em] ${active ? "text-white dark:text-slate-950" : "text-slate-700 dark:text-slate-300"}`}
                        >
                          {active ? "Now" : "Go"}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              <div className="panel-inner p-4">
                <p className="eyebrow">Projects</p>
                <p className="mt-2 text-2xl font-semibold text-slate-950">
                  {stats.projectCount}
                </p>
              </div>
              <div className="panel-inner p-4">
                <p className="eyebrow">Skills</p>
                <p className="mt-2 text-2xl font-semibold text-slate-950">
                  {stats.skillCount}
                </p>
              </div>
              <div className="panel-inner p-4">
                <p className="eyebrow">Docs</p>
                <p className="mt-2 text-2xl font-semibold text-slate-950">
                  {stats.documentCount}
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {profile.documents.map((document) => (
                <a
                  key={document.href}
                  href={document.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-[22px] border border-black/5 bg-white/70 px-4 py-3 text-sm text-slate-700 transition hover:-translate-y-0.5 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-white/10"
                >
                  <span className="block font-semibold text-slate-950 dark:text-slate-50">
                    {document.label}
                  </span>
                  <span className="mt-1 block text-sm leading-6 text-slate-600 dark:text-slate-400">
                    {document.description}
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {profile.socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-black/5 bg-white px-3 py-2 text-sm text-slate-700 transition hover:border-sky-200 hover:text-slate-950 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-sky-400/40 dark:hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              {process.env.NODE_ENV !== "production" && (
                <Link
                  href="/dev"
                  className="rounded-full border border-black/5 bg-slate-950 px-3 py-2 text-sm  transition hover:bg-slate-800"
                >
                  <span className="text-white">Dev</span>
                </Link>
              )}
            </div>
          </div>
        </aside>

        <main className="panel min-h-[50vh] p-6 sm:p-8 lg:min-h-[calc(100vh-3rem)] lg:p-10">
          {children}
        </main>
      </div>
    </div>
  );
}
