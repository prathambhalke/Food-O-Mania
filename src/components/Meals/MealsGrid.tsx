import { mealItem } from "@/types";
import MealsItem from "./MealsItem";

const MealsGrid = ({ meals }: { meals: [] }) => {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl text-center my-8">Food Items</h1>
      <div className="flex flex-wrap justify-center">
        {meals.map((item, index) => (
          <div key={index} className="p-4">
            <MealsItem meals={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MealsGrid;
