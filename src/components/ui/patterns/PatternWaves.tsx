interface PatternWavesProps {
  className?: string
}

export function PatternWaves({
  className = "pointer-events-none absolute inset-0 z-0 opacity-7",
}: PatternWavesProps) {
  return (
    <div
      aria-hidden
      className={className}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='40' viewBox='0 0 80 40'%3E%3Cpath d='M0 20 Q 20 0, 40 20 T 80 20' fill='none' stroke='%235eead4' stroke-width='1'/%3E%3C/svg%3E")`,
        backgroundSize: "80px 40px",
      }}
    />
  )
}
