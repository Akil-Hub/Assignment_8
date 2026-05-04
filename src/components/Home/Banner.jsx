import BannerHeading from "@/components/Home/BannerHeading";
import Image from "next/image";

export default function Banner() {
  return (
    <section className="relative w-full h-[550px] md:h-screen">
      <Image
        src="/cow_banner.jpg"
        alt="Banner Background"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <BannerHeading />
      </div>
    </section>
  );
}