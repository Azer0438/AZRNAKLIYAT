import fs from "node:fs";
import path from "node:path";
import { blogPosts } from "../src/data/blogData.js";
import { enrichedCitySeoPages, enrichedSeoPages } from "../src/data/seoData.js";
import { enrichedServices } from "../src/data/servicesData.js";
import { siteMeta } from "../src/data/sharedSiteData.js";

const siteUrl = (process.env.SITE_URL || siteMeta.siteUrl).replace(/\/$/, "");

const routes = [
  { path: "/", lastmod: siteMeta.contentUpdatedAt },
  { path: "/hizmetler", lastmod: siteMeta.contentUpdatedAt },
  { path: "/galeri", lastmod: siteMeta.contentUpdatedAt },
  { path: "/blog", lastmod: siteMeta.contentUpdatedAt },
  { path: "/bolgeler", lastmod: siteMeta.contentUpdatedAt },
  { path: "/sehirler", lastmod: siteMeta.contentUpdatedAt },
  { path: "/hakkimizda", lastmod: siteMeta.contentUpdatedAt },
  { path: "/gizlilik-politikasi", lastmod: siteMeta.contentUpdatedAt },
  { path: "/kvkk-aydinlatma-metni", lastmod: siteMeta.contentUpdatedAt },
  ...enrichedServices.map((item) => ({ path: `/hizmetler/${item.slug}`, lastmod: item.updatedAt })),
  ...blogPosts.map((item) => ({ path: `/blog/${item.slug}`, lastmod: item.updatedAt || item.publishedAt })),
  ...enrichedSeoPages.map((item) => ({ path: `/bolgeler/${item.slug}`, lastmod: item.updatedAt })),
  ...enrichedCitySeoPages.map((item) => ({ path: `/sehirler/${item.slug}`, lastmod: item.updatedAt }))
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    ({ path: routePath, lastmod }) => `  <url>
    <loc>${encodeURI(`${siteUrl}${routePath}`)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${routePath === "/" ? "1.0" : "0.8"}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

const publicDir = path.resolve(process.cwd(), "public");
fs.mkdirSync(publicDir, { recursive: true });
fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemap, "utf8");
fs.writeFileSync(path.join(publicDir, "robots.txt"), robots, "utf8");

console.log(`Generated sitemap.xml and robots.txt for ${siteUrl}`);
