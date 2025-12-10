
import LargeCard from "./Cards/LargeCard";
import BlogGrid from "./Cards/BlogGrid";

export default function BlogPage({data}) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 py-10 sm:py-12">

      {/* Featured Section */}
      <LargeCard featured={data.featured} />

      {/* Divider */}
      <div className="w-full h-px bg-gray-300 my-10 sm:my-12"></div>

      {/* Blog Grid */}
      <BlogGrid blogs={data.blogs} />
    </div>
  );
}
