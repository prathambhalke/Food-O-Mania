'use client' // Error components must be Client Components
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
 
  return (
    <main className="h-screen flex justify-center items-center">
      <h1 className="text-4xl bg-gradient-to-tl font-bold">
      Fill incorrrect {" "}
        <span className="text-orange-400 font-bold">values in form!</span>
      </h1>
      <button onClick={() => reset()}>Try again</button>
    </main>
  )
}