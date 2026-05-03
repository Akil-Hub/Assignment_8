
import Image from "next/image";

export default function Banner() {
  return (
    <section className="relative w-full h-[300px] md:h-screen">
      {/* Background Image */}
      <Image
        src="/cow_banner.jpg" // put your image inside /public folder
        alt="Banner Background"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
        <h1 className="text-white text-2xl md:text-4xl font-bold">
          Find your best Qurbani Cow in one place
        </h1>
      </div>
    </section>
  );
}
