"use client";
import NavLinks from "@/components/NavLinks";
import { ThemeToggler } from "@/components/ThemeToggler";
import { X } from "lucide-react";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

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
      title: "Services",
      href: "/services",
    },
   
  ];

  return (
    <header className="fixed top-0 left-0 z-40 w-full bg-gray-900/50 backdrop-blur-2xl ">
      <nav className="wrapper  flex justify-between items-center relative ">
        <div className="">logo</div>
        <ul className=" gap-3 hidden md:flex text-white">
          {navItems.map((navItem, index) => (
            <NavLinks key={index} href={navItem.href}>
              {navItem.title}
            </NavLinks>
          ))}
        </ul>
        <div className="flex gap-3 items-center">
          <ThemeToggler />
          <FaBars className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} />
        </div>
        <section
          className={`bg-gray-400 absolute ${isMenuOpen ? "top-0" : "-top-70"} w-full left-0 transition-all duration-300 py-5 dark:text-black z-50 md:hidden`}
        >
          {/* mobile menu items */}
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
