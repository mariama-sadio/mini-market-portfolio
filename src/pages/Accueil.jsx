import { Link } from "react-router-dom"
import About from "./About"
import Projects from "./Projects"
import Contact from "./Contact"
import photo from "../assets/photo.jpg"

function Accueil() {
  return (
    <>
      
      <section className="hero" id="home">
        <img src={photo} alt="Mariama" className="profile-img" />

        <h1>Bonjour, je suis <span>Mariama Sadio</span> </h1>

        <p className="subtitle">
          Développeuse Web & Mobile
        </p>

        <div className="hero-buttons">
          <Link to="/projects" className="btn">Voir mes projets</Link>
          <Link to="/contact" className="btn-outline">Me contacter</Link>
        </div>
      </section>

      
      <section id="about">
        <About />
      </section>

      
      <section id="projects">
        <Projects />
      </section>

      
      <section id="contact">
        <Contact />
      </section>
    </>
  )
}

export default Accueil