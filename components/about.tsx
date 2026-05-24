"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Brain, Target, Lightbulb, MapPin, Mail, Phone } from "lucide-react";

const aboutCards = [
  {
    icon: GraduationCap,
    title: "Education",
    description: "B.Tech CST at Viswam Engineering College with CGPA 9.23/10.0",
  },
  {
    icon: Brain,
    title: "Learning Focus",
    description: "Building foundation in Machine Learning, Data Science, and AI concepts",
  },
  {
    icon: Target,
    title: "Career Goal",
    description: "Seeking internship opportunities to learn, contribute, and grow as a developer",
  },
  {
    icon: Lightbulb,
    title: "Learning Mindset",
    description: "Improving skills through academic projects, hands-on practice, and self-study",
  },
];

const journey = [
  { year: "2022", title: "Secondary School", place: "Zilla Parishad High School", score: "88%" },
  { year: "2022-24", title: "Intermediate", place: "Sri Siddhartha Junior College", score: "79%" },
  { year: "2024-28", title: "B.Tech CST", place: "Viswam Engineering College", score: "9.23 CGPA" },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-32 relative" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my background, interests, and what drives me
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Who I Am</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I am Chittem Gowri Sankar, a student and aspiring Data Science &amp; AI/ML enthusiast. 
                I am currently building my foundation in programming, machine learning, data preprocessing, 
                and modern development tools. I believe in learning by building projects and improving step by step.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My goal is to gain internship experience, work on practical problems, and grow into a skilled 
                developer. I enjoy learning technologies through hands-on practice, academic projects, and 
                real-world problem solving.
              </p>

              {/* Contact Info */}
              <div className="mt-8 pt-6 border-t border-border space-y-3">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Madanapalle, Andhra Pradesh, India</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="w-4 h-4 text-primary" />
                  <a href="mailto:chittemgowrishankar@gmail.com" className="hover:text-foreground transition-colors">
                    chittemgowrishankar@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>+91 8121304708</span>
                </div>
              </div>
            </div>

            {/* Mini Journey Timeline */}
            <div className="glass rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-6 text-foreground">My Journey</h3>
              <div className="space-y-4">
                {journey.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 w-20 text-sm font-medium text-primary">
                      {item.year}
                    </div>
                    <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-primary" />
                    <div className="flex-1">
                      <p className="font-medium text-foreground">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.place}</p>
                      <p className="text-sm text-accent font-medium">{item.score}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Cards Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {aboutCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="glass rounded-2xl p-6 group cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <card.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
