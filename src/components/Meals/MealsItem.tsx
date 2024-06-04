import { mealItem } from "@/types";

const MealsItem = ({ meals }: mealItem) => {
  const { title, slug, image, summary, creator } = meals;
  console.log("👉👉", title);
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{summary}</p>
      </div>
      <div className="px-6 py-4">
        <p className="text-gray-600 text-sm">Created by: {creator}</p>
      </div>
    </div>
  );
};

export default MealsItem;
