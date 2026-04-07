import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"
import { features } from "../data/features"
import { icons } from "../components/ui/Icons"
import bg from "../../public/assets/Crosuit bg 2.jpeg"
import mainBg from "../../public/assets/mainBg.jpg"

function Features() {
  return (
    <main className="bg-[#07070f] text-white min-h-screen">
      <Navbar />

      <section
        className="relative pt-36 pb-16 px-6 text-center"
        style={{ backgroundImage: `url('${bg}')`, backgroundSize: "cover", backgroundPosition: "center" }}
        data-aos="fade-up"
      >
        <div className="absolute inset-0 bg-[#07070f]/85" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <span className="inline-block text-[0.6rem] tracking-[5px] uppercase text-white/70 border border-white/20 px-4 py-1.5 rounded-sm mb-8">
            Full Feature Set
          </span>
          <h1 className="font-syne font-extrabold text-5xl leading-tight mb-5 text-white">
            Everything Crosuite Can Do
          </h1>
          <p className="text-white/60 text-sm leading-loose">
            A complete Web3 toolkit built for Discord communities — from swaps and airdrops to games and NFT integration.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-[#0d0d1a] border border-white/[0.05] rounded-xl p-8 hover:border-blue-900/40 transition-all duration-300"
              data-aos="fade-up"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-10 h-10 rounded-lg bg-blue-950/60 flex items-center justify-center text-blue-400">
                  {icons[f.icon]}
                </div>
                <h3 className="font-syne font-bold text-white text-lg">{f.title}</h3>
              </div>
              <p className="text-white/30 text-sm leading-loose mb-6">{f.desc}</p>
              <ul className="flex flex-col gap-2">
                {f.points.map((point) => (
                  <li key={point} className="flex items-center gap-2.5 text-xs text-white/20">
                    <span className="w-1 h-1 rounded-full bg-violet-500/60 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 max-w-4xl mx-auto text-center border-t border-white/[0.04]" data-aos="fade-up"
       style={{ backgroundImage: `url('${mainBg}')`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <p className="text-[0.6rem] tracking-[5px] uppercase text-white/60 mb-3">Roadmap</p>
        <h2 className="font-syne font-bold text-3xl text-white mb-4">The Future of Crosuite</h2>
        <p className="text-white/50 text-sm leading-loose max-w-md mx-auto mb-12">
          Continuously evolving — focused on performance, usability, and scalability.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            "Multi-chain Expansion",
            "Improved Transaction Speed",
            "Advanced Community Tools",
            "Enhanced Security Systems",
            "Better User Experience",
          ].map((label) => (
            <div key={label} className="bg-[#0d0d1a] border border-white/[0.05] rounded-lg px-5 py-3.5">
              <span className="text-sm text-white/30 font-medium">{label}</span>
            </div>
          ))}
        </div>
        <p className="text-white/30 text-xs mt-8">Updates shared progressively as development continues.</p>
      </section>

      <Footer />
    </main>
  )
}

export default Features