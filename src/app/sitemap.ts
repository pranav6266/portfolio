import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";

const base = process.env.SITE_URL ?? "https://pranavchandrashekar.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base, priority: 1 },
    ...projects.map((project) => ({ url: `${base}/projects/${project.slug}`, priority: 0.7 })),
  ];
}
