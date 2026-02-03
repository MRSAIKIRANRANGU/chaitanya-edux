import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Home", href: "#" },
  { name: "About Us", href: "#about", hasDropdown: true },
  { name: "Academics", href: "#academics", hasDropdown: true },
  { name: "Admissions", href: "#admissions" },
  { name: "Campus Life", href: "#campus-life" },
  { name: "Results", href: "#results" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-primary text-primary-foreground py-2">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+911234567890" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Phone className="w-4 h-4" />
              <span>+91 123 456 7890</span>
            </a>
            <a href="mailto:info@srichaitanya.edu" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Mail className="w-4 h-4" />
              <span>info@srichaitanya.edu</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gold transition-colors">Online Fee Payment</a>
            <span className="text-primary-foreground/40">|</span>
            <a href="#" className="hover:text-gold transition-colors">Parent Portal</a>
            <span className="text-primary-foreground/40">|</span>
            <a href="#" className="hover:text-gold transition-colors">Careers</a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-card/95 backdrop-blur-lg shadow-premium"
            : "bg-card"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a
              href="#"
              className="flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-12 h-12 rounded-full bg-gradient-accent flex items-center justify-center">
                <span className="text-xl font-bold text-primary font-serif">SC</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-primary font-serif leading-tight">
                  Sri Chaitanya
                </h1>
                <p className="text-xs text-muted-foreground">Schools of Excellence</p>
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="nav-link px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors flex items-center gap-1"
                >
                  {item.name}
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Button variant="outline" className="rounded-full border-primary/20 hover:bg-primary hover:text-primary-foreground">
                Find School
              </Button>
              <Button className="btn-accent border-0">
                Apply Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-foreground"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-card border-t border-border"
            >
              <div className="container mx-auto px-4 py-4 space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-3 text-foreground hover:bg-muted rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="pt-4 space-y-2">
                  <Button variant="outline" className="w-full rounded-full">
                    Find School
                  </Button>
                  <Button className="w-full btn-accent">
                    Apply Now
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
