import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Ravi Kumar",
    role: "IIT Bombay - AIR 23",
    year: "Batch 2024",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    content: "Sri Chaitanya's structured approach and dedicated faculty transformed my preparation journey. The integrated coaching helped me crack JEE Advanced with an excellent rank.",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "AIIMS Delhi - AIR 45",
    year: "Batch 2024",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    content: "The holistic education at Sri Chaitanya prepared me not just for NEET but for life. The teachers go above and beyond to ensure every student succeeds.",
    rating: 5,
  },
  {
    id: 3,
    name: "Arjun Reddy",
    role: "Board Topper - 99.2%",
    year: "Batch 2024",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    content: "From regular tests to doubt-clearing sessions, everything was perfectly organized. Sri Chaitanya made my dream of being a board topper come true.",
    rating: 5,
  },
  {
    id: 4,
    name: "Sneha Patel",
    role: "Parent",
    year: "",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    content: "As a parent, I've seen incredible growth in my child. The school's focus on values, discipline, and academics creates a perfect learning environment.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-muted/30 overflow-hidden" ref={ref}>
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
            Hear from our students and parents about their transformative journey with Sri Chaitanya
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Main Testimonial Card */}
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-card rounded-3xl shadow-premium p-8 md:p-12"
              >
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  {/* Left - Image */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border-4 border-gold/20">
                        <img
                          src={testimonials[currentIndex].image}
                          alt={testimonials[currentIndex].name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-3 -right-3 w-12 h-12 rounded-full bg-gold flex items-center justify-center">
                        <Quote className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                  </div>

                  {/* Right - Content */}
                  <div className="flex-1 text-center md:text-left">
                    {/* Rating */}
                    <div className="flex justify-center md:justify-start gap-1 mb-4">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-gold fill-gold" />
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
                      <p className="text-secondary font-medium">
                        {testimonials[currentIndex].role}
                      </p>
                      {testimonials[currentIndex].year && (
                        <p className="text-muted-foreground text-sm">
                          {testimonials[currentIndex].year}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-card shadow-md flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentIndex
                      ? "w-8 bg-gold"
                      : "bg-border hover:bg-muted-foreground"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-card shadow-md flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
