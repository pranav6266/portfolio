import Link from "next/link";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { profile } from "@/content/profile";

const nav = [
  { href: "/#work", label: "Work" },
  { href: "/#hackathons", label: "Hackathons" },
  { href: "/#experience", label: "Experience" },
  { href: "/#certifications", label: "Certifications" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="font-display text-lg font-semibold tracking-tight">
          {profile.name}
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-6 text-sm text-muted md:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-ink">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-1">
          <a href={profile.github} aria-label="GitHub" className="rounded-md p-2 text-muted transition-colors hover:text-ink">
            <GitHubIcon className="h-5 w-5" />
          </a>
          <a href={profile.linkedin} aria-label="LinkedIn" className="rounded-md p-2 text-muted transition-colors hover:text-ink">
            <LinkedInIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </header>
  );
}
