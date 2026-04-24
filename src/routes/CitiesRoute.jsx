import RegionsPage from "../pages/RegionsPage";
import { enrichedCitySeoPages } from "../data/seoData";

export default function CitiesRoute() {
  return (
    <RegionsPage
      seoPages={enrichedCitySeoPages}
      seoTitle="Şehirlerarası Nakliyat Sayfaları | AZR Evden Eve Nakliyat"
      heroEyebrow="Şehirlerarası"
      heroTitle="Kayseri çıkışlı ve varışlı şehirlerarası nakliyat sayfaları"
      heroDescription="Farklı şehir hatları için hazırlanan SEO odaklı içeriklerde rota bazlı taşınma ihtiyaçlarını inceleyin."
      basePath="/sehirler"
      breadcrumbName="Şehirlerarası"
    />
  );
}
