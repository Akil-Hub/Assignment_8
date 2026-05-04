
import AnimalList from "@/components/Home/AnimalList";
import { getCows } from "@/data/data";


const AllAnimals = async () => {
  const animals = await getCows();
  return (
     <section className="py-12 px-6 bg-muted/40">
      <div className="max-w-7xl mx-auto">
        <AnimalList animals={animals} />
      </div>
    </section>
  );
};
export default AllAnimals;
