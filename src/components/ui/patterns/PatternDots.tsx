interface PatternDotsProps {
  className?: string
}

export function PatternDots({
  className = "pointer-events-none absolute inset-0 z-0 opacity-8",
}: PatternDotsProps) {
  return (
    <div
      aria-hidden
      className={className}
      style={{
        backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20'><circle cx='2' cy='2' r='1.5' fill='%235eead4'/></svg>")`,
      }}
    />
  )
}
