import type { Metadata } from "next";

import "./globals.css";

import { profile } from "@/lib/portfolio-data";

const themeScript = `
  try {
    const storedTheme = window.localStorage.getItem("portfolio-theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    const theme =
      storedTheme === "dark" || storedTheme === "light"
        ? storedTheme
        : systemTheme;

    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.style.colorScheme = theme;
  } catch {}
`;

export const metadata: Metadata = {
  title: {
    default: `${profile.name} | Home`,
    template: `%s | ${profile.name}`,
  },
  description: profile.introduction,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="min-h-full antialiased"
      suppressHydrationWarning
    >
      <body className="min-h-screen" suppressHydrationWarning>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {children}
      </body>
    </html>
  );
}
