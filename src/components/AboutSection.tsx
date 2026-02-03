import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Check, BookOpen, Heart, Trophy, Lightbulb, Users, Target, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import studentsLibrary from "@/assets/students-library.jpg";

const tabs = [
  {
    id: "who-we-are",
    label: "Who We Are",
    icon: Users,
    content: {
      title: "A Global Education Powerhouse",
      description: "The world today is a global village and people are its citizens. As boundaries of location, people and time cease to exist, it is of utmost importance that we move with the times. At Sri Chaitanya, we have created a unique blend of world-class curricula, contemporary teaching methodologies, and equal focus on intellectual, physical, and personality development, resulting in future leaders who are ready to take on the world.",
      highlights: [
        "35+ Years of Educational Excellence",
        "1000+ Schools Across India",
        "2.5 Lakh+ Students Every Year",
        "World-Class Infrastructure",
      ],
    },
  },
  {
    id: "mission",
    label: "Mission",
    icon: Target,
    content: {
      title: "Our Mission & Vision",
      description: "To provide quality education that nurtures young minds into responsible global citizens. We aim to create an environment where every student discovers their potential, develops critical thinking skills, and builds strong moral character. Our vision is to be the most trusted educational institution that shapes the leaders of tomorrow.",
      highlights: [
        "Foster Academic Excellence",
        "Build Character & Values",
        "Encourage Innovation",
        "Promote Holistic Growth",
      ],
    },
  },
  {
    id: "management",
    label: "Management",
    icon: Sparkles,
    content: {
      title: "Visionary Leadership",
      description: "Under the guidance of our visionary management team, Sri Chaitanya has grown from a single school to a nationwide network of educational institutions. Our leadership brings decades of experience in education, ensuring that every student receives the best possible learning experience.",
      highlights: [
        "Experienced Educationists",
        "Student-Centric Approach",
        "Continuous Innovation",
        "Quality Assurance",
      ],
    },
  },
];

const features = [
  { icon: BookOpen, title: "Quality Education", description: "World-class curriculum" },
  { icon: Heart, title: "Holistic Development", description: "Mind, body & spirit" },
  { icon: Trophy, title: "Proven Results", description: "Top board rankers" },
  { icon: Lightbulb, title: "Innovation", description: "Future-ready learning" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState("who-we-are");

  const currentTab = tabs.find((t) => t.id === activeTab)!;

  return (
    <section id="about" className="section-padding bg-background overflow-hidden" ref={ref}>
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-accent" />
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">
              About Sri Chaitanya
            </span>
            <div className="w-12 h-[2px] bg-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Excellence in <span className="text-gradient">Education</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content - Tabs */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-2 mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                {currentTab.content.title}
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                {currentTab.content.description}
              </p>

              {/* Highlights */}
              <div className="space-y-3 mb-8">
                {currentTab.content.highlights.map((point, index) => (
                  <motion.div
                    key={point}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
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
              <Button className="btn-accent group">
                Read More
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Image & Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <img
                src={studentsLibrary}
                alt="Students learning"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
              
              {/* Play Button Overlay */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center cursor-pointer group">
                  <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center group-hover:scale-110 transition-transform">
                    <div className="w-0 h-0 border-l-[16px] border-l-primary border-y-[10px] border-y-transparent ml-1" />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Floating Feature Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-6 left-4 right-4 md:-bottom-8 md:-left-8 md:right-auto md:w-80"
            >
              <div className="glass rounded-2xl p-6 shadow-xl">
                <div className="grid grid-cols-2 gap-4">
                  {features.map((feature) => (
                    <div key={feature.title} className="text-center group cursor-pointer">
                      <div className="w-10 h-10 mx-auto mb-2 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <feature.icon className="w-5 h-5 text-accent" />
                      </div>
                      <h4 className="font-semibold text-sm text-foreground">{feature.title}</h4>
                      <p className="text-xs text-muted-foreground">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Experience Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -top-4 -right-4 md:top-8 md:-right-8"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-28 h-28 md:w-32 md:h-32"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <path
                      id="circlePath"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    />
                  </defs>
                  <circle cx="50" cy="50" r="48" className="fill-gold" />
                  <text className="fill-primary text-[8px] font-bold uppercase tracking-widest">
                    <textPath href="#circlePath">
                      • Years of Excellence • Trusted by Millions
                    </textPath>
                  </text>
                </svg>
              </motion.div>
              <div className="absolute inset-4 rounded-full bg-gold flex items-center justify-center">
                <div className="text-center">
                  <span className="block text-2xl md:text-3xl font-bold text-primary">35+</span>
                  <span className="text-xs font-semibold text-primary/80">YEARS</span>
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
