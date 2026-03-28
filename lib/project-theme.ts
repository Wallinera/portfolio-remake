import type { CSSProperties } from "react";

import type { ProjectRecord } from "@/lib/portfolio-types";

export function projectThemeStyle(
  project: Pick<ProjectRecord, "theme">,
): CSSProperties {
  return {
    "--project-accent": project.theme.accent,
    "--project-accent-text": project.theme.accentText,
  } as CSSProperties;
}

export function skillAccentStyle(accent: string): CSSProperties {
  return {
    "--skill-accent": accent,
  } as CSSProperties;
}
