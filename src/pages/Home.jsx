import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"
import FeatureCard from "../components/ui/FeatureCard"
import Button from "../components/ui/Button"
import { Link } from "react-router-dom"
import bg from "../../public/assets/Crosuit bg 1.jpeg"
import mainBg from "../../public/assets/nasa-Q1p7bh3SHj8-unsplash.jpg"

function Home() {
  return (
    <main className="bg-black text-white">
      <Navbar />

      {/* Hero */}
      <section
        className="relative min-h-screen flex flex-col items-left justify-center px-6 pt-24 pb-16"
        style={{ backgroundImage: `url('${bg}')`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-[#07070f]/85" />
        <div className="relative ml-8 z-10 max-w-2xl" data-aos="fade-up">
          <span className="inline-block text-[0.6rem] tracking-[5px] uppercase text-white/70 border border-white/20 px-4 py-1.5 rounded-sm mb-8">
            Web3 × Discord
          </span>
          <h1 className="font-syne font-extrabold text-5xl md:text-6xl leading-[1.08] mb-6 text-white">
            The All-in-One<br />Web3 Toolkit<br />for Discord
          </h1>
          <p className="text-white/60 text-sm mb-10 leading-loose tracking-wide">
            Power your community with seamless token swaps, NFT tools, airdrops, and rewards — all without leaving Discord.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Button variant="primary">Add to Discord</Button>
            <Button variant="outline">View Features</Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <FeatureCard />

      {/* What is Crosuite */}
      <section className="py-24 px-6 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center" data-aos="fade-up"
            style={{ backgroundImage: `url('${mainBg}')`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div>
          <p className="text-[0.6rem] tracking-[5px] uppercase text-white/80 mb-3">About</p>
          <h2 className="font-syne font-bold text-3xl text-white mb-5 leading-snug">What is Crosuite?</h2>
          <p className="text-white/60 text-sm leading-loose mb-8">
            Crosuite is a Discord bot that brings Web3 tools directly into your community.
            It allows users to manage tokens, NFTs, rewards, and engagement systems without leaving Discord
            — making blockchain interactions simple, fast, and accessible.
          </p>
          <Link to="/features">
            <Button variant="outline">See Full Features →</Button>
          </Link>
        </div>

        <div className="bg-[#0d0d1a] border border-white/[0.06] rounded-xl p-6 text-sm font-mono">
          <p className="text-white/15 text-xs tracking-widest uppercase mb-5"># general</p>
          <div className="flex gap-3 mb-5">
            <div className="w-7 h-7 rounded-full bg-blue-950 flex items-center justify-center text-blue-400 text-xs font-bold shrink-0">U</div>
            <div>
              <p className="text-blue-400/60 text-xs font-sans mb-1">User</p>
              <p className="text-white/30 text-xs">/swap</p>
              <div className="mt-2 border-l border-blue-900/60 pl-3 py-1.5 text-xs text-white/30 leading-relaxed">
                Swap confirmed — 50 USDC → 0.021 ETH<br />
                <span className="text-white/15">Tx: 0x4f2a...3c9d</span>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-7 h-7 rounded-full bg-violet-950 flex items-center justify-center text-violet-400 text-xs font-bold shrink-0">A</div>
            <div>
              <p className="text-violet-400/60 text-xs font-sans mb-1">Admin</p>
              <p className="text-white/30 text-xs">/airdrop</p>
              <div className="mt-2 border-l border-violet-900/60 pl-3 py-1.5 text-xs text-white/30">
                Airdrop launched — 100 members receive 10 CROS each
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center border-t border-white/[0.04]">
        <div className="max-w-lg mx-auto" data-aos="fade-up">
          <h2 className="font-syne font-bold text-4xl text-white mb-4 leading-tight">
            Ready to power your community?
          </h2>
          <p className="text-white/25 text-sm mb-8 leading-loose">
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