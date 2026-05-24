export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: "Good" | "Basic";
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Programming Languages",
    skills: [
      { name: "Python", level: "Good" },
      { name: "C", level: "Good" },
      { name: "Java", level: "Good" },
      { name: "HTML/CSS", level: "Basic" }
    ]
  },
  {
    name: "AI/ML & Data Science",
    skills: [
      { name: "Machine Learning", level: "Good" },
      { name: "Data Preprocessing", level: "Good" },
      { name: "Model Evaluation", level: "Basic" },
      { name: "NLP / TF-IDF", level: "Basic" },
      { name: "XGBoost", level: "Basic" },
      { name: "SHAP Explainability", level: "Basic" }
    ]
  },
  {
    name: "Computer Vision",
    skills: [
      { name: "OpenCV", level: "Basic" },
      { name: "MediaPipe", level: "Basic" },
      { name: "CNN Basics", level: "Basic" }
    ]
  },
  {
    name: "Generative AI & NLP",
    skills: [
      { name: "LangChain", level: "Basic" },
      { name: "FAISS", level: "Basic" },
      { name: "OpenAI API", level: "Basic" },
      { name: "RAG Architecture", level: "Basic" }
    ]
  },
  {
    name: "Tools & Platforms",
    skills: [
      { name: "Git", level: "Basic" },
      { name: "Linux/Ubuntu", level: "Basic" },
      { name: "SQL", level: "Basic" },
      { name: "VS Code", level: "Good" }
    ]
  }
];

export const currentlyLearning = [
  "Machine Learning",
  "Deep Learning",
  "Data Science",
  "Python Libraries",
  "AI Concepts"
];

export const getLevelColor = (level: Skill["level"]): string => {
  switch (level) {
    case "Good":
      return "bg-primary/20 text-primary border-primary/30";
    case "Basic":
      return "bg-accent/20 text-accent border-accent/30";
    default:
      return "bg-muted text-muted-foreground border-border";
  }
};

export const getLevelWidth = (level: Skill["level"]): string => {
  switch (level) {
    case "Good":
      return "w-[70%]";
    case "Basic":
      return "w-[50%]";
    default:
      return "w-[30%]";
  }
};
