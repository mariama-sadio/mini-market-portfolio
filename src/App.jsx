import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Accueil from "./pages/Accueil"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import DetailProjet from "./pages/DetailProjet"
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project/:id" element={<DetailProjet />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App