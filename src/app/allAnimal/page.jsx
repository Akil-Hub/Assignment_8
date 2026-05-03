
import AnimalList from "@/components/Home/AnimalList";

const getCows = async (params) => {
  const res = await fetch("http://localhost:5000/cows");

  const data = await res.json();
  return data;
};

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
