import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, BookOpen, FlaskConical, Calculator, Globe, Palette, Medal } from "lucide-react";
import scienceLab from "@/assets/science-lab.jpg";
import sportsGround from "@/assets/sports-ground.jpg";
import studentsLibrary from "@/assets/students-library.jpg";

const programs = [
  {
    icon: BookOpen,
    title: "Primary School",
    grade: "Grades 1-5",
    description: "Building strong foundations with activity-based learning and value education.",
    color: "from-blue-500 to-blue-600",
    image: studentsLibrary,
  },
  {
    icon: Calculator,
    title: "Middle School",
    grade: "Grades 6-8",
    description: "Comprehensive curriculum with focus on conceptual understanding and critical thinking.",
    color: "from-emerald-500 to-emerald-600",
    image: scienceLab,
  },
  {
    icon: FlaskConical,
    title: "High School",
    grade: "Grades 9-10",
    description: "Board exam excellence with integrated foundation courses for competitive exams.",
    color: "from-amber-500 to-amber-600",
    image: studentsLibrary,
  },
  {
    icon: Globe,
    title: "Senior Secondary",
    grade: "Grades 11-12",
    description: "Specialized streams with intensive JEE, NEET, and board preparation.",
    color: "from-purple-500 to-purple-600",
    image: scienceLab,
  },
];

const highlights = [
  { icon: Palette, label: "Arts & Culture" },
  { icon: Medal, label: "Sports Excellence" },
  { icon: FlaskConical, label: "STEM Labs" },
  { icon: Globe, label: "Global Exposure" },
];

const ProgramsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="academics" className="section-padding bg-muted/50 overflow-hidden" ref={ref}>
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-accent" />
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">
              Academic Programs
            </span>
            <div className="w-12 h-[2px] bg-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Excellence at <span className="text-gradient">Every Level</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Our comprehensive academic programs are designed to nurture talent, 
            build character, and prepare students for success in life.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group"
            >
              <div className="card-premium h-full bg-card">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${program.color} opacity-60`} />
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <program.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                      {program.grade}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {program.description}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center text-secondary font-semibold text-sm group/link"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Highlights Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-primary rounded-2xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-2">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Beyond Academics
              </h3>
              <p className="text-white/70">
                Comprehensive programs for holistic student development
              </p>
            </div>
            <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-14 h-14 mx-auto mb-3 rounded-2xl bg-white/10 flex items-center justify-center">
                    <item.icon className="w-7 h-7 text-gold" />
                  </div>
                  <span className="text-white font-medium text-sm">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramsSection;
