import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { shortText } from "@/utils/shortText";
import Image from "next/image";
import Link from "next/link";
import { FaEdit, FaEye } from "react-icons/fa";
import BlogDeletionConfirmModal from "./BlogDeletionConfirmModal";
import { RiDeleteBin6Fill } from "react-icons/ri";
import UpdateBlogModal from "./UpdateBlogModal";
import { getAllProjects } from "@/utils/getAllProjects";
import { IProject } from "@/interfaces/project.interfaces";
import { Button } from "./ui/button";
import ProjectDeletionConfirmModal from "./ProjdctDeletionConfirmModal";

const ProjectDataTable = async () => {
  const res = await getAllProjects();
  const projects = res.data;

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Project</TableHead>
            <TableHead>Live Site</TableHead>
            <TableHead>Github</TableHead>
            <TableHead>Dates</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.length > 0 &&
            projects.map((project: IProject, index: number) => {
              return (
                <TableRow key={index}>
                  <TableCell>
                    <div className="">
                      <Image
                        src={project?.thumbnail as string}
                        width={90}
                        height={90}
                        alt={project?.title}
                      />
                      <div>
                        <h3 className="font-bold text-lg">
                          {shortText(project?.title as string, 50)}
                        </h3>
                        <span>{project?.user?.fullName}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Link href={project?.liveSite as string} target="_blank">
                      <Button className="cursor-pointer">Live Site</Button>
                    </Link>
                  </TableCell>
                  <TableCell className="flex flex-col gap-3">
                    <Link
                      href={project?.githubClient as string}
                      target="_blank"
                    >
                      <Button className="cursor-pointer">Github Client</Button>
                    </Link>
                    <Link
                      href={project?.githubClient as string}
                      target="_blank"
                    >
                      <Button className="cursor-pointer">Github Server</Button>
                    </Link>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col gap-2">
                      <span>
                        <b>Created</b>:{" "}
                        {new Date(
                          project?.updatedAt as Date
                        ).toLocaleDateString()}
                      </span>

                      <span>
                        <b>Updated</b>:{" "}
                        {new Date(
                          project?.createdAt as Date
                        ).toLocaleDateString()}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3 text-xl">
                      {/* <Link href={`/blogs/${project?.id}`}>
                        <span className="cursor-pointer">
                          <FaEye />
                        </span>
                      </Link> */}
                      {/* <UpdateBlogModal project={project}>
                        <span className="cursor-pointer">
                          <FaEdit />
                        </span>
                      </UpdateBlogModal> */}

                      <ProjectDeletionConfirmModal
                        projectId={Number(project.id)}
                      >
                        <span className="cursor-pointer">
                          <RiDeleteBin6Fill />
                        </span>
                      </ProjectDeletionConfirmModal>
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProjectDataTable;
