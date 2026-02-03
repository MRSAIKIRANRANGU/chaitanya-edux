import { motion } from "framer-motion";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowRight
} from "lucide-react";

const quickLinks = [
  { name: "About Us", href: "#about" },
  { name: "Academics", href: "#academics" },
  { name: "Admissions", href: "#admissions" },
  { name: "Results", href: "#results" },
  { name: "Campus Life", href: "#campus-life" },
  { name: "Contact Us", href: "#contact" },
];

const programs = [
  { name: "Primary School", href: "#" },
  { name: "Middle School", href: "#" },
  { name: "High School", href: "#" },
  { name: "Senior Secondary", href: "#" },
  { name: "JEE/NEET Coaching", href: "#" },
  { name: "Foundation Courses", href: "#" },
];

const resources = [
  { name: "Student Portal", href: "#" },
  { name: "Parent Portal", href: "#" },
  { name: "Online Fee Payment", href: "#" },
  { name: "Downloads", href: "#" },
  { name: "Careers", href: "#" },
  { name: "FAQs", href: "#" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "Youtube" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-full bg-gradient-accent flex items-center justify-center">
                <span className="text-2xl font-bold text-primary font-serif">SC</span>
              </div>
              <div>
                <h3 className="text-xl font-bold font-serif">Sri Chaitanya</h3>
                <p className="text-sm text-white/60">Schools of Excellence</p>
              </div>
            </div>
            <p className="text-white/70 leading-relaxed mb-6 max-w-md">
              Sri Chaitanya Schools is India's leading educational institution with 
              over 35 years of excellence in nurturing future leaders through 
              innovative education and holistic development.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a href="tel:+911234567890" className="flex items-center gap-3 text-white/70 hover:text-gold transition-colors">
                <Phone className="w-5 h-5" />
                <span>+91 123 456 7890</span>
              </a>
              <a href="mailto:info@srichaitanya.edu" className="flex items-center gap-3 text-white/70 hover:text-gold transition-colors">
                <Mail className="w-5 h-5" />
                <span>info@srichaitanya.edu</span>
              </a>
              <div className="flex items-start gap-3 text-white/70">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Kukatpally, Hyderabad, Telangana - 500072, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gold" />
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-gold transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative inline-block">
              Programs
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gold" />
            </h4>
            <ul className="space-y-3">
              {programs.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-gold transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-6 relative inline-block">
              Resources
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gold" />
            </h4>
            <ul className="space-y-3">
              {resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-gold transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-white/60 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Sri Chaitanya Schools. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-gold hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-white/60 hover:text-gold transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-gold transition-colors">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
