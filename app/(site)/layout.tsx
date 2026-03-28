import { connection } from "next/server";

import { SiteShell } from "@/components/portfolio/site-shell";
import { getProjectCountFromDb, getSkillCountFromDb } from "@/lib/portfolio-db";
import { getPortfolioStats, profile } from "@/lib/portfolio-data";

export default async function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await connection();

  const stats = getPortfolioStats();
  const projectCount = await getProjectCountFromDb();
  const skillCount = await getSkillCountFromDb();

  return (
    <SiteShell
      profile={profile}
      stats={{
        ...stats,
        projectCount,
        skillCount,
      }}
    >
      {children}
    </SiteShell>
  );
}
