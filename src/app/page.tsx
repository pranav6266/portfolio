import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CertificateIcon, GitHubIcon, LinkedInIcon, MailIcon } from "@/components/icons";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectList } from "@/components/ProjectList";
import { SkillGraph } from "@/components/SkillGraph";
import { ExternalLink, Section, Tag } from "@/components/ui";
import { certifications, education, experience, hackathons, profile, skills } from "@/content/profile";
import { featuredProjects, getProject, projects } from "@/content/projects";

export default function Home() {
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <>
      {/* Hero */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-16 pt-14 sm:px-6 md:grid-cols-[1fr_1.1fr] md:pt-20">
        <div>
          <Image
            src="/avatar.jpg"
            alt={`Photo of ${profile.name}`}
            width={72}
            height={72}
            priority
            className="mb-6 h-[72px] w-[72px] rounded-full border border-line object-cover"
          />
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal">
            {profile.role} · {profile.location.split(",")[0]}
            <span className="hidden sm:inline"> · class of 2027</span>
          </p>
          <h1 className="mt-4 font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl">
            I build AI systems that ship.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-muted">{profile.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#work"
              className="rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-85"
            >
              See my work
            </Link>
            <ExternalLink
              href={profile.github}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-medium transition-colors hover:border-ink"
            >
              <GitHubIcon /> GitHub
            </ExternalLink>
            <ExternalLink
              href={profile.linkedin}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-medium transition-colors hover:border-ink"
            >
              <LinkedInIcon /> LinkedIn
            </ExternalLink>
          </div>
          <p className="mt-8 flex items-center gap-2 text-sm text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-60 motion-reduce:hidden" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
            </span>
            {profile.lookingFor}
          </p>
        </div>
        <SkillGraph />
      </section>

      {/* Work */}
      <div className="border-t border-line bg-surface/40">
        <Section id="work" eyebrow="Selected work" title="Things I've built">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <h3 className="mt-16 font-display text-2xl font-semibold tracking-tight">More projects</h3>
          <p className="mt-2 text-muted">Hackathon builds, client work, internship projects and apps from coursework.</p>
          <div className="mt-6">
            <ProjectList projects={otherProjects} />
          </div>
        </Section>
      </div>

      {/* Hackathons */}
      <Section id="hackathons" eyebrow="Hackathons & awards" title="Built under a deadline">
        <ol className="relative border-l border-line">
          {hackathons.map((h) => {
            const project = h.project ? getProject(h.project) : undefined;
            return (
              <li key={`${h.date}-${h.event}`} className="relative pb-10 pl-8 last:pb-0">
                <span
                  className={`absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 ${
                    h.highlight ? "border-teal bg-teal" : "border-faint bg-bg"
                  }`}
                  aria-hidden="true"
                />
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted">{h.date}</p>
                <p className="mt-1 font-display text-lg font-semibold tracking-tight">{h.event}</p>
                <p className={`mt-1 text-sm ${h.highlight ? "font-medium text-teal" : "text-muted"}`}>
                  {project ? (
                    <Link href={`/projects/${project.slug}`} className="underline decoration-line underline-offset-4 hover:text-ink">
                      {h.result}
                    </Link>
                  ) : (
                    h.result
                  )}
                </p>
              </li>
            );
          })}
        </ol>
      </Section>

      {/* Experience */}
      <div className="border-y border-line bg-surface/40">
        <Section id="experience" eyebrow="Experience & education" title="Where I've worked and studied">
          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
            <ol className="space-y-10">
              {experience.map((job) => (
                <li key={job.org}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="font-display text-xl font-semibold tracking-tight">{job.org}</h3>
                    <p className="font-mono text-xs text-muted">{job.period}</p>
                  </div>
                  <p className="mt-1 text-sm text-muted">
                    {job.role} · {job.place}
                  </p>
                  <ul className="mt-3 space-y-2 text-sm leading-6">
                    {job.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-teal" aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
            <div className="space-y-8">
              <div className="rounded-2xl border border-line bg-surface p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">Education</p>
                <h3 className="mt-2 font-display text-lg font-semibold tracking-tight">{education.school}</h3>
                <p className="mt-1 text-sm text-muted">{education.degree}</p>
                <p className="mt-3 font-mono text-xs text-muted">
                  {education.period} · {education.grade}
                </p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">Tools I use</p>
                <dl className="mt-4 space-y-4">
                  {Object.entries(skills).map(([group, items]) => (
                    <div key={group}>
                      <dt className="text-sm font-medium">{group}</dt>
                      <dd className="mt-2 flex flex-wrap gap-1.5">
                        {items.map((item) => (
                          <Tag key={item}>{item}</Tag>
                        ))}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </Section>
      </div>

      {/* Certifications */}
      <Section id="certifications" eyebrow="Certifications" title="Courses and credentials">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <li key={cert.name} className="flex items-center gap-4 rounded-2xl border border-line bg-surface p-4">
              {cert.badge ? (
                <Image src={cert.badge} alt="" width={48} height={48} className="h-12 w-12 shrink-0 object-contain" />
              ) : (
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-bg text-faint" aria-hidden="true">
                  <CertificateIcon />
                </span>
              )}
              <div className="min-w-0">
                <p className="text-sm font-medium leading-5">{cert.name}</p>
                <p className="mt-1 font-mono text-[11px] text-muted">
                  {cert.issuer} · {cert.date}
                  {cert.url && (
                    <>
                      {" · "}
                      <ExternalLink href={cert.url} className="inline-flex items-center gap-0.5 text-teal hover:underline">
                        verify <ArrowUpRight className="h-3 w-3" />
                      </ExternalLink>
                    </>
                  )}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      {/* Contact */}
      <div className="border-t border-line bg-surface/40">
        <section id="contact" aria-labelledby="contact-title" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal">Contact</p>
          <h2 id="contact-title" className="mt-2 max-w-2xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Hiring for AI, backend or full-stack? Let&apos;s talk.
          </h2>
          <p className="mt-4 max-w-xl text-muted">{profile.lookingFor}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-85"
            >
              <MailIcon /> {profile.email}
            </a>
            <ExternalLink
              href={profile.linkedin}
              className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-medium transition-colors hover:border-ink"
            >
              <LinkedInIcon /> Message on LinkedIn
            </ExternalLink>
          </div>
        </section>
      </div>
    </>
  );
}
