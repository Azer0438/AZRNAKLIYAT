import RegionDetailPage from "../pages/RegionDetailPage";
import { enrichedCitySeoPages } from "../data/seoData";

export default function CityDetailRoute() {
  return <RegionDetailPage seoPages={enrichedCitySeoPages} listPath="/sehirler" buttonLabel="Tum sehir sayfalarina don" />;
}
