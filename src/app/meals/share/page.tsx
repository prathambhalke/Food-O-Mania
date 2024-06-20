import MealForm from "@/components/shareMealsForm";

const Share = () => {
  return (
    <div className="flex justify-between items-start mt-32 mx-24 space-x-12">
      <header>
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold bg-gradient-to-tl">
            Share your{" "}
            <span className="text-orange-400 font-bold">favorite meal</span>
          </h1>
          <p className="text-black font-semibold text-base mt-4">
            Or any other meal you feel needs sharing!
          </p>
        </div>
      </header>
      <div className="w-full max-w-lg">
        <MealForm />
      </div>
    </div>
  );
};

export default Share;
