function CommandBlock({ command, description, steps }) {
  return (
    <div className="bg-blue-900/90 border border-white/[0.05] rounded-xl p-5 hover:border-blue-900/30 transition-all duration-300">
      <code className="text-blue-200/70 font-mono text-xs bg-blue-950 px-2.5 py-1 rounded-sm inline-block mb-3">
        {command}
      </code>
      <p className="text-white/60 text-xs leading-loose mb-4">{description}</p>
      <ol className="flex flex-col gap-2">
        {steps.map((step, i) => (
          <li key={i} className="flex items-center gap-2.5 text-xs text-white/50">
            <span className="w-4 h-4 rounded-sm bg-violet-950/60 text-violet-400/60 flex items-center justify-center text-[10px] font-bold shrink-0">
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