"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";

const ProjectDeletionConfirmModal = ({
  children,
  projectId,
}: {
  children: React.ReactNode;
  projectId: number;
}) => {
  // Delete blog
  const handleDeleteProject = async (projectId: number) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/project/${projectId}`,
        {
          method: "DELETE",
        }
      );
      const parsedRes = await res.json();

      if (parsedRes?.success) {
        toast.success("Project Deleted successfully.");
      } else {
        toast.error("Project Deletion failed.");
      }
    } catch (err: unknown) {
      console.error("something went wrong while deleting project.", err);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            project and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => handleDeleteProject(projectId)}
            className="bg-red-500 text-white"
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ProjectDeletionConfirmModal;
