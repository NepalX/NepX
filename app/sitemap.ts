import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://nepx.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    ["", 1],
    ["/schedule", 0.9],
    ["/mentors", 0.9],
    ["/resources", 0.8],
    ["/register", 0.8],
  ].map(([path, priority]) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: Number(priority),
  }));
}
