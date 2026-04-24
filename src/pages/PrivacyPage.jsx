import PageHero from "../components/PageHero";
import Seo from "../components/Seo";
import { createBreadcrumbSchema } from "../lib/seoSchemas";

export default function PrivacyPage() {
  return (
    <>
      <Seo
        title="Gizlilik Politikası | AZR Evden Eve Nakliyat"
        description="AZR Evden Eve Nakliyat web sitesinde işlenen temel kişisel veri ve iletişim bilgileriyle ilgili gizlilik politikasını inceleyin."
        path="/gizlilik-politikasi"
        jsonLd={createBreadcrumbSchema([
          { name: "Ana Sayfa", path: "/" },
          { name: "Gizlilik Politikası", path: "/gizlilik-politikasi" }
        ])}
      />
      <PageHero
        eyebrow="Gizlilik"
        title="Web sitesi gizlilik politikası"
        description="Bu sayfa, site üzerindeki form ve iletişim alanlarında paylaşılan bilgilerin hangi amaçlarla değerlendirildiğine dair genel çerçeveyi açıklar."
        compact
      />
      <section className="section-block">
        <div className="section-shell article-layout">
          <article className="detail-card reveal">
            <h2>Toplanan bilgiler</h2>
            <p>
              Teklif veya iletişim formlarında paylaşacağınız ad, telefon numarası, taşıma adresi ve talep detayları; yalnızca geri dönüş yapmak,
              teklif hazırlamak ve hizmet planlaması yürütmek amacıyla kullanılır.
            </p>
          </article>
          <article className="detail-card reveal">
            <h2>Kullanım amacı</h2>
            <p>
              Paylaşılan bilgiler; nakliyat planlaması, hizmet kapsamının netleştirilmesi, size dönüş yapılması ve iletişim sürecinin yürütülmesi
              amacıyla değerlendirilir.
            </p>
          </article>
          <article className="detail-card reveal">
            <h2>Üçüncü taraf hizmetler</h2>
            <p>
              Site üzerinde harita, WhatsApp yönlendirmesi veya benzeri üçüncü taraf servisler kullanılabilir. Bu servislerin kendi gizlilik
              politikaları ayrıca geçerlidir.
            </p>
          </article>
          <article className="detail-card reveal">
            <h2>İletişim</h2>
            <p>
              Gizlilik politikasıyla ilgili sorularınız için site üzerindeki iletişim bilgileri veya WhatsApp hattı üzerinden bizimle iletişime
              geçebilirsiniz.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
