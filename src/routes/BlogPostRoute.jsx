import BlogPostPage from "../pages/BlogPostPage";
import { blogPosts } from "../data/blogData";
import { enrichedCitySeoPages, enrichedSeoPages } from "../data/seoData";
import { enrichedServices } from "../data/servicesData";

export default function BlogPostRoute() {
  return <BlogPostPage blogPosts={blogPosts} services={enrichedServices} seoPages={enrichedSeoPages} citySeoPages={enrichedCitySeoPages} />;
}
