import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import Button from "../ui/Button";
import img from "/assets/Crosuit bg 4.jpeg"

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Features", path: "/features" },
  { label: "Control Panel", path: "/control-panel" },
  { label: "Transparency", path: "/transparency" },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLinkClick = () => setMenuOpen(false)

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 flex items-center justify-between px-6 md:px-10 py-4 transition-all duration-300 ${
        scrolled || menuOpen ? "bg-[#0a0a0f]/95 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      }`}>
        <div className="flex gap-2 items-center">
            <img src={img} className="w-8 h-8 rounded-xl" alt="cro-logo"/>
            <Link to="/" className="font-syne font-extrabold text-xl tracking-widest text-white" onClick={handleLinkClick}>
            CRO<span className="text-blue-500">SUITE</span>
            </Link>
        </div>


        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 list-none">
          {navLinks.map((item) => (
            <li key={item.label}>
              <Link
                to={item.path}
                className={`text-sm transition-all duration-200 relative pb-1 ${
                  pathname === item.path
                    ? "text-blue-400"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {item.label}
                {pathname === item.path && (
                  <span className="absolute bottom-0 left-0 w-full h-px bg-blue-500" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button variant="primary">Add to Discord</Button>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`fixed top-0 left-0 w-full h-screen z-40 bg-[#0a0a0f] flex flex-col items-center justify-center gap-8 transition-all duration-300 md:hidden ${
        menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}>
        {navLinks.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            onClick={handleLinkClick}
            className={`font-syne font-bold text-2xl transition-colors ${
              pathname === item.path ? "text-blue-400" : "text-white hover:text-blue-400"
            }`}
          >
            {item.label}
          </Link>
        ))}
        <Button variant="primary">Add to Discord</Button>
      </div>
    </>
  )
}

export default Navbar