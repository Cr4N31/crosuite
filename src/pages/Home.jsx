import Navbar from "../components/layout/Navbar"
import Footer from "../components/layout/Footer"
import FeatureCard from "../components/ui/FeatureCard"
import Button from "../components/ui/Button"
import { Link } from "react-router-dom"
import bg from "/assets/Crosuit bg 1.jpeg"
import mainBg from "/assets/nasa-Q1p7bh3SHj8-unsplash.jpg"
import Particle from "../components/ui/Particle"

function Home() {
  return (
    <main className="bg-black text-white relative">
      <Particle />
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
          <h1 className="font-qurova font-bold text-5xl md:text-6xl leading-[1.08] mb-6 text-white">
            The All-in-One<br />Blockchain-based Web<br />Toolkit for Discord
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

        <div className="flex gap-3">
            <div className="w-7 h-7 rounded-full bg-violet-950 flex items-center justify-center text-violet-400 text-xs font-bold shrink-0">A</div>
            <div className="flex-1">
            <p className="text-violet-400/60 text-xs font-sans mb-1">Crosuite Bot</p>
            <div className="border border-white/[0.06] rounded-lg p-4 bg-[#0a0a16]">
                <p className="text-white/70 text-xs font-sans font-semibold mb-1">New Airdrop Started</p>
                <p className="text-white/25 text-xs font-sans mb-4">
                Started by <span className="text-blue-400/60">@admin</span> · Token: <span className="text-violet-400/60">$CHILL</span> · Amount: <span className="text-white/40">100</span>
                </p>

                <div className="grid grid-cols-2 gap-3 mb-4">
                {[
                    { label: "Entries", value: "1 / 2" },
                    { label: "Countdown", value: "2 minute(s)" },
                    { label: "Platform Fee", value: "0.0606 CRO" },
                    { label: "Eligible Role", value: "Everyone" },
                ].map((item) => (
                    <div key={item.label}>
                    <p className="text-white/15 text-[10px] font-sans uppercase tracking-widest mb-0.5">{item.label}</p>
                    <p className="text-white/40 text-xs font-sans">{item.value}</p>
                    </div>
                ))}
                </div>

                <p className="text-white/10 text-[10px] font-sans mb-3">Campaign ID: 1770017195729-elmwkm</p>

                <button className="w-full py-2 rounded-sm bg-blue-700/40 border border-blue-800/40 text-blue-300/60 text-xs font-sans tracking-wide hover:bg-blue-700/60 transition-all duration-200">
                Join Airdrop
                </button>
            </div>
            </div>
        </div>
        </div>
      </section>
      <section className="py-24 px-6" data-aos="fade-up">
        <div className="bg-[#0d0d1a] border border-white/[0.06] rounded-xl p-6 text-sm font-mono mt-4">
        <p className="text-white/15 text-xs tracking-widest uppercase mb-5"># general</p>

        <div className="flex gap-3">
            <div className="w-7 h-7 rounded-full bg-blue-950 flex items-center justify-center text-blue-400 text-xs font-bold shrink-0">U</div>
            <div className="flex-1">
            <p className="text-blue-400/60 text-xs font-sans mb-1">User</p>
            <p className="text-white/30 text-xs mb-3">/Mybalance</p>

            <div className="border border-white/[0.06] rounded-lg p-4 bg-[#0a0a16]">
                <p className="text-white/70 text-xs font-sans font-semibold mb-4">Your Balances</p>

                <div className="flex flex-col gap-2 mb-4">
                {[
                    { token: "CA", amount: "1,441.6659", usd: "$0.00" },
                    { token: "CRO", amount: "0.1855", usd: "$0.00" },
                    { token: "ERIC", amount: "5,821.6990", usd: "$0.00" },
                    { token: "FFTB", amount: "45.5854", usd: "$0.00" },
                    { token: "LYRA", amount: "1,694.8461", usd: "$0.00" },
                    { token: "MOON", amount: "966.1663", usd: "$0.00" },
                    { token: "OBS", amount: "7,451.2724", usd: "$0.00" },
                    { token: "PUUSH", amount: "1,438,946.51", usd: "$0.00" },
                    { token: "VIZN", amount: "558,118.1566", usd: "$0.00" },
                ].map((item) => (
                    <div key={item.token} className="flex items-center justify-between">
                    <span className="text-violet-400/60 text-[11px] font-sans w-16">{item.token}</span>
                    <span className="text-white/35 text-[11px] font-sans flex-1">{item.amount}</span>
                    <span className="text-white/15 text-[11px] font-sans">{item.usd}</span>
                    </div>
                ))}
                </div>

                <div className="border-t border-white/[0.04] pt-3 mb-3">
                <div className="flex items-center justify-between">
                    <span className="text-white/20 text-[10px] font-sans uppercase tracking-widest">Total Portfolio Value</span>
                    <span className="text-white/40 text-xs font-sans">$0.00</span>
                </div>
                </div>

                <p className="text-white/10 text-[10px] font-sans mb-3 break-all">
                Wallet: 0x8Fb57a133ab7eFd600CFA173e406e74D2d7C14d2
                </p>

                <div className="flex items-center justify-between">
                <p className="text-white/10 text-[10px] font-sans">Today at 8:56 AM · Only you can see this</p>
                <button className="text-white/15 text-[10px] font-sans hover:text-white/30 transition-colors">Dismiss</button>
                </div>
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