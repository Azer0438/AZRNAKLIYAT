import HomePage from "../pages/HomePage";
import { contactInfo, contactMeta, footerServiceAreas } from "../data/sharedSiteData";
import {
  conversionHighlights,
  faqs,
  featuredBlogPosts,
  featuredCitySeoPages,
  featuredSeoPages,
  featuredServices,
  localSeoBlocks,
  processSteps,
  serviceAreaGroups,
  testimonials,
  trustBadges,
  trustItems,
  whyUsCards
} from "../data/homeData";

export default function HomeRoute({ onHeroSubmit, onDetailSubmit }) {
  return (
    <HomePage
      contactInfo={contactInfo}
      contactMeta={contactMeta}
      trustItems={trustItems}
      trustBadges={trustBadges}
      conversionHighlights={conversionHighlights}
      localSeoBlocks={localSeoBlocks}
      serviceAreaGroups={serviceAreaGroups}
      footerServiceAreas={footerServiceAreas}
      services={featuredServices}
      processSteps={processSteps}
      whyUsCards={whyUsCards}
      testimonials={testimonials}
      faqs={faqs}
      blogPosts={featuredBlogPosts}
      seoPages={featuredSeoPages}
      citySeoPages={featuredCitySeoPages}
      onHeroSubmit={onHeroSubmit}
      onDetailSubmit={onDetailSubmit}
    />
  );
}
