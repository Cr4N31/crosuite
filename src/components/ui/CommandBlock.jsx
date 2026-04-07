function CommandBlock({ command, description, steps }) {
  return (
    <div className="bg-[#111118] border border-white/5 rounded-xl p-5 hover:border-blue-600/40 transition-all duration-300">
      <div className="flex items-start justify-between gap-4 mb-3">
        <code className="text-blue-400 font-mono text-sm font-semibold bg-blue-900/20 px-3 py-1 rounded-lg">
          {command}
        </code>
      </div>
      <p className="text-[#9990b0] text-sm leading-relaxed mb-4">{description}</p>
      <ol className="flex flex-col gap-1.5">
        {steps.map((step, i) => (
          <li key={i} className="flex items-center gap-2.5 text-xs text-[#6b6880]">
            <span className="w-4 h-4 rounded-full bg-blue-900/40 text-blue-400 flex items-center justify-center text-[10px] font-bold shrink-0">
              {i + 1}
            </span>
            {step}
          </li>
        ))}
      </ol>
    </div>
  )
}

export default CommandBlock