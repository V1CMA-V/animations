import { projects } from '@/projects'
import Link from 'next/link'

export default function ProjectsPage() {
  return (
    <ul className="projects-list">
      {projects.map((project) => (
        <Link href={`/projects/${project.slug}`} key={project.id}>
          <li>
            <div className="link">
              <span>👉</span>
              {project.title}
            </div>
          </li>
        </Link>
      ))}
    </ul>
  )
}
