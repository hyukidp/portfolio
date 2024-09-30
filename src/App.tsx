import Header from "./components/Header"
import MV from "./components/MV"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import MyFooter from "./components/MyFooter"

const App = () => {
  return (
    <div className="flex flex-col min-h-screen h-full w-full bg-[#2B2C28] px-6 md:px-10 pt-10 pb-3">
      <Header />
      <MV/>
      <About/>
      <Projects/>
      <Contact/>
      <MyFooter/>
    </div>
  )
}

export default App
