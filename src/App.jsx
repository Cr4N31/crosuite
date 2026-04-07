import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Features from "./pages/Features"
import ControlPanel from "./pages/ControlPanel"
import Transparency from "./pages/Transparency"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

function App() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: false,
      easing: "ease-out",
    })
  }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/control-panel" element={<ControlPanel />} />
        <Route path="/transparency" element={<Transparency />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App