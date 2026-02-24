import { profile } from "@/content/profile";

export interface SocialLink {
  key: string;
  url: string;
}

export function getSocialLinks(): SocialLink[] {
  return [
    profile.contact.github && { key: "github", url: profile.contact.github },
    profile.contact.linkedin && { key: "linkedin", url: profile.contact.linkedin },
    profile.contact.blog && { key: "blog", url: profile.contact.blog },
    profile.contact.twitter && { key: "twitter", url: profile.contact.twitter },
  ].filter(Boolean) as SocialLink[];
}

export function asciiName(name: string): string[] {
  const top = "╔" + "═".repeat(name.length + 4) + "╗";
  const mid = "║  " + name.toUpperCase() + "  ║";
  const bot = "╚" + "═".repeat(name.length + 4) + "╝";
  return [top, mid, bot];
}
