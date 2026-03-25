function Contact() {
  return (
    <section className="contact-container">

      <h2>Contact</h2>

      <form className="contact-form">
        <input type="text" placeholder="Nom" />
        <input type="text" placeholder="Prénom" />
        <input type="email" placeholder="Email" />
        <input type="tel" placeholder="Téléphone" />

        <button type="submit">Envoyer</button>
      </form>

    </section>
  )
}

export default Contact