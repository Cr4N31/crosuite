import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="border-t border-white/[0.04] py-8 px-10 flex flex-col md:flex-row items-center justify-between gap-4 bg-[#07070f]">
      <div className="font-syne font-extrabold text-sm tracking-widest text-white/50">
        CRO<span className="text-blue-600/70">SUITE</span>
      </div>
      <p className="text-white/15 text-xs">© {new Date().getFullYear()} Crosuite. All rights reserved.</p>
      <div className="flex gap-6">
        {[
          { label: "Features", path: "/features" },
          { label: "Control Panel", path: "/control-panel" },
          { label: "Transparency", path: "/transparency" },
        ].map((item) => (
          <Link key={item.label} to={item.path} className="text-white/20 text-xs hover:text-white/40 transition-colors">
            {item.label}
          </Link>
        ))}
      </div>
    </footer>
  )
}

export default Footer