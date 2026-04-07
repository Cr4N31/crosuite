import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"
import CommandBlock from "../components/ui/CommandBlock"
import { commands } from "../data/commands"
import { icons } from "../components/ui/Icons"
import bg from "../../public/assets/Crosuit bg 3.jpeg"

function ControlPanel() {
  return (
    <main className="bg-black/40 text-white min-h-screen">
      <Navbar />

      {/* Page Hero */}
      <section className="relative pt-36 pb-16 px-6 text-center" style={{ backgroundImage: `url('${bg}')`, backgroundSize: "cover", backgroundPosition: "center" }} data-aos="fade-up">
        <div className="absolute inset-0 bg-[#0a0a0f]/75" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[radial-gradient(ellipse_at_center,_#7c3aed22_0%,_transparent_70%)] pointer-events-none" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <span className="inline-block text-[0.7rem] tracking-[3px] uppercase text-blue-400 border border-blue-600/40 px-4 py-1.5 rounded-full mb-6">
            Commands
          </span>
          <h1 className="font-syne font-extrabold text-5xl leading-tight mb-5">
            Crosuite Control Panel
          </h1>
          <p className="text-[#9990b0] text-lg leading-relaxed">
            Every command, how it works, and how to use it — all in one place.
          </p>
        </div>
      </section>

      {/* Commands */}
      <section className="py-20 px-6 max-w-6xl mx-auto" data-aos="fade-up">
        {commands.map((group) => (
          <div key={group.category} className="mb-16">
            <div className="flex items-center gap-3 mb-8" >
             <span className="text-blue-900">{icons[group.icon]}</span>
              <h2 className="font-syne font-bold text-2xl text-blue-700">{group.category}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" data-aos="fade-right">
              {group.items.map((item) => (
                <CommandBlock
                  key={item.command}
                  command={item.command}
                  description={item.description}
                  steps={item.steps}
                />
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Notes */}
      <section className="py-12 px-6 max-w-4xl mx-auto border-t border-white/5" data-aos="fade-up">
        <h3 className="font-syne font-bold text-lg text-blue-700 mb-6">ℹ Notes</h3>
        <ul className="flex flex-col gap-3">
          {[
            "Only registered tokens and NFTs can be used across Crosuite features.",
            "New features and commands are added regularly — check back for updates.",
            "Always verify transactions before confirming.",
          ].map((note) => (
            <li key={note} className="flex items-start gap-3 text-sm text-black">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
              {note}
            </li>
          ))}
        </ul>
      </section>

      <Footer />
    </main>
  )
}

export default ControlPanel