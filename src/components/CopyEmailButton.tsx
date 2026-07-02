"use client";

import { useState } from "react";

export default function CopyEmailButton({
  email,
  label,
}: {
  email: string;
  label: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable — fail silently.
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="group inline-flex items-center gap-3 rounded-full border border-border bg-surface px-5 py-3 text-sm text-foreground transition-colors hover:border-accent-via/60 hover:bg-surface-hover cursor-pointer"
    >
      <span>{copied ? "Copied to clipboard!" : label}</span>
      <span className="text-gradient font-medium">{email}</span>
    </button>
  );
}
