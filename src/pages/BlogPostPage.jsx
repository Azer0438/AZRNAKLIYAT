import { Link, Navigate, useParams } from "react-router-dom";
import PageHero from "../components/PageHero";
import ResponsiveImage from "../components/ResponsiveImage";
import Seo from "../components/Seo";
import { createBlogPostingSchema, createBreadcrumbSchema } from "../lib/seoSchemas";

const blogCoverImages = [
  "/images/blog-kapak-1.webp",
  "/images/blog-kapak-2.webp",
  "/images/blog-kapak-3.webp",
  "/images/blog-kapak-4.webp",
  "/images/blog-kapak-5.webp"
];

const relatedContentRules = [
  {
    match: /asansor/,
    serviceSlug: "asansorlu-tasima",
    pageSlug: "kocasinan-asansorlu-tasima",
    pageBasePath: "/bolgeler",
    pageLabel: "İlgili bölge"
  },
  {
    match: /ofis/,
    serviceSlug: "ofis-ve-is-yeri-tasima",
    pageSlug: "melikgazi-ofis-tasima",
    pageBasePath: "/bolgeler",
    pageLabel: "İlgili bölge"
  },
  {
    match: /depolama|tadilat/,
    serviceSlug: "esya-depolama",
    pageSlug: "develi-esya-depolama",
    pageBasePath: "/bolgeler",
    pageLabel: "İlgili bölge"
  },
  {
    match: /sehirlerarasi|parca-esya/,
    serviceSlug: "sehirlerarasi-nakliyat",
    pageSlug: "ankara-kayseri-sehirlerarasi-nakliyat",
    pageBasePath: "/sehirler",
    pageLabel: "İlgili rota"
  },
  {
    match: /paketleme|beyaz-esya/,
    serviceSlug: "paketleme-ve-montaj",
    pageSlug: "talas-evden-eve-nakliyat",
    pageBasePath: "/bolgeler",
    pageLabel: "İlgili bölge"
  }
];

function getRelatedEntries(post, services, seoPages, citySeoPages) {
  const rule = relatedContentRules.find((item) => item.match.test(post.slug)) || {
    serviceSlug: "evden-eve-tasimacilik",
    pageSlug: "talas-evden-eve-nakliyat",
    pageBasePath: "/bolgeler",
    pageLabel: "İlgili bölge"
  };

  const service = services.find((item) => item.slug === rule.serviceSlug);
  const pageList = rule.pageBasePath === "/sehirler" ? citySeoPages : seoPages;
  const page = pageList.find((item) => item.slug === rule.pageSlug);

  return { service, page, pageBasePath: rule.pageBasePath, pageLabel: rule.pageLabel };
}

export default function BlogPostPage({ blogPosts, services, seoPages, citySeoPages }) {
  const { slug } = useParams();
  const postIndex = blogPosts.findIndex((item) => item.slug === slug);
  const post = blogPosts[postIndex];

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const coverImage = blogCoverImages[postIndex % blogCoverImages.length];
  const relatedEntries = getRelatedEntries(post, services, seoPages, citySeoPages);

  return (
    <>
      <Seo
        title={`${post.title} | AZR Evden Eve Nakliyat Blog`}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        image={coverImage}
        jsonLd={[
          createBreadcrumbSchema([
            { name: "Ana Sayfa", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` }
          ]),
          createBlogPostingSchema({
            post,
            path: `/blog/${post.slug}`,
            image: coverImage
          })
        ]}
      />
      <PageHero eyebrow={post.category} title={post.title} description={post.excerpt} compact />
      <section className="section-block">
        <div className="section-shell article-layout">
          <div className="blog-cover large reveal media-cover">
            <ResponsiveImage src={coverImage} alt={post.title} loading="eager" fetchPriority="high" />
            <span>{post.cover?.label || post.category}</span>
          </div>
          <div className="post-meta reveal">
            <span>{post.date}</span>
            <span>{post.readTime}</span>
          </div>
          {post.sections.map((section) => (
            <article key={section.heading} className="detail-card reveal">
              <h2>{section.heading}</h2>
              <p>{section.text}</p>
            </article>
          ))}
          <div className="reveal">
            <p className="eyebrow">İlgili Sayfalar</p>
            <div className="preview-grid">
              {relatedEntries.service ? (
                <article className="preview-card">
                  <span className="preview-tag">İlgili hizmet</span>
                  <h3>{relatedEntries.service.title}</h3>
                  <p>{relatedEntries.service.summary}</p>
                  <Link to={`/hizmetler/${relatedEntries.service.slug}`}>Hizmet detayını aç</Link>
                </article>
              ) : null}
              {relatedEntries.page ? (
                <article className="preview-card">
                  <span className="preview-tag">{relatedEntries.pageLabel}</span>
                  <h3>{relatedEntries.page.title}</h3>
                  <p>{relatedEntries.page.summary}</p>
                  <Link to={`${relatedEntries.pageBasePath}/${relatedEntries.page.slug}`}>Sayfayı incele</Link>
                </article>
              ) : null}
              <article className="preview-card">
                <span className="preview-tag">Blog</span>
                <h3>Diğer rehber içerikleri görüntüleyin</h3>
                <p>Taşınma planlaması, hizmet seçimi ve operasyon süreciyle ilgili diğer yazılara da göz atın.</p>
                <Link to="/blog">Tüm blog yazılarına dön</Link>
              </article>
            </div>
          </div>
          <div className="preview-action reveal">
            <Link className="btn btn-primary" to="/blog">
              Blog listesine dön
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
