import RegionsPage from "../pages/RegionsPage";
import { enrichedSeoPages } from "../data/seoData";

export default function RegionsRoute() {
  return (
    <RegionsPage
      seoPages={enrichedSeoPages}
      seoTitle="Hizmet Bölgeleri | AZR Evden Eve Nakliyat"
      heroEyebrow="Hizmet Bölgeleri"
      heroTitle="İlçe ve hizmet türüne göre hazırlanan bölgesel sayfalar"
      heroDescription="Kayseri'nin farklı bölgelerindeki yapı tipi ve taşıma ihtiyaçlarına göre hazırlanmış sayfaları inceleyin."
      basePath="/bolgeler"
      breadcrumbName="Hizmet Bölgeleri"
    />
  );
}
