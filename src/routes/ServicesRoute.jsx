import ServicesPage from "../pages/ServicesPage";
import { enrichedServices } from "../data/servicesData";

export default function ServicesRoute() {
  return <ServicesPage services={enrichedServices} />;
}
