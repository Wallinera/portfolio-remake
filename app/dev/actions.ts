"use server";

import { revalidatePath } from "next/cache";

import type { DevActionState } from "@/app/dev/action-state";
import { connectToDatabase } from "@/lib/mongodb";
import { projects, skills } from "@/lib/portfolio-data";
import { ProjectModel } from "@/models/Project";
import { SkillModel } from "@/models/Skill";

function ensureDevOnly() {
  if (process.env.NODE_ENV === "production") {
    throw new Error("The dev console is disabled in production.");
  }
}

function splitList(value: string) {
  return value
    .split(/[\n,]/)
    .map((entry) => entry.trim())
    .filter(Boolean);
}

function actionError(error: unknown): DevActionState {
  return {
    status: "error",
    message:
      error instanceof Error
        ? error.message
        : "An unexpected error occurred while writing to MongoDB.",
  };
}

function revalidatePortfolioRoutes() {
  revalidatePath("/");
  revalidatePath("/about");
  revalidatePath("/projects");
  revalidatePath("/skills");
  revalidatePath("/contact");
  revalidatePath("/dev");

  for (const project of projects) {
    revalidatePath(`/projects/${project.slug}`);
  }
}

export async function seedPortfolioAction(
  _state: DevActionState,
  _formData: FormData,
): Promise<DevActionState> {
  try {
    void _state;
    void _formData;
    ensureDevOnly();

    await connectToDatabase();

    await ProjectModel.bulkWrite(
      projects.map((project) => ({
        updateOne: {
          filter: { slug: project.slug },
          update: { $set: project },
          upsert: true,
        },
      })),
      { ordered: false },
    );

    await SkillModel.bulkWrite(
      skills.map((skill) => ({
        updateOne: {
          filter: { slug: skill.slug },
          update: { $set: skill },
          upsert: true,
        },
      })),
      { ordered: false },
    );

    revalidatePortfolioRoutes();

    return {
      status: "success",
      message: `Seeded ${projects.length} projects and ${skills.length} skills into MongoDB.`,
    };
  } catch (error) {
    return actionError(error);
  }
}

export async function createProjectAction(
  _state: DevActionState,
  formData: FormData,
): Promise<DevActionState> {
  try {
    ensureDevOnly();

    const slug = String(formData.get("slug") ?? "").trim();
    const name = String(formData.get("name") ?? "").trim();
    const summary = String(formData.get("summary") ?? "").trim();
    const description = String(formData.get("description") ?? "").trim();
    const notes = String(formData.get("notes") ?? "").trim();
    const liveUrl = String(formData.get("liveUrl") ?? "").trim();
    const imageSrc = String(formData.get("imageSrc") ?? "").trim();
    const imageAlt = String(formData.get("imageAlt") ?? "").trim();
    const accent = String(formData.get("accent") ?? "").trim();
    const accentText = String(formData.get("accentText") ?? "").trim();
    const order = Number(formData.get("order") ?? 0);
    const featured = formData.get("featured") === "on";
    const technologies = splitList(String(formData.get("technologies") ?? ""));

    if (
      !slug ||
      !name ||
      !summary ||
      !description ||
      !notes ||
      !liveUrl ||
      !imageSrc ||
      !imageAlt ||
      !accent ||
      !accentText
    ) {
      throw new Error("Fill every required project field before submitting.");
    }

    await connectToDatabase();

    await ProjectModel.findOneAndUpdate(
      { slug },
      {
        slug,
        name,
        summary,
        description,
        notes,
        liveUrl,
        imageSrc,
        imageAlt,
        order: Number.isFinite(order) ? order : 0,
        featured,
        technologies,
        theme: {
          accent,
          accentText,
        },
      },
      {
        upsert: true,
        new: true,
        runValidators: true,
        setDefaultsOnInsert: true,
      },
    );

    revalidatePortfolioRoutes();

    return {
      status: "success",
      message: `Saved project "${name}" to MongoDB.`,
    };
  } catch (error) {
    return actionError(error);
  }
}

export async function createSkillAction(
  _state: DevActionState,
  formData: FormData,
): Promise<DevActionState> {
  try {
    ensureDevOnly();

    const slug = String(formData.get("slug") ?? "").trim();
    const name = String(formData.get("name") ?? "").trim();
    const description = String(formData.get("description") ?? "").trim();
    const categoryKey = String(formData.get("categoryKey") ?? "").trim();
    const categoryLabel = String(formData.get("categoryLabel") ?? "").trim();
    const categoryAccent = String(formData.get("categoryAccent") ?? "").trim();
    const categoryIcon = String(formData.get("categoryIcon") ?? "").trim();
    const level = Number(formData.get("level") ?? 0);
    const order = Number(formData.get("order") ?? 0);
    const special = formData.get("special") === "on";
    const certificateLabel = String(
      formData.get("certificateLabel") ?? "",
    ).trim();
    const certificateHref = String(
      formData.get("certificateHref") ?? "",
    ).trim();
    const certificateDescription = String(
      formData.get("certificateDescription") ?? "",
    ).trim();

    if (
      !slug ||
      !name ||
      !description ||
      !categoryKey ||
      !categoryLabel ||
      !categoryAccent ||
      !categoryIcon
    ) {
      throw new Error("Fill every required skill field before submitting.");
    }

    await connectToDatabase();

    await SkillModel.findOneAndUpdate(
      { slug },
      {
        slug,
        name,
        description,
        categoryKey,
        categoryLabel,
        categoryAccent,
        categoryIcon,
        level: Number.isFinite(level) ? level : 0,
        order: Number.isFinite(order) ? order : 0,
        special,
        certificate:
          certificateLabel && certificateHref && certificateDescription
            ? {
                kind: "certificate",
                label: certificateLabel,
                href: certificateHref,
                description: certificateDescription,
              }
            : null,
      },
      {
        upsert: true,
        new: true,
        runValidators: true,
        setDefaultsOnInsert: true,
      },
    );

    revalidatePortfolioRoutes();

    return {
      status: "success",
      message: `Saved skill "${name}" to MongoDB.`,
    };
  } catch (error) {
    return actionError(error);
  }
}
