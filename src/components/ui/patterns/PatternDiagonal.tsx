interface PatternDiagonalProps {
  className?: string
}

export function PatternDiagonal({
  className = "pointer-events-none absolute inset-0 z-0 opacity-5",
}: PatternDiagonalProps) {
  return (
    <div
      aria-hidden
      className={className}
      style={{
        backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16'><path d='M-4 4l8-8M0 16l16-16M12 20l8-8' stroke='%235eead4' stroke-width='1'/></svg>")`,
      }}
    />
  )
}
