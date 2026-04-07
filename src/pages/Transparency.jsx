import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"
import FundBar from "../components/ui/FundBar"
import { fundAllocation, commitments, directions } from "../data/fundAllocation"

function Transparency() {
  return (
    <main className="bg-[#0a0a0f] text-white min-h-screen">
      <Navbar />

      {/* Page Hero */}
      <section className="relative pt-36 pb-16 px-6 text-center bg-[url('/assets/hero-bg.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-[#0a0a0f]/75" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[radial-gradient(ellipse_at_center,_#7c3aed22_0%,_transparent_70%)] pointer-events-none" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <span className="inline-block text-[0.7rem] tracking-[3px] uppercase text-violet-400 border border-violet-600/40 px-4 py-1.5 rounded-full mb-6">
            Transparency
          </span>
          <h1 className="font-syne font-extrabold text-5xl leading-tight mb-5 bg-gradient-to-br from-white via-violet-300 to-cyan-400 bg-clip-text text-transparent">
            Transparency & Fund Usage
          </h1>
          <p className="text-[#9990b0] text-lg leading-relaxed">
            We understand the importance of trust. Here's exactly how Crosuite operates and where funds go.
          </p>
        </div>
      </section>

      {/* Fund Allocation */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <p className="text-[0.7rem] tracking-[3px] uppercase text-violet-400 mb-2">Fund Allocation</p>
          <h2 className="font-syne font-bold text-3xl text-white mb-10">Where the money goes</h2>
          {fundAllocation.map((item) => (
            <FundBar
              key={item.label}
              label={item.label}
              percentage={item.percentage}
              desc={item.desc}
              color={item.color}
            />
          ))}
        </div>

        <div className="flex flex-col gap-6">
          {/* Project Direction */}
          <div className="bg-[#111118] border border-white/5 rounded-2xl p-8">
            <p className="text-[0.7rem] tracking-[3px] uppercase text-violet-400 mb-2">Direction</p>
            <h3 className="font-syne font-bold text-xl text-white mb-6">Project Direction</h3>
            <p className="text-[#9990b0] text-sm leading-relaxed mb-6">
              Crosuite is currently in a rebuilding phase focused on a stronger foundation,
              clear product direction, and real utility over hype.
            </p>
            <ul className="flex flex-col gap-3">
              {directions.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-[#9990b0]">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Commitment */}
          <div className="bg-[#111118] border border-white/5 rounded-2xl p-8">
            <p className="text-[0.7rem] tracking-[3px] uppercase text-cyan-400 mb-2">Commitment</p>
            <h3 className="font-syne font-bold text-xl text-white mb-6">Our Commitment</h3>
            <ul className="flex flex-col gap-3">
              {commitments.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-[#9990b0]">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Bottom note */}
      <section className="py-12 px-6 max-w-3xl mx-auto text-center border-t border-white/5">
        <p className="text-[#6b6880] text-sm leading-relaxed">
          We are committed to learning from past challenges and building a more reliable and valuable platform.
          Updates will be communicated progressively and honestly.
        </p>
      </section>

      <Footer />
    </main>
  )
}

export default Transparency