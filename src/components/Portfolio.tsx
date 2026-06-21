import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import TechMarquee from "./components/TechMarquee"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import SettingsPanel, { SettingsTrigger } from "./components/design/SettingsPanel"
import { useDesign } from "./hooks/useDesign"
import { cn } from "./design/cn"

export default function Portfolio() {
  const { theme, fx } = useDesign()

  return (
    <div className={cn("relative min-h-screen", theme.rootFx)}>
      {fx.scanlines && (
        <div className="pointer-events-none fixed inset-x-0 top-0 z-0 h-px bg-primary/40 shadow-[0_0_20px_rgb(var(--primary)/0.5)]" />
      )}
      {fx.gridFloor && (
        <div className="scan-bar pointer-events-none fixed inset-x-0 top-0 z-0 h-24 bg-gradient-to-b from-primary/5 to-transparent" />
      )}
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
      <SettingsTrigger />
      <SettingsPanel />
    </div>
  )
}
