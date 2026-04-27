import { useEffect } from "react";
import { siteMeta } from "../data/sharedSiteData.js";

function resolveImageUrl(siteUrl, image) {
  if (!image) {
    return `${siteUrl}${siteMeta.defaultSocialImagePath}`;
  }

  if (/^https?:\/\//i.test(image)) {
    return image;
  }

  return `${siteUrl}${image.startsWith("/") ? "" : "/"}${image}`;
}

function ensureMeta(selector, attribute, value) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement("meta");
    const match = selector.match(/\[([^=]+)="([^"]+)"\]/);
    if (match) {
      element.setAttribute(match[1], match[2]);
    }
    document.head.appendChild(element);
  }
  element.setAttribute(attribute, value);
  return element;
}

function ensureLink(selector, attributes) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement("link");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
  return element;
}

function ensureCanonical(url) {
  return ensureLink('link[rel="canonical"]', { rel: "canonical", href: url });
}

function ensureOrRemoveRobots(content) {
  const existing = document.head.querySelector('meta[name="robots"]');

  if (!content) {
    if (existing) {
      existing.remove();
    }
    return null;
  }

  return ensureMeta('meta[name="robots"]', "content", content);
}

export default function Seo({ title, description, path = "/", image, jsonLd, noIndex = false }) {
  const jsonLdText = jsonLd ? JSON.stringify(jsonLd) : "";

  useEffect(() => {
    const siteUrl = siteMeta.siteUrl;
    const canonicalUrl = `${siteUrl}${path === "/" ? "" : path}`;
    const resolvedImage = resolveImageUrl(siteUrl, image);
    const robotsContent = noIndex ? "noindex, nofollow" : "index, follow";
    const previousTitle = document.title;
    const previousDescription = document.querySelector('meta[name="description"]')?.getAttribute("content") || "";
    const previousCanonical = document.head.querySelector('link[rel="canonical"]')?.getAttribute("href") || "";
    const previousRobots = document.querySelector('meta[name="robots"]')?.getAttribute("content") || "";
    const previousOgTitle = document.head.querySelector('meta[property="og:title"]')?.getAttribute("content") || "";
    const previousOgDescription = document.head.querySelector('meta[property="og:description"]')?.getAttribute("content") || "";
    const previousOgUrl = document.head.querySelector('meta[property="og:url"]')?.getAttribute("content") || "";
    const previousTwitterTitle = document.head.querySelector('meta[name="twitter:title"]')?.getAttribute("content") || "";
    const previousTwitterDescription = document.head.querySelector('meta[name="twitter:description"]')?.getAttribute("content") || "";
    const previousTwitterCard = document.head.querySelector('meta[name="twitter:card"]')?.getAttribute("content") || "";
    const previousOgImage = document.head.querySelector('meta[property="og:image"]')?.getAttribute("content") || "";
    const previousTwitterImage = document.head.querySelector('meta[name="twitter:image"]')?.getAttribute("content") || "";
    let structuredDataScript = null;
    const headAlreadyCurrent =
      previousTitle === title &&
      previousDescription === description &&
      previousCanonical === canonicalUrl &&
      previousRobots === robotsContent &&
      previousOgTitle === title &&
      previousOgDescription === description &&
      previousOgUrl === canonicalUrl &&
      previousTwitterTitle === title &&
      previousTwitterDescription === description &&
      previousTwitterCard === "summary_large_image" &&
      previousOgImage === resolvedImage &&
      previousTwitterImage === resolvedImage;

    document.head.querySelectorAll('script[type="application/ld+json"]').forEach((script) => {
      script.remove();
    });

    if (!headAlreadyCurrent) {
      document.title = title;
      ensureMeta('meta[name="description"]', "content", description);
      ensureMeta('meta[name="author"]', "content", siteMeta.brandName);
      ensureMeta('meta[name="publisher"]', "content", siteMeta.brandName);
      ensureMeta('meta[name="keywords"]', "content", siteMeta.seoKeywords);
      ensureMeta('meta[name="language"]', "content", "Turkish");
      ensureMeta('meta[http-equiv="content-language"]', "content", siteMeta.language);
      ensureMeta('meta[name="geo.region"]', "content", siteMeta.geoRegion);
      ensureMeta('meta[name="geo.placename"]', "content", siteMeta.geoPlacename);
      ensureMeta('meta[name="geo.position"]', "content", siteMeta.geoPosition);
      ensureMeta('meta[name="ICBM"]', "content", siteMeta.geoPosition.replace(";", ", "));

      ensureCanonical(canonicalUrl);
      ensureLink('link[rel="alternate"][hreflang="tr-TR"]', { rel: "alternate", hreflang: "tr-TR", href: canonicalUrl });
      ensureLink('link[rel="alternate"][hreflang="x-default"]', { rel: "alternate", hreflang: "x-default", href: canonicalUrl });
      ensureOrRemoveRobots(robotsContent);
      ensureMeta('meta[property="og:title"]', "content", title);
      ensureMeta('meta[property="og:description"]', "content", description);
      ensureMeta('meta[property="og:url"]', "content", canonicalUrl);
      ensureMeta('meta[property="og:locale"]', "content", siteMeta.locale);
      ensureMeta('meta[name="twitter:title"]', "content", title);
      ensureMeta('meta[name="twitter:description"]', "content", description);
      ensureMeta('meta[name="twitter:card"]', "content", "summary_large_image");

      ensureMeta('meta[property="og:image"]', "content", resolvedImage);
      ensureMeta('meta[name="twitter:image"]', "content", resolvedImage);
    }

    if (jsonLdText) {
      structuredDataScript = document.createElement("script");
      structuredDataScript.type = "application/ld+json";
      structuredDataScript.text = jsonLdText;
      structuredDataScript.setAttribute("data-seo-jsonld", "true");
      document.head.appendChild(structuredDataScript);
    }

    return () => {
      document.title = previousTitle;
      ensureMeta('meta[name="description"]', "content", previousDescription);
      ensureCanonical(previousCanonical);
      ensureOrRemoveRobots(previousRobots);
      ensureMeta('meta[property="og:title"]', "content", previousOgTitle);
      ensureMeta('meta[property="og:description"]', "content", previousOgDescription);
      ensureMeta('meta[property="og:url"]', "content", previousOgUrl);
      ensureMeta('meta[name="twitter:title"]', "content", previousTwitterTitle);
      ensureMeta('meta[name="twitter:description"]', "content", previousTwitterDescription);
      ensureMeta('meta[name="twitter:card"]', "content", previousTwitterCard);
      ensureMeta('meta[property="og:image"]', "content", previousOgImage);
      ensureMeta('meta[name="twitter:image"]', "content", previousTwitterImage);
      if (structuredDataScript) {
        structuredDataScript.remove();
      }
    };
  }, [title, description, path, image, jsonLdText, noIndex]);

  return null;
}
