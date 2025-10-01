export interface IBlog {
  id?: number;
  title: string;
  content: string;
  featuredImage: string;
  isFeatured?: boolean;
  tags?: string[];
  view?: number;
  author?: {
    id: number;
    fullName: string;
    email: string;
  };
  createdAt?: Date;
  updatedAt?: Date;
}
