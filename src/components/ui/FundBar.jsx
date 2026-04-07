function FundBar({ label, percentage, desc, color }) {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-white">{label}</span>
        <span className="text-sm font-mono font-bold" style={{ color }}>{percentage}%</span>
      </div>
      <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden mb-2">
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{ width: `${percentage}%`, background: color }}
        />
      </div>
      <p className="text-xs text-black/80 leading-relaxed">{desc}</p>
    </div>
  )
}

export default FundBar