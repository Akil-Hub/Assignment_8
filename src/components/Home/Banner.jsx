
import Image from "next/image";

export default function Banner() {
  return (
    <section className="relative w-full h-[300px] md:h-screen">
=      <Image
        src="/cow_banner.jpg" 
        alt="Banner Background"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/20 flex items-center justify-center ">
        <h1 className="text-white text-2xl md:text-5xl lg:text-6xl italic  wrapper">
          Find your best Qurbani Cow in one place
        </h1>
      </div>
    </section>
  );
}
