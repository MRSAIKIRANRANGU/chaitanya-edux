import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, BookOpen, Heart, Trophy, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import studentsLibrary from "@/assets/students-library.jpg";

const features = [
  { icon: BookOpen, title: "Quality Education", description: "World-class curriculum" },
  { icon: Heart, title: "Holistic Development", description: "Mind, body & spirit" },
  { icon: Trophy, title: "Proven Results", description: "Top board rankers" },
  { icon: Lightbulb, title: "Innovation", description: "Future-ready learning" },
];

const checkPoints = [
  "CBSE, ICSE & State Board Curriculum",
  "Integrated JEE & NEET Preparation",
  "Smart Classrooms & Modern Labs",
  "Sports & Extracurricular Excellence",
  "Experienced Faculty & Mentorship",
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background overflow-hidden" ref={ref}>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Section Label */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-[2px] bg-accent" />
              <span className="text-accent font-semibold uppercase tracking-wider text-sm">
                About Us
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Empowering Students for{" "}
              <span className="text-gradient">35+ Years</span>
            </h2>

            {/* Description */}
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Sri Chaitanya Schools is a global education powerhouse, nurturing millions 
              of students with knowledge, values, and innovation. Our unique teaching 
              methodology, contemporary teaching methodologies, and equal focus on 
              intellectual, physical, and personality development ensure our students 
              are ready to conquer the world.
            </p>

            {/* Checkpoints */}
            <div className="space-y-4 mb-8">
              {checkPoints.map((point, index) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-success" />
                  </div>
                  <span className="text-foreground font-medium">{point}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <Button className="btn-accent">
                Discover More
              </Button>
              <Button variant="outline" className="rounded-full border-primary/20 hover:bg-primary hover:text-primary-foreground">
                Our History
              </Button>
            </div>
          </motion.div>

          {/* Right Content - Image & Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-premium">
              <img
                src={studentsLibrary}
                alt="Students learning"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>

            {/* Floating Feature Cards */}
            <div className="absolute -bottom-6 left-4 right-4 md:-bottom-8 md:-left-8 md:right-auto md:w-80">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="glass rounded-2xl p-6 shadow-premium"
              >
                <div className="grid grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={feature.title} className="text-center">
                      <div className="w-10 h-10 mx-auto mb-2 rounded-xl bg-accent/10 flex items-center justify-center">
                        <feature.icon className="w-5 h-5 text-accent" />
                      </div>
                      <h4 className="font-semibold text-sm text-foreground">{feature.title}</h4>
                      <p className="text-xs text-muted-foreground">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Experience Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -top-4 -right-4 md:top-8 md:-right-8"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-accent flex items-center justify-center shadow-gold">
                <div className="text-center">
                  <span className="block text-2xl md:text-3xl font-bold text-primary">35+</span>
                  <span className="text-xs md:text-sm font-medium text-primary/80">Years</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
