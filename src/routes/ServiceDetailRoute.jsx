import ServiceDetailPage from "../pages/ServiceDetailPage";
import { enrichedServices } from "../data/servicesData";

export default function ServiceDetailRoute() {
  return <ServiceDetailPage services={enrichedServices} />;
}
