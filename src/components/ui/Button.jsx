function Button({ variant = "primary", children, className = "", ...props }) {
  const base = "font-medium rounded-lg px-5 py-2.5 text-sm transition-all duration-200 cursor-pointer border"

  const variants = {
    primary: "bg-blue-700 text-white border-transparent hover:bg-blue-800",
    outline: "bg-transparent text-blue-600 border-blue-800/40 hover:bg-blue-900/20",
  }

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}

export default Button