import ProjectDataTable from "@/components/ProjectDataTable";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | All Projects",
  description: "Nabil Siddik Portfolio Dashboard.",
};

const AllProjects = () => {
  return (
    <div className="px-5">
      <h1 className="font-bold text-3xl text-center mb-5">All Projects</h1>
      <ProjectDataTable />
    </div>
  );
};

export default AllProjects;
