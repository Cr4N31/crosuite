function Button({ variant = "primary", children, className = "", ...props }) {
  const base = "font-medium rounded-sm px-5 py-2.5 text-sm transition-all duration-200 cursor-pointer border tracking-wide"

  const variants = {
    primary: "bg-blue-700/80 text-white border-blue-800/50 hover:bg-blue-700",
    outline: "bg-transparent text-white/40 border-white/10 hover:text-white/70 hover:border-white/20",
  }

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}

export default Button