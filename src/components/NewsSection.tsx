import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import sportsGround from "@/assets/sports-ground.jpg";
import scienceLab from "@/assets/science-lab.jpg";
import studentsLibrary from "@/assets/students-library.jpg";

const news = [
  {
    id: 1,
    title: "Sri Chaitanya Students Shine in JEE Advanced 2024",
    excerpt: "Over 499 students from Sri Chaitanya secured top ranks in JEE Advanced, continuing our legacy of excellence.",
    image: studentsLibrary,
    date: "Jan 28, 2025",
    category: "Results",
    readTime: "3 min read",
  },
  {
    id: 2,
    title: "Annual Sports Meet 2025 - A Grand Success",
    excerpt: "Students showcased exceptional sportsmanship and athletic prowess at our annual inter-school sports championship.",
    image: sportsGround,
    date: "Jan 20, 2025",
    category: "Events",
    readTime: "4 min read",
  },
  {
    id: 3,
    title: "New STEM Innovation Lab Inaugurated",
    excerpt: "State-of-the-art laboratory equipped with robotics, AI tools, and advanced scientific equipment now open.",
    image: scienceLab,
    date: "Jan 15, 2025",
    category: "Facilities",
    readTime: "2 min read",
  },
];

const upcomingEvents = [
  { title: "Admissions Open - 2025-26", date: "Feb 1, 2025" },
  { title: "Science Exhibition", date: "Feb 15, 2025" },
  { title: "Parent-Teacher Meeting", date: "Feb 20, 2025" },
];

const NewsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-background overflow-hidden" ref={ref}>
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-[2px] bg-accent" />
              <span className="text-accent font-semibold uppercase tracking-wider text-sm">
                News & Events
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Latest <span className="text-gradient">Updates</span>
            </h2>
          </div>
          <Button variant="outline" className="rounded-full border-primary/20 hover:bg-primary hover:text-primary-foreground self-start md:self-auto">
            View All News
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* News Cards */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {news.slice(0, 2).map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="card-premium group bg-card"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gold text-primary text-sm font-semibold rounded-full">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {item.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {item.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2 group-hover:text-secondary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                    {item.excerpt}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center text-secondary font-semibold text-sm group/link"
                  >
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.article>
            ))}

            {/* Featured Article */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="card-premium group bg-card md:col-span-2"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto overflow-hidden">
                  <img
                    src={news[2].image}
                    alt={news[2].title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gold text-primary text-sm font-semibold rounded-full">
                      {news[2].category}
                    </span>
                  </div>
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {news[2].date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {news[2].readTime}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-secondary transition-colors">
                    {news[2].title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {news[2].excerpt}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center text-secondary font-semibold group/link"
                  >
                    Read Full Article
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.article>
          </div>

          {/* Upcoming Events Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-1"
          >
            <div className="bg-primary rounded-3xl p-6 md:p-8 h-full">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-gold" />
                Upcoming Events
              </h3>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <motion.a
                    key={event.title}
                    href="#"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="block p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors group"
                  >
                    <span className="text-gold text-sm font-medium">{event.date}</span>
                    <h4 className="text-white font-semibold group-hover:text-gold transition-colors">
                      {event.title}
                    </h4>
                  </motion.a>
                ))}
              </div>

              {/* Newsletter */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <h4 className="text-white font-semibold mb-3">Stay Updated</h4>
                <p className="text-white/60 text-sm mb-4">
                  Subscribe to our newsletter for the latest news and updates.
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-gold"
                  />
                  <button className="px-4 py-2 bg-gold text-primary font-semibold rounded-lg hover:bg-gold-light transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
