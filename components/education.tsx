"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Award, Calendar, Star } from "lucide-react";

const educationData = [
  {
    id: 1,
    degree: "B.Tech in Computer Science and Technology",
    institution: "Viswam Engineering College, JNTUA",
    duration: "2024 - 2028",
    score: "CGPA: 9.23 / 10.0",
    description: "Pursuing undergraduate degree with focus on AI/ML, Data Science, and Software Development. Actively building projects and participating in hackathons.",
    current: true,
  },
  {
    id: 2,
    degree: "Intermediate Education",
    institution: "Sri Siddhartha Junior College, Madanapalle",
    duration: "2022 - 2024",
    score: "79%",
    description: "Completed intermediate education with strong foundation in Mathematics and Sciences.",
    current: false,
  },
  {
    id: 3,
    degree: "Secondary School Education",
    institution: "Zilla Parishad High School, Mudivedu",
    duration: "2022",
    score: "88%",
    description: "Completed secondary education with excellent academic performance.",
    current: false,
  },
];

const certifications = [
  {
    name: "DBMS Certification",
    issuer: "Swayam NPTEL",
    icon: Award,
  },
  {
    name: "IBM SkillsBuild Program",
    issuer: "Participation Certificate",
    icon: Award,
  },
  {
    name: "AI/ML Engagement",
    issuer: "Active learner & hackathon participant",
    icon: Star,
  },
];

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-20 md:py-32 relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-chart-3/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
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
            <span className="gradient-text">Education & Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic journey and professional certifications
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-foreground mb-8 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              Education Timeline
            </h3>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-border" />

              {/* Timeline Items */}
              <div className="space-y-8">
                {educationData.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="relative pl-14"
                  >
                    {/* Timeline Dot */}
                    <div
                      className={`absolute left-3 w-5 h-5 rounded-full border-2 ${
                        item.current
                          ? "bg-primary border-primary animate-pulse"
                          : "bg-background border-border"
                      }`}
                    />

                    {/* Content Card */}
                    <div className={`glass rounded-2xl p-6 ${item.current ? "gradient-border" : ""}`}>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          {item.duration}
                        </span>
                        {item.current && (
                          <span className="px-2 py-0.5 rounded-full bg-primary/20 text-primary text-xs font-medium">
                            Current
                          </span>
                        )}
                      </div>
                      <h4 className="font-semibold text-foreground mb-1">{item.degree}</h4>
                      <p className="text-sm text-primary mb-2">{item.institution}</p>
                      <p className="text-sm font-medium text-accent mb-3">{item.score}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold text-foreground mb-8 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                <Award className="w-5 h-5 text-accent" />
              </div>
              Certifications & Activities
            </h3>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  className="glass rounded-xl p-5 flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <cert.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">{cert.name}</h4>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Achievements Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.7 }}
              className="mt-8 glass rounded-2xl p-6"
            >
              <h4 className="font-semibold text-foreground mb-4">Highlights & Achievements</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">Consistent academic performance with CGPA 9.23</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">Hands-on AI/ML project building and deployment</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">Active hackathon participation and mentoring</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">Strong learning mindset and adaptability</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
