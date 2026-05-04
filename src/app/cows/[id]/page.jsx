
import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ContactForm from "@/components/Home/ContactForm";
import { getCowDetails } from "@/data/data";


export default async function CowDetails({ params }) {

  const {id} = await params
  console.log(id)
  const cow = await getCowDetails(id);

  if (!cow) return <p>cow not found</p>;

  return (
    <section className="py-30 px-6 wrapper ">
      <div className="wrapper grid md:grid-cols-2 gap-10">

        {/* Image Section */}
        <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">
          <Image
            src={cow.image || "/cow.jpg"}
            alt={cow.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Details Section */}
        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-6 space-y-4">

            <h1 className="text-3xl font-bold">
              {cow.name}
            </h1>

            <p className="text-muted-foreground">
              {cow.breed}
            </p>

            {/* Info Grid */}
            <div className="grid grid-cols-2 gap-4 text-sm pt-4">
              <p><strong>Type:</strong> {cow.type}</p>
              <p><strong>Age:</strong> {cow.age} years</p>
              <p><strong>Weight:</strong> {cow.weight} kg</p>
              <p><strong>Location:</strong> {cow.location}</p>
            </div>

            {/* Price */}
            <p className="text-2xl font-bold text-primary pt-4">
              ৳ {cow.price.toLocaleString()}
            </p>

            {/* Actions */}
            <div className="flex gap-4 pt-6">
              <Button className="w-full">
                Contact Seller
              </Button>
              <Button variant="outline" className="w-full">
                Add to Wishlist
              </Button>
            </div>

          </CardContent>
        </Card>

      </div>


<h1 className="text-center text-4xl mt-10">Fill the contact form to reach Goro Bepari</h1>
      <div className="w-full md:w-180 mx-auto  border-2 my-20 p-8 rounded-lg ">
        <ContactForm/>
      </div>
   
    </section>
  );
}