import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import {
  ConversionSection,
  FaqSection,
  LocalSeoSection,
  ProcessSection,
  ServiceAreaSection,
  ServicesSection,
  TestimonialsSection,
  TrustStrip,
  WhyUsSection
} from "../components/Sections";
import { ContactSection, QuoteSection } from "../components/QuoteAndContact";
import Seo from "../components/Seo";
import { createFaqSchema, createLocalBusinessSchema } from "../lib/seoSchemas";

function PreviewSection({ title, description, items, linkBase, linkLabel }) {
  return (
    <section className="section-block">
      <div className="section-shell">
        <p className="eyebrow reveal">Öne Çıkanlar</p>
        <h2 className="section-title reveal">{title}</h2>
        <p className="section-text reveal">{description}</p>
        <div className="preview-grid">
          {items.map((item) => (
            <article key={item.slug} className="preview-card reveal">
              <span className="preview-tag">{item.category || item.service || item.district}</span>
              <h3>{item.title}</h3>
              <p>{item.excerpt || item.summary || item.description}</p>
              <Link to={`${linkBase}/${item.slug}`}>Detayı incele</Link>
            </article>
          ))}
        </div>
        <div className="preview-action reveal">
          <Link className="btn btn-primary" to={linkLabel.to}>
            {linkLabel.text}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function HomePage({
  contactInfo,
  contactMeta,
  trustItems,
  trustBadges,
  conversionHighlights,
  localSeoBlocks,
  serviceAreaGroups,
  footerServiceAreas,
  services,
  processSteps,
  whyUsCards,
  testimonials,
  faqs,
  blogPosts,
  seoPages,
  citySeoPages,
  onHeroSubmit,
  onDetailSubmit
}) {
  return (
    <>
      <Seo
        title="AZR Evden Eve Nakliyat | Kayseri Evden Eve Taşımacılık"
        description="Kayseri merkezli AZR Evden Eve Nakliyat ile ev taşıma, ofis taşıma, asansörlü nakliyat ve şehirlerarası taşınmalarda planlı operasyon desteği alın."
        path="/"
        jsonLd={[
          createLocalBusinessSchema({
            description: "Kayseri merkezli ev taşıma, ofis taşıma, asansörlü taşıma ve şehirlerarası nakliyat için planlı operasyon hizmetleri."
          }),
          createFaqSchema(faqs)
        ]}
      />
      <Hero contactInfo={contactInfo} onHeroSubmit={onHeroSubmit} />
      <TrustStrip items={trustItems} />
      <ConversionSection highlights={conversionHighlights} />
      <ServicesSection services={services} />
      <LocalSeoSection blocks={localSeoBlocks} badges={trustBadges} />
      <ProcessSection steps={processSteps} />
      <WhyUsSection cards={whyUsCards} />
      <ServiceAreaSection groups={serviceAreaGroups} />
      <TestimonialsSection testimonials={testimonials} />
      <PreviewSection
        title="Nakliyat rehberleri ve güncel içerikler"
        description="Taşınma planlaması, hizmet seçimi ve uzun yol operasyonları için hazırladığımız rehber yazıları inceleyin."
        items={blogPosts}
        linkBase="/blog"
        linkLabel={{ to: "/blog", text: "Tüm Blog Yazıları" }}
      />
      <PreviewSection
        title="Kayseri ilçelerine özel taşıma rehberleri"
        description="İlçe ve hizmet türüne göre hazırlanmış sayfalarda bölgesel taşıma ihtiyaçlarını daha net inceleyin."
        items={seoPages}
        linkBase="/bolgeler"
        linkLabel={{ to: "/bolgeler", text: "Tüm Hizmet Bölgeleri" }}
      />
      <PreviewSection
        title="Şehirlerarası rota rehberleri"
        description="Kayseri dışı şehirler için hazırlanan nakliyat sayfalarında rota bazlı ihtiyaçları inceleyin."
        items={citySeoPages}
        linkBase="/sehirler"
        linkLabel={{ to: "/sehirler", text: "Tüm Şehirlerarası Rotalar" }}
      />
      <FaqSection faqs={faqs} />
      <QuoteSection onDetailSubmit={onDetailSubmit} />
      <ContactSection contactInfo={contactInfo} contactMeta={contactMeta} footerServiceAreas={footerServiceAreas} />
    </>
  );
}
