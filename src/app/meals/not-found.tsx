"use client";

export default function NotFound() {
  return (
    <main className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl bg-gradient-to-tl font-bold">
        Meal{" "}
        <span className="text-orange-400 font-bold">Not Found</span>
      </h1>
      <p className="text-sm text-gray-700 mt-4">unfortunately we could not found the requested page or Meal</p>
    </main>
  );
}
