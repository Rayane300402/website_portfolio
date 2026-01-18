import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './pages/About'
import Contact from './pages/Contact'
import Design from './pages/Design'
import Intro from './pages/Intro'
import Projects from './pages/Projects'
import CaseStudyPage from './pages/CaseStudyPage';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/design" element={<Design />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects/:slug" element={<CaseStudyPage />} />
        <Route path="/design/:slug" element={<CaseStudyPage />} />
      </Routes>
    </Router>
  )
}

export default App
