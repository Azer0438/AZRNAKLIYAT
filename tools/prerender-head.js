import fs from "node:fs";
import path from "node:path";
import { blogPosts } from "../src/data/blogData.js";
import { faqs } from "../src/data/homeData.js";
import { enrichedCitySeoPages, enrichedSeoPages } from "../src/data/seoData.js";
import { enrichedServices } from "../src/data/servicesData.js";
import { siteMeta } from "../src/data/sharedSiteData.js";
import { createBlogPostingSchema, createBreadcrumbSchema, createFaqSchema, createLocalBusinessSchema, createServiceSchema } from "../src/lib/seoSchemas.js";

const siteUrl = (process.env.SITE_URL || siteMeta.siteUrl).replace(/\/$/, "");
const distDir = path.resolve(process.cwd(), "dist");
const templatePath = path.join(distDir, "index.html");

const blogCoverImages = [
  "/images/blog-kapak-1.webp",
  "/images/blog-kapak-2.webp",
  "/images/blog-kapak-3.webp",
  "/images/blog-kapak-4.webp",
  "/images/blog-kapak-5.webp"
];

const fallbackLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/bolgeler", label: "Hizmet Bölgeleri" },
  { href: "/sehirler", label: "Şehirlerarası Nakliyat" },
  { href: "/blog", label: "Blog" }
];

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function jsonLdTag(jsonLd) {
  return `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`;
}

function getFallbackTitle(meta) {
  if (meta.h1) {
    return meta.h1;
  }

  const titleParts = meta.title.split("|").map((part) => part.trim()).filter(Boolean);
  if (titleParts[0] === siteMeta.brandName && titleParts[1]) {
    return `${titleParts[0]} ${titleParts[1]}`;
  }

  return titleParts[0] || meta.title;
}

function buildStaticFallback(meta) {
  const title = escapeHtml(getFallbackTitle(meta));
  const description = escapeHtml(meta.description);
  const sectionTitle = meta.noIndex ? "Doğru sayfaya yönlenin" : "Kayseri nakliyat hizmetleri";
  const sectionCopy = meta.noIndex
    ? "Aradığınız sayfa taşınmış veya kaldırılmış olabilir. Ana sayfa, hizmetler ve iletişim bağlantıları üzerinden doğru sayfaya ulaşabilirsiniz."
    : "Kayseri evden eve nakliyat, asansörlü nakliyat, şehirlerarası nakliyat, ofis taşıma, paketleme ve eşya depolama süreçlerinde planlı ve iletişimi güçlü bir taşıma akışı sunuyoruz.";
  const links = fallbackLinks.map((link) => `<a href="${link.href}">${link.label}</a>`).join("\n          ");

  return `      <main class="seo-fallback" aria-label="${escapeHtml(siteMeta.brandName)}">
        <section>
          <p>AZR Evden Eve Nakliyat</p>
          <h1>${title}</h1>
          <p>${description}</p>
          <h2>${escapeHtml(sectionTitle)}</h2>
          <p>${escapeHtml(sectionCopy)}</p>
          <nav aria-label="Öne çıkan sayfalar">
          ${links}
          </nav>
        </section>
      </main>`;
}

function buildHead(meta) {
  const canonicalUrl = `${siteUrl}${meta.path === "/" ? "" : meta.path}`;
  const imagePath = meta.image || siteMeta.defaultSocialImagePath;
  const imageUrl = imagePath ? `${siteUrl}${imagePath}` : "";
  const tags = [
    `<link rel="canonical" href="${escapeHtml(canonicalUrl)}" />`,
    `<meta name="author" content="${escapeHtml(siteMeta.brandName)}" />`,
    `<meta name="publisher" content="${escapeHtml(siteMeta.brandName)}" />`,
    `<meta name="robots" content="${meta.noIndex ? "noindex, nofollow" : "index, follow"}" />`,
    `<meta property="og:title" content="${escapeHtml(meta.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(meta.description)}" />`,
    `<meta property="og:url" content="${escapeHtml(canonicalUrl)}" />`,
    `<meta property="og:type" content="${meta.ogType || "website"}" />`,
    `<meta property="og:site_name" content="${escapeHtml(siteMeta.brandName)}" />`,
    `<meta name="twitter:title" content="${escapeHtml(meta.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(meta.description)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`
  ];

  if (imageUrl) {
    tags.push(`<meta property="og:image" content="${escapeHtml(imageUrl)}" />`);
    tags.push(`<meta property="og:image:width" content="1200" />`);
    tags.push(`<meta property="og:image:height" content="630" />`);
    tags.push(`<meta name="twitter:image" content="${escapeHtml(imageUrl)}" />`);
  }

  if (meta.jsonLd) {
    const payload = Array.isArray(meta.jsonLd) ? meta.jsonLd : [meta.jsonLd];
    payload.forEach((item) => tags.push(jsonLdTag(item)));
  }

  return tags.join("\n    ");
}

function injectMeta(template, meta) {
  const htmlWithTitle = template.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(meta.title)}</title>`);
  const htmlWithDescription = htmlWithTitle.replace(
    /<meta\s+name="description"\s+content="[\s\S]*?"\s*\/>/,
    `<meta name="description" content="${escapeHtml(meta.description)}" />`
  );
  const htmlWithoutBaseMeta = htmlWithDescription
    .replace(/\s*<meta\s+name="author"\s+content="[\s\S]*?"\s*\/>/g, "")
    .replace(/\s*<meta\s+name="publisher"\s+content="[\s\S]*?"\s*\/>/g, "")
    .replace(/\s*<meta\s+name="robots"\s+content="[\s\S]*?"\s*\/>/g, "");
  const htmlWithFallback = htmlWithoutBaseMeta.replace(
    /<div id="root">[\s\S]*?<\/div>/,
    `<div id="root">\n${buildStaticFallback(meta)}\n    </div>`
  );

  return htmlWithFallback.replace("</head>", `    ${buildHead(meta)}\n  </head>`);
}

function writeRouteHtml(template, meta) {
  const outputPath =
    meta.path === "/"
      ? path.join(distDir, "index.html")
      : meta.path === "/404"
        ? path.join(distDir, "404.html")
        : path.join(distDir, meta.path.replace(/^\//, ""), "index.html");
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, injectMeta(template, meta), "utf8");
}

const homeJsonLd = [
  createLocalBusinessSchema({
    description: "Kayseri merkezli ev taşıma, ofis taşıma, asansörlü taşıma ve şehirlerarası nakliyat için planlı operasyon hizmetleri."
  }),
  createFaqSchema(faqs)
];

const routes = [
  {
    path: "/",
    title: "AZR Evden Eve Nakliyat | Kayseri Evden Eve Taşımacılık",
    description:
      "Kayseri merkezli AZR Evden Eve Nakliyat ile ev taşıma, ofis taşıma, asansörlü nakliyat ve şehirlerarası taşınmalarda planlı operasyon desteği alın.",
    jsonLd: homeJsonLd
  },
  {
    path: "/hizmetler",
    title: "AZR Evden Eve Nakliyat | Hizmetler",
    description: "Evden eve, ofis taşıma, asansörlü nakliyat, depolama ve şehirlerarası hizmet detayları.",
    jsonLd: createBreadcrumbSchema([
      { name: "Ana Sayfa", path: "/" },
      { name: "Hizmetler", path: "/hizmetler" }
    ])
  },
  {
    path: "/galeri",
    title: "AZR Evden Eve Nakliyat | Galeri",
    description: "AZR'nin saha düzenini, koruma yaklaşımını ve gerçek taşıma senaryolarını gösteren galeri bölümü."
  },
  {
    path: "/blog",
    title: "AZR Evden Eve Nakliyat | Blog",
    description: "Taşınma planlaması, hizmet seçimi ve nakliyat operasyonları hakkında rehber yazılar.",
    jsonLd: createBreadcrumbSchema([
      { name: "Ana Sayfa", path: "/" },
      { name: "Blog", path: "/blog" }
    ])
  },
  {
    path: "/bolgeler",
    title: "Hizmet Bölgeleri | AZR Evden Eve Nakliyat",
    description: "Kayseri'nin farklı bölgelerindeki yapı tipi ve taşıma ihtiyaçlarına göre hazırlanmış sayfaları inceleyin.",
    jsonLd: createBreadcrumbSchema([
      { name: "Ana Sayfa", path: "/" },
      { name: "Hizmet Bölgeleri", path: "/bolgeler" }
    ])
  },
  {
    path: "/sehirler",
    title: "Şehirlerarası Nakliyat Sayfaları | AZR Evden Eve Nakliyat",
    description: "Farklı şehir hatları için hazırlanan SEO odaklı içeriklerde rota bazlı taşınma ihtiyaçlarını inceleyin.",
    jsonLd: createBreadcrumbSchema([
      { name: "Ana Sayfa", path: "/" },
      { name: "Şehirlerarası", path: "/sehirler" }
    ])
  },
  {
    path: "/hakkimizda",
    title: "Hakkımızda | AZR Evden Eve Nakliyat",
    description: "AZR Evden Eve Nakliyat'ın çalışma yaklaşımını, hizmet anlayışını ve Kayseri merkezli operasyon disiplinini inceleyin.",
    jsonLd: createBreadcrumbSchema([
      { name: "Ana Sayfa", path: "/" },
      { name: "Hakkımızda", path: "/hakkimizda" }
    ])
  },
  {
    path: "/gizlilik-politikasi",
    title: "Gizlilik Politikası | AZR Evden Eve Nakliyat",
    description: "AZR Evden Eve Nakliyat web sitesinde işlenen temel kişisel veri ve iletişim bilgileriyle ilgili gizlilik politikasını inceleyin.",
    jsonLd: createBreadcrumbSchema([
      { name: "Ana Sayfa", path: "/" },
      { name: "Gizlilik Politikası", path: "/gizlilik-politikasi" }
    ])
  },
  {
    path: "/kvkk-aydinlatma-metni",
    title: "KVKK Aydınlatma Metni | AZR Evden Eve Nakliyat",
    description: "AZR Evden Eve Nakliyat tarafından teklif ve iletişim süreçlerinde paylaşılan kişisel verilerin işlenmesine ilişkin genel KVKK aydınlatma metni.",
    jsonLd: createBreadcrumbSchema([
      { name: "Ana Sayfa", path: "/" },
      { name: "KVKK Aydınlatma Metni", path: "/kvkk-aydinlatma-metni" }
    ])
  },
  {
    path: "/404",
    title: "Sayfa Bulunamadı | AZR Evden Eve Nakliyat",
    description: "Aradığınız sayfa kaldırılmış, taşınmış veya hatalı yazılmış olabilir. Ana hizmet sayfalarına buradan geri dönebilirsiniz.",
    noIndex: true
  },
  ...enrichedServices.map((service) => ({
    path: `/hizmetler/${service.slug}`,
    title: service.metaTitle || `${service.title} | AZR Evden Eve Nakliyat`,
    description: service.metaDescription || service.summary,
    jsonLd: [
      createBreadcrumbSchema([
        { name: "Ana Sayfa", path: "/" },
        { name: "Hizmetler", path: "/hizmetler" },
        { name: service.title, path: `/hizmetler/${service.slug}` }
      ]),
      createServiceSchema({
        name: service.title,
        description: service.summary,
        path: `/hizmetler/${service.slug}`,
        serviceType: service.title,
        areaServed: service.slug === "sehirlerarasi-nakliyat" ? "Türkiye" : "Kayseri"
      }),
      createFaqSchema(service.faqs)
    ]
  })),
  ...blogPosts.map((post, index) => ({
    path: `/blog/${post.slug}`,
    title: `${post.title} | AZR Evden Eve Nakliyat Blog`,
    description: post.excerpt,
    image: blogCoverImages[index % blogCoverImages.length],
    ogType: "article",
    jsonLd: [
      createBreadcrumbSchema([
        { name: "Ana Sayfa", path: "/" },
        { name: "Blog", path: "/blog" },
        { name: post.title, path: `/blog/${post.slug}` }
      ]),
      createBlogPostingSchema({
        post,
        path: `/blog/${post.slug}`,
        image: blogCoverImages[index % blogCoverImages.length]
      })
    ]
  })),
  ...enrichedSeoPages.map((page) => ({
    path: `/bolgeler/${page.slug}`,
    title: page.metaTitle || `${page.title} | AZR Evden Eve Nakliyat`,
    description: page.metaDescription || page.summary,
    jsonLd: [
      createBreadcrumbSchema([
        { name: "Ana Sayfa", path: "/" },
        { name: "Hizmet Bölgeleri", path: "/bolgeler" },
        { name: page.title, path: `/bolgeler/${page.slug}` }
      ]),
      createServiceSchema({
        name: page.title,
        description: page.summary,
        path: `/bolgeler/${page.slug}`,
        serviceType: page.focus,
        areaServed: `${page.district}, Kayseri`
      }),
      createFaqSchema(page.faqs)
    ]
  })),
  ...enrichedCitySeoPages.map((page) => ({
    path: `/sehirler/${page.slug}`,
    title: page.metaTitle || `${page.title} | AZR Evden Eve Nakliyat`,
    description: page.metaDescription || page.summary,
    jsonLd: [
      createBreadcrumbSchema([
        { name: "Ana Sayfa", path: "/" },
        { name: "Şehirlerarası", path: "/sehirler" },
        { name: page.title, path: `/sehirler/${page.slug}` }
      ]),
      createServiceSchema({
        name: page.title,
        description: page.summary,
        path: `/sehirler/${page.slug}`,
        serviceType: page.focus,
        areaServed: page.district
      }),
      createFaqSchema(page.faqs)
    ]
  }))
];

const template = fs.readFileSync(templatePath, "utf8");
routes.forEach((meta) => writeRouteHtml(template, meta));

console.log(`Generated static route heads for ${routes.length} routes`);
