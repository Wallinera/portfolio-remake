"use client";

import { useState } from "react";

export function ContactMailForm({ email }: { email: string }) {
  const [formValues, setFormValues] = useState({
    name: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const body = [
      `Name: ${formValues.name || "Not provided"}`,
      "",
      formValues.message,
    ].join("\n");

    const mailto = new URL(`mailto:${email}`);
    mailto.searchParams.set("subject", formValues.subject || "Portfolio inquiry");
    mailto.searchParams.set("body", body);

    window.location.href = mailto.toString();
    setStatus("Your mail client should open with the drafted message.");
  }

  function updateField(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setFormValues((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <section className="panel p-6 sm:p-8">
      <p className="eyebrow">Write a message</p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
        Start with a local draft.
      </h2>
      <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
        This form does not hit a backend yet. It prepares a message and hands it
        to your default email client using the contact address listed here.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-700">
            Your name
          </span>
          <input
            type="text"
            name="name"
            value={formValues.name}
            onChange={updateField}
            className="field-input"
            placeholder="Your name"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-700">
            Subject
          </span>
          <input
            type="text"
            name="subject"
            value={formValues.subject}
            onChange={updateField}
            className="field-input"
            placeholder="Project inquiry"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-700">
            Message
          </span>
          <textarea
            name="message"
            value={formValues.message}
            onChange={updateField}
            className="field-input min-h-44 resize-y"
            placeholder="Tell me what you are building or what you want to discuss."
            required
          />
        </label>

        <button type="submit" className="button-primary">
          Draft Email
        </button>

        {status ? (
          <p className="rounded-[20px] border border-sky-200 bg-sky-50 px-4 py-3 text-sm text-sky-900">
            {status}
          </p>
        ) : null}
      </form>
    </section>
  );
}
