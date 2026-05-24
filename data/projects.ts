export interface Project {
  id: number;
  title: string;
  category: string;
  tags: string[];
  techStack: string[];
  description: string;
  highlights: string[];
  fullDescription?: string;
  problemStatement?: string;
  solution?: string;
  challenges?: string;
  futureImprovements?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Sign Language to Text Conversion",
    category: "Computer Vision",
    tags: ["Academic Project", "Computer Vision", "Learning"],
    techStack: ["Python", "OpenCV", "MediaPipe", "scikit-learn", "Streamlit"],
    description: "Academic project to understand real-time gesture detection. Built a system that recognizes ASL alphabet gestures using webcam input and MediaPipe hand landmarks.",
    highlights: [
      "Practiced computer vision concepts with OpenCV and MediaPipe",
      "Learned classification model training with scikit-learn",
      "Built a simple Streamlit interface for demonstration"
    ],
    fullDescription: "An academic learning project focused on understanding computer vision techniques. The system detects hand gestures using MediaPipe and classifies them into ASL alphabet letters.",
    problemStatement: "Wanted to learn computer vision by building a practical project that combines hand tracking and classification.",
    solution: "Used MediaPipe for hand landmark detection and trained a simple classifier to recognize 26 ASL alphabet gestures.",
    challenges: "Learning to handle different lighting conditions and understanding how MediaPipe landmarks work were key learning experiences.",
    futureImprovements: "Add more gestures, improve accuracy, and learn about deploying ML models.",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 2,
    title: "Customer Churn Prediction",
    category: "Machine Learning",
    tags: ["Learning Project", "Data Science", "ML Basics"],
    techStack: ["Python", "XGBoost", "pandas", "SHAP", "Streamlit"],
    description: "Practice project to learn end-to-end machine learning workflow including data preprocessing, model training, evaluation, and basic explainability using SHAP.",
    highlights: [
      "Learned data preprocessing and feature engineering",
      "Practiced model training with XGBoost",
      "Explored model explainability using SHAP plots"
    ],
    fullDescription: "A learning project to understand the complete machine learning pipeline from data cleaning to model evaluation. Built to practice ML concepts learned in coursework.",
    problemStatement: "Wanted to understand how machine learning is applied to business problems like customer retention.",
    solution: "Built a classification model using XGBoost with proper data preprocessing and added SHAP for understanding model predictions.",
    challenges: "Learning to handle imbalanced datasets and understanding feature importance were valuable learning experiences.",
    futureImprovements: "Learn more about hyperparameter tuning and try different algorithms.",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 3,
    title: "RAG Chatbot on Documents",
    category: "Generative AI",
    tags: ["Learning Project", "Generative AI", "NLP"],
    techStack: ["Python", "LangChain", "FAISS", "OpenAI API", "Streamlit"],
    description: "Practice project to understand Retrieval-Augmented Generation (RAG) architecture by building a simple chatbot that answers questions from uploaded PDF documents.",
    highlights: [
      "Learned document chunking and embedding concepts",
      "Practiced using LangChain and FAISS for vector search",
      "Built a basic Streamlit interface for PDF upload"
    ],
    fullDescription: "A hands-on project to learn about RAG architecture and how LLMs can be used with custom documents. Focused on understanding the concepts rather than production-level implementation.",
    problemStatement: "Wanted to learn how modern AI chatbots work with custom knowledge bases.",
    solution: "Used LangChain to orchestrate document processing, FAISS for vector storage, and OpenAI API for generating responses.",
    challenges: "Understanding chunk sizes, embeddings, and how retrieval affects response quality were key learnings.",
    futureImprovements: "Learn about different embedding models and improve retrieval accuracy.",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 4,
    title: "Movie Recommendation System",
    category: "Data Science",
    tags: ["Academic Project", "Data Science", "Beginner"],
    techStack: ["Python", "pandas", "scikit-learn", "Streamlit"],
    description: "Beginner project to learn content-based filtering using TF-IDF vectorization and cosine similarity on movie data.",
    highlights: [
      "Learned TF-IDF vectorization concepts",
      "Practiced cosine similarity for finding similar items",
      "Built a simple web interface with Streamlit"
    ],
    fullDescription: "An introductory project to understand how recommendation systems work. Used the TMDB dataset to practice content-based filtering techniques.",
    problemStatement: "Wanted to learn the basics of recommendation systems and text vectorization.",
    solution: "Applied TF-IDF on movie descriptions and used cosine similarity to find similar movies.",
    challenges: "Understanding how text is converted to numerical vectors and what cosine similarity represents.",
    futureImprovements: "Learn about collaborative filtering and hybrid approaches.",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 5,
    title: "TruthLens - Misinformation Detection",
    category: "AI",
    tags: ["Academic Project", "Classification", "Learning"],
    techStack: ["Java", "Python", "HTML", "Machine Learning"],
    description: "Academic project to learn text classification by building a basic system that attempts to identify potentially misleading content.",
    highlights: [
      "Practiced supervised classification techniques",
      "Learned about text preprocessing for classification",
      "Combined Java backend with basic HTML frontend"
    ],
    fullDescription: "A learning project focused on understanding text classification and building end-to-end applications. The prototype attempts to classify text as potentially misleading.",
    problemStatement: "Wanted to learn about text classification and how AI can be applied to real-world problems.",
    solution: "Built basic classification models trained on labeled datasets to identify patterns in misleading content.",
    challenges: "Understanding how to collect and label training data, and learning about classification metrics.",
    futureImprovements: "Learn about more advanced NLP techniques and improve classification accuracy.",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 6,
    title: "Sustainable Energy Concept",
    category: "Hackathon",
    tags: ["Hackathon Project", "Modeling", "C Programming"],
    techStack: ["C", "Algorithms", "Modeling"],
    description: "Hackathon project (Thinkthon) focused on conceptualizing a sustainable energy solution using basic C programming and algorithmic modeling.",
    highlights: [
      "Participated in Thinkthon hackathon",
      "Practiced C programming and algorithm design",
      "Learned to work under time constraints"
    ],
    fullDescription: "A hackathon project where I conceptualized a sustainable energy idea and built basic simulations in C. Focused on learning to work in a competitive environment.",
    problemStatement: "Hackathon challenge to propose solutions for sustainable energy generation.",
    solution: "Created a basic concept and simulation model using C programming to demonstrate the idea.",
    challenges: "Learning to ideate, prototype, and present under hackathon time constraints.",
    futureImprovements: "Learn more about energy systems and improve modeling accuracy.",
    githubUrl: "#",
    liveUrl: "#"
  }
];

export const projectCategories = [
  "All",
  "Academic Project",
  "Learning Project",
  "Hackathon"
];
