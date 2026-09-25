import Image from "next/image";
import Link from "next/link";
import { Tag } from "@/components/ui";
import { KIND_LABELS, type Project } from "@/content/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-colors hover:border-teal/60"
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-bg">
        {project.image ? (
          <Image
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            fill
            sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="flex h-full flex-col justify-between p-5">
            <p className="pr-28 font-mono text-[11px] uppercase leading-5 tracking-[0.16em] text-faint">{project.context}</p>
            <p className="font-display text-xl font-semibold leading-snug text-ink/80">{project.stack.slice(0, 3).join(" · ")}</p>
          </div>
        )}
        <span className="absolute right-3 top-3 rounded-full bg-surface/90 px-2.5 py-0.5 font-mono text-[11px] leading-5 text-teal shadow-sm">
          {project.award ?? project.status}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
          {KIND_LABELS[project.kind]} · {project.period}
        </p>
        <h3 className="mt-2 font-display text-xl font-semibold tracking-tight group-hover:text-teal">{project.title}</h3>
        <p className="mt-2 text-sm leading-6 text-muted">{project.summary}</p>
        <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
          {project.stack.slice(0, 4).map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>
      </div>
    </Link>
  );
}
