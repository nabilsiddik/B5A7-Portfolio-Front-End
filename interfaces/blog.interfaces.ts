export interface IBlog {
    id?: number
    title: string
    content: string
    featuredImage: string
    isFeatured?: boolean
    tags?: string[]
    view?: number
    authorId?: number
    createdAt?: Date
    updatedAt?: Date
}