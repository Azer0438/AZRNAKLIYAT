import RegionsPage from "../pages/RegionsPage";
import { enrichedCitySeoPages } from "../data/seoData";

export default function CitiesRoute() {
  return (
    <RegionsPage
      seoPages={enrichedCitySeoPages}
      seoTitle="Şehirlerarası Nakliyat Sayfaları | AZR Evden Eve Nakliyat"
      heroEyebrow="Şehirlerarası"
      heroTitle="Kayseri çıkışlı ve varışlı şehirlerarası nakliyat sayfaları"
      heroDescription="Farklı şehir hatları için hazırlanan rota sayfalarında taşınma ihtiyaçlarını daha net inceleyin."
      basePath="/sehirler"
      breadcrumbName="Şehirlerarası"
    />
  );
}
