"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { projects, projectCategories, type Project } from "@/data/projects";
import { ExternalLink, Github, X, ChevronRight, Lightbulb, Target, Wrench, AlertTriangle, Rocket, Folder } from "lucide-react";

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="glass rounded-2xl w-full max-w-2xl max-h-[85vh] overflow-y-auto"
      >
        <div className="sticky top-0 glass z-10 p-6 border-b border-border flex items-center justify-between">
          <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-muted/50 transition-colors text-muted-foreground hover:text-foreground"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Category & Tech Stack */}
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">
              {project.category}
            </span>
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Full Description */}
          {project.fullDescription && (
            <div>
              <h4 className="flex items-center gap-2 font-medium text-foreground mb-2">
                <Lightbulb className="w-4 h-4 text-primary" />
                Overview
              </h4>
              <p className="text-muted-foreground">{project.fullDescription}</p>
            </div>
          )}

          {/* Problem Statement */}
          {project.problemStatement && (
            <div>
              <h4 className="flex items-center gap-2 font-medium text-foreground mb-2">
                <Target className="w-4 h-4 text-primary" />
                Problem Statement
              </h4>
              <p className="text-muted-foreground">{project.problemStatement}</p>
            </div>
          )}

          {/* Solution */}
          {project.solution && (
            <div>
              <h4 className="flex items-center gap-2 font-medium text-foreground mb-2">
                <Wrench className="w-4 h-4 text-primary" />
                Solution Approach
              </h4>
              <p className="text-muted-foreground">{project.solution}</p>
            </div>
          )}

          {/* Key Highlights */}
          <div>
            <h4 className="flex items-center gap-2 font-medium text-foreground mb-2">
              <ChevronRight className="w-4 h-4 text-primary" />
              Key Achievements
            </h4>
            <ul className="space-y-2">
              {project.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-2 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          {/* Challenges */}
          {project.challenges && (
            <div>
              <h4 className="flex items-center gap-2 font-medium text-foreground mb-2">
                <AlertTriangle className="w-4 h-4 text-primary" />
                Challenges Overcome
              </h4>
              <p className="text-muted-foreground">{project.challenges}</p>
            </div>
          )}

          {/* Future Improvements */}
          {project.futureImprovements && (
            <div>
              <h4 className="flex items-center gap-2 font-medium text-foreground mb-2">
                <Rocket className="w-4 h-4 text-primary" />
                Future Improvements
              </h4>
              <p className="text-muted-foreground">{project.futureImprovements}</p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4">
            <a
              href={project.githubUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              <Github className="w-4 h-4" />
              View Code
            </a>
            <a
              href={project.liveUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-foreground font-medium hover:bg-muted/50 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="glass rounded-2xl overflow-hidden group cursor-pointer"
      onClick={onClick}
    >
      {/* Project Header */}
      <div className="p-6 pb-4">
        <div className="flex items-start justify-between mb-3">
          <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
            {project.category}
          </span>
          <div className="flex gap-2">
            <a
              href={project.githubUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-muted/50 transition-colors text-muted-foreground hover:text-foreground"
              onClick={(e) => e.stopPropagation()}
              aria-label="View GitHub repository"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={project.liveUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-muted/50 transition-colors text-muted-foreground hover:text-foreground"
              onClick={(e) => e.stopPropagation()}
              aria-label="View live demo"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {project.description}
        </p>
      </div>

      {/* Tech Stack */}
      <div className="px-6 pb-4">
        <div className="flex flex-wrap gap-2">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 rounded-md bg-muted text-muted-foreground text-xs"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="px-2 py-1 rounded-md bg-muted text-muted-foreground text-xs">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* Highlights Preview */}
      <div className="px-6 pb-4">
        <ul className="space-y-1">
          {project.highlights.slice(0, 2).map((highlight, index) => (
            <li key={index} className="flex items-start gap-2 text-xs text-muted-foreground">
              <span className="w-1 h-1 rounded-full bg-accent mt-1.5 flex-shrink-0" />
              <span className="line-clamp-1">{highlight}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* View Details Button */}
      <div className="px-6 pb-6">
        <button className="w-full py-2.5 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-muted/50 transition-colors flex items-center justify-center gap-2 group-hover:border-primary/50 group-hover:text-primary">
          View Details
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter((project) =>
        project.tags.some((tag) =>
          tag.toLowerCase().includes(selectedCategory.toLowerCase())
        ) || project.category.toLowerCase().includes(selectedCategory.toLowerCase())
      );

  return (
    <section id="projects" className="py-20 md:py-32 relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground mb-4">
            <Folder className="w-4 h-4 text-primary" />
            <span>Portfolio</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-world projects showcasing my skills in AI/ML, Data Science, and Software Development
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-muted-foreground">No projects found in this category.</p>
          </motion.div>
        )}
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
