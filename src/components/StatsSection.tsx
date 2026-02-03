import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { TrendingUp, Trophy, Users, MapPin, GraduationCap, Star } from "lucide-react";

const stats = [
  {
    icon: Trophy,
    value: 499,
    suffix: "+",
    label: "IIT JEE Top Rankers",
    description: "In 2024 Results",
  },
  {
    icon: GraduationCap,
    value: 98,
    suffix: "%",
    label: "Board Pass Rate",
    description: "Consistently High",
  },
  {
    icon: Users,
    value: 250000,
    suffix: "+",
    label: "Students Enrolled",
    description: "Across India",
  },
  {
    icon: MapPin,
    value: 1000,
    suffix: "+",
    label: "School Branches",
    description: "Pan-India Presence",
  },
  {
    icon: Star,
    value: 35,
    suffix: "+",
    label: "Years of Excellence",
    description: "Since 1986",
  },
  {
    icon: TrendingUp,
    value: 15000,
    suffix: "+",
    label: "Medical Selections",
    description: "NEET Success",
  },
];

const AnimatedCounter = ({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 2000;
    const steps = 60;
    const stepValue = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += stepValue;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, inView]);

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(num >= 10000 ? 0 : 1) + "K";
    }
    return num.toString();
  };

  return (
    <span className="stat-number">
      {value >= 1000 ? formatNumber(count) : count}
      {suffix}
    </span>
  );
};

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-primary">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-royal rounded-full blur-3xl" />
        </div>
        {/* Pattern overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Our <span className="text-gradient-gold">Achievements</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Numbers that speak of our commitment to academic excellence and student success
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="text-center group"
            >
              <div className="relative">
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                  <stat.icon className="w-8 h-8 text-gold" />
                </div>

                {/* Counter */}
                <div className="mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={isInView} />
                </div>

                {/* Label */}
                <h3 className="text-white font-semibold text-sm md:text-base mb-1">
                  {stat.label}
                </h3>
                <p className="text-white/50 text-xs md:text-sm">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Results Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 bg-gradient-accent rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
              🏆 2024 Board Results
            </h3>
            <p className="text-primary/80">
              Congratulations to all our toppers! View detailed results and success stories.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-colors whitespace-nowrap"
          >
            View Results
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
