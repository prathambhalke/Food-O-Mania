import Image from "next/image";
import pizzaLogo from "../../../../public/assets/pizzaLogo.png";
import { getMeal } from "@/lib/meals";
import { notFound } from "next/navigation";

const DynamicMealsID = ({ params }: { params: { mealsID: "string" } }) => {
  const mealDetails = getMeal(params.mealsID); 
  const { title, summary,instructions, creator, creator_email } = mealDetails;
   if(!mealDetails){
    notFound()
   }
  return (
    <div className="m-12">
    <header className="flex justify-between px-12">
      <div>
      <Image src={pizzaLogo} alt={params.mealsID} width={250} height={150}/>
      </div>
      <div className="ml-6">
        <h1 className="text-orange-400 text-4xl font-bold w-2/12 text-center">{title}</h1>
        
        <p className="text-black font-semibold text-sm text-blue-600 mt-4 text-lg">by <a href={`mailto:${creator_email}`} className="underline hover:text-blue-600 italic">-  {creator}</a></p>

        <p className="text-black font-semibold text-lg mt-4">{summary}</p>
      </div>
    </header>

    <main className="mt-12 border-2 border-orange-300 rounded-xl p-4">
<p>{instructions}</p>
    </main>
    </div>
  )
};

export default DynamicMealsID;
