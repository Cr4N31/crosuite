function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-10 flex flex-col md:flex-row items-center justify-between gap-4 bg-black">
      <div className="font-syne font-extrabold text-sm tracking-widest text-white">
        CRO<span className="text-blue-500">SUITE</span>
      </div>
      <p className="text-[#6b6880] text-xs">© {new Date().getFullYear()} Crosuite. All rights reserved.</p>
      <div className="flex gap-6">
        {["Features", "Control Panel", "Transparency"].map((item) => (
          <a key={item} href="#" className="text-[#6b6880] text-xs hover:text-white transition-colors">{item}</a>
        ))}
      </div>
    </footer>
  )
}

export default Footer