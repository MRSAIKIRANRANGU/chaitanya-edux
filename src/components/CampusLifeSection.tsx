import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Play, ChevronLeft, ChevronRight, Camera, Users, Dumbbell, Palette } from "lucide-react";
import scienceLab from "@/assets/science-lab.jpg";
import sportsGround from "@/assets/sports-ground.jpg";
import studentsLibrary from "@/assets/students-library.jpg";
import heroCampus from "@/assets/hero-campus.jpg";

const galleryItems = [
  {
    id: 1,
    title: "Modern Science Labs",
    description: "State-of-the-art laboratories equipped with the latest technology",
    image: scienceLab,
    category: "Facilities",
    icon: Camera,
  },
  {
    id: 2,
    title: "Sports Excellence",
    description: "World-class sports facilities for holistic development",
    image: sportsGround,
    category: "Sports",
    icon: Dumbbell,
  },
  {
    id: 3,
    title: "Learning Spaces",
    description: "Inspiring libraries and study areas for focused learning",
    image: studentsLibrary,
    category: "Academic",
    icon: Users,
  },
  {
    id: 4,
    title: "Creative Arts",
    description: "Dedicated spaces for music, art, and cultural activities",
    image: heroCampus,
    category: "Arts",
    icon: Palette,
  },
];

const highlights = [
  { label: "Smart Classrooms", value: "500+" },
  { label: "Sports Facilities", value: "50+" },
  { label: "Labs & Libraries", value: "200+" },
  { label: "Activity Centers", value: "100+" },
];

const CampusLifeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  return (
    <section id="campus-life" className="section-padding bg-muted/30 overflow-hidden" ref={ref}>
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-accent" />
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">
              Campus Life
            </span>
            <div className="w-12 h-[2px] bg-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Experience <span className="text-gradient">World-Class</span> Facilities
          </h2>
          <p className="text-muted-foreground text-lg">
            Our campuses are designed to inspire learning, creativity, and personal growth
          </p>
        </motion.div>

        {/* Main Gallery */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Large Featured Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
              <motion.img
                key={activeIndex}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                src={galleryItems[activeIndex].image}
                alt={galleryItems[activeIndex].title}
                className="w-full h-full object-cover"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />

              {/* Play Button */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center cursor-pointer">
                  <Play className="w-8 h-8 text-white fill-white" />
                </div>
              </motion.div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-gold/20 backdrop-blur-sm rounded-full text-gold text-sm font-medium mb-3">
                    {(() => {
                      const Icon = galleryItems[activeIndex].icon;
                      return <Icon className="w-4 h-4" />;
                    })()}
                    {galleryItems[activeIndex].category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {galleryItems[activeIndex].title}
                  </h3>
                  <p className="text-white/80">
                    {galleryItems[activeIndex].description}
                  </p>
                </motion.div>
              </div>

              {/* Navigation */}
              <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={prevSlide}
                  className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors pointer-events-auto"
                >
                  <ChevronLeft className="w-6 h-6" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={nextSlide}
                  className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors pointer-events-auto"
                >
                  <ChevronRight className="w-6 h-6" />
                </motion.button>
              </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {galleryItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === activeIndex
                      ? "w-8 h-2 bg-gold"
                      : "w-2 h-2 bg-border hover:bg-muted-foreground"
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Thumbnails Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {galleryItems.map((item, index) => (
              <motion.div
                key={item.id}
                whileHover={{ y: -5 }}
                onClick={() => setActiveIndex(index)}
                className={`relative rounded-2xl overflow-hidden cursor-pointer group ${
                  index === activeIndex ? "ring-2 ring-gold ring-offset-2" : ""
                }`}
              >
                <div className="aspect-square">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/60 group-hover:bg-primary/40 transition-colors" />
                  
                  {/* Content */}
                  <div className="absolute inset-0 p-4 flex flex-col justify-end">
                    <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-white font-bold text-sm md:text-base line-clamp-1">
                      {item.title}
                    </h4>
                    <p className="text-white/70 text-xs md:text-sm line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Highlights Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-card rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 border border-border"
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                {item.value}
              </div>
              <div className="text-muted-foreground font-medium text-sm">
                {item.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CampusLifeSection;
