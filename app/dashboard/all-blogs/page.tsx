import BlogDataTable from "@/components/BlogDataTable";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | All Blogs",
  description: "Nabil Siddik Portfolio Dashboard.",
};

const AllBlogs = () => {
  return (
    <div className="px-5">
      <h1 className="font-bold text-3xl text-center mb-5">All Blogs</h1>
      <BlogDataTable />
    </div>
  );
};

export default AllBlogs;
