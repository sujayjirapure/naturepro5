import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-large.jpg";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/vision", label: "Vision" },
  { to: "/operations", label: "Operations" },
  { to: "/clients", label: "Clients" },
  { to: "/contact", label: "Contact" },
];



const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/95 backdrop-blur-md ${
        scrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#home" className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="NaturePro Creators LLP" className="h-14 w-auto rounded" />
          <span className="font-heading font-bold text-[25px] hidden sm:block text-primary">
            Naturepro Creators
          </span>
          </Link>
        </a>


        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
  to={link.to}
  className="font-heading text-sm font-semibold tracking-wide transition-colors hover:text-secondary text-foreground"
>
  {link.label}
</Link>
            </li>
          ))} 
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X className="text-foreground" />
          ) : (
            <Menu className="text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md shadow-lg">
          <ul className="flex flex-col items-center gap-4 py-6">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
  to={link.to}
  className="font-heading text-sm font-semibold text-foreground hover:text-primary transition-colors"
  onClick={() => setMenuOpen(false)}
>
  {link.label}
</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
