// import { motion, AnimatePresence } from "framer-motion";
// import { useState, useEffect } from "react";
// import { ArrowRight, Play, ChevronLeft, ChevronRight } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import heroCampus from "@/assets/hero-campus.jpg";

// const slides = [
//   {
//     id: 1,
//     title: "HISTORY CREATED",
//     subtitle: "AIR 1 in JEE Advanced | AIR 1 in NEET | AIR 1 in JEE Main 2023",
//     toppers: [
//       { name: "Vavilala Chidvilas", exam: "JEE ADVANCED", rank: "AIR 1", category: "OPEN CATEGORY" },
//       { name: "B Varun Chakravarthi", exam: "NEET", rank: "AIR 1", category: "OPEN CATEGORY" },
//       { name: "S Venkat Koundinya", exam: "JEE MAIN", rank: "AIR 1", category: "OPEN CATEGORY" },
//     ],
//   },
//   {
//     id: 2,
//     title: "35+ Years of Excellence",
//     subtitle: "India's Most Trusted Educational Institution",
//     description: "Nurturing minds, shaping futures with world-class education",
//   },
//   {
//     id: 3,
//     title: "Admissions Open 2025-26",
//     subtitle: "Join the Legacy of Excellence",
//     description: "Enroll now for CBSE, ICSE & State Board programs",
//   },
// ];

// const HeroSection = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);

//   useEffect(() => {
//     if (!isAutoPlaying) return;
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 6000);
//     return () => clearInterval(timer);
//   }, [isAutoPlaying]);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//     setIsAutoPlaying(false);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//     setIsAutoPlaying(false);
//   };

//   return (
//     <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-primary">
//       {/* Animated Background */}
//       <div className="absolute inset-0">
//         <img
//           src={heroCampus}
//           alt="Sri Chaitanya Campus"
//           className="w-full h-full object-cover opacity-20"
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-primary" />
//       </div>

//       {/* Floating Particles */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {[...Array(20)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-2 h-2 rounded-full bg-gold/20"
//             initial={{ 
//               x: Math.random() * window.innerWidth, 
//               y: Math.random() * window.innerHeight 
//             }}
//             animate={{
//               y: [null, -100, window.innerHeight + 100],
//               x: [null, Math.random() * 100 - 50],
//             }}
//             transition={{
//               duration: 10 + Math.random() * 10,
//               repeat: Infinity,
//               delay: Math.random() * 5,
//             }}
//           />
//         ))}
//       </div>

//       {/* Decorative Circles */}
//       <motion.div
//         animate={{ rotate: 360 }}
//         transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
//         className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full border border-white/5"
//       />
//       <motion.div
//         animate={{ rotate: -360 }}
//         transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
//         className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full border border-gold/10"
//       />

//       {/* Content */}
//       <div className="container mx-auto px-4 relative z-10">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentSlide}
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -30 }}
//             transition={{ duration: 0.6 }}
//             className="text-center"
//           >
//             {currentSlide === 0 ? (
//               /* Toppers Showcase Slide */
//               <div className="max-w-6xl mx-auto">
//                 {/* Title */}
//                 <motion.h1
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.6, delay: 0.2 }}
//                   className="text-4xl md:text-6xl lg:text-7xl font-bold text-gold mb-4 font-serif"
//                 >
//                   {slides[0].title}
//                 </motion.h1>
//                 <motion.p
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ duration: 0.6, delay: 0.4 }}
//                   className="text-white/90 text-lg md:text-xl mb-12"
//                 >
//                   {slides[0].subtitle}
//                 </motion.p>

//                 {/* Toppers Grid */}
//                 <div className="grid md:grid-cols-3 gap-6 md:gap-8">
//                   {slides[0].toppers.map((topper, index) => (
//                     <motion.div
//                       key={topper.name}
//                       initial={{ opacity: 0, y: 50 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
//                       className="relative group"
//                     >
//                       <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2">
//                         {/* Exam Badge */}
//                         <div className="text-center mb-4">
//                           <span className="text-gold font-bold text-sm tracking-wider">
//                             {topper.exam}
//                           </span>
//                         </div>

//                         {/* Rank Circle */}
//                         <div className="relative mx-auto w-24 h-24 md:w-28 md:h-28 mb-4">
//                           <motion.div
//                             animate={{ rotate: 360 }}
//                             transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//                             className="absolute inset-0 rounded-full border-2 border-dashed border-gold/30"
//                           />
//                           <div className="absolute inset-2 rounded-full bg-gradient-to-br from-gold to-amber-600 flex items-center justify-center shadow-gold">
//                             <div className="text-center">
//                               <span className="block text-primary text-2xl md:text-3xl font-bold">1</span>
//                               <span className="text-primary/80 text-xs font-semibold">RANK</span>
//                             </div>
//                           </div>
//                         </div>

//                         {/* Category */}
//                         <div className="inline-block px-3 py-1 bg-gold/20 rounded-full mb-3">
//                           <span className="text-gold text-xs font-semibold">{topper.category}</span>
//                         </div>

//                         {/* Name */}
//                         <h3 className="text-white font-bold text-lg">{topper.name}</h3>
//                         <p className="text-gold text-sm">Classroom Student</p>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
//             ) : (
//               /* Standard Slide */
//               <div className="max-w-4xl mx-auto">
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: 0.2 }}
//                   className="inline-flex items-center gap-2 bg-gold/20 backdrop-blur-sm border border-gold/30 rounded-full px-4 py-2 mb-6"
//                 >
//                   <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
//                   <span className="text-sm font-medium text-white">
//                     {slides[currentSlide].subtitle}
//                   </span>
//                 </motion.div>

//                 <motion.h1
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: 0.3 }}
//                   className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6"
//                 >
//                   {slides[currentSlide].title.split(" ").map((word, i) => (
//                     <span key={i}>
//                       {i === slides[currentSlide].title.split(" ").length - 1 ? (
//                         <span className="text-gradient-gold">{word}</span>
//                       ) : (
//                         word + " "
//                       )}
//                     </span>
//                   ))}
//                 </motion.h1>

//                 <motion.p
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: 0.4 }}
//                   className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10"
//                 >
//                   {slides[currentSlide].description}
//                 </motion.p>

//                 <motion.div
//                   initial={{ opacity: 0, y: 30 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: 0.5 }}
//                   className="flex flex-wrap justify-center gap-4"
//                 >
//                   <Button className="btn-accent text-lg px-8 py-6 group">
//                     Apply Now
//                     <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                   </Button>
//                   <Button variant="outline" className="btn-outline text-lg px-8 py-6 group">
//                     <Play className="mr-2 w-5 h-5" />
//                     Watch Video
//                   </Button>
//                 </motion.div>
//               </div>
//             )}
//           </motion.div>
//         </AnimatePresence>

//         {/* Tagline Banner */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 1 }}
//           className="mt-16 text-center"
//         >
//           <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-wider">
//             <span className="text-white">UNBEATABLE.</span>{" "}
//             <span className="text-gold">UNSTOPPABLE.</span>{" "}
//             <span className="text-secondary">UNMATCHED.</span>
//           </h2>
//         </motion.div>
//       </div>

//       {/* Navigation Arrows */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors z-20"
//       >
//         <ChevronLeft className="w-6 h-6" />
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors z-20"
//       >
//         <ChevronRight className="w-6 h-6" />
//       </button>

//       {/* Slide Indicators */}
//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => {
//               setCurrentSlide(index);
//               setIsAutoPlaying(false);
//             }}
//             className={`transition-all duration-300 ${
//               index === currentSlide
//                 ? "w-10 h-3 bg-gold rounded-full"
//                 : "w-3 h-3 bg-white/30 rounded-full hover:bg-white/50"
//             }`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default HeroSection;


import { motion, AnimatePresence, Variants } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowRight, Play, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Premium campus images (enhanced selection for variety and quality)
const campusImages = [
  "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Modern campus with students
  "https://images.pexels.com/photos/159740/library-la-trobe-study-students-education-159740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Premium library interior
  "https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" // Aerial view of premium school grounds
];

const slides = [
  {
    id: 1,
    title: "HISTORY CREATED",
    subtitle: "AIR 1 in JEE Advanced | AIR 1 in NEET | AIR 1 in JEE Main 2023",
    toppers: [
      { 
        name: "Vavilala Chidvilas", 
        exam: "JEE ADVANCED", 
        rank: "AIR 1", 
        category: "OPEN CATEGORY",
        // image: "https://static.toiimg.com/thumb/msid-100997062,width-400,resizemode-4/100997062.jpg" // Actual image from search for Vavilala Chidvilas Reddy
      },
      { 
        name: "B Varun Chakravarthi", 
        exam: "NEET", 
        rank: "AIR 1", 
        category: "OPEN CATEGORY",
        // image: "https://images.indianexpress.com/2023/06/NEET-1.jpg" // Actual image from Indian Express for Bora Varun Chakravarthi
      },
      { 
        name: "S Venkat Koundinya", 
        exam: "JEE MAIN", 
        rank: "AIR 1", 
        category: "OPEN CATEGORY",
        // image: "https://www.srichaitanya.net/wp-content/uploads/2023/04/1-1.png" // Actual image from Sri Chaitanya site or similar for Venkat Koundinya
      },
    ],
    bgImage: campusImages[0]
  },
  {
    id: 2,
    title: "35+ Years of Excellence",
    subtitle: "India's Most Trusted Educational Institution",
    description: "Nurturing minds, shaping futures with world-class education",
    bgImage: campusImages[1]
  },
  {
    id: 3,
    title: "Admissions Open 2025-26",
    subtitle: "Join the Legacy of Excellence",
    description: "Enroll now for CBSE, ICSE & State Board programs",
    bgImage: campusImages[2]
  },
];

// Enhanced animation variants for ultra-premium feel
const containerVariants: Variants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const childVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
};

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000); // Slightly longer for premium pacing
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
    <section className="relative min-h-screen flex items-center overflow-hidden bg-primary">
      {/* Parallax Background with premium overlay */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <img
            src={slides[currentSlide].bgImage}
            alt="Premium Campus View"
            className="w-full h-full object-cover opacity-25 filter brightness-75 contrast-110" // Premium image processing
            style={{ transform: 'translate3d(0,0,0)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/85 via-primary/95 to-primary/85" /> {/* Softer overlay */}
        </motion.div>
      </AnimatePresence>

      {/* Premium Particles - With trails and glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-gold/40 shadow-[0_0_12px_rgba(255,215,0,0.4)] blur-[1px]" // Enhanced glow and blur
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: window.innerHeight + 60 
            }}
            animate={{
              y: -200,
              x: [null, Math.random() * 300 - 150],
            }}
            transition={{
              duration: 20 + Math.random() * 20,
              repeat: Infinity,
              delay: Math.random() * 6,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      {/* Decorative Elements - Premium orbits with glow */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
        className="absolute -top-1/3 -right-1/3 w-[900px] h-[900px] rounded-full border-2 border-gradient-to-r from-gold/25 to-transparent opacity-40 shadow-[0_0_30px_rgba(255,215,0,0.2)]"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-1/3 -left-1/3 w-[700px] h-[700px] rounded-full border-2 border-gradient-to-r from-secondary/25 to-transparent opacity-40 shadow-[0_0_30px_rgba(0,128,255,0.2)]"
      />

      {/* Content - Premium centered layout */}
      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="text-center"
          >
            {currentSlide === 0 ? (
              /* Ultra-Premium Toppers Slide */
              <div className="max-w-7xl mx-auto">
                <motion.h1
                  variants={childVariants}
                  className="text-6xl md:text-8xl lg:text-9xl font-bold text-gradient-gold mb-8 font-serif tracking-wider uppercase"
                >
                  {slides[0].title}
                </motion.h1>
                <motion.p
                  variants={childVariants}
                  className="text-white/85 text-2xl md:text-3xl mb-20 font-light tracking-wide"
                >
                  {slides[0].subtitle}
                </motion.p>

                <motion.div 
                  className="grid md:grid-cols-3 gap-10"
                  variants={containerVariants}
                >
                  {slides[0].toppers.map((topper, index) => (
                    <motion.div
                      key={topper.name}
                      variants={childVariants}
                      whileHover={{ 
                        scale: 1.06, 
                        boxShadow: "0 0 40px rgba(255,215,0,0.3)",
                        transition: { duration: 0.5 }
                      }}
                      className="relative group overflow-hidden rounded-3xl bg-white/8 backdrop-blur-xl border border-white/15 p-8 hover:bg-white/12 transition-all duration-500 shadow-2xl"
                    >
                      <div className="text-center mb-8">
                        <span className="inline-block px-6 py-3 bg-gold/15 rounded-full text-gold font-bold text-base tracking-widest uppercase shadow-lg">
                          {topper.exam}
                        </span>
                      </div>

                      {/* <div className="relative mx-auto w-36 h-36 md:w-40 md:h-40 mb-8 rounded-full overflow-hidden border-4 border-gold/40 shadow-[0_0_20px_rgba(255,215,0,0.3)]">
                        <img 
                          src={topper.image} 
                          alt={topper.name}
                          className="w-full h-full object-cover scale-105 group-hover:scale-115 transition-transform duration-700"
                        />
                      </div> */}

                      <div className="relative mx-auto w-32 h-32 mb-8">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-0 rounded-full border-2 border-dashed border-gold/50"
                        />
                        <div className="absolute inset-3 rounded-full bg-gradient-to-br from-gold to-amber-400 flex items-center justify-center shadow-[0_0_30px_rgba(255,215,0,0.4)]">
                          <div className="text-center">
                            <span className="block text-primary text-4xl font-bold">1</span>
                            <span className="text-primary/85 text-sm font-bold uppercase">Rank</span>
                          </div>
                        </div>
                      </div>

                      <div className="inline-block px-5 py-2 bg-gold/15 rounded-full mb-6 shadow-md">
                        <span className="text-gold text-sm font-bold uppercase">{topper.category}</span>
                      </div>

                      <h3 className="text-white font-bold text-2xl mb-3">{topper.name}</h3>
                      <p className="text-gold/90 text-base font-medium">Classroom Student</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            ) : (
              /* Ultra-Premium Standard Slide */
              <div className="max-w-5xl mx-auto">
                <motion.div
                  variants={childVariants}
                  className="inline-flex items-center gap-4 bg-gold/15 backdrop-blur-lg border border-gold/25 rounded-full px-8 py-4 mb-10 shadow-lg"
                >
                  <span className="w-4 h-4 bg-gold rounded-full animate-pulse shadow-[0_0_12px_rgba(255,215,0,0.5)]" />
                  <span className="text-lg font-medium text-white uppercase tracking-widest">
                    {slides[currentSlide].subtitle}
                  </span>
                </motion.div>

                <motion.h1
                  variants={childVariants}
                  className="text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-none mb-10 tracking-tighter"
                >
                  {slides[currentSlide].title.split(" ").map((word, i) => (
                    <motion.span 
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 * i, duration: 0.7 }}
                    >
                      {i === slides[currentSlide].title.split(" ").length - 1 ? (
                        <span className="text-gradient-gold">{word}</span>
                      ) : (
                        word + " "
                      )}
                    </motion.span>
                  ))}
                </motion.h1>

                <motion.p
                  variants={childVariants}
                  className="text-2xl md:text-3xl text-white/85 max-w-4xl mx-auto mb-16 font-light leading-relaxed tracking-wide"
                >
                  {slides[currentSlide].description}
                </motion.p>

                <motion.div
                  variants={childVariants}
                  className="flex flex-wrap justify-center gap-8"
                >
                  <Button className="btn-brand text-xl px-12 py-8 rounded-full shadow-2xl group hover:shadow-[0_0_30px_rgba(255,215,0,0.4)]">
                    Apply Now
                    <ArrowRight className="ml-4 w-7 h-7 group-hover:translate-x-3 transition-transform duration-500" />
                  </Button>
                  <Button variant="outline" className="btn-outline text-xl px-12 py-8 rounded-full border-2 border-white/40 hover:border-white/80 group hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                    <Play className="mr-4 w-7 h-7 group-hover:scale-125 transition-transform duration-500" />
                    Watch Video
                  </Button>
                </motion.div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Tagline Banner - Premium animated reveal */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-24 text-center"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-widest uppercase">
            <motion.span 
              className="text-white"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.6, duration: 0.7 }}
            >UNBEATABLE.</motion.span>{" "}
            <motion.span 
              className="text-gold"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.8, duration: 0.7 }}
            >UNSTOPPABLE.</motion.span>{" "}
            <motion.span 
              className="text-secondary"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.0, duration: 0.7 }}
            >UNMATCHED.</motion.span>
          </h2>
        </motion.div>
      </div>

      {/* Navigation Arrows - Premium glass with glow */}
      <button
        onClick={prevSlide}
        className="absolute left-8 md:left-16 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/8 backdrop-blur-lg flex items-center justify-center text-white hover:bg-white/15 hover:scale-110 transition-all duration-500 z-20 shadow-xl hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/8 backdrop-blur-lg flex items-center justify-center text-white hover:bg-white/15 hover:scale-110 transition-all duration-500 z-20 shadow-xl hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      {/* Slide Indicators - Premium progress bars with glow */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-5 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index);
              setIsAutoPlaying(false);
            }}
            className={`relative transition-all duration-500 shadow-md ${
              index === currentSlide
                ? "w-16 h-2 bg-gold rounded-full overflow-hidden hover:shadow-[0_0_15px_rgba(255,215,0,0.4)]"
                : "w-4 h-2 bg-white/25 rounded-full hover:bg-white/40 hover:shadow-[0_0_10px_rgba(255,255,255,0.2)]"
            }`}
          >
            {index === currentSlide && (
              <motion.div
                className="absolute inset-0 bg-gold/60"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 7, ease: "linear" }}
              />
            )}
          </button>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;