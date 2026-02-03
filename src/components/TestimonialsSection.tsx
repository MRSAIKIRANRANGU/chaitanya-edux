import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Quote, Star, ChevronLeft, ChevronRight, GraduationCap, Stethoscope, Award } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Vavilala Chidvilas",
    role: "JEE Advanced AIR 1",
    year: "Batch 2023",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    content: "Sri Chaitanya's structured approach and dedicated faculty transformed my preparation journey. The integrated coaching helped me achieve the top rank in JEE Advanced. Forever grateful!",
    rating: 5,
    icon: Award,
    achievement: "AIR 1",
  },
  {
    id: 2,
    name: "B Varun Chakravarthi",
    role: "NEET AIR 1",
    year: "Batch 2023",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    content: "The holistic education at Sri Chaitanya prepared me not just for NEET but for life. The teachers go above and beyond to ensure every student achieves their dreams.",
    rating: 5,
    icon: Stethoscope,
    achievement: "AIR 1",
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "Board Topper - 99.8%",
    year: "Batch 2024",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    content: "From regular tests to doubt-clearing sessions, everything was perfectly organized. Sri Chaitanya made my dream of being a board topper come true.",
    rating: 5,
    icon: GraduationCap,
    achievement: "99.8%",
  },
  {
    id: 4,
    name: "Ravi Kumar",
    role: "IIT Bombay - AIR 23",
    year: "Batch 2024",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    content: "The competitive environment and constant motivation from teachers pushed me to achieve more than I thought possible. Thank you Sri Chaitanya!",
    rating: 5,
    icon: Award,
    achievement: "AIR 23",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <section className="section-padding bg-background overflow-hidden" ref={ref}>
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
              Success Stories
            </span>
            <div className="w-12 h-[2px] bg-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Voices of <span className="text-gradient">Excellence</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Hear from our toppers about their transformative journey with Sri Chaitanya
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden py-4">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <div className="bg-card rounded-3xl shadow-xl p-8 md:p-12 border border-border relative overflow-hidden">
                  {/* Background Decoration */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-gold/5 to-transparent rounded-bl-full" />
                  <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-secondary/5 rounded-full blur-2xl" />

                  <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                    {/* Left - Image & Achievement */}
                    <div className="flex-shrink-0 text-center">
                      <div className="relative inline-block">
                        {/* Rotating Border */}
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                          className="absolute -inset-2 rounded-full border-2 border-dashed border-gold/30"
                        />
                        
                        {/* Image */}
                        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-gold/20 relative">
                          <img
                            src={testimonials[currentIndex].image}
                            alt={testimonials[currentIndex].name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Achievement Badge */}
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.3, type: "spring" }}
                          className="absolute -bottom-2 -right-2 w-14 h-14 rounded-full bg-gold flex items-center justify-center shadow-gold"
                        >
                          <span className="text-primary font-bold text-sm">
                            {testimonials[currentIndex].achievement}
                          </span>
                        </motion.div>
                      </div>

                      {/* Icon Badge */}
                      <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full">
                        {(() => {
                          const Icon = testimonials[currentIndex].icon;
                          return <Icon className="w-4 h-4 text-secondary" />;
                        })()}
                        <span className="text-secondary text-sm font-medium">
                          {testimonials[currentIndex].role}
                        </span>
                      </div>
                    </div>

                    {/* Right - Content */}
                    <div className="flex-1 text-center md:text-left">
                      {/* Quote Icon */}
                      <Quote className="w-12 h-12 text-gold/20 mb-4 mx-auto md:mx-0" />

                      {/* Rating */}
                      <div className="flex justify-center md:justify-start gap-1 mb-4">
                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                          >
                            <Star className="w-5 h-5 text-gold fill-gold" />
                          </motion.div>
                        ))}
                      </div>

                      {/* Quote */}
                      <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6 italic">
                        "{testimonials[currentIndex].content}"
                      </p>

                      {/* Author */}
                      <div>
                        <h4 className="text-xl font-bold text-foreground">
                          {testimonials[currentIndex].name}
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          {testimonials[currentIndex].year}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              className="w-12 h-12 rounded-full bg-card shadow-md border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentIndex
                      ? "w-10 h-3 bg-gold"
                      : "w-3 h-3 bg-border hover:bg-muted-foreground"
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              className="w-12 h-12 rounded-full bg-card shadow-md border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
