import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { getCows } from '@/data/data'
import Image from 'next/image'
import { MapPin, Weight, ArrowRight } from "lucide-react"
import Link from 'next/link'

const CowSlider = async () => {
  const cows = await getCows()

  return (
    <section className="relative w-full py-16 overflow-hidden 
      bg-gradient-to-br from-emerald-50 via-stone-100 to-emerald-100
      dark:from-emerald-950 dark:via-stone-900 dark:to-emerald-900">

      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        <div className="absolute top-10 left-20 w-72 h-72 rounded-full bg-emerald-400 blur-3xl" />
        <div className="absolute bottom-10 right-20 w-96 h-96 rounded-full bg-yellow-400 blur-3xl" />
      </div>

      <div className="relative text-center mb-12 px-4">
        <p className="text-emerald-600 dark:text-emerald-400 text-sm font-semibold tracking-[0.3em] uppercase mb-3">
          Premium Selection
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-stone-800 dark:text-white leading-tight">
          Featured <span className="text-emerald-600 dark:text-emerald-400">Animals</span>
        </h2>
        <div className="w-16 h-1 bg-emerald-500 dark:bg-emerald-400 mx-auto mt-4 rounded-full" />
      </div>

      {/* Carousel */}
      <div className="relative max-w-6xl mx-auto px-12">
        <Carousel opts={{ loop: true, align: "start" }} className="w-full">
          <CarouselContent className="-ml-4">
            {cows.map((cow) => (
              <CarouselItem key={cow.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Link href={`/cows/${cow.id}`} className="block group">
                  <div className="relative overflow-hidden rounded-2xl 
                    bg-white dark:bg-white/5 
                    backdrop-blur-sm 
                    border border-stone-200 dark:border-white/10 
                    hover:border-emerald-400/50 
                    transition-all duration-500 
                    hover:-translate-y-2 
                    hover:shadow-2xl hover:shadow-emerald-200/80 dark:hover:shadow-emerald-900/50">

                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={cow.image}
                        alt={cow.name}
                        fill
                        className="object-cover group-hover:scale-110 transition duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                      <div className="absolute top-4 left-4 bg-emerald-500/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        {cow.category}
                      </div>

                      <div className="absolute bottom-4 right-4 bg-yellow-400 text-stone-900 font-bold text-sm px-3 py-1 rounded-full">
                        ৳ {cow.price.toLocaleString()}
                      </div>
                    </div>

                    <div className="p-5">
                      <h3 className="text-stone-800 dark:text-white font-bold text-xl mb-1 
                        group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {cow.name}
                      </h3>
                      <p className="text-emerald-600/70 dark:text-emerald-400/70 text-sm mb-4">
                        {cow.breed}
                      </p>

                      <div className="flex items-center gap-3 text-xs text-stone-500 dark:text-white/50 mb-5">
                        <span className="flex items-center gap-1">
                          <MapPin size={12} className="text-emerald-500 dark:text-emerald-400" />
                          {cow.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Weight size={12} className="text-emerald-500 dark:text-emerald-400" />
                          {cow.weight} kg
                        </span>
                      </div>

                      <div className="flex items-center justify-between pt-4 
                        border-t border-stone-200 dark:border-white/10">
                        <span className="text-stone-400 dark:text-white/40 text-xs">
                          {cow.age} years old
                        </span>
                        <span className="flex items-center gap-1 
                          text-emerald-600 dark:text-emerald-400 
                          text-sm font-semibold group-hover:gap-2 transition-all">
                          View Details <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="left-0 bg-emerald-500 hover:bg-emerald-600 border-0 text-white shadow-lg shadow-emerald-200 dark:shadow-emerald-900/50" />
          <CarouselNext className="right-0 bg-emerald-500 hover:bg-emerald-600 border-0 text-white shadow-lg shadow-emerald-200 dark:shadow-emerald-900/50" />
        </Carousel>
      </div>

      <div className="text-center mt-10 relative">
        <Link
          href="/allAnimal"
          className="inline-flex items-center gap-2 
            text-emerald-600 dark:text-emerald-400 
            hover:text-white 
            border border-emerald-500/50 dark:border-emerald-400/50 
            hover:bg-emerald-500 dark:hover:bg-emerald-500/20
            hover:border-emerald-500
            px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300"
        >
          View All Animals <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  )
}

export default CowSlider