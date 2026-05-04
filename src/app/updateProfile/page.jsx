"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

const UpdateProfile = () => {
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm();

  const updateProfile = async (data) => {
    await authClient.updateUser({
      image: data.imageURL,
      name: data.name,
    });
    reset();
    router.refresh();
    alert("Profile Updated Successfully.");
  };
  return (
    <article
      className="wrapper 
     w-full pt-24  border
    "
    >
      <h1 className="text-center">
        Welcome to update profile page here you can change you profile name name
        and image
      </h1>
      <form
        onSubmit={handleSubmit(updateProfile)}
        className="space-y-4 my-20  p-5 border-2 border-gray-600 rounded-lg md:w-130 mx-auto"
      >
        {/* Email */}
        <div>
          <label className="block text-sm mb-1 text-gray-700 dark:text-gray-300">
            Name
          </label>
          <input
            {...register("name", { required: true })}
            type="text"
            placeholder="Enter your new name"
            className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            required
          />
        </div>
        {/* Image_URL */}
        <div>
          <label className="block text-sm mb-1 text-gray-700 dark:text-gray-300">
            Image URL
          </label>
          <input
            {...register("imageURL", { required: true })}
            type="text"
            placeholder="Enter your new image link"
            className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            required
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-gray-800 dark:bg-gray-700 text-white py-2 rounded-md hover:bg-gray-900 dark:hover:bg-gray-600 transition font-semibold"
        >
          Update Profile
        </button>
      </form>
    </article>
  );
};

export default UpdateProfile;
