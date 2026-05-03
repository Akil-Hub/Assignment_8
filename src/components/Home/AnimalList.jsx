"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Calendar, MapPin, Tag, Weight } from "lucide-react";
import Sort from "@/components/Sort";

const AnimalList = ({ animals }) => {
  const [sortOrder, setSortOrder] = useState(null);



  const sortedAnimals = [...animals].filter((cow) => {
    if (!sortOrder || sortOrder === "all") return true;
    const [, min, max] = sortOrder.split("-");
    return cow.price >= Number(min) && cow.price <= Number(max);
  });
  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 mt-20">
          Our Top Cows
        </h2>
        <Sort onSort={setSortOrder} />
      </div>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {sortedAnimals.length === 0 ? (<div className="flex justify-center items-center h-140 col-span-4">
          <p className="text-5xl font-semibold text-red-500 ">No Cow is found in this price range</p>
        </div>
        ) : (sortedAnimals?.map((cow) => (
          <Card
            key={cow.id}
            className="group overflow-hidden rounded-2xl hover:shadow-xl transition p-0"
          >
            <div className="relative w-full h-60 overflow-hidden">
              <Image
                src={cow.image}
                alt={cow.name}
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute top-3 left-3 flex items-center gap-1 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
                <Tag size={14} />
                {cow.category}
              </div>
            </div>

            <CardContent className="p-4 space-y-3">
              <div>
                <h3 className="text-lg font-semibold">{cow.name}</h3>
                <p className="text-sm text-muted-foreground">{cow.breed}</p>
              </div>

              <p className="text-xs text-muted-foreground line-clamp-2">
                {cow.description}
              </p>

              <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-muted">
                  <MapPin size={14} />
                  <span>{cow.location}</span>
                </div>
                <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-muted">
                  <Weight size={14} />
                  <span>{cow.weight} kg</span>
                </div>
                <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-muted">
                  <Calendar size={14} />
                  <span>{cow.age} years</span>
                </div>
              </div>

              <p className="text-lg font-bold text-primary pt-2">
                ৳ {cow.price.toLocaleString()}
              </p>
            </CardContent>

            <CardFooter className="p-4 pt-0">
              <Button className="w-full" asChild>
                <Link href={`/cows/${cow.id}`}>View Details</Link>
              </Button>
            </CardFooter>
          </Card>
        )))}
      </div>
    </>
  );
};

export default AnimalList;