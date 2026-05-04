
'use client'
import { authClient, signOut, useSession } from "@/lib/auth-client";

import Image from "next/image";
import {  useRouter } from "next/navigation";

export default   function ProfilePage() {
  
  const router = useRouter()
 
const{data:session} = useSession()

const{name,email,image} = session?.user || {}

 const logOut = async (params) => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login");
          router.refresh()
         
        },
      },
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10 px-4 md:px-10 transition-colors">
      
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden">
        
        <div className="h-40 bg-gradient-to-r from-gray-500 to-emerald-600" />

        <div className="px-6 pb-8">
          
          <div className="flex flex-col items-center -mt-16">
            
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
              <Image
                src={image || "/default-avatar.png"}
                alt="Profile Image"
                fill
                className="object-cover"
              />
            </div>

            <h1 className="mt-4 text-2xl font-bold text-gray-900 dark:text-white">
              {name || "Anonymous User"}
            </h1>

            <p className="text-gray-600 dark:text-gray-300 text-sm">
              {email || "No email provided"}
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            
            <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-xl">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                Account Info
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Manage your personal details and account settings.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 p-5 rounded-xl">
              <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                Activity
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Track your recent activity and interactions.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            
            <button onClick={()=> router.push('/updateProfile')} className="bg-gray-600 text-white px-6 py-2 rounded-xl hover:bg-gray-700 transition">
              Edit Profile
            </button>

            <button onClick={logOut} className="bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-white px-6 py-2 rounded-xl hover:bg-gray-300 dark:hover:bg-gray-500 transition">
              Logout
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}
