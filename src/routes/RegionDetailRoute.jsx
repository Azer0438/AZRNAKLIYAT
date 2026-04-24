import RegionDetailPage from "../pages/RegionDetailPage";
import { enrichedSeoPages } from "../data/seoData";

export default function RegionDetailRoute() {
  return <RegionDetailPage seoPages={enrichedSeoPages} listPath="/bolgeler" buttonLabel="Tum bolgelere don" />;
}
