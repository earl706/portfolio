import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import TechMarquee from "./components/TechMarquee"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="scanlines crt-vignette relative min-h-screen">
      <div className="pointer-events-none fixed inset-x-0 top-0 z-0 h-px bg-neon-cyan/40 shadow-[0_0_20px_rgba(0,240,255,0.5)]" />
      <div className="scan-bar pointer-events-none fixed inset-x-0 top-0 z-0 h-24 bg-gradient-to-b from-neon-cyan/5 to-transparent" />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <TechMarquee />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
