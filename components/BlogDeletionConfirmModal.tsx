'use client'

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
} from "@/components/ui/alert-dialog"
import { toast } from "sonner";

const BlogDeletionConfirmModal = ({children, blogId}: {children: React.ReactNode, blogId: number}) => {
    
    // Delete blog 
    const handleDeleteBlog = async(blogId: number) => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/blog/${blogId}`, {
                method: "DELETE"
            })
            const parsedRes = await res.json()

            if (parsedRes?.success) {
                toast.success('Blog Deleted successfully.')
            } else {
                toast.error('Blog Deletion failed.')
            }

        } catch (err: unknown) {
            console.error('something went wrong while deleting blog.', err);
        }
    }

    return (
        <AlertDialog>
            <AlertDialogTrigger>{children}</AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your blog
                        and remove your data from our servers.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => handleDeleteBlog(blogId)} className="bg-red-500 text-white">Delete</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default BlogDeletionConfirmModal
