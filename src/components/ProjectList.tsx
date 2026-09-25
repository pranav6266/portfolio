"use client";

import Link from "next/link";
import { useState } from "react";
import { Tag } from "@/components/ui";
import { KIND_LABELS, TRACK_LABELS, type Project, type Track } from "@/content/projects";

const FILTERS: (Track | "all")[] = ["all", "ai", "fullstack", "java", "mobile", "devops"];

/** Compact, filterable list of the projects that are not featured as cards. */
export function ProjectList({ projects }: { projects: Project[] }) {
  const [track, setTrack] = useState<Track | "all">("all");
  const shown = track === "all" ? projects : projects.filter((p) => p.tracks.includes(track));

  return (
    <div>
      <div role="group" aria-label="Filter by focus area" className="flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            aria-pressed={track === f}
            onClick={() => setTrack(f)}
            className={`rounded-full border px-3 py-1 text-sm transition-colors ${
              track === f ? "border-ink bg-ink text-bg" : "border-line text-muted hover:text-ink"
            }`}
          >
            {f === "all" ? "All" : TRACK_LABELS[f]}
          </button>
        ))}
      </div>

      <ul className="mt-6 divide-y divide-line border-y border-line">
        {shown.map((project) => (
          <li key={project.slug}>
            <Link
              href={`/projects/${project.slug}`}
              className="group grid gap-2 py-4 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-6"
            >
              <div>
                <p className="font-display text-lg font-semibold tracking-tight group-hover:text-teal">
                  {project.title}
                  <span className="ml-3 font-mono text-[11px] font-normal uppercase tracking-[0.16em] text-muted">
                    {KIND_LABELS[project.kind]} · {project.period}
                  </span>
                </p>
                <p className="mt-1 text-sm text-muted">{project.summary}</p>
              </div>
              <div className="flex flex-wrap gap-1.5 sm:justify-end">
                <Tag tone="teal">{project.award ?? project.status}</Tag>
                {project.stack.slice(0, 2).map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>
            </Link>
          </li>
        ))}
        {shown.length === 0 && <li className="py-6 text-sm text-muted">No other projects in this area. The featured ones above cover it.</li>}
      </ul>
    </div>
  );
}
