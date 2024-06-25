'use server'

import { saveMeal } from "./meals";

export default async function handleSubmit(formData){
    const meal = {
      title: formData.get('title'),
      summary: formData.get('su mmary'),
      instructions: formData.get('instructions'),
      image: formData.get('image'),
      creator: formData.get('creator'),
      creator_email: formData.get('email'),
    };
    await saveMeal(meal);
  };