'use client'

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "./ui/button"
import UpdateBlogForm from "./UpdateBlogForm"
import { IBlog } from "@/interfaces/blog.interfaces"
import { useState } from "react"

const UpdateBlogModal = ({ children, blog }: { children: React.ReactNode, blog: Partial<IBlog> }) => {
    const [open, setOpen] = useState(false)

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <form>
                <DialogTrigger asChild>
                    <Button>
                        {children}
                    </Button>
                </DialogTrigger>
                <DialogContent >
                    <DialogHeader>
                        <DialogTitle>Update Blog</DialogTitle>
                    </DialogHeader>
                    <UpdateBlogForm blog = {blog} setOpen={setOpen}/>
                </DialogContent>
            </form>
        </Dialog>
    )
}

export default UpdateBlogModal
