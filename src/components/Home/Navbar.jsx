import NavLinks from "@/components/NavLinks";
import { ThemeToggler } from "@/components/ThemeToggler";

const Navbar = () => {
  const navItems = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Services",
      href: "/services",
    },
  ];

  return (
    <header>
      <nav className="wrapper flex justify-between items-center">
        <div className="">logo</div>
        <ul className="flex gap-3">
          {navItems.map((navItem, index) => (
            <NavLinks key={index} href={navItem.href}>
              {navItem.title}
            </NavLinks>
          ))}
        </ul>
          <ThemeToggler
          />
      </nav>
    </header>
  );
};

export default Navbar;
