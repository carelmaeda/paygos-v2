interface PatternHexagonProps {
  className?: string
}

export function PatternHexagon({
  className = "pointer-events-none absolute inset-0 z-0 opacity-5",
}: PatternHexagonProps) {
  return (
    <div
      aria-hidden
      className={className}
      style={{
        backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='29' height='50.115'><rect width='100%' height='100%' fill='hsla(240,6.7%,17.6%,1)'/><path d='M14.498 16.858L0 8.488.002-8.257l14.5-8.374L29-8.26l-.002 16.745zm0 50.06L0 58.548l.002-16.745 14.5-8.373L29 41.8l-.002 16.744zM28.996 41.8l-14.498-8.37.002-16.744L29 8.312l14.498 8.37-.002 16.745zm-29 0l-14.498-8.37.002-16.744L0 8.312l14.498 8.37-.002 16.745z' stroke='%235eead4' stroke-width='1' fill='none'/></pattern></defs><rect width='800%' height='800%' fill='url(%23a)'/></svg>")`,
      }}
    />
  )
}
