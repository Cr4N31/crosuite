import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"
import FundBar from "../components/ui/FundBar"
import { fundAllocation, commitments, directions } from "../data/fundAllocation"
import bg from "../../public/assets/Crosuit bg 4.jpeg"

function Transparency() {
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
          <span className="inline-block text-[0.6rem] tracking-[5px] uppercase text-white/25 border border-white/10 px-4 py-1.5 rounded-sm mb-8">
            Transparency
          </span>
          <h1 className="font-syne font-extrabold text-5xl leading-tight mb-5 text-white">
            Transparency & Fund Usage
          </h1>
          <p className="text-white/30 text-sm leading-loose">
            We understand the importance of trust. Here's exactly how Crosuite operates and where funds go.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start" data-aos="fade-up">
        <div>
          <p className="text-[0.6rem] tracking-[5px] uppercase text-white/20 mb-2">Fund Allocation</p>
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

        <div className="flex flex-col gap-4">
          <div className="bg-[#0d0d1a] border border-white/[0.05] rounded-xl p-8">
            <p className="text-[0.6rem] tracking-[5px] uppercase text-blue-500/50 mb-2">Direction</p>
            <h3 className="font-syne font-bold text-lg text-white mb-5">Project Direction</h3>
            <p className="text-white/25 text-sm leading-loose mb-6">
              Crosuite is currently in a rebuilding phase focused on a stronger foundation,
              clear product direction, and real utility over hype.
            </p>
            <ul className="flex flex-col gap-3">
              {directions.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-white/25">
                  <span className="w-1 h-1 rounded-full bg-blue-500/50 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#0d0d1a] border border-white/[0.05] rounded-xl p-8">
            <p className="text-[0.6rem] tracking-[5px] uppercase text-violet-500/50 mb-2">Commitment</p>
            <h3 className="font-syne font-bold text-lg text-white mb-5">Our Commitment</h3>
            <ul className="flex flex-col gap-3">
              {commitments.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-white/25">
                  <span className="w-1 h-1 rounded-full bg-violet-500/50 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 max-w-3xl mx-auto text-center border-t border-white/[0.04]">
        <p className="text-white/15 text-sm leading-loose">
          We are committed to learning from past challenges and building a more reliable and valuable platform.
          Updates will be communicated progressively and honestly.
        </p>
      </section>

      <Footer />
    </main>
  )
}

export default Transparency