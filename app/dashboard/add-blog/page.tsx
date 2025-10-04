import CreateBlogForm from "@/components/CreateBlogForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Add a New Blog",
  description: "Nabil Siddik Portfolio Dashboard.",
};

const AddBlog = () => {
  return (
    <div>
      <CreateBlogForm />
    </div>
  );
};

export default AddBlog;
