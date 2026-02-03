import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowRight, Play, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroCampus from "@/assets/hero-campus.jpg";

const slides = [
  {
    id: 1,
    title: "HISTORY CREATED",
    subtitle: "AIR 1 in JEE Advanced | AIR 1 in NEET | AIR 1 in JEE Main 2023",
    toppers: [
      { name: "Vavilala Chidvilas", exam: "JEE ADVANCED", rank: "AIR 1", category: "OPEN CATEGORY" },
      { name: "B Varun Chakravarthi", exam: "NEET", rank: "AIR 1", category: "OPEN CATEGORY" },
      { name: "S Venkat Koundinya", exam: "JEE MAIN", rank: "AIR 1", category: "OPEN CATEGORY" },
    ],
  },
  {
    id: 2,
    title: "35+ Years of Excellence",
    subtitle: "India's Most Trusted Educational Institution",
    description: "Nurturing minds, shaping futures with world-class education",
  },
  {
    id: 3,
    title: "Admissions Open 2025-26",
    subtitle: "Join the Legacy of Excellence",
    description: "Enroll now for CBSE, ICSE & State Board programs",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-primary">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <img
          src={heroCampus}
          alt="Sri Chaitanya Campus"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-primary" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-gold/20"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight 
            }}
            animate={{
              y: [null, -100, window.innerHeight + 100],
              x: [null, Math.random() * 100 - 50],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Decorative Circles */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full border border-white/5"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full border border-gold/10"
      />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {currentSlide === 0 ? (
              /* Toppers Showcase Slide */
              <div className="max-w-6xl mx-auto">
                {/* Title */}
                <motion.h1
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-4xl md:text-6xl lg:text-7xl font-bold text-gold mb-4 font-serif"
                >
                  {slides[0].title}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-white/90 text-lg md:text-xl mb-12"
                >
                  {slides[0].subtitle}
                </motion.p>

                {/* Toppers Grid */}
                <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                  {slides[0].toppers.map((topper, index) => (
                    <motion.div
                      key={topper.name}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
                      className="relative group"
                    >
                      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2">
                        {/* Exam Badge */}
                        <div className="text-center mb-4">
                          <span className="text-gold font-bold text-sm tracking-wider">
                            {topper.exam}
                          </span>
                        </div>

                        {/* Rank Circle */}
                        <div className="relative mx-auto w-24 h-24 md:w-28 md:h-28 mb-4">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 rounded-full border-2 border-dashed border-gold/30"
                          />
                          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-gold to-amber-600 flex items-center justify-center shadow-gold">
                            <div className="text-center">
                              <span className="block text-primary text-2xl md:text-3xl font-bold">1</span>
                              <span className="text-primary/80 text-xs font-semibold">RANK</span>
                            </div>
                          </div>
                        </div>

                        {/* Category */}
                        <div className="inline-block px-3 py-1 bg-gold/20 rounded-full mb-3">
                          <span className="text-gold text-xs font-semibold">{topper.category}</span>
                        </div>

                        {/* Name */}
                        <h3 className="text-white font-bold text-lg">{topper.name}</h3>
                        <p className="text-gold text-sm">Classroom Student</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ) : (
              /* Standard Slide */
              <div className="max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-flex items-center gap-2 bg-gold/20 backdrop-blur-sm border border-gold/30 rounded-full px-4 py-2 mb-6"
                >
                  <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-white">
                    {slides[currentSlide].subtitle}
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6"
                >
                  {slides[currentSlide].title.split(" ").map((word, i) => (
                    <span key={i}>
                      {i === slides[currentSlide].title.split(" ").length - 1 ? (
                        <span className="text-gradient-gold">{word}</span>
                      ) : (
                        word + " "
                      )}
                    </span>
                  ))}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10"
                >
                  {slides[currentSlide].description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="flex flex-wrap justify-center gap-4"
                >
                  <Button className="btn-accent text-lg px-8 py-6 group">
                    Apply Now
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button variant="outline" className="btn-outline text-lg px-8 py-6 group">
                    <Play className="mr-2 w-5 h-5" />
                    Watch Video
                  </Button>
                </motion.div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Tagline Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-wider">
            <span className="text-white">UNBEATABLE.</span>{" "}
            <span className="text-gold">UNSTOPPABLE.</span>{" "}
            <span className="text-secondary">UNMATCHED.</span>
          </h2>
        </motion.div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors z-20"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors z-20"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index);
              setIsAutoPlaying(false);
            }}
            className={`transition-all duration-300 ${
              index === currentSlide
                ? "w-10 h-3 bg-gold rounded-full"
                : "w-3 h-3 bg-white/30 rounded-full hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
