import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, GitHubIcon } from "@/components/icons";
import { ExternalLink, Tag } from "@/components/ui";
import { KIND_LABELS, getProject, projects } from "@/content/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export const dynamicParams = false;

export async function generateMetadata(props: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    openGraph: { title: project.title, description: project.summary, images: project.image ? [project.image] : undefined },
  };
}

export default async function ProjectPage(props: PageProps<"/projects/[slug]">) {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.indexOf(project);
  const next = projects[(index + 1) % projects.length];

  return (
    <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <Link href="/#work" className="font-mono text-xs uppercase tracking-[0.16em] text-muted hover:text-ink">
        ← All projects
      </Link>

      <header className="mt-8">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-teal">
          {KIND_LABELS[project.kind]} · {project.period}
        </p>
        <h1 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">{project.title}</h1>
        <p className="mt-4 text-lg leading-8 text-muted">{project.summary}</p>

        <dl className="mt-8 grid gap-6 border-y border-line py-6 text-sm sm:grid-cols-3">
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">Context</dt>
            <dd className="mt-1">{project.context}</dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">Status</dt>
            <dd className="mt-1">{project.award ?? project.status}</dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">Links</dt>
            <dd className="mt-1 flex flex-wrap gap-x-4 gap-y-1">
              {project.links?.live && (
                <ExternalLink href={project.links.live} className="inline-flex items-center gap-1 text-teal hover:underline">
                  Live site <ArrowUpRight />
                </ExternalLink>
              )}
              {project.links?.repo && (
                <ExternalLink href={project.links.repo} className="inline-flex items-center gap-1.5 text-teal hover:underline">
                  <GitHubIcon className="h-3.5 w-3.5" /> {project.links.repoLabel ?? "Source code"}
                </ExternalLink>
              )}
              {!project.links?.live && !project.links?.repo && (
                <span className="text-muted">{project.kind === "client" ? "Client code is private" : "Code is private"}</span>
              )}
            </dd>
          </div>
        </dl>
      </header>

      {project.image && (
        <div className="relative mt-10 aspect-[16/10] overflow-hidden rounded-2xl border border-line bg-surface">
          <Image
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            fill
            priority
            sizes="(min-width: 896px) 848px, 100vw"
            className="object-cover object-top"
          />
        </div>
      )}

      <section className="mt-12">
        <h2 className="font-display text-2xl font-semibold tracking-tight">The problem</h2>
        <p className="mt-3 leading-7 text-muted">{project.problem}</p>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-2xl font-semibold tracking-tight">What it does</h2>
        <ul className="mt-4 space-y-3 leading-7">
          {project.highlights.map((point) => (
            <li key={point} className="flex gap-3">
              <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" aria-hidden="true" />
              {point}
            </li>
          ))}
        </ul>
      </section>

      {project.contribution && (
        <section className="mt-10 rounded-2xl border border-line bg-surface p-6">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">My part of the team effort</h2>
          <p className="mt-2 leading-7">{project.contribution}</p>
        </section>
      )}

      <section className="mt-10">
        <h2 className="font-display text-2xl font-semibold tracking-tight">Built with</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>
      </section>

      <nav aria-label="Next project" className="mt-16 border-t border-line pt-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">Next project</p>
        <Link href={`/projects/${next.slug}`} className="mt-2 inline-block font-display text-2xl font-semibold tracking-tight hover:text-teal">
          {next.title} →
        </Link>
      </nav>
    </article>
  );
}
