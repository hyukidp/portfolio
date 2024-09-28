import Background from "./Background"
import Experience from "./Experience"
import Skills from "./Skills"

const About = () => {
  return (
    <div className="w-full h-full max-w-6xl mx-auto" id="about">
      <h1 className="text-5xl text-neutralWhite font-semibold mb-4">About me<span className="text-neutralCyan">.</span></h1>
      <Background/>
      <Skills/>
      <Experience/>
    </div>
    
  )
}

export default About
