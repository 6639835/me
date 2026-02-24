import Link from "next/link";
import { profile } from "@/content/profile";
import { getSocialLinks } from "@/lib/helpers";

export function Footer() {
  const socialLinks = getSocialLinks();

  return (
    <footer className="border-t border-[var(--border-subtle)]">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-3 px-5 py-5 sm:flex-row sm:px-8 md:px-12 lg:px-16">
        <p className="font-mono text-xs text-[var(--text-faint)]">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.key}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-[var(--text-faint)] transition-colors hover:text-[var(--green)]"
            >
              {link.key}
            </a>
          ))}
          <a
            href={`mailto:${profile.contact.email}`}
            className="font-mono text-xs text-[var(--text-faint)] transition-colors hover:text-[var(--green)]"
          >
            email
          </a>
          <Link
            href="/"
            className="font-mono text-xs text-[var(--text-faint)] transition-colors hover:text-[var(--green)]"
          >
            cd ~/
          </Link>
        </div>
      </div>
    </footer>
  );
}
