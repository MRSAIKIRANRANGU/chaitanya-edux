// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X, ChevronDown, Phone, Mail, Youtube, Instagram, Facebook, Twitter } from "lucide-react";
// import { Button } from "@/components/ui/button";

// const navItems = [
//   { name: "About Us", href: "#about", hasDropdown: true },
//   { name: "Pre-Primary", href: "#academics" },
//   { name: "Primary", href: "#academics" },
//   { name: "High School", href: "#academics" },
//   { name: "Student Life", href: "#campus-life" },
//   { name: "Facilities", href: "#facilities" },
//   { name: "Gallery", href: "#gallery" },
//   { name: "Achievements", href: "#results" },
//   { name: "Careers", href: "#careers", hasDropdown: true },
// ];

// const socialLinks = [
//   { icon: Youtube, href: "#", color: "hover:text-red-500" },
//   { icon: Instagram, href: "#", color: "hover:text-pink-500" },
//   { icon: Twitter, href: "#", color: "hover:text-blue-400" },
//   { icon: Facebook, href: "#", color: "hover:text-blue-600" },
// ];

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       {/* Top Bar */}
//       <motion.div
//         initial={{ y: -50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         className="hidden lg:block bg-primary text-primary-foreground py-2.5"
//       >
//         <div className="container mx-auto flex justify-between items-center text-sm">
//           <div className="flex items-center gap-6">
//             <a href="tel:+911234567890" className="flex items-center gap-2 hover:text-gold transition-colors">
//               <Phone className="w-4 h-4" />
//               <span>+91 123 456 7890</span>
//             </a>
//             <a href="mailto:info@srichaitanya.edu" className="flex items-center gap-2 hover:text-gold transition-colors">
//               <Mail className="w-4 h-4" />
//               <span>info@srichaitanya.edu</span>
//             </a>
//           </div>
//           <div className="flex items-center gap-4">
//             <a href="#" className="px-4 py-1 bg-gold/10 rounded-full hover:bg-gold/20 transition-colors text-gold font-medium">
//               Admission Enquiry Form
//             </a>
//             <a href="#" className="px-4 py-1 bg-secondary/20 rounded-full hover:bg-secondary/30 transition-colors font-medium">
//               Online Admissions
//             </a>
//             <span className="text-primary-foreground/30">|</span>
//             <a href="#" className="hover:text-gold transition-colors">Contact</a>
//             <a href="#" className="hover:text-gold transition-colors">Login</a>
//           </div>
//         </div>
//       </motion.div>

//       {/* Main Navigation */}
//       <motion.nav
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         transition={{ delay: 0.1 }}
//         className={`sticky top-0 z-50 transition-all duration-500 ${isScrolled
//             ? "bg-card/98 backdrop-blur-xl shadow-lg"
//             : "bg-card"
//           }`}
//       >
//         <div className="container mx-auto px-4">
//           <div className="flex items-center justify-between h-20">
//             {/* Logo */}
//             <motion.a
//               href="#"
//               className="flex items-center gap-3"
//               whileHover={{ scale: 1.02 }}
//             >
//               <div className="relative">
//   <motion.div
//     animate={{ rotate: 360 }}
//     transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//     className="w-14 h-14 rounded-full border-2 border-dashed border-gold/30 absolute -inset-1"
//   />

//   <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden bg-transparent">
//     <img
//       src="https://srichaitanyaapp.s3.ap-south-1.amazonaws.com/prod/assets/images/loader.gif"
//       alt="Sri Chaitanya Logo"
//       className="w-full h-full object-contain"
//     />
//   </div>
// </div>

//               <div className="hidden sm:block">
//                 <h1 className="text-xl font-bold text-primary font-serif leading-tight tracking-tight">
//                   SRI CHAITANYA
//                 </h1>
//                 <p className="text-xs text-muted-foreground font-medium tracking-widest uppercase">
//                   Schools
//                 </p>
//               </div>
//             </motion.a>

//             {/* Desktop Navigation */}
//             <div className="hidden xl:flex items-center gap-1">
//               {navItems.map((item) => (
//                 <a
//                   key={item.name}
//                   href={item.href}
//                   className="nav-link px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors flex items-center gap-1 group"
//                 >
//                   {item.name}
//                   {item.hasDropdown && (
//                     <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform" />
//                   )}
//                 </a>
//               ))}
//             </div>

//             {/* Right Section */}
//             <div className="hidden lg:flex items-center gap-4">
//               {/* Social Links */}
//               <div className="flex items-center gap-2 border-r border-border pr-4">
//                 {socialLinks.map((social, index) => (
//                   <motion.a
//                     key={index}
//                     href={social.href}
//                     whileHover={{ scale: 1.2, y: -2 }}
//                     className={`w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground ${social.color} transition-colors`}
//                   >
//                     <social.icon className="w-4 h-4" />
//                   </motion.a>
//                 ))}
//               </div>

//               {/* CTA Button */}
//               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                 <Button className="btn-accent px-6">
//                   Apply Now
//                 </Button>
//               </motion.div>
//             </div>

//             {/* Mobile Menu Button */}
//             <motion.button
//               whileTap={{ scale: 0.9 }}
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className="xl:hidden p-2 text-foreground rounded-lg hover:bg-muted transition-colors"
//             >
//               {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//             </motion.button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         <AnimatePresence>
//           {isMobileMenuOpen && (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: "auto" }}
//               exit={{ opacity: 0, height: 0 }}
//               transition={{ duration: 0.3 }}
//               className="xl:hidden bg-card border-t border-border overflow-hidden"
//             >
//               <div className="container mx-auto px-4 py-6 space-y-2">
//                 {navItems.map((item, index) => (
//                   <motion.a
//                     key={item.name}
//                     href={item.href}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ delay: index * 0.05 }}
//                     className="flex items-center justify-between px-4 py-3 text-foreground hover:bg-muted rounded-lg transition-colors"
//                     onClick={() => setIsMobileMenuOpen(false)}
//                   >
//                     <span>{item.name}</span>
//                     {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
//                   </motion.a>
//                 ))}

//                 {/* Mobile Social & CTA */}
//                 <div className="pt-4 mt-4 border-t border-border">
//                   <div className="flex items-center justify-center gap-4 mb-4">
//                     {socialLinks.map((social, index) => (
//                       <a
//                         key={index}
//                         href={social.href}
//                         className={`w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground ${social.color} transition-colors`}
//                       >
//                         <social.icon className="w-5 h-5" />
//                       </a>
//                     ))}
//                   </div>
//                   <Button className="w-full btn-accent">
//                     Apply Now
//                   </Button>
//                 </div>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </motion.nav>
//     </>
//   );
// };

// export default Navbar;


import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone, Mail, Youtube, Instagram, Facebook, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

// Logo URLs - Enhanced for clarity in dark/light modes
const logoLight = "https://srichaitanyaapp.s3.ap-south-1.amazonaws.com/prod/assets/images/loader.gif"; // Original light
const logoDark = "https://srichaitanyaapp.s3.ap-south-1.amazonaws.com/prod/assets/images/loader.gif"; // White version for dark

// Premium background image for navbar (subtle school-related pattern)
const navbarBgImage = "https://www.transparenttextures.com/patterns/white-linen.png"; // Subtle premium linen texture for elegance

const navItems = [
  { name: "About Us", href: "#about", hasDropdown: true },

  { name: "School", href: "#academics", hasDropdown: true },
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
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(mediaQuery.matches);
    mediaQuery.addEventListener("change", (e) => setIsDarkMode(e.matches));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      mediaQuery.removeEventListener("change", () => {});
    };
  }, []);

  return (
    <>
      {/* Top Bar - Premium with subtle gradient, shadow, and hover animations */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="hidden lg:block bg-gradient-to-r from-primary/95 to-primary text-primary-foreground py-3 shadow-lg"
      >
        <div className="container mx-auto flex justify-between items-center text-sm px-6">
          <div className="flex items-center gap-10">
            <motion.a 
              href="tel:+911234567890" 
              className="flex items-center gap-2 hover:text-gold transition-all duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              <Phone className="w-5 h-5" />
              <span>+91 123 456 7890</span>
            </motion.a>
            <motion.a 
              href="mailto:info@srichaitanya.edu" 
              className="flex items-center gap-2 hover:text-gold transition-all duration-300 hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              <Mail className="w-5 h-5" />
              <span>info@srichaitanya.edu</span>
            </motion.a>
          </div>
          <div className="flex items-center gap-5">
            <motion.a 
              href="#" 
              className="px-6 py-2 bg-gold/20 rounded-full hover:bg-gold/30 transition-all duration-300 text-gold font-semibold shadow-md hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              Admission Enquiry Form
            </motion.a>
            <motion.a 
              href="#" 
              className="px-6 py-2 bg-secondary/30 rounded-full hover:bg-secondary/40 transition-all duration-300 font-semibold shadow-md hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              Online Admissions
            </motion.a>
            <span className="text-primary-foreground/40 mx-3">|</span>
            <motion.a href="#" className="hover:text-gold transition-all duration-300 hover:scale-105" whileHover={{ scale: 1.05 }}>Contact</motion.a>
            <motion.a href="#" className="hover:text-gold transition-all duration-300 hover:scale-105" whileHover={{ scale: 1.05 }}>Login</motion.a>
          </div>
        </div>
      </motion.div>

      {/* Main Navigation - Premium with texture background, enhanced blur, and glass effect */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className={`sticky top-0 z-50 transition-all duration-500 glass ${
          isScrolled ? "bg-card/90 backdrop-blur-2xl shadow-xl" : "bg-card/95 shadow-md"
        }`}
        style={{ backgroundImage: `url(${navbarBgImage})`, backgroundSize: 'cover', backgroundBlendMode: 'overlay' }} // Subtle premium texture
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-center h-20">
            {/* Logo - Premium isolated background, high contrast in dark/light */}
            <motion.a
              href="#"
              className="flex items-center gap-4"
              whileHover={{ scale: 1.04, transition: { duration: 0.3 } }}
            >
              <div className="relative">

                <div className="relative">
  {/* Subtle accent ring */}
  <div className="absolute inset-0 rounded-md " />

  <div className="w-16 h-16 rounded-full flex items-center justify-center overflow-hidden bg-white/20 backdrop-blur-sm shadow-xl border border-white/10">
  {/* Isolated background for logo */}
  <img
    src={isDarkMode ? logoDark : logoLight}
    alt="Sri Chaitanya Logo"
    className="w-full h-full object-contain p-2 filter contrast-125 brightness-110"
  />
</div>

</div>

              </div>

              <div className="hidden sm:block">
                <h1 className="text-2xl font-bold text-primary font-serif leading-tight tracking-tight">
                  SRI CHAITANYA
                </h1>
                <p className="text-sm text-muted-foreground font-medium tracking-widest uppercase">
                  Schools
                </p>
              </div>
            </motion.a>

            {/* Desktop Navigation - Premium with glass hover */}
            <div className="hidden xl:flex items-center gap-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="nav-link px-5 py-3 text-base font-medium text-foreground/90 hover:text-primary transition-all duration-300 flex items-center gap-1 group hover:bg-white/5 backdrop-blur-sm rounded-xl hover:shadow-md"
                >
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                  )}
                </a>
              ))}
            </div>

            {/* Right Section - Premium with glass social buttons */}
            <div className="hidden lg:flex items-center gap-6">
              {/* Social Links */}
              {/* <div className="flex items-center gap-4 border-r border-border/50 pr-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.2, y: -4, transition: { duration: 0.3 } }}
                    className={`w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm flex items-center justify-center text-muted-foreground ${social.color} transition-all duration-300 shadow-md hover:shadow-lg`}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div> */}

              {/* CTA Button - Premium with glow */}
              <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.98 }}>
                <Button className="btn-brand px-8 py-3 rounded-full shadow-xl hover:shadow-2xl">
                  Apply Now
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button - Premium glass effect */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden p-3 text-foreground rounded-full bg-white/5 backdrop-blur-sm transition-all duration-300 shadow-md hover:shadow-lg"
            >
              {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu - Premium glass with dividers */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="xl:hidden bg-card/90 backdrop-blur-xl border-t border-border/50 overflow-hidden shadow-2xl"
            >
              <div className="container mx-auto px-4 py-8 space-y-2">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08, duration: 0.4 }}
                    className="flex items-center justify-between px-6 py-4 text-foreground hover:bg-white/5 backdrop-blur-sm rounded-xl transition-all duration-300 font-medium border-b border-border/20 last:border-b-0 hover:shadow-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span>{item.name}</span>
                    {item.hasDropdown && <ChevronDown className="w-5 h-5" />}
                  </motion.a>
                ))}

                {/* Mobile Admissions - Premium highlighted section */}
                <div className="pt-6 mt-6 border-t border-border/50 bg-white/5 backdrop-blur-sm p-4 rounded-xl shadow-md">
                  <a href="#" className="block px-6 py-4 bg-gold/20 rounded-lg hover:bg-gold/30 transition-all duration-300 text-gold font-semibold text-center mb-3 shadow-sm hover:shadow-md">
                    Admission Enquiry Form
                  </a>
                  <a href="#" className="block px-6 py-4 bg-secondary/30 rounded-lg hover:bg-secondary/40 transition-all duration-300 font-semibold text-center shadow-sm hover:shadow-md">
                    Online Admissions
                  </a>
                </div>

                {/* Mobile Social & Contact - Premium layout */}
                <div className="pt-6 mt-6 border-t border-border/50">
                  <div className="flex items-center justify-center gap-5 mb-6">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        className={`w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm flex items-center justify-center text-muted-foreground ${social.color} transition-all duration-300 shadow-md hover:shadow-lg hover:scale-110`}
                      >
                        <social.icon className="w-6 h-6" />
                      </a>
                    ))}
                  </div>
                  <Button className="w-full btn-brand py-5 rounded-full shadow-xl hover:shadow-2xl">
                    Apply Now
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Secondary Admissions Banner - Premium sticky on scroll, glass effect */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className={`sticky top-20 z-40 bg-gradient-to-r from-secondary/10 to-gold/10 py-4 text-center shadow-md glass backdrop-blur-md ${isScrolled ? 'translate-y-0' : 'translate-y-[-100%]' } transition-transform duration-500`}
      >
        <div className="container mx-auto px-4">
          <p className="text-lg font-medium text-primary">
            Admissions Open for 2025-26 |{" "}
            <a href="#" className="text-gold hover:underline font-semibold transition-colors duration-300">Enquire Now</a> or{" "}
            <a href="#" className="text-secondary hover:underline font-semibold transition-colors duration-300">Apply Online</a>
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;