import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"
import CommandBlock from "../components/ui/CommandBlock"
import { commands } from "../data/commands"
import { icons } from "../components/ui/Icons"
import bg from "/assets/Crosuit bg 3.jpeg"

function ControlPanel() {
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
            Commands
          </span>
          <h1 className="font-syne font-extrabold text-5xl leading-tight mb-5 text-white">
            Crosuite Control Panel
          </h1>
          <p className="text-white/50 text-sm leading-loose">
            Every command, how it works, and how to use it — all in one place.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 max-w-6xl mx-auto">
        {commands.map((group) => (
          <div key={group.category} className="mb-16" data-aos="fade-up">
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-white/[0.04]">
              <span className="text-blue-500/60">{icons[group.icon]}</span>
              <h2 className="font-syne font-bold text-xl text-blue-200">{group.category}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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

      <section className="py-12 px-6 max-w-4xl mx-auto border-t border-white/[0.04]" data-aos="fade-up">
        <h3 className="font-syne font-bold text-sm text-white/30 uppercase tracking-widest mb-6">Notes</h3>
        <ul className="flex flex-col gap-3">
          {[
            "Only registered tokens and NFTs can be used across Crosuite features.",
            "New features and commands are added regularly — check back for updates.",
            "Always verify transactions before confirming.",
          ].map((note) => (
            <li key={note} className="flex items-start gap-3 text-sm text-white/45">
              <span className="w-1 h-1 rounded-full bg-blue-500/40 mt-2 shrink-0" />
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