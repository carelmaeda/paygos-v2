export default function Loading() {
  return (
    <main
      id="main-content"
      className="flex min-h-[60vh] flex-col items-center justify-center"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-teal-200 border-t-teal-600" />
        <p className="text-sm text-slate-500">Loading...</p>
      </div>
    </main>
  )
}
