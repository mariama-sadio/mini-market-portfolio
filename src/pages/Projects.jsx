import { Link } from "react-router-dom"
import projet1 from "../assets/hero.jpg"
import projet2 from "../assets/photo.jpg"
import projet3 from "../assets/projet3.jpg"

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Mini Market",
      image: projet1,
    },
    {
      id: 2,
      title: "Portfolio",
      image: projet2,
    },
    {
      id: 3,
      title: "Gestion des tâches",
      image: projet3,
    }
  ]

  return (
    <section className="projects">
      <h2>Mes projets</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.image} alt={project.title} />

            <h3>{project.title}</h3>

            <div className="project-buttons">
              <Link to={`/project/${project.id}`} className="btn">
                Voir détail
              </Link>

            
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects