import React from 'react'
import { useDropzone } from 'react-dropzone';

const ImagePicker = ({formData,setFormData}) => {
    const onDrop = (acceptedFiles) => {
        const file = acceptedFiles[0];
        const imageUrl = URL.createObjectURL(file);
        setFormData({ ...formData, image: file, imageUrl });
    };
    const { getRootProps, getInputProps } = useDropzone({ onDrop });
  return (
    <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700">Image:</label>
    <div
      {...getRootProps()}
      className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
    >
      <div className="space-y-1 text-center">
        <svg
          className="mx-auto h-12 w-12 text-gray-400"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 48 48"
          aria-hidden="true"
        >
          <path
            d="M0 0h48v48H0z"
            stroke="none"
          />
          <path
            d="M14 28l4-4c1.343-1.343 3.657-1.343 5 0l3 3 5-5m0-10V5m-5 0v3m-5 0v3m-5 0v3m-5 0v3M30 17h3m0 0h-3m0 0v3"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="flex text-sm text-gray-600">
          <label
            htmlFor="file-upload"
            className="relative cursor-pointer bg-white rounded-md font-medium text-orange-600 hover:text-orange-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-orange-500"
          >
            <span>Upload a file</span>
            <input {...getInputProps()} className="sr-only" accept="image/png, image/jpeg" />
          </label>
          <p className="pl-1">or drag and drop</p>
        </div>
        <p className="text-xs text-gray-500">
          {formData.image ? formData.image.name : 'PNG, JPG, GIF up to 10MB'}
        </p>
        {formData.imageUrl && (
          <div className="mt-2">
            <img
              src={formData.imageUrl}
              alt="Preview"
              className="mx-auto h-48 w-auto"
            />
          </div>
        )}
      </div>
    </div>
  </div>
  )
}

export default ImagePicker