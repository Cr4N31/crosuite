import { features } from "../../data/features"
import { icons } from "./Icons"

function FeatureCard() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <p className="text-[0.65rem] tracking-[4px] uppercase text-blue-800 mb-2">What We Offer</p>
      <h2 className="font-syne font-bold text-3xl text-blue-200 mb-12">Everything your community needs</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((f) => (
          <div
            key={f.title}
            className="bg-blue-600/60 border border-white/[0.06] rounded-2xl p-6 hover:border-blue-900/50 transition-all duration-300"
            data-aos="fade-right"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-950/80 flex items-center justify-center text-white mb-4">
              {icons[f.icon]}
            </div>
            <h3 className="font-syne font-bold text-blue-200 text-base mb-2">{f.title}</h3>
            <p className="text-white text-sm leading-relaxed mb-4">{f.desc}</p>
            <ul className="flex flex-col gap-2">
              {f.points.map((point) => (
                <li key={point} className="flex items-center gap-2 text-xs text-white/70">
                  <span className="w-1 h-1 rounded-full bg-blue-200/60 shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeatureCard