import BlogPage from "../pages/BlogPage";
import { blogPosts } from "../data/blogData";

export default function BlogRoute() {
  return <BlogPage blogPosts={blogPosts} />;
}
