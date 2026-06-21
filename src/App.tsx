import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import TechMarquee from "./components/TechMarquee"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import ThemePicker from "./components/ThemePicker"
import ThemeFx from "./components/ThemeFx"
import { useTheme } from "./themes/useTheme"

function Portfolio() {
  const { classes: t } = useTheme()

  return (
    <div className={t.root}>
      <ThemeFx />
      <Navbar />
      <main className={t.main}>
        <Hero />
        {t.showMarquee && <TechMarquee />}
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

export default function App() {
  return (
    <>
      <ThemePicker />
      <Portfolio />
    </>
  )
}
