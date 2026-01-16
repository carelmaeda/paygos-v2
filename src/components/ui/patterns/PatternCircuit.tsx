interface PatternCircuitProps {
  className?: string
}

export function PatternCircuit({
  className = "pointer-events-none absolute inset-0 z-0 opacity-7",
}: PatternCircuitProps) {
  return (
    <div
      aria-hidden
      className={className}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpath d='M10 10 H90 V90 H10 Z M50 10 V40 M10 50 H40 M90 50 H60 M50 90 V60' fill='none' stroke='%235eead4' stroke-width='0.5'/%3E%3Ccircle cx='50' cy='50' r='3' fill='%235eead4'/%3E%3Ccircle cx='10' cy='10' r='2' fill='%235eead4'/%3E%3Ccircle cx='90' cy='10' r='2' fill='%235eead4'/%3E%3Ccircle cx='90' cy='90' r='2' fill='%235eead4'/%3E%3Ccircle cx='10' cy='90' r='2' fill='%235eead4'/%3E%3C/svg%3E")`,
      }}
    />
  )
}
