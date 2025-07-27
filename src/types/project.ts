export interface Project {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  technologies: string[];
  githubUrl?: string;
  npmUrl?: string;
  demoUrl?: string;
}