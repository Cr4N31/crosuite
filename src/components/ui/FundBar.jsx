function FundBar({ label, percentage, desc, color }) {
  return (
    <div className="mb-7" data-aos="fade-up">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-white/80">{label}</span>
        <span className="text-xs font-mono text-white/80">{percentage}%</span>
      </div>
      <div className="w-full h-px bg-white/[0.06] rounded-full overflow-hidden mb-2">
        <div
          className="h-full transition-all duration-700"
          style={{ width: `${percentage}%`, background: color }}
        />
      </div>
      <p className="text-xs text-white/40 leading-loose">{desc}</p>
    </div>
  )
}

export default FundBar