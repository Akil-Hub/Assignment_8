import Banner from "@/components/Home/Banner";
import CowCard from "@/components/Home/CowCard";
import { ThemeToggler } from "@/components/ThemeToggler";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
     <Banner/>
    
 
    </div>
  );
}
