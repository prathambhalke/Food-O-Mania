'use server'

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";


const isInvalidText = (text) => {
  return !text || text.trim === ""
}

export default async function handleSubmit(formData) {
  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('creator'),
    creator_email: formData.get('email'),
  };
console.log(isInvalidText(meal.creator_email))
  if (
    isInvalidText(meal.title) ||
     isInvalidText(meal.summary) ||
      isInvalidText(meal.instructions) ||
       isInvalidText(meal.image) ||
        isInvalidText(meal.creator) ||
        isInvalidText(meal.creator_email) || 
        !meal.creator_email.includes("@") ||
        !meal.image || meal.image.size === 0
      ){
        alert()
        throw new Error("Invalid Input!")
      }

    await saveMeal(meal);
  redirect("/meals")
};