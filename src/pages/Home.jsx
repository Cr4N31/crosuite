import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"
import FeatureCard from "../components/ui/FeatureCard"
import Button from "../components/ui/Button"
import bg from "../../public/assets/Crosuit bg 1.jpeg"
import { Link } from "react-router-dom"

function Home() {
  return (
    <main className="bg-black/20 text-white">
      <Navbar />

      {/* Hero */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-16"
        style={{ backgroundImage: `url('${bg}')`, backgroundSize: "cover", backgroundPosition: "center" }}
        data-aos="fade-up"
      >
        <div className="absolute inset-0 bg-[#080810]/80" />

        <div className="relative z-10 max-w-2xl">
          <span className="inline-block text-[0.65rem] tracking-[4px] uppercase text-blue-400/80 border border-blue-900/60 px-4 py-1.5 rounded-full mb-8">
            Web3 × Discord
          </span>
          <h1 className="font-syne font-extrabold text-5xl md:text-6xl leading-[1.08] mb-6 text-white">
            The All-in-One<br />Web3 Toolkit<br />for Discord
          </h1>
          <p className="text-white/40 text-base max-w-md mx-auto mb-10 leading-relaxed">
            Power your community with seamless token swaps, NFT tools, airdrops, and rewards — all without leaving Discord.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Button variant="primary">Add to Discord</Button>
            <Button variant="outline">View Features</Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <FeatureCard/>

      {/* What is Crosuite */}
      <section className="py-24 px-6 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center" data-aos="fade-up">
        <div>
          <p className="text-[0.65rem] tracking-[4px] uppercase text-blue-800 mb-3">About</p>
          <h2 className="font-syne font-bold text-3xl text-blue-900 mb-5 leading-snug">What is Crosuite?</h2>
          <p className="text-black text-sm leading-relaxed mb-8">
            Crosuite is a Discord bot that brings Web3 tools directly into your community.
            It allows users to manage tokens, NFTs, rewards, and engagement systems without leaving Discord
            — making blockchain interactions simple, fast, and accessible.
          </p>
         <Link to="/features">
            <Button variant="outline">See Full Features →</Button>
        </Link>
        </div>

        <div className="bg-[#0e0e18] border border-white/[0.06] rounded-xl p-6 text-sm font-mono">
          <p className="text-white/20 text-xs tracking-widest uppercase mb-4"># general</p>
          <div className="flex gap-3 mb-5">
            <div className="w-7 h-7 rounded-full bg-blue-900 flex items-center justify-center text-blue-300 text-xs font-bold shrink-0">U</div>
            <div>
              <p className="text-blue-400/80 text-xs font-sans font-medium mb-1">User</p>
              <p className="text-white/50">/swap</p>
              <div className="mt-2 bg-blue-950/40 border-l-2 border-blue-800/60 pl-3 py-2 rounded-r-lg text-xs text-white/50 leading-relaxed">
                 Swap confirmed — 50 USDC → 0.021 ETH<br />
                <span className="text-white/20">Transaction hash: 0x4f2a...3c9d</span>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-7 h-7 rounded-full bg-cyan-950 flex items-center justify-center text-cyan-400 text-xs font-bold shrink-0">A</div>
            <div>
              <p className="text-cyan-400/70 text-xs font-sans font-medium mb-1">Admin</p>
              <p className="text-white/50">/airdrop</p>
              <div className="mt-2 bg-blue-950/40 border-l-2 border-blue-800/60 pl-3 py-2 rounded-r-lg text-xs text-white/50">
                 Airdrop launched — 100 members will receive 10 CROS each
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-24 px-6 text-center border-t border-white/[0.04] relative"
        style={{ backgroundImage: "url('/assets/cta-bg.jpeg')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-black" />
        <div className="relative z-10 max-w-lg mx-auto">
          <h2 className="font-syne font-extrabold text-4xl text-white mb-4 leading-tight">
            Ready to power your community?
          </h2>
          <p className="text-white/40 text-sm mb-8 leading-relaxed">
            Join the Crosuite ecosystem and be part of the next phase of Web3 community tools.
          </p>
          <Button variant="primary" className="px-8 py-3 text-base">Add to Discord</Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default Home