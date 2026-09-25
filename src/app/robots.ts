import type { MetadataRoute } from "next";

const base = process.env.SITE_URL ?? "https://pranavchandrashekar.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/" }, sitemap: `${base}/sitemap.xml` };
}
