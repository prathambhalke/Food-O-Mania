import { mealItem } from "@/types";
import Link from "next/link";
import pizzaLogo from  "../../../public/assets/pizzaLogo.png";

const MealsItem = ({ meals }: mealItem) => {
  const { title, slug, image, summary, creator } = meals;
  const imageUrl = image || pizzaLogo.src; // Use the default image if image is not present

  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg m-4">
      <div className="h-48 w-full bg-gray-200">
        <img className="w-full h-full object-cover" src={imageUrl} alt={title} />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{summary}</p>
      </div>
      <div className="px-6 py-4">
        <p className="text-gray-600 text-sm flex justify-between items-center">
          <span className="truncate">Created by: {creator}</span>
          <span>
            <Link
              href={`/meals/${slug}`}
              className="ml-4 px-3 py-2 font-bold rounded-lg bg-blue-400 text-white whitespace-nowrap"
            >
              View Details
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default MealsItem;

