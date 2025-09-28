export const getAllBlog = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/blog`)
        const blogs = res.json()
        return blogs
    } catch (err: unknown) {
        console.log(err)
    }
}