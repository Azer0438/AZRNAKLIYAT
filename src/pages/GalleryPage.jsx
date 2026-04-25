import PageHero from "../components/PageHero";
import ResponsiveImage from "../components/ResponsiveImage";
import Seo from "../components/Seo";
import { siteMeta } from "../data/sharedSiteData.js";
import { createBreadcrumbSchema } from "../lib/seoSchemas";

const galleryImageMap = {
  "asansorlu-yuksek-kat-operasyonu": "/images/galeri-paketleme-1.webp",
  "duzenli-ofis-tasima": "/images/galeri-paketleme-2.webp",
  "paketleme-ve-koruma": "/images/galeri-paketleme-3.webp",
  "sehirlerarasi-yukleme": "/images/galeri-paketleme-4.webp",
  "villa-tasima-duzeni": "/images/galeri-paketleme-5.webp",
  "depolama-hazirligi": "/images/galeri-paketleme-6.webp"
};

export default function GalleryPage({ galleryItems }) {
  return (
    <>
      <Seo
        title="AZR Evden Eve Nakliyat | Galeri"
        description="Operasyon türleri, çalışma düzeni ve taşıma senaryolarını gösteren galeri bölümü."
        path="/galeri"
        jsonLd={createBreadcrumbSchema([
          { name: "Ana Sayfa", path: "/" },
          { name: "Galeri", path: "/galeri" }
        ])}
      />
      <PageHero
        eyebrow="Galeri"
        title="AZR saha düzenini gösteren operasyon kareleri"
        description="Galeri bölümünde yalnızca görsel değil, taşıma yaklaşımımızı anlatan sahne seçimleri yer alır. Her kare; planlama, koruma ve teslim düzenini temsil eder."
      />
      <section className="section-block">
        <div className="section-shell">
          <div className="gallery-lead-card reveal">
            <img src={siteMeta.logoPath} alt="AZR Evden Eve Nakliyat logosu" className="gallery-lead-logo" width="280" height="184" loading="lazy" decoding="async" />
            <div className="gallery-lead-copy">
              <span className="preview-tag">AZR Seçkisi</span>
              <h2>Her karede aynı şeyi arıyoruz: düzen, koruma ve net akış</h2>
              <p>
                Buradaki görselleri yalnızca estetik için değil, müşterinin taşınma günü karşılaşacağı gerçek senaryoları daha görünür kılmak için
                seçtik. Yüksek kat, ofis, paketleme ve uzun yol süreçleri bu yüzden ayrı ayrı gösteriliyor.
              </p>
            </div>
          </div>

          <div className="gallery-grid">
            {galleryItems.map((item) => (
              <article key={item.slug} className="gallery-card reveal">
                {galleryImageMap[item.slug] ? (
                  <ResponsiveImage
                    src={galleryImageMap[item.slug]}
                    alt={item.title}
                    className="gallery-visual image-cover"
                    loading={item.slug === "asansorlu-yuksek-kat-operasyonu" ? "eager" : "lazy"}
                    fetchPriority={item.slug === "asansorlu-yuksek-kat-operasyonu" ? "high" : undefined}
                  />
                ) : (
                  <div className="gallery-visual" style={{ background: item.gradient }} />
                )}
                <div className="gallery-copy">
                  <span className="preview-tag">{item.service}</span>
                  <h3>{item.title}</h3>
                  <strong>{item.location}</strong>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
