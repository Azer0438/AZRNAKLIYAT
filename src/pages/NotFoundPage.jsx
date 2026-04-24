import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import Seo from "../components/Seo";

export default function NotFoundPage() {
  return (
    <>
      <Seo
        title="Sayfa Bulunamadı | AZR Evden Eve Nakliyat"
        description="Aradığınız sayfa kaldırılmış, taşınmış veya hatalı yazılmış olabilir. Ana hizmet sayfalarına buradan geri dönebilirsiniz."
        path="/404"
        noIndex
      />
      <PageHero
        eyebrow="404"
        title="Aradığınız sayfa bulunamadı"
        description="Link değişmiş olabilir ya da URL eksik yazılmış olabilir. Aşağıdaki hızlı yönlendirmelerle doğru sayfaya dönebilirsiniz."
        compact
      />
      <section className="section-block">
        <div className="section-shell blog-grid">
          <article className="preview-card reveal">
            <span className="preview-tag">Ana Sayfa</span>
            <h3>Genel sayfaya dönün</h3>
            <p>Ana sayfadan hizmetler, bölgeler ve teklif alanlarına hızlıca geçebilirsiniz.</p>
            <Link to="/">Ana sayfaya dön</Link>
          </article>
          <article className="preview-card reveal">
            <span className="preview-tag">Hizmetler</span>
            <h3>Hizmet detaylarını açın</h3>
            <p>Ev taşıma, ofis taşıma, asansörlü taşıma ve depolama başlıklarını tek listede görebilirsiniz.</p>
            <Link to="/hizmetler">Hizmetleri incele</Link>
          </article>
          <article className="preview-card reveal">
            <span className="preview-tag">Bölgeler</span>
            <h3>Bölge sayfalarını görüntüleyin</h3>
            <p>Kayseri ilçeleri ve şehirlerarası hatlar için hazırlanan detay sayfalarına buradan geçebilirsiniz.</p>
            <Link to="/bolgeler">Bölge sayfalarına git</Link>
          </article>
        </div>
      </section>
    </>
  );
}
