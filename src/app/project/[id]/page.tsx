import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from '@/data/projects';
import { Project } from '@/types/project';
import ProjectImage from '@/components/ProjectImage';

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projects.find((proj) => proj.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="page">
      <main className="main project-detail">
        <Link href="/" className="back-link">
          ← 홈으로 돌아가기
        </Link>
        
        <div className="header">
          <h1 className="title">{project.name}</h1>
          <div className="technologies center">
            {project.technologies.map((tech) => (
              <span key={tech} className="tech-tag large">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="content">
          <div className="image-section">
            <ProjectImage
              src={project.thumbnail}
              alt={`${project.name} 이미지`}
              width={600}
              height={400}
              className="main-image"
            />
          </div>

          <div className="description">
            <h2>소개</h2>
            <p>{project.description}</p>
            
            <div className="links">
              {project.githubUrl && (
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="link-button"
                >
                  GitHub에서 보기
                </a>
              )}
              {project.npmUrl && (
                <a 
                  href={project.npmUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="link-button"
                >
                  NPM에서 보기
                </a>
              )}
              {project.demoUrl && (
                <a 
                  href={project.demoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="link-button"
                >
                  데모 보기
                </a>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}