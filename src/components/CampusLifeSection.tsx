import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import sportsGround from "@/assets/sports-ground.jpg";
import scienceLab from "@/assets/science-lab.jpg";
import studentsLibrary from "@/assets/students-library.jpg";

const campusImages = [
  {
    src: sportsGround,
    title: "Sports & Athletics",
    description: "World-class sports facilities and professional coaching",
  },
  {
    src: scienceLab,
    title: "Modern Science Labs",
    description: "State-of-the-art laboratories for hands-on learning",
  },
  {
    src: studentsLibrary,
    title: "Resource Center",
    description: "Extensive library and digital learning resources",
  },
];

const activities = [
  "Cultural Events",
  "Sports Tournaments",
  "Science Exhibitions",
  "Literary Competitions",
  "Music & Dance",
  "Leadership Programs",
];

const CampusLifeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % campusImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + campusImages.length) % campusImages.length);
  };

  return (
    <section id="campus-life" className="section-padding bg-background overflow-hidden" ref={ref}>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Slider */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-premium">
              <div className="relative h-[400px] md:h-[500px]">
                {campusImages.map((image, index) => (
                  <motion.div
                    key={image.title}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: index === currentSlide ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                    
                    {/* Caption */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        {image.title}
                      </h3>
                      <p className="text-white/80">{image.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Navigation */}
              <div className="absolute bottom-6 right-6 flex gap-2">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Dots */}
              <div className="absolute bottom-6 left-6 flex gap-2">
                {campusImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentSlide
                        ? "w-8 bg-gold"
                        : "bg-white/40 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Play Button Overlay */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <button className="w-20 h-20 rounded-full bg-gold flex items-center justify-center shadow-gold hover:scale-110 transition-transform">
                <Play className="w-8 h-8 text-primary ml-1" fill="currentColor" />
              </button>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Section Label */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-[2px] bg-accent" />
              <span className="text-accent font-semibold uppercase tracking-wider text-sm">
                Campus Life
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Where Learning Meets <span className="text-gradient">Life</span>
            </h2>

            {/* Description */}
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              At Sri Chaitanya, we believe education extends beyond textbooks. 
              Our vibrant campus life offers students opportunities to explore 
              their passions, develop leadership skills, and create lasting memories.
            </p>

            {/* Activities Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {activities.map((activity, index) => (
                <motion.div
                  key={activity}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                >
                  <div className="w-2 h-2 rounded-full bg-gold" />
                  <span className="text-sm font-medium text-foreground">{activity}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#"
              className="btn-accent inline-flex items-center"
            >
              Explore Campus Life
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CampusLifeSection;
