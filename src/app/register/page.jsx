"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";

const RegisterPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = async (data) => {
    const { name, Image_URL, email, password } = data;

    const { data: res, error } = await authClient.signUp.email(
      {
        name,
        email,
        password,
        image: Image_URL,
        callbackURL: "/",
      },
      {
        onSuccess: () => {
          router.push("/");
        },
      },
    );

    if (res) alert("Registration successful! ");
    if (error) console.log(error);
  };


const handleGoogleSignIn = async () => {
  await authClient.signIn.social({ provider: "google" })
}

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-950 px-4 transition-colors py-20">
      <div className="w-full max-w-md bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-8 space-y-6 transition-colors">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Register
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Register first to buy the cows
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit(handleRegister)}>
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
              Name
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Enter your name"
              required
              className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="Enter your email"
              required
              className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
              Image URL
            </label>
            <input
              {...register("Image_URL", { required: true })}
              type="text"
              placeholder="Enter your avatar image URL"
              required
              className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
              Password
            </label>
            <input
              {...register("password", { required: true })}
              type="password"
              placeholder="Enter your password"
              required
              className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-gray-800 dark:bg-gray-700 text-white py-2 rounded-md hover:bg-gray-900 dark:hover:bg-gray-600 transition font-semibold text-lg"
          >
            Register
          </button>
        </form>
        <div className="flex items-center justify-center">
          <button className="w-full font-semibold flex items-center justify-center gap-3 border py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800" onClick={handleGoogleSignIn}>
            <FcGoogle className="text-2xl" />
            Continue with Google
          </button>
        </div>

        {/* Login link */}
        <p className="text-center text-base text-gray-600 dark:text-gray-400">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-gray-900 dark:text-white font-bold hover:underline text-lg pl-2"
          >
            Login
          </Link>
        </p>
      </div>
    </section>
  );
};

export default RegisterPage;
