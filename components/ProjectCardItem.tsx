import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IBlog } from "@/interfaces/blog.interfaces";
import Image from "next/image";
import { Button } from "./ui/button";
import { shortText } from "@/utils/shortText";
import { FaEye } from "react-icons/fa";
import Link from "next/link";
import { IProject } from "@/interfaces/project.interfaces";

const ProjectCardItem = ({ project }: { project: IProject }) => {
  return (
    <Card>
      <CardHeader>
        <div className="w-full">
          <Link href={`/projects/${project?.id}`}>
            <Image
              src={project?.thumbnail}
              width={650}
              height={250}
              alt={project?.title}
              className="rounded-lg"
            />
          </Link>
        </div>
      </CardHeader>
      <CardContent>
        <Link href={`/projects/${project?.id}`}>
          <CardTitle className="text-xl font-bold mb-2">
            {shortText(project?.title, 90)}
          </CardTitle>
        </Link>
        <CardDescription>
          {shortText(project?.description, 200)}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <div className="flex flex-row items-center justify-between w-full flex-wrap">
          <Link href={project?.liveSite} target="_blank">
            <Button className="cursor-pointer" size={"sm"} variant={"link"}>
              Live Site
            </Button>
          </Link>

          <Link href={project?.githubClient} target="_blank">
            <Button className="cursor-pointer" size={"sm"} variant={"link"}>
              Github Client
            </Button>
          </Link>

          <Link href={project?.githubServer} target="_blank">
            <Button className="cursor-pointer" size={"sm"} variant={"link"}>
              Github Server
            </Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectCardItem;
