export const getAllBlog = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/blog`, {
            next: { revalidate: 60 },
        })

        if (!res.ok) {
            console.error("Failed to fetch blogs:", res.status, await res.text())
            return []
        }

        const blogs = await res.json()
        return blogs
    } catch (err: unknown) {
        console.log(err)
    }
}