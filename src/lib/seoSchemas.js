import { contactInfo, contactMeta, siteMeta } from "../data/sharedSiteData.js";

function getAbsoluteUrl(path = "/") {
  return `${siteMeta.siteUrl}${path === "/" ? "" : path}`;
}

export function createBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: getAbsoluteUrl(item.path)
    }))
  };
}

export function createFaqSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}

export function createLocalBusinessSchema({
  name = siteMeta.brandName,
  description,
  path = "/",
  areaServed = contactMeta.serviceRadius
} = {}) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name,
    description,
    url: getAbsoluteUrl(path),
    image: getAbsoluteUrl(siteMeta.logoPath),
    telephone: `+${contactInfo.callRaw}`,
    email: contactInfo.email,
    areaServed,
    address: {
      "@type": "PostalAddress",
      streetAddress: contactMeta.addressLine,
      addressLocality: contactMeta.city,
      addressCountry: "TR"
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: `+${contactInfo.callRaw}`,
      contactType: "customer service",
      areaServed: "TR",
      availableLanguage: ["tr"]
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        opens: "08:00",
        closes: "22:00"
      }
    ]
  };
}

export function createServiceSchema({
  name,
  description,
  path,
  serviceType,
  areaServed
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType: serviceType || name,
    areaServed,
    url: getAbsoluteUrl(path),
    provider: {
      "@type": "LocalBusiness",
      name: siteMeta.brandName,
      url: siteMeta.siteUrl,
      telephone: `+${contactInfo.callRaw}`,
      email: contactInfo.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: contactMeta.addressLine,
        addressLocality: contactMeta.city,
        addressCountry: "TR"
      }
    }
  };
}

export function createBlogPostingSchema({ post, path, image }) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      "@type": "Organization",
      name: siteMeta.brandName
    },
    publisher: {
      "@type": "Organization",
      name: siteMeta.brandName,
      logo: {
        "@type": "ImageObject",
        url: getAbsoluteUrl(siteMeta.logoPath)
      }
    },
    image: image ? getAbsoluteUrl(image) : undefined,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": getAbsoluteUrl(path)
    }
  };
}

export function getAbsoluteSchemaUrl(path = "/") {
  return getAbsoluteUrl(path);
}
