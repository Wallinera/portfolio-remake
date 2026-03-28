"use client";

import { useActionState } from "react";

import { INITIAL_DEV_ACTION_STATE } from "@/app/dev/action-state";
import {
  createProjectAction,
} from "@/app/dev/actions";

export function ProjectForm() {
  const [state, formAction, isPending] = useActionState(
    createProjectAction,
    INITIAL_DEV_ACTION_STATE,
  );

  return (
    <form action={formAction} className="panel p-6">
      <p className="eyebrow">Manual project upsert</p>
      <div className="mt-5 grid gap-4">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-700">
            Slug
          </span>
          <input name="slug" className="field-input" placeholder="trackyourjob" required />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-700">
            Name
          </span>
          <input name="name" className="field-input" placeholder="Track Your Job" required />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-700">
            Summary
          </span>
          <input
            name="summary"
            className="field-input"
            placeholder="Short one-line summary"
            required
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-700">
            Description
          </span>
          <textarea
            name="description"
            className="field-input min-h-28 resize-y"
            placeholder="Longer description used on the public site"
            required
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-700">
            Notes
          </span>
          <textarea
            name="notes"
            className="field-input min-h-32 resize-y"
            placeholder="Project notes or learning outcomes"
            required
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-700">
            Technologies
          </span>
          <textarea
            name="technologies"
            className="field-input min-h-24 resize-y"
            placeholder="Next.js, MongoDB, TypeScript"
          />
        </label>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">
              Live URL
            </span>
            <input
              type="url"
              name="liveUrl"
              className="field-input"
              placeholder="https://example.com"
              required
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">
              Image path
            </span>
            <input
              name="imageSrc"
              className="field-input"
              placeholder="/assets/portfolio/images/trackYourJob.webp"
              required
            />
          </label>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">
              Image alt
            </span>
            <input
              name="imageAlt"
              className="field-input"
              placeholder="Project screenshot"
              required
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">
              Order
            </span>
            <input
              type="number"
              name="order"
              className="field-input"
              defaultValue={0}
            />
          </label>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">
              Accent color
            </span>
            <input type="color" name="accent" className="field-input h-12" defaultValue="#1e3a8a" />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">
              Accent text color
            </span>
            <input
              type="color"
              name="accentText"
              className="field-input h-12"
              defaultValue="#ffffff"
            />
          </label>
        </div>

        <label className="flex items-center gap-3 rounded-[22px] border border-black/5 bg-white/70 px-4 py-3 text-sm text-slate-700">
          <input type="checkbox" name="featured" className="h-4 w-4" />
          Mark as featured
        </label>
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="button-primary mt-5 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isPending ? "Saving..." : "Save Project"}
      </button>

      {state.message ? (
        <p
          className={[
            "mt-4 rounded-[20px] px-4 py-3 text-sm",
            state.status === "success"
              ? "border border-emerald-200 bg-emerald-50 text-emerald-900"
              : "border border-rose-200 bg-rose-50 text-rose-900",
          ].join(" ")}
        >
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
