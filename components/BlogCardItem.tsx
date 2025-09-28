import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { IBlog } from "@/interfaces/blog.interfaces"
import Image from "next/image"
import { Button } from "./ui/button"
import { shortText } from "@/utils/shortText"
import { FaEye } from "react-icons/fa";

const BlogCardItem = ({ blog }: { blog: IBlog }) => {
    return (
        <Card>
            <CardHeader>
                <div className="w-full">
                    <Image src={blog?.featuredImage} width={450} height={250} alt={blog?.title} className="rounded-lg" />
                </div>
            </CardHeader>
            <CardContent>
                <CardTitle className="text-xl font-bold mb-2">{shortText(blog?.title, 90)}</CardTitle>
                <CardDescription>{shortText(blog?.content, 200)}</CardDescription>
            </CardContent>
            <CardFooter>
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                        <FaEye />
                        {blog?.view}
                    </div>
                    <Button className="">Read More</Button>
                </div>
            </CardFooter>
        </Card>
    )
}

export default BlogCardItem
