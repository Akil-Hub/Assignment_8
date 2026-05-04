"use client";
import NavLinks from "@/components/NavLinks";
import { ThemeToggler } from "@/components/ThemeToggler";
import { Button } from "@/components/ui/button";
import {  signOut, useSession } from "@/lib/auth-client";
import { LogOut, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { toast } from "react-toastify";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "All Animal",
      href: "/allAnimal",
    },

    {
      title: "My Profile",
      href: "/profile",
    },
  ];

  const router = useRouter();
  const { data: session, isPending } = useSession();
  console.log(session?.user)
  const { name, email,image } = session?.user || {};

  const logOut = async (params) => {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login");
          toast.success('User logout successfully.')
           router.refresh()

         
        },
      },
    });
  };

  return (
    <header className="fixed top-0 left-0 z-40 w-full bg-gray-900/50 backdrop-blur-2xl ">
      <nav className="wrapper  flex justify-between items-center relative ">
        <Link href={'/'}><Image src={'/happycow.svg'} height={40} width={40} alt="logo" className="text-white"/></Link>
        <ul className=" gap-3 hidden md:flex text-white">
          {navItems.map((navItem, index) => (
            <NavLinks key={index} href={navItem.href}>
              {navItem.title}
            </NavLinks>
          ))}
        </ul>

        <div className="flex gap-3 items-center">
<h2 className="text-white text-xs md:text-base">Welcome {name}</h2>
          
<div className="size-10 rounded-full overflow-hidden relative">
  <Image 
    src={image || '/baby_cow.jpg'} 
    fill 
    className="object-cover"
    alt="cow"
  />
</div>

          {isPending ? <p>Session is loading</p>: session?.user ? (
            <Button onClick={logOut} className={'w-15 text-xs h-7 md:w-17 lg:w-20'}>Log Out</Button>
          ) : (
            <Button className={'w-15 text-xs h-7 md:w-17 lg:w-20'} onClick={() => router.push("/register")}>Register</Button>
          )}

<div className="hidden md:block ">
          <ThemeToggler />
  </div>          <FaBars size={24}
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>

        {/* mobile menu items */}

        <section
          className={`bg-gray-400 absolute ${isMenuOpen ? "top-0" : "-top-70"} w-full left-0 transition-all duration-300 py-5 dark:text-black z-50 md:hidden`}
        >
          <ul className="flex flex-col items-center justify-center gap-3  ">
            {navItems.map((navItem, index) => (
              <NavLinks key={index} href={navItem.href}>
                {navItem.title}
              </NavLinks>
            ))}

            <ThemeToggler />
            <X onClick={() => setIsMenuOpen(!isMenuOpen)} />
          </ul>
        </section>
      </nav>
    </header>
  );
};

export default Navbar;
