import PageHero from "../components/PageHero";
import Seo from "../components/Seo";
import { createBreadcrumbSchema } from "../lib/seoSchemas";

export default function AboutPage() {
  return (
    <>
      <Seo
        title="Hakkımızda | AZR Evden Eve Nakliyat"
        description="AZR Evden Eve Nakliyat'ın çalışma yaklaşımını, hizmet anlayışını ve Kayseri merkezli operasyon disiplinini inceleyin."
        path="/hakkimizda"
        jsonLd={createBreadcrumbSchema([
          { name: "Ana Sayfa", path: "/" },
          { name: "Hakkımızda", path: "/hakkimizda" }
        ])}
      />
      <PageHero
        eyebrow="Hakkımızda"
        title="Taşıma değil, planlı bir operasyon kurgulayan ekip"
        description="AZR Evden Eve Nakliyat olarak sürecin yalnızca yükleme ve indirmeden ibaret olmadığını biliyoruz. Bu yüzden hazırlık, iletişim ve teslim düzenini birlikte yönetiyoruz."
      />
      <section className="section-block">
        <div className="section-shell detail-layout">
          <article className="detail-card reveal">
            <h2>Nasıl çalışıyoruz?</h2>
            <p>
              Kayseri merkezli operasyonlarımızda ilk adımı her zaman doğru bilgiyle atıyoruz. Kat durumu, bina erişimi, eşya yoğunluğu, asansör
              ihtiyacı ve teslim planı netleşmeden taşıma gününü oluşturmuyoruz.
            </p>
            <p>
              Bu yaklaşım hem teklif doğruluğunu artırıyor hem de sahadaki gereksiz belirsizliği azaltıyor. Böylece müşterimiz taşıma gününde neyin
              hangi sırayla ilerleyeceğini daha net görebiliyor.
            </p>
          </article>
          <article className="detail-card reveal">
            <h2>Hizmet anlayışımız</h2>
            <div className="detail-bullets">
              <li>Planlamayı fiyat vermenin önüne koyarız.</li>
              <li>Oda bazlı paketleme ve etiketleme düzeni uygularız.</li>
              <li>Kayseri içi ve şehirlerarası taşınmalarda iletişim akışını görünür tutarız.</li>
              <li>Montaj, depolama ve asansörlü taşıma gibi başlıkları tek bir operasyon planında toplarız.</li>
            </div>
          </article>
        </div>
      </section>
      <section className="section-block section-soft">
        <div className="section-shell detail-layout">
          <article className="detail-card reveal">
            <h2>Neden bu sayfa önemli?</h2>
            <p>
              Kurumsal güven sinyalleri yalnızca arama motorları için değil, ziyaretçi için de önemlidir. Bu sayfa; markanın nasıl çalıştığını,
              hangi hizmet yaklaşımını benimsediğini ve neden farklılaştığını açık biçimde anlatmak için hazırlandı.
            </p>
          </article>
          <article className="detail-card reveal">
            <h2>Odak alanlarımız</h2>
            <p>
              Ev taşıma, ofis taşıma, asansörlü sistem, paketleme ve montaj, eşya depolama ve şehirlerarası nakliyat başlıklarında Kayseri merkezli
              operasyon desteği sunuyoruz.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
