export const getAllBlog = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/blog`, {
            next: { revalidate: 60 },
        })
        const blogs = res.json()
        return blogs
    } catch (err: unknown) {
        console.log(err)
    }
}