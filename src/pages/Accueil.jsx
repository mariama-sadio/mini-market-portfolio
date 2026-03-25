import photo from "../assets/photo.jpg"

function Accueil() {
  return (
    <section className="hero">

      <img src={photo} alt="Mariama Sadio" className="profile-img" />

      <h1>Bonjour, je suis <span>Mariama Sadio</span> </h1>

      <p className="subtitle">
        Développeuse Web & Mobile passionnée par la création d’applications modernes.
      </p>

      <div className="hero-buttons">
        <a href="/projects" className="btn">Voir mes projets</a>
        <a href="/contact" className="btn-outline">Me contacter</a>
      </div>

    </section>
  )
}

export default Accueil