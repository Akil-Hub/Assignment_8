import React from 'react'
import { tips, cows } from '@/data/data.js'
import Image from 'next/image'

const TipsAndTopBreeds = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-12 px-4 md:px-10 space-y-16 transition-colors duration-300">
      
      {/* ================= QURBANI TIPS ================= */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          🕌 Qurbani Tips
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl dark:shadow-gray-700/30 transition"
            >
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                {tip.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {tip.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TOP BREEDS ================= */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          🐄 Top Cow Breeds
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cows.map((cow) => (
            <div
              key={cow.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden hover:shadow-xl dark:shadow-gray-700/30 transition"
            >
              {/* Image */}
              <div className="relative w-full h-52">
                <Image
                  src={cow.image}
                  alt={cow.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {cow.name}
                </h3>

                <div className="text-sm space-y-1 text-gray-700 dark:text-gray-300">
                  <p><span className="font-medium">Breed:</span> {cow.breed}</p>
                  <p><span className="font-medium">Weight:</span> {cow.weight} kg</p>
                  <p><span className="font-medium">Age:</span> {cow.age} years</p>
                  <p><span className="font-medium">Location:</span> {cow.location}</p>
                </div>

                <div className="mt-4 flex justify-between items-center">
                  <span className="text-lg font-bold text-green-600 dark:text-green-400">
                    ৳ {cow.price.toLocaleString()}
                  </span>

                  <button className="bg-green-600 dark:bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700 dark:hover:bg-green-600 transition">
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default TipsAndTopBreeds
