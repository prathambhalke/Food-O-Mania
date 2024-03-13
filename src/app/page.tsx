import Link from "next/link";

export default function Home() {
  return (
    <div>
      <header className="mt-32">
        <div className="flex justify-around">
          <div className="border border-orange-600">slider</div>
          <div>
            <div className="">
              <h1 className="text-4xl bg-gradient-to-tl text-orange-400 font-bold">
                NextLevel Food For <br /> NextLevel Foodies
              </h1>
              <p className="text-black font-semibold text-xl mt-4">
                Taste & share food from all over the world.
              </p>
            </div>
            <div className="flex justify-between items-center mt-5">
              <Link href="/community" className="font-semibold text-lg">
                Join the Community
              </Link>
              <Link
                href="/meals"
                className="px-3 py-2 font-bold rounded-lg bg-blue-400"
              >
                Explore Meals
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main className="flex flex-col justify-center items-center mt-32">
        <section className="flex flex-col justify-center items-center w-1/2 text-center gap-8 ">
          <h2 className="text-4xl font-bold font-sans">How it Works</h2>
          <p className="font-medium text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            facilis doloribus ullam sint natus labore error nam, laboriosam ex
            incidunt consectetur tempora itaque quaerat?
          </p>
        </section>
        <section className="flex flex-col justify-center items-center w-1/2 text-center gap-8 mt-14">
          <h2 className="text-4xl font-bold font-sans">Why NextLevel Food</h2>
          <p className="font-medium text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
            vel quam sunt aperiam magni.
          </p>
        </section>
      </main>
    </div>
  );
}
