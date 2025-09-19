import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Education from './components/Education'

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white pt-16 scroll-smooth">
      <Navbar />
      <Hero />  
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
