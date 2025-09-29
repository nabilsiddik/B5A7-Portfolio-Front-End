'use client'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { IBlog } from "@/interfaces/blog.interfaces"
import { getAllBlog } from "@/utils/getAllBlog"
import { shortText } from "@/utils/shortText"
import Image from "next/image"
import Link from "next/link"
import { FaEdit } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";

const BlogDataTable = async () => {
    const res = await getAllBlog()
    const blogs = res.data

    // Edit blog
    const handleEditBlog = () => {

    }

    // Delete blog 
    const handleDeleteBlog = () => [

    ]
    return (
        <div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Blog</TableHead>
                        <TableHead>Featured</TableHead>
                        <TableHead>Views</TableHead>
                        <TableHead>Dates</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {blogs.length > 0 && blogs.map((blog: Partial<IBlog>, index: number) => {
                        return <TableRow key={index}>
                            <TableCell className="">
                                <Image src={blog?.featuredImage as string} width={90} height={90} alt={blog?.title as string} />
                                <div>
                                    <h3 className="font-bold text-lg">{shortText(blog?.title as string, 50)}</h3>
                                    <span>Nabil Siddik</span>
                                </div>
                            </TableCell>
                            <TableCell>
                                {blog?.isFeatured ? 'Yes' : 'No'}
                            </TableCell>
                            <TableCell>
                                {blog?.view}
                            </TableCell>
                            <TableCell>
                                <div className="flex flex-col gap-2">
                                    <span><b>Created</b>: {new Date(blog?.updatedAt as Date).toLocaleDateString()}</span>

                                    <span><b>Updated</b>: {new Date(blog?.createdAt as Date).toLocaleDateString()}</span>
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className="flex items-center gap-3 text-xl">
                                    <span className="cursor-pointer" onClick={handleEditBlog}><FaEdit /></span>
                                    <span className="cursor-pointer"><FaEye /></span>
                                    <span className="cursor-pointer" onClick={handleDeleteBlog}><RiDeleteBin6Fill /></span>
                                </div>
                            </TableCell>
                        </TableRow>
                    })}
                </TableBody>
            </Table>
        </div>
    )
}

export default BlogDataTable
