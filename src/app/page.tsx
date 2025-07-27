import Link from "next/link";
import { projects } from "@/data/projects";
import ProjectImage from "@/components/ProjectImage";

export default function Home() {
  return (
    <div className="page">
      <main className="main">
        <h1 className="title">A WOW Z WOW</h1>
        {/* <p className="subtitle">제가 만든 프로젝트들을 소개합니다</p> */}

        <div className="projects-grid">
          {projects.map((project) => (
            <Link key={project.id} href={`/project/${project.id}`} className="project-card">
              <div className="thumbnail">
                <ProjectImage
                  src={project.thumbnail}
                  alt={`${project.name} 썸네일`}
                  width={300}
                  height={200}
                />
              </div>
              <div className="card-content">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
