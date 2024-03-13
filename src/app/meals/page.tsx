import Link from "next/link";
const Meals = () => {
  return (
    <div>
      <header className="mt-32 ml-24">
        <div className="flex justify-around flex-col">
            <h1 className="text-4xl bg-gradient-to-tl font-bold">
              Delicious meals, created <span className="text-orange-400 font-bold">by you</span>
            </h1>
            <p className="text-black font-semibold text-lg mt-4">
              Choose your favorite recipe and cook it yourself. it is easy and fun!
            </p>
          <div className="flex flex-col justify-between items-start mt-5">
            <Link 
              href="/meals/share"
              className="px-3 py-2 font-bold rounded-lg bg-blue-400 text-white"
            >
              Share Your Favorite Recipe
            </Link>
          </div>
        </div>
      </header>
      <main></main>
    </div>
  );
};

export default Meals;
