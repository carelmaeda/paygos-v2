interface PatternGridProps {
  className?: string
}

export function PatternGrid({
  className = "pointer-events-none absolute inset-0 z-0 opacity-5",
}: PatternGridProps) {
  return (
    <div
      aria-hidden
      className={className}
      style={{
        backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><path d='M0 0h40v40H0z' fill='none'/><path d='M0 0h40M0 40h40' stroke='%235eead4' stroke-width='1'/><path d='M0 0v40M40 0v40' stroke='%235eead4' stroke-width='1'/></svg>")`,
      }}
    />
  )
}
