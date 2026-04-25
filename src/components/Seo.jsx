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

function ensureCanonical(url) {
  let element = document.head.querySelector('link[rel="canonical"]');
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }
  element.setAttribute("href", url);
  return element;
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
    const robotsContent = noIndex ? "noindex, nofollow" : "";
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

    if (headAlreadyCurrent) {
      return undefined;
    }

    document.title = title;
    ensureMeta('meta[name="description"]', "content", description);

    ensureCanonical(canonicalUrl);
    ensureOrRemoveRobots(robotsContent);
    ensureMeta('meta[property="og:title"]', "content", title);
    ensureMeta('meta[property="og:description"]', "content", description);
    ensureMeta('meta[property="og:url"]', "content", canonicalUrl);
    ensureMeta('meta[name="twitter:title"]', "content", title);
    ensureMeta('meta[name="twitter:description"]', "content", description);
    ensureMeta('meta[name="twitter:card"]', "content", "summary_large_image");

    ensureMeta('meta[property="og:image"]', "content", resolvedImage);
    ensureMeta('meta[name="twitter:image"]', "content", resolvedImage);

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
