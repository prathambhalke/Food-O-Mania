import { mealItem } from "@/types";
import Link from "next/link";
const MealsItem = ({ meals }: mealItem) => {
  const { title, slug, image, summary, creator } = meals;
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg m-4">
      {/* <img className="w-full h-48 object-cover" src={image} alt={title} /> */}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{summary}</p>
      </div>
      <div className="px-6 py-4">
        <p className="text-gray-600 text-sm  flex justify-between ">
          Created by: {creator}{" "}
          <span>
            <Link
              href={`/meals/${slug}`}
              className="px-3 py-2 font-bold rounded-lg bg-blue-400 text-white"
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
