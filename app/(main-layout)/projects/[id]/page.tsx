import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { IBlog } from "@/interfaces/blog.interfaces";
import Link from "next/link";
import { FaEye } from "react-icons/fa";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const { id } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/project/${Number(id)}`
  );
  const blog = await res.json();

  return {
    title: `Project - ${blog?.data?.title}`,
    description: blog?.data?.content,
  };
}

const ProejctDetails = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/project/${Number(id)}`,
    {
      next: { revalidate: 10 },
    }
  );
  const project = await res.json();

  return (
    <div className="container mx-auto px-5">
      <div
        className="h-[500px] rounded-bl-lg rounded-br-lg mb-5"
        style={{
          backgroundImage: `url(${project?.data?.thumbnail})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="flex gap-5 flex-col lg:flex-row">
        <div className="flex-3">
          <h1 className="text-4xl font-bold mb-5">{project?.data?.title}</h1>
          <div className="flex gap-3 mb-5 items-center flex-col md:flex-row">
            <div className="flex flex-row gap-3 flex-wrap">
              <Link href={project?.data?.liveSite} target="_blank">
                <Button className="cursor-pointer">Live Site</Button>
              </Link>

              <Link href={project?.data?.githubClient} target="_blank">
                <Button className="cursor-pointer">Github Client</Button>
              </Link>

              <Link href={project?.data?.githubServer} target="_blank">
                <Button className="cursor-pointer">Github Server</Button>
              </Link>
            </div>
          </div>
          <p>{project?.data?.description}</p>
        </div>
        <div className="shadow-md bg-gray-100 flex-1 p-5 md:p-3 lg:p-5">
          <div>
            <div className="flex gap-3 mb-8 flex-col">
              <div className="flex flex-row gap-3 flex-wrap">
                <Badge className="py-2 px-3">
                  Published:{" "}
                  {new Date(project?.data?.createdAt).toLocaleDateString()}
                </Badge>

                <Badge className="py-2 px-3">
                  Updated:{" "}
                  {new Date(project?.data?.updatedAt).toLocaleDateString()}
                </Badge>
              </div>

              <h3 className="font-bold text-xl">Features: </h3>
              <ul className="flex flex-col gap-2">
                {project?.data?.features?.length > 0 &&
                  project?.data?.features?.map(
                    (feature: string, index: number) => (
                      <li key={index} className="">
                        {feature}
                      </li>
                    )
                  )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProejctDetails;
