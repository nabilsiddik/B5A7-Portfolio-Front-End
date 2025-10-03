import BlogCardItem from "@/components/BlogCardItem";
import ProjectCardItem from "@/components/ProjectCardItem";
import SectionHeader from "@/components/SectionHeader";
import { IBlog } from "@/interfaces/blog.interfaces";

const BlogSection = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/blog`, {
    next: {
      revalidate: 30,
    },
  });
  const blogs = await res.json();

  console.log("amar blogs", blogs);

  return (
    <section className="container mx-auto px-5 py-20">
      <SectionHeader
        title="Blogs"
        subtitle="Explore all blogs. Read them and gain knowledge on technologies."
      />

      <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs?.data?.length > 0 &&
          blogs?.data?.map((blog: IBlog, index: number) => {
            return <BlogCardItem key={index} blog={blog} />;
          })}
      </div>
    </section>
  );
};

export default BlogSection;
