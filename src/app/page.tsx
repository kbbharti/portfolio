import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import SideProjects from '@/components/SideProjects'
import Education from '@/components/Education'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <SideProjects />
      <Projects />
      <Education />
      <Contact />
    </main>
  )
}
