"use client";

import Image from "next/image";

export default function ProfilePage() {
  // 🔹 Replace this with your Better Auth session
  const user = {
    name: "John Doe",
    email: "john@example.com",
    image: "/default-avatar.png", // fallback image
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10 px-4 md:px-10 transition-colors">
      
      {/* Main Container */}
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden">
        
        {/* Cover Section */}
        <div className="h-40 bg-gradient-to-r from-green-500 to-emerald-600" />

        {/* Profile Content */}
        <div className="px-6 pb-8">
          
          {/* Avatar + Basic Info */}
          <div className="flex flex-col items-center -mt-16">
            
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
              <Image
                src={user?.image || "/default-avatar.png"}
                alt="Profile Image"
                fill
                className="object-cover"
              />
            </div>

            <h1 className="mt-4 text-2xl font-bold text-gray-900 dark:text-white">
              {user?.name || "Anonymous User"}
            </h1>

            <p className="text-gray-600 dark:text-gray-300 text-sm">
              {user?.email || "No email provided"}
            </p>
          </div>

          {/* Info Sections */}
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            
            {/* Account Info */}
            <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-xl">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                Account Info
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Manage your personal details and account settings.
              </p>
            </div>

            {/* Activity */}
            <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-xl">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                Activity
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Track your recent activity and interactions.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            
            <button className="bg-green-600 text-white px-6 py-2 rounded-xl hover:bg-green-700 transition">
              Edit Profile
            </button>

            <button className="bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-white px-6 py-2 rounded-xl hover:bg-gray-300 dark:hover:bg-gray-500 transition">
              Logout
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}
