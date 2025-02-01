import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Technologies from "./components/Technologies";
import Project from "./components/Project";
import Ask from "./components/Ask";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialised
    selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen 
        bg-neutral-700 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        </div>
      </div>

      
      <div className="container mx-auto px-8 pt-20">
        <Navbar />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/education" element={<Education />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/ask" element={<Ask />} />
          </Routes>
      </div>
    </div>
  )
}

export default App
