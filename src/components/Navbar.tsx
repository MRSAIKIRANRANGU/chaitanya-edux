import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone, Mail, Youtube, Instagram, Facebook, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "About Us", href: "#about", hasDropdown: true },
  { name: "Pre-Primary", href: "#academics" },
  { name: "Primary", href: "#academics" },
  { name: "High School", href: "#academics" },
  { name: "Student Life", href: "#campus-life" },
  { name: "Facilities", href: "#facilities" },
  { name: "Gallery", href: "#gallery" },
  { name: "Achievements", href: "#results" },
  { name: "Careers", href: "#careers", hasDropdown: true },
];

const socialLinks = [
  { icon: Youtube, href: "#", color: "hover:text-red-500" },
  { icon: Instagram, href: "#", color: "hover:text-pink-500" },
  { icon: Twitter, href: "#", color: "hover:text-blue-400" },
  { icon: Facebook, href: "#", color: "hover:text-blue-600" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="hidden lg:block bg-primary text-primary-foreground py-2.5"
      >
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
            <a href="#" className="px-4 py-1 bg-gold/10 rounded-full hover:bg-gold/20 transition-colors text-gold font-medium">
              Admission Enquiry Form
            </a>
            <a href="#" className="px-4 py-1 bg-secondary/20 rounded-full hover:bg-secondary/30 transition-colors font-medium">
              Online Admissions
            </a>
            <span className="text-primary-foreground/30">|</span>
            <a href="#" className="hover:text-gold transition-colors">Contact</a>
            <a href="#" className="hover:text-gold transition-colors">Login</a>
          </div>
        </div>
      </motion.div>

      {/* Main Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.1 }}
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-card/98 backdrop-blur-xl shadow-lg"
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
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-14 h-14 rounded-full border-2 border-dashed border-gold/30 absolute -inset-1"
                />
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-amber-600 flex items-center justify-center shadow-gold">
                  <span className="text-lg font-bold text-primary font-serif">SC</span>
                </div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-primary font-serif leading-tight tracking-tight">
                  SRI CHAITANYA
                </h1>
                <p className="text-xs text-muted-foreground font-medium tracking-widest uppercase">
                  Schools
                </p>
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center gap-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="nav-link px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors flex items-center gap-1 group"
                >
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform" />
                  )}
                </a>
              ))}
            </div>

            {/* Right Section */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Social Links */}
              <div className="flex items-center gap-2 border-r border-border pr-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.2, y: -2 }}
                    className={`w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground ${social.color} transition-colors`}
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>

              {/* CTA Button */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="btn-accent px-6">
                  Apply Now
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden p-2 text-foreground rounded-lg hover:bg-muted transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="xl:hidden bg-card border-t border-border overflow-hidden"
            >
              <div className="container mx-auto px-4 py-6 space-y-2">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center justify-between px-4 py-3 text-foreground hover:bg-muted rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span>{item.name}</span>
                    {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                  </motion.a>
                ))}

                {/* Mobile Social & CTA */}
                <div className="pt-4 mt-4 border-t border-border">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        className={`w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground ${social.color} transition-colors`}
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
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
