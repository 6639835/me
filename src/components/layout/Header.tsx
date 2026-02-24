"use client";

import Link from "next/link";
import { profile } from "@/content/profile";
import { useTheme } from "@/components/ThemeProvider";

export function Header() {
  const { theme, toggle } = useTheme();

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg-header)] backdrop-blur-md">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-5 py-2.5 sm:px-8 md:px-12 lg:px-16">
        <Link
          href="/"
          className="font-mono text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--green)]"
        >
          <span className="text-[var(--green)]">~</span>/
          {profile.name.toLowerCase().replace(/\s/g, "")}
        </Link>
        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="rounded border border-[var(--border)] px-2 py-1 font-mono text-xs text-[var(--text-faint)] transition-colors hover:border-[var(--border-accent)] hover:text-[var(--text-hover)]"
          >
            {theme === "dark" ? "light" : "dark"}
          </button>
          <Link
            href="/resume"
            className="hidden font-mono text-xs text-[var(--text-faint)] transition-colors hover:text-[var(--text-hover)] sm:inline"
          >
            ./resume
          </Link>
          <a
            href={profile.resumeFile}
            download
            className="inline-flex items-center gap-1.5 rounded border border-[var(--green-border)] bg-[var(--green-bg)] px-3 py-1 font-mono text-xs text-[var(--green)] transition-colors hover:bg-[var(--green-bg-hover)]"
          >
            <span className="opacity-60">↓</span> resume.pdf
          </a>
        </div>
      </nav>
    </header>
  );
}
