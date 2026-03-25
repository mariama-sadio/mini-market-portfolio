import projet1 from "../assets/hero.jpg"

function Projects() {
  return (
    <section className="projects">

      <h2>Mes projets</h2>

      <div className="projects-container">

        <div className="project-card">
          <img src={projet1} alt="Mini Market" />

          <h3>Mini Market</h3>

          <p>
            Application e-commerce développée avec React et Laravel.
          </p>

          <a href="https://github.com/mariama-sadio/mini-market-my-project" target="_blank">
            Voir sur GitHub
          </a>
        </div>

      </div>

    </section>
  )
}

export default Projects