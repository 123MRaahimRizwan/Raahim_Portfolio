import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollProgressBar from './components/ScrollProgressBar'

function App() {

  return (
    <>
      <ScrollProgressBar />
      <Navbar />
      <About />
      <Projects />
      <Contact/>
      <Footer />
    </>
  )
}

export default App
