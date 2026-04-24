import PageHero from "../components/PageHero";
import Seo from "../components/Seo";
import { createBreadcrumbSchema } from "../lib/seoSchemas";

export default function KvkkPage() {
  return (
    <>
      <Seo
        title="KVKK Aydınlatma Metni | AZR Evden Eve Nakliyat"
        description="AZR Evden Eve Nakliyat tarafından teklif ve iletişim süreçlerinde paylaşılan kişisel verilerin işlenmesine ilişkin genel KVKK aydınlatma metni."
        path="/kvkk-aydinlatma-metni"
        jsonLd={createBreadcrumbSchema([
          { name: "Ana Sayfa", path: "/" },
          { name: "KVKK Aydınlatma Metni", path: "/kvkk-aydinlatma-metni" }
        ])}
      />
      <PageHero
        eyebrow="KVKK"
        title="Kişisel verilerin işlenmesine ilişkin aydınlatma metni"
        description="Bu metin, teklif ve iletişim süreçlerinde paylaşılan temel bilgilerin hangi kapsamda değerlendirildiğine dair genel bilgilendirme amacı taşır."
        compact
      />
      <section className="section-block">
        <div className="section-shell article-layout">
          <article className="detail-card reveal">
            <h2>Veri sorumlusu ve kapsam</h2>
            <p>
              AZR Evden Eve Nakliyat ile paylaşılan ad, soyad, telefon numarası, taşıma adresi ve hizmet talebine ilişkin bilgiler; teklif oluşturma,
              hizmet planlama ve iletişim süreçlerinin yürütülmesi amacıyla değerlendirilebilir.
            </p>
          </article>
          <article className="detail-card reveal">
            <h2>İşleme amaçları</h2>
            <div className="detail-bullets">
              <li>Taşıma ihtiyacına uygun ön teklif hazırlamak</li>
              <li>Keşif, planlama ve geri dönüş süreçlerini yönetmek</li>
              <li>Telefon veya WhatsApp üzerinden iletişim sağlamak</li>
              <li>Hizmetle ilgili operasyonel bilgilendirme yapmak</li>
            </div>
          </article>
          <article className="detail-card reveal">
            <h2>Haklarınız</h2>
            <p>
              KVKK kapsamındaki talepleriniz için iletişim kanallarımız üzerinden bize ulaşabilirsiniz. Talebinizin niteliğine göre uygun geri dönüş
              sağlanır.
            </p>
          </article>
          <article className="detail-card reveal">
            <h2>Not</h2>
            <p>
              Bu sayfa genel bilgilendirme amaçlıdır. İş süreçlerinize veya hukuki ihtiyacınıza göre daha detaylı kurumsal metinler ayrıca
              hazırlanabilir.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
