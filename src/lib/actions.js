'use server'

export default async function handleSubmit(formData){
    const meal = {
      title: formData.get('title'),
      summary: formData.get('summary'),
      instructions: formData.get('instructions'),
      image: formData.get('image'),
      creator: formData.get('creator'),
      creator_email: formData.get('email'),
    }
    console.log(meal)
  };