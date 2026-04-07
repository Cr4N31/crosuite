import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"
import { features } from "../data/features"
import bg from "../../public/assets/Crosuit bg 2.jpeg"
import { icons } from "../components/ui/Icons"

function Features() {
  return (
    <main className="bg-black/40 text-white min-h-screen">

      <Navbar />

      {/* Page Hero */}
      <section className="relative pt-36 pb-16 px-6 text-center" style={{ backgroundImage: `url('${bg}')`, backgroundSize: "cover", backgroundPosition: "center" }} data-aos="fade-up">
        <div className="absolute inset-0 bg-[#0a0a0f]/75" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <span className="inline-block text-[0.65rem] tracking-[4px] uppercase text-blue-600 border border-blue-900 px-4 py-1.5 rounded-full mb-8">
            Full Feature Set
          </span>
          <h1 className="font-syne font-extrabold text-5xl leading-tight mb-5 ">
            Everything Crosuite Can Do
          </h1>
          <p className="text-[#9990b0] text-lg leading-relaxed">
            A complete Web3 toolkit built for Discord communities — from swaps and airdrops to games and NFT integration.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6 max-w-6xl mx-auto" data-aos="fade-up">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-[#111118] border border-white/5 rounded-2xl p-8 hover:border-violet-600/40 hover:shadow-[0_0_24px_#7c3aed15] transition-all duration-300"
              data-aos="fade-right"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-10 h-10 rounded-xl bg-blue-950/50 flex items-center justify-center text-blue-400 mb-4">
                {icons[f.icon]}
                </div>
                <h3 className="font-syne font-bold text-blue-200 text-xl">{f.title}</h3>
              </div>

              <p className="text-white/70 text-sm leading-relaxed mb-6">{f.desc}</p>

              <ul className="flex flex-col gap-2">
                {f.points.map((point) => (
                  <li key={point} className="flex items-center gap-2 text-sm text-[#6b6880]">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Future Development */}
      <section className="py-20 px-6 max-w-4xl mx-auto text-center border-t border-white/5"
                data-aos="fade-up"
      >
        <p className="text-[0.7rem] tracking-[3px] uppercase text-blue-900 mb-3">Roadmap</p>
        <h2 className="font-syne font-bold text-3xl text-blue-700 mb-5">The Future of Crosuite</h2>
        <p className="text-black/60 leading-relaxed max-w-xl mx-auto mb-12">
          Crosuite is continuously evolving with new features and improvements focused on performance, usability, and scalability.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {  label: "Multi-chain Expansion" },
            {  label: "Improved Transaction Speed" },
            {  label: "Advanced Community Tools" },
            {  label: "Enhanced Security Systems" },
            {  label: "Better User Experience" },
          ].map((item) => (
            <div key={item.label} className="bg-[#111118] border border-white/5 rounded-xl px-5 py-4 flex items-center gap-3">
              <span className="text-xl">{item.icon}</span>
              <span className="text-sm text-[#9990b0] font-medium">{item.label}</span>
            </div>
          ))}
        </div>

        <p className="text-[#6b6880] text-xs mt-8">
          Full details and updates will be shared progressively as development continues.
        </p>
      </section>

      <Footer />
    </main>
  )
}

export default Features