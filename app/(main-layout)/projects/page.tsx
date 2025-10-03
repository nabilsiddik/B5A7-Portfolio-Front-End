import ProjectCardItem from "@/components/ProjectCardItem";
import { IProject } from "@/interfaces/project.interfaces";
import ProjectSection from "@/sections/ProjectSection";
import { getAllProjects } from "@/utils/getAllProjects";
import React from "react";

const ProjectPage = async () => {
  const projects = await getAllProjects();
  return (
    <div className="container mx-auto px-5 py-5">
      <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects?.data?.length > 0 &&
          projects?.data?.map((project: IProject, index: number) => {
            return <ProjectCardItem key={index} project={project} />;
          })}
      </div>
    </div>
  );
};

export default ProjectPage;
