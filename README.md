# pranav6266 portfolio

Source for my portfolio site: projects, hackathons, experience and certifications.

Built with Next.js 16 (App Router, fully static), TypeScript and Tailwind CSS 4, and deployed on Vercel.

## Develop

```bash
npm ci
npm run dev
```

All content lives in [`src/content/`](src/content): `projects.ts` for projects and the hero's skill graph, `profile.ts` for experience, hackathons and certifications.
Project pages under `/projects/[slug]` are generated from `projects.ts` at build time.

## Checks

```bash
npm run lint
npm run build
```
