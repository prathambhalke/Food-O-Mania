import Link from "next/link";

export default function Home() {
  return (
    <main>
      <p className="hover:underline">
        <Link href="/meals">meals</Link>
      </p>
      <p className="hover:underline">
        <Link href="/meals/share">meals share</Link>
      </p>
      <p className="hover:underline">
        <Link href="/community">community</Link>
      </p>
    </main>
  );
}
