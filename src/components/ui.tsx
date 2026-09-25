import type { ReactNode } from "react";

export function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal">{eyebrow}</p>
      <h2 id={`${id}-title`} className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      <div className="mt-10">{children}</div>
    </section>
  );
}

export function Tag({ children, tone = "plain" }: { children: ReactNode; tone?: "plain" | "teal" | "indigo" }) {
  const tones = {
    plain: "border-line text-muted",
    teal: "border-teal/30 text-teal",
    indigo: "border-indigo/30 text-indigo",
  };
  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 font-mono text-[11px] leading-5 ${tones[tone]}`}>
      {children}
    </span>
  );
}

export function ExternalLink({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}
