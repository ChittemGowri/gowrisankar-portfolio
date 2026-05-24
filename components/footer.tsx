"use client";

import { Github, Linkedin, Mail, Heart, ArrowUp, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 border-t border-border">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-96 h-48 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-48 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link href="#home" className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary via-chart-3 to-accent flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold gradient-text">Gowri.dev</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4 max-w-xs">
              Aspiring AI/ML Engineer passionate about building intelligent solutions 
              that solve real-world problems.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/ChittemGowri"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg glass text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all duration-300"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/gowrishankarchittem"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg glass text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:chittemgowrishankar@gmail.com"
                className="p-2 rounded-lg glass text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Madanapalle, Andhra Pradesh, India</li>
              <li>
                <a
                  href="mailto:chittemgowrishankar@gmail.com"
                  className="hover:text-foreground hover:text-primary transition-colors"
                >
                  chittemgowrishankar@gmail.com
                </a>
              </li>
              <li>+91 8121304708</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            &copy; 2026 Chittem Gowri Sankar. Built with{" "}
            <Heart className="w-4 h-4 text-destructive inline" /> for learning and innovation.
          </p>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 rounded-lg glass text-sm text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
            Back to Top
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
