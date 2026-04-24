import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import ResponsiveImage from "../components/ResponsiveImage";
import Seo from "../components/Seo";
import { createBreadcrumbSchema } from "../lib/seoSchemas";

const blogCoverImages = [
  "/images/blog-kapak-1.webp",
  "/images/blog-kapak-2.webp",
  "/images/blog-kapak-3.webp",
  "/images/blog-kapak-4.webp",
  "/images/blog-kapak-5.webp"
];

export default function BlogPage({ blogPosts }) {
  return (
    <>
      <Seo
        title="AZR Evden Eve Nakliyat | Blog"
        description="Taşınma planlaması, hizmet seçimi ve nakliyat operasyonları hakkında rehber yazılar."
        path="/blog"
        jsonLd={createBreadcrumbSchema([
          { name: "Ana Sayfa", path: "/" },
          { name: "Blog", path: "/blog" }
        ])}
      />
      <PageHero
        eyebrow="Blog"
        title="Taşınmayı daha bilinçli planlamanıza yardımcı içerikler"
        description="Saha deneyiminden beslenen kısa ama işe yarar rehberlerle doğru nakliyat kararını daha kolay verin."
      />
      <section className="section-block">
        <div className="section-shell blog-grid">
          {blogPosts.map((post, index) => (
            <article key={post.slug} className="preview-card reveal">
              <div className="blog-cover media-cover">
                <ResponsiveImage
                  src={blogCoverImages[index % blogCoverImages.length]}
                  alt={post.title}
                  loading={index === 0 ? "eager" : "lazy"}
                  fetchPriority={index === 0 ? "high" : undefined}
                />
                <span>{post.cover?.label || post.category}</span>
              </div>
              <span className="preview-tag">{post.category}</span>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <div className="post-meta">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
              <Link to={`/blog/${post.slug}`}>Yazıyı oku</Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
