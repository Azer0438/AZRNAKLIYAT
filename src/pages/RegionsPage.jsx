import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import Seo from "../components/Seo";
import { createBreadcrumbSchema } from "../lib/seoSchemas";

export default function RegionsPage({ seoPages, seoTitle, heroEyebrow, heroTitle, heroDescription, basePath, breadcrumbName }) {
  return (
    <>
      <Seo
        title={seoTitle}
        description={heroDescription}
        path={basePath}
        jsonLd={createBreadcrumbSchema([
          { name: "Ana Sayfa", path: "/" },
          { name: breadcrumbName, path: basePath }
        ])}
      />
      <PageHero eyebrow={heroEyebrow} title={heroTitle} description={heroDescription} />
      <section className="section-block">
        <div className="section-shell blog-grid">
          {seoPages.map((page) => (
            <article key={page.slug} className="preview-card reveal">
              <span className="preview-tag">{page.district}</span>
              <h3>{page.title}</h3>
              <p>{page.summary}</p>
              <Link to={`${basePath}/${page.slug}`}>Sayfayı aç</Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
