import { Link } from "react-router-dom";
import { Mail, Phone, Globe } from "lucide-react";
import logo from "@/assets/logo-large.jpg";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="flex flex-col items-start mb-4">
  <img
    src={logo}
    alt="NaturePro"
    className="h-20 w-auto object-contain mb-3"
  />
  <span className="text-lg font-semibold">NaturePro Creators LLP</span>
</div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {["Home", "About", "Vision", "Operations", "Clients", "Contact"].map((link) => (
                <Link
                  key={link}
                  to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                  className="block text-sm opacity-80 hover:opacity-100 transition-opacity"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm opacity-80">
              <div className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5 shrink-0" />
                <a href="tel:8956258824" className="hover:opacity-100">+91 89562 58824</a>
              </div>
              <div className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 shrink-0" />
                <a href="mailto:natureprocreators@gmail.com" className="hover:opacity-100">
                  natureprocreators@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Globe size={16} className="mt-0.5 shrink-0" />
                <a href="https://www.natureprocreators.com" className="hover:opacity-100">
                  www.natureprocreators.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Replace the existing copyright div in Footer.jsx */}
<div className="border-t border-primary-foreground/20 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm opacity-60">
  <div>
    © {new Date().getFullYear()} NaturePro Creators LLP. All rights reserved.
  </div>
 <div className="flex gap-6 mt-4 md:mt-0">
  <Link to="/legal" className="hover:opacity-100 transition-opacity underline-offset-4 hover:underline">
    Privacy Policy
  </Link>
  {/* <Link to="/legal" className="hover:opacity-100 transition-opacity underline-offset-4 hover:underline">
    Terms of Use
  </Link> */}
</div>
</div>
      </div>
    </footer>
  );
};

export default Footer;
