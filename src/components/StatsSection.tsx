import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { TrendingUp, Trophy, Users, MapPin, GraduationCap, Star, Award, Zap } from "lucide-react";

const stats = [
  {
    icon: Trophy,
    value: 499,
    suffix: "+",
    label: "IIT JEE Top Rankers",
    description: "In 2024 Results",
    color: "from-amber-400 to-orange-500",
  },
  {
    icon: GraduationCap,
    value: 98,
    suffix: "%",
    label: "Board Pass Rate",
    description: "Consistently High",
    color: "from-emerald-400 to-green-500",
  },
  {
    icon: Users,
    value: 250000,
    suffix: "+",
    label: "Students Enrolled",
    description: "Across India",
    color: "from-blue-400 to-indigo-500",
  },
  {
    icon: MapPin,
    value: 1000,
    suffix: "+",
    label: "School Branches",
    description: "Pan-India Presence",
    color: "from-purple-400 to-pink-500",
  },
  {
    icon: Star,
    value: 35,
    suffix: "+",
    label: "Years of Excellence",
    description: "Since 1986",
    color: "from-gold to-amber-400",
  },
  {
    icon: TrendingUp,
    value: 15000,
    suffix: "+",
    label: "Medical Selections",
    description: "NEET Success",
    color: "from-red-400 to-rose-500",
  },
];

const AnimatedCounter = ({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 2500;
    const steps = 80;
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
    if (num >= 100000) {
      return (num / 100000).toFixed(1) + "L";
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(num >= 10000 ? 0 : 1) + "K";
    }
    return num.toString();
  };

  return (
    <span className="stat-number text-4xl md:text-5xl">
      {value >= 1000 ? formatNumber(count) : count}
      {suffix}
    </span>
  );
};

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 relative overflow-hidden" ref={ref}>
      {/* Animated Background */}
      <div className="absolute inset-0 bg-primary">
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-0 left-0 w-[600px] h-[600px] bg-gold rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary rounded-full blur-3xl"
        />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
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
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/20 mb-6"
          >
            <Award className="w-8 h-8 text-gold" />
          </motion.div>
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
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group"
            >
              <motion.div
                whileHover={{ y: -10 }}
                className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-gold/30 transition-all duration-500 overflow-hidden"
              >
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-white/10 flex items-center justify-center"
                >
                  <stat.icon className="w-7 h-7 text-gold" />
                </motion.div>

                {/* Counter */}
                <div className="text-center mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={isInView} />
                </div>

                {/* Label */}
                <h3 className="text-white font-semibold text-sm md:text-base mb-1 text-center">
                  {stat.label}
                </h3>
                <p className="text-white/50 text-xs text-center">
                  {stat.description}
                </p>

                {/* Decorative */}
                <motion.div
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-gold to-secondary rounded-full group-hover:w-3/4 transition-all duration-500"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Results Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <div className="relative bg-gradient-to-r from-gold via-amber-400 to-gold rounded-2xl p-8 md:p-10 overflow-hidden">
            {/* Shimmer Effect */}
            <motion.div
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
              className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
            />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-4xl"
                >
                  🏆
                </motion.div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-1">
                    2024 Board Results Out!
                  </h3>
                  <p className="text-primary/80">
                    Congratulations to all our toppers! View detailed results and success stories.
                  </p>
                </div>
              </div>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-full font-semibold hover:shadow-xl transition-shadow whitespace-nowrap gap-2"
              >
                <Zap className="w-5 h-5" />
                View Results
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
