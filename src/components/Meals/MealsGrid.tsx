import { mealItem } from "@/types";
import MealsItem from "./MealsItem";

const MealsGrid = ({ meals }: { meals: [] }) => {
const reverseMeals = meals.reverse()
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl text-center my-8">Food Items</h1>
      <div className="flex flex-wrap justify-center">
        {reverseMeals.map((item, index) => (
          <div key={index} className="p-4">
            <MealsItem meals={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MealsGrid;
