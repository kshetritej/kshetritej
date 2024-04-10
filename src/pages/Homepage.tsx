import About from "@/components/About"
import Experience from "@/components/Experience"
import Header from "@/components/Header"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"

const Homepage = () => {
  return (
    <>
        <Header/>
        <Projects/>
        <Skills/>
        <Experience/>
        <About/>
    </>
  )
}

export default Homepage
