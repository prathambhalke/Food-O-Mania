"use client";
// components/MealForm.tsx
import { useState, ChangeEvent, FormEvent } from "react";
import CustomInput from "./Input";
import handleSubmit from "@/lib/actions"; // Ensure handleSubmit is typed properly in your actions file
import ImagePicker from "./ImagePicker";

interface FormData {
  name: string;
  email: string;
  title: string;
  summary: string;
  instructions: string;
  image: File | null;
}

export default function MealForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    title: "",
    summary: "",
    instructions: "",
    image: null,
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true); // Set submitting state to true

    const formDataToSend = new FormData();
    formDataToSend.append("creator", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("title", formData.title);
    formDataToSend.append('instructions', formData.instructions);
    formDataToSend.append("summary", formData.summary);
    if (formData.image) {
      formDataToSend.append("image", formData.image);
    }

    try {
      await handleSubmit(formDataToSend);
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false); // Set submitting state to false
    }
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="max-w-lg p-6 bg-white rounded-lg shadow-md"
    >
      <CustomInput
        label="Your Name"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <CustomInput
        label="Your Email"
        id="email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
      />
      <CustomInput
        label="Title"
        id="title"
        name="title"
        value={formData.title}
        onChange={handleChange}
        required
      />
      <div className="mb-4">
        <label
          htmlFor="summary"
          className="block text-sm font-medium text-gray-700"
        >
          Short Summary:
        </label>
        <textarea
          id="summary"
          name="summary"
          value={formData.summary}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="instructions"
          className="block text-sm font-medium text-gray-700"
        >
          Instructions:
        </label>
        <textarea
          id="instructions"
          name="instructions"
          value={formData.instructions}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
        />
      </div>
      <ImagePicker formData={formData} setFormData={setFormData} />
      <button
        type="submit"
        className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
        disabled={isSubmitting} // Disable button while submitting
      >
        {isSubmitting ? "Submitting..." : "Share Meal"}
      </button>
    </form>
  );
}
