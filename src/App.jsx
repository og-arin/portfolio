import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import About from './components/About'
import Collab from './components/Collab'
import './App.css'
import Visitors from './components/Visitors'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Achievements />
      <About />
      <Collab />
      <Visitors/>
    </div>
  )
}

export default App