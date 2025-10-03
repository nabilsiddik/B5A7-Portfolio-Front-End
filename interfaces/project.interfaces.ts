export interface IProject {
  id?: number;
  title: string;
  thumbnail: string;
  description: string;
  liveSite: string;
  githubClient: string;
  githubServer: string;
  features: string[];
  user?: {
    id: number;
    fullName: string;
    email: string;
  };
  createdAt?: Date;
  updatedAt?: Date;
}
