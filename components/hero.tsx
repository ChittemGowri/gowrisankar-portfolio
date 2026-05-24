"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown, Sparkles, Brain, Code2, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const roles = [
  "Aspiring Data Science & AI/ML Student",
  "Computer Science Undergraduate",
  "Building Skills Through Projects",
];

const taglines = [
  "Learning, building, and growing step by step",
  "Passionate about Data Science, AI/ML, and software development",
  "Actively seeking internship opportunities to learn and contribute",
];

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [currentTagline, setCurrentTagline] = useState(0);

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    const taglineInterval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 4000);

    return () => {
      clearInterval(roleInterval);
      clearInterval(taglineInterval);
    };
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-chart-3/10 rounded-full blur-3xl" />
        
        {/* Particle Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground"
            >
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span>Open to Internship Opportunities</span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance"
            >
              <span className="text-foreground">Hi, I&apos;m </span>
              <span className="gradient-text">Chittem Gowri Sankar</span>
            </motion.h1>

            {/* Animated Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="h-8 overflow-hidden"
            >
              <motion.p
                key={currentRole}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-xl md:text-2xl text-primary font-medium"
              >
                {roles[currentRole]}
              </motion.p>
            </motion.div>

            {/* Animated Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="h-6 overflow-hidden"
            >
              <motion.p
                key={currentTagline}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-muted-foreground"
              >
                {taglines[currentTagline]}
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Link
                href="#projects"
                className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 flex items-center gap-2"
              >
                <Zap className="w-4 h-4" />
                Explore My Work
              </Link>
              <Link
                href="#contact"
                className="px-6 py-3 rounded-xl glass text-foreground font-medium hover:bg-muted/50 transition-all duration-300 flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-4 pt-4"
            >
              <a
                href="https://github.com/ChittemGowri"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all duration-300"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/gowrishankarchittem"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl glass text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Stats & Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            {/* Profile Image with Glow */}
            <div className="relative mx-auto w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-chart-3 to-accent opacity-30 blur-2xl animate-pulse" />
              <div className="relative w-full h-full rounded-full glass gradient-border overflow-hidden flex items-center justify-center">
                <Image
                  src="/images/profile.jpeg"
                  alt="Gowri Sankar - Profile Photo"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 p-3 rounded-xl glass"
              >
                <Brain className="w-8 h-8 text-primary" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="absolute -bottom-4 -left-4 p-3 rounded-xl glass"
              >
                <Code2 className="w-8 h-8 text-accent" />
              </motion.div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
                className="absolute top-1/2 -right-8 p-2.5 rounded-xl glass"
              >
                <Sparkles className="w-6 h-6 text-chart-3" />
              </motion.div>
            </div>

            {/* Stats Cards */}
            <div className="flex justify-center gap-4 mt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="px-6 py-4 rounded-xl glass text-center cursor-default"
              >
                <p className="text-2xl font-bold gradient-text">9.23</p>
                <p className="text-xs text-muted-foreground">CGPA</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="px-6 py-4 rounded-xl glass text-center cursor-default"
              >
                <p className="text-2xl font-bold gradient-text">6+</p>
                <p className="text-xs text-muted-foreground">Projects</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="px-6 py-4 rounded-xl glass text-center cursor-default"
              >
                <p className="text-2xl font-bold gradient-text">AI/ML</p>
                <p className="text-xs text-muted-foreground">Focus</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <Link href="#about" aria-label="Scroll to About section">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="p-2 rounded-full glass"
            >
              <ChevronDown className="w-6 h-6 text-muted-foreground" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
