import ProjectCardItem from "@/components/ProjectCardItem";
import SectionHeader from "@/components/SectionHeader";
import { IProject } from "@/interfaces/project.interfaces";
import { getAllProjects } from "@/utils/getAllProjects";
import React from "react";

const ProjectSection = async () => {
  const projects = await getAllProjects();

  return (
    <section className="container mx-auto px-5 py-20">
      <SectionHeader
        title="Projects"
        subtitle="Here are some of the real-world projects I’ve built, showcasing my skills in web development and problem-solving. Each project reflects my passion for creating functional, user-friendly, and visually appealing applications. Explore my work below and see how I turn ideas into reality."
      />

      <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects?.data?.length > 0 &&
          projects?.data?.map((project: IProject, index: number) => {
            return <ProjectCardItem key={index} project={project} />;
          })}
      </div>
    </section>
  );
};

export default ProjectSection;
