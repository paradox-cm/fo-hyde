"use client";
import React, { useState } from "react";

export default function JoinMailingList() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    // Here you would integrate with your backend or a service like Mailchimp
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-sm mx-auto flex flex-col gap-3 mt-6"
    >
      <label htmlFor="email" className="text-sm font-mono text-gray-700 dark:text-gray-200">
        Join the mailing list
      </label>
      <div className="flex gap-2">
        <input
          id="email"
          type="email"
          required
          placeholder="you@email.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="flex-1 px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black font-mono text-base bg-white dark:bg-gray-900 dark:border-gray-700 dark:text-gray-100"
        />
        <button
          type="submit"
          className="px-4 py-2 rounded bg-black text-white font-mono text-base hover:bg-gray-800 transition-colors"
        >
          Join
        </button>
      </div>
      {submitted && (
        <div className="text-green-600 font-mono text-sm mt-2">Thank you for joining!</div>
      )}
    </form>
  );
} 