"use client";

import { useActionState } from "react";

import { INITIAL_DEV_ACTION_STATE } from "@/app/dev/action-state";
import {
  seedPortfolioAction,
} from "@/app/dev/actions";

export function SeedPortfolioForm({
  hasMongo,
  projectCount,
  skillCount,
}: {
  hasMongo: boolean;
  projectCount: number;
  skillCount: number;
}) {
  const [state, formAction, isPending] = useActionState(
    seedPortfolioAction,
    INITIAL_DEV_ACTION_STATE,
  );

  return (
    <form action={formAction} className="panel p-5">
      <p className="eyebrow">Bulk seed</p>
      <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">
        Upload the current repo data.
      </h2>
      <p className="mt-3 text-sm leading-7 text-slate-600">
        This action upserts {projectCount} projects and {skillCount} skills
        using the same static records that power the public site today.
      </p>

      <div className="mt-4 rounded-[22px] border border-black/5 bg-white/70 p-4 text-sm leading-7 text-slate-600">
        <strong className="text-slate-950">MongoDB status:</strong>{" "}
        {hasMongo
          ? "ready for writes"
          : "not configured yet. Add MONGODB_URI before submitting."}
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="button-primary mt-5 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isPending ? "Seeding..." : "Seed Portfolio Data"}
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
