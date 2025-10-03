import BlogCardItem from "@/components/BlogCardItem";
import { IBlog } from "@/interfaces/blog.interfaces";
import { getAllBlog } from "@/utils/getAllBlog";

const BlogPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/blog`, {
    next: { revalidate: 30 },
  });
  const blogs = await res.json();
  return (
    <div className="container mx-auto px-5 py-10">
      <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {blogs?.data?.length > 0 &&
          blogs?.data?.map((blog: IBlog, index: number) => {
            return <BlogCardItem key={index} blog={blog} />;
          })}
      </div>
    </div>
  );
};

export default BlogPage;
