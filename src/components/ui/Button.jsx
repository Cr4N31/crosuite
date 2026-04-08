function Button({ variant = "primary", children, className = "", ...props }) {
  const base = "font-medium rounded-sm px-5 py-2.5 text-sm transition-all duration-200 cursor-pointer border tracking-wide"

  const variants = {
    primary: "bg-blue-600 text-white border-blue-500 hover:bg-blue-500 shadow-[0_0_12px_#3b82f6] hover:shadow-[0_0_22px_#3b82f6,0_0_40px_#3b82f688]",
    outline: "bg-transparent text-white/60 border-white/30 hover:text-white hover:border-white/60 hover:shadow-[0_0_12px_#ffffff18]",
  }

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}

export default Button