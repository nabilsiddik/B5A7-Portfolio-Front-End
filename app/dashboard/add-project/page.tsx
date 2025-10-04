import CreateBlogForm from "@/components/CreateBlogForm";
import CreateProjectForm from "@/components/CreateProjectForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Add a New project",
  description: "Nabil Siddik Portfolio Dashboard.",
};

const AddProject = () => {
  return (
    <div>
      <CreateProjectForm />
    </div>
  );
};

export default AddProject;
