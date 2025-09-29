import { Badge } from '@/components/ui/badge'
import { IBlog } from '@/interfaces/blog.interfaces';
import { getAllBlog } from '@/utils/getAllBlog';
import { FaEye } from "react-icons/fa";

export const generateStaticParams = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/blog`)

    const {data: blogs} = await res.json()

    return blogs?.map((blog: IBlog) => ({
        id: String(blog.id)
    }))
}

const BlogDetails = async ({ params }: { params: { id: string } }) => {
    const { id } = await params

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/blog/${Number(id)}`, {
        next: {revalidate: 10}
    })
    const blog = await res.json()

    return (
        <div className='container mx-auto px-5'>
            <div className='h-[500px] rounded-bl-lg rounded-br-lg mb-5' style={{
                backgroundImage: `url(${blog?.data?.featuredImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat'
            }}>
            </div>
            <div className='flex gap-5 flex-col lg:flex-row'>
                <div className='flex-3'>
                    <h1 className='text-4xl font-bold mb-5'>{blog?.data?.title}</h1>
                    <div className='flex gap-3 mb-5 items-center flex-col md:flex-row'>
                        <div className='flex flex-row gap-3 '>
                            <Badge className='py-2 px-3'>Published: {new Date(blog?.data?.createdAt).toLocaleDateString()}</Badge>

                            <Badge className='py-2 px-3'>Updated: {new Date(blog?.data?.updatedAt).toLocaleDateString()}</Badge>
                        </div>

                        <h3>Tags: {blog?.data?.tags?.length > 0 && blog?.data?.tags?.map((tag: string, index: number) => <Badge key={index} variant={'outline'} className='py-2 px-3 mr-2'>{tag}</Badge>)}</h3>

                        <h3 className='flex items-center gap-2'><FaEye /> {blog?.data?.view}</h3>
                    </div>
                    <p>{blog?.data?.content}</p>
                </div>
                <div className='shadow-md bg-gray-100 flex-1 p-5 md:p-3 lg:p-5'>
                    jdsklfjjsdkflsdfjjdklflsdkfsjdlfkjssd sdf sdfsd fsdfsdf sdfsdf sdf sdfsdfsdf sdfdsfs f jdsklfjjsdkflsdfjjdklflsdkfsjdlfkjssd sdf sdfsd fsdfsdf sdfsdf sdf sdfsdfsdf sdfdsfs f jdsklfjjsdkflsdfjjdklflsdkfsjdlfkjssd sdf sdfsd fsdfsdf sdfsdf sdf sdfsdfsdf sdfdsfs f jdsklfjjsdkflsdfjjdklflsdkfsjdlfkjssd sdf sdfsd fsdfsdf sdfsdf sdf sdfsdfsdf sdfdsfs f
                </div>
            </div>
        </div>
    )
}

export default BlogDetails
