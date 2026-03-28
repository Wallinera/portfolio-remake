"use client";

import { useActionState } from "react";

import { INITIAL_DEV_ACTION_STATE } from "@/app/dev/action-state";
import {
  createSkillAction,
} from "@/app/dev/actions";

export function SkillForm() {
  const [state, formAction, isPending] = useActionState(
    createSkillAction,
    INITIAL_DEV_ACTION_STATE,
  );

  return (
    <form action={formAction} className="panel p-6">
      <p className="eyebrow">Manual skill upsert</p>
      <div className="mt-5 grid gap-4">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-700">
            Slug
          </span>
          <input name="slug" className="field-input" placeholder="react" required />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-700">
            Name
          </span>
          <input name="name" className="field-input" placeholder="React" required />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-700">
            Description
          </span>
          <textarea
            name="description"
            className="field-input min-h-28 resize-y"
            placeholder="Next.js, Redux, and React Query."
            required
          />
        </label>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">
              Level
            </span>
            <input
              type="number"
              min={0}
              max={100}
              name="level"
              className="field-input"
              defaultValue={80}
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
              Category key
            </span>
            <input
              name="categoryKey"
              className="field-input"
              placeholder="technologies"
              required
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">
              Category label
            </span>
            <input
              name="categoryLabel"
              className="field-input"
              placeholder="Technologies"
              required
            />
          </label>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">
              Category accent
            </span>
            <input
              type="color"
              name="categoryAccent"
              className="field-input h-12"
              defaultValue="#0f766e"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">
              Category icon
            </span>
            <input
              name="categoryIcon"
              className="field-input"
              placeholder="STACK"
              required
            />
          </label>
        </div>

        <label className="flex items-center gap-3 rounded-[22px] border border-black/5 bg-white/70 px-4 py-3 text-sm text-slate-700">
          <input type="checkbox" name="special" className="h-4 w-4" />
          Highlight category as special
        </label>

        <div className="rounded-[24px] border border-black/5 bg-white/70 p-4">
          <p className="text-sm font-semibold text-slate-900">Optional certificate</p>
          <div className="mt-4 grid gap-4">
            <input
              name="certificateLabel"
              className="field-input"
              placeholder="Open C1 certificate"
            />
            <input
              name="certificateHref"
              className="field-input"
              placeholder="/assets/portfolio/documents/C1.pdf"
            />
            <input
              name="certificateDescription"
              className="field-input"
              placeholder="C1 certificate"
            />
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="button-primary mt-5 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isPending ? "Saving..." : "Save Skill"}
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
