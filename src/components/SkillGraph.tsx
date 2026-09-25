"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { featuredProjects, graphEdges, graphSkills, type GraphSkill } from "@/content/projects";

type Active = { kind: "skill"; id: GraphSkill } | { kind: "project"; id: string } | null;

const W = 760;
const H = 440;
const SKILL_X = 150;
const PROJECT_X = 500;

function spread(count: number, top: number, bottom: number) {
  const step = (bottom - top) / Math.max(count - 1, 1);
  return Array.from({ length: count }, (_, i) => top + i * step);
}

function isLinked(active: Active, skill: GraphSkill, slug: string) {
  if (!active) return false;
  return active.kind === "skill" ? active.id === skill : active.id === slug;
}

/**
 * Skills on the left, featured projects on the right, joined when the project really uses the skill.
 * Hover or focus a node to trace its connections. With no interaction it cycles through projects.
 */
export function SkillGraph() {
  const projects = useMemo(() => featuredProjects.filter((p) => graphEdges[p.slug]), []);
  const [hover, setHover] = useState<Active>(null);
  const [cycle, setCycle] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (hover || reducedMotion) return;
    const timer = window.setInterval(() => setCycle((c) => (c + 1) % projects.length), 2600);
    return () => window.clearInterval(timer);
  }, [hover, reducedMotion, projects.length]);

  const active: Active = hover ?? (reducedMotion ? null : { kind: "project", id: projects[cycle].slug });
  const skillY = spread(graphSkills.length, 36, H - 36);
  const projectY = spread(projects.length, 60, H - 60);

  const skillLit = (skill: GraphSkill) => projects.some((p) => graphEdges[p.slug].includes(skill) && isLinked(active, skill, p.slug));
  const projectLit = (slug: string) => graphEdges[slug].some((skill) => isLinked(active, skill, slug));

  return (
    <figure className="w-full">
      {/* Desktop and tablet: the graph */}
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="hidden w-full md:block"
        role="group"
        aria-label="Skills used in each featured project"
        onMouseLeave={() => setHover(null)}
      >
        {projects.map((project, pi) =>
          graphEdges[project.slug].map((skill) => {
            const si = graphSkills.indexOf(skill);
            const lit = isLinked(active, skill, project.slug);
            const y1 = skillY[si];
            const y2 = projectY[pi];
            return (
              <path
                key={`${project.slug}-${skill}`}
                d={`M ${SKILL_X} ${y1} C ${(SKILL_X + PROJECT_X) / 2} ${y1}, ${(SKILL_X + PROJECT_X) / 2} ${y2}, ${PROJECT_X} ${y2}`}
                fill="none"
                stroke={lit ? "var(--teal)" : "var(--edge)"}
                strokeWidth={lit ? 2 : 1}
                opacity={active && !lit ? 0.35 : 1}
                style={{ transition: "stroke 300ms, stroke-width 300ms, opacity 300ms" }}
              />
            );
          }),
        )}

        {graphSkills.map((skill, i) => {
          const lit = skillLit(skill);
          return (
            <g
              key={skill}
              tabIndex={0}
              role="button"
              aria-label={`${skill}: highlight projects that use it`}
              onMouseEnter={() => setHover({ kind: "skill", id: skill })}
              onFocus={() => setHover({ kind: "skill", id: skill })}
              onBlur={() => setHover(null)}
              className="cursor-default outline-none"
            >
              <text
                x={SKILL_X - 16}
                y={skillY[i]}
                textAnchor="end"
                dominantBaseline="middle"
                className="font-mono"
                fontSize="15"
                fill={lit ? "var(--ink)" : "var(--muted)"}
                style={{ transition: "fill 300ms" }}
              >
                {skill}
              </text>
              <circle cx={SKILL_X} cy={skillY[i]} r={5} fill="var(--surface)" stroke={lit ? "var(--teal)" : "var(--faint)"} strokeWidth={2} />
            </g>
          );
        })}

        {projects.map((project, i) => {
          const lit = projectLit(project.slug);
          return (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              aria-label={`${project.title}: uses ${graphEdges[project.slug].join(", ")}`}
              onMouseEnter={() => setHover({ kind: "project", id: project.slug })}
              onFocus={() => setHover({ kind: "project", id: project.slug })}
              onBlur={() => setHover(null)}
            >
              <circle cx={PROJECT_X} cy={projectY[i]} r={7} fill={lit ? "var(--teal)" : "var(--surface)"} stroke={lit ? "var(--teal)" : "var(--faint)"} strokeWidth={2} style={{ transition: "fill 300ms" }} />
              <text
                x={PROJECT_X + 18}
                y={projectY[i]}
                dominantBaseline="middle"
                className="font-display"
                fontSize="17"
                fontWeight={600}
                fill={lit ? "var(--ink)" : "var(--muted)"}
                style={{ transition: "fill 300ms" }}
              >
                {project.shortTitle ?? project.title}
              </text>
            </Link>
          );
        })}
      </svg>

      {/* Phones: tap a project to see its stack */}
      <div className="md:hidden">
        <div className="flex flex-wrap gap-2">
          {projects.map((project) => {
            const selected = active?.kind === "project" && active.id === project.slug;
            return (
              <button
                key={project.slug}
                type="button"
                aria-pressed={selected}
                onClick={() => setHover({ kind: "project", id: project.slug })}
                className={`rounded-full border px-3 py-1.5 text-sm transition-colors ${
                  selected ? "border-teal bg-teal text-surface" : "border-line bg-surface text-muted"
                }`}
              >
                {project.shortTitle ?? project.title}
              </button>
            );
          })}
        </div>
        <p className="mt-4 font-mono text-xs text-muted">
          {active?.kind === "project" ? graphEdges[active.id].join("  ·  ") : "Tap a project to see its stack"}
        </p>
      </div>

      <figcaption className="mt-3 hidden font-mono text-xs text-muted md:block">
        Hover a project or skill to trace the connections. Click a project to read about it.
      </figcaption>
    </figure>
  );
}
