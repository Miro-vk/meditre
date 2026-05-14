"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormValues } from "@/lib/validation";
import { contactOptions } from "@/lib/data";

type SubmitState = {
  loading: boolean;
  success: string | null;
  error: string | null;
};

const defaultValues: ContactFormValues = {
  fullName: "",
  email: "",
  destination: "not-sure-yet",
  travelDates: "",
  travelers: "1-2",
  experience: "private-custom-itinerary",
  budget: "1500-3000",
  message: "",
};

export default function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>({
    loading: false,
    success: null,
    error: null,
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues,
  });

  const onSubmit = async (values: ContactFormValues) => {
    setSubmitState({ loading: true, success: null, error: null });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Something went wrong.");
      }

      reset(defaultValues);
      setSubmitState({
        loading: false,
        success: "Thanks. We received your request and will reply soon.",
        error: null,
      });
    } catch {
      setSubmitState({
        loading: false,
        success: null,
        error: "We could not send your request right now. Please try again.",
      });
    }
  };

  const fieldClassName =
    "mt-2 w-full rounded-2xl border border-charcoal/10 bg-white px-4 py-3 text-sm text-charcoal outline-none transition focus:border-deep-blue focus:ring-2 focus:ring-deep-blue/10";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 rounded-[2rem] border border-white/80 bg-white/90 p-6 shadow-[0_18px_50px_rgba(23,50,77,0.08)] sm:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block text-sm font-medium text-charcoal">
          Full Name
          <input type="text" autoComplete="name" {...register("fullName")} className={fieldClassName} />
          {errors.fullName ? <span className="mt-2 block text-sm text-terracotta">{errors.fullName.message}</span> : null}
        </label>
        <label className="block text-sm font-medium text-charcoal">
          Email
          <input type="email" autoComplete="email" {...register("email")} className={fieldClassName} />
          {errors.email ? <span className="mt-2 block text-sm text-terracotta">{errors.email.message}</span> : null}
        </label>
        <label className="block text-sm font-medium text-charcoal">
          Destination of Interest
          <select {...register("destination")} className={fieldClassName}>
            {contactOptions.destinations.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.destination ? <span className="mt-2 block text-sm text-terracotta">{errors.destination.message}</span> : null}
        </label>
        <label className="block text-sm font-medium text-charcoal">
          Preferred Travel Dates
          <input type="text" placeholder="e.g. June 2026" {...register("travelDates")} className={fieldClassName} />
          {errors.travelDates ? <span className="mt-2 block text-sm text-terracotta">{errors.travelDates.message}</span> : null}
        </label>
        <label className="block text-sm font-medium text-charcoal">
          Number of Travelers
          <select {...register("travelers")} className={fieldClassName}>
            {contactOptions.travelers.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-medium text-charcoal">
          Type of Experience
          <select {...register("experience")} className={fieldClassName}>
            {contactOptions.experiences.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-medium text-charcoal">
          Approximate Budget
          <select {...register("budget")} className={fieldClassName}>
            {contactOptions.budgets.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label className="block text-sm font-medium text-charcoal">
        Message / Ideal Trip Description
        <textarea rows={6} {...register("message")} className={fieldClassName} />
        {errors.message ? <span className="mt-2 block text-sm text-terracotta">{errors.message.message}</span> : null}
      </label>
      {submitState.success ? <p className="rounded-2xl bg-olive/10 px-4 py-3 text-sm text-olive">{submitState.success}</p> : null}
      {submitState.error ? <p className="rounded-2xl bg-terracotta/10 px-4 py-3 text-sm text-terracotta">{submitState.error}</p> : null}
      <button
        type="submit"
        disabled={submitState.loading}
        className="inline-flex h-12 items-center justify-center rounded-full bg-deep-blue px-6 text-sm font-semibold text-ivory transition-transform duration-200 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitState.loading ? "Sending..." : "Send Request"}
      </button>
    </form>
  );
}