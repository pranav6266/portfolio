import { profile } from "@/content/profile";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          {profile.name} · {profile.location}
        </p>
        <p>
          Built with Next.js ·{" "}
          <a href={`${profile.github}/portfolio`} className="underline decoration-line underline-offset-4 hover:text-ink">
            source on GitHub
          </a>
        </p>
      </div>
    </footer>
  );
}
