// Central content file — edit everything about the portfolio here.
// No component below hardcodes copy; they all read from this file.

export const profile = {
  name: "Ruth Sonia Eone",
  role: "Data Scientist & Data Analyst",
  location: "Île-de-France, France",
  email: "ruthsoniae@gmail.com",
  phone: "+33 7 68 17 29 47",
  resumeUrl: "/resume.pdf",
  photoUrl: "/profile-photo.jpg",
  githubUrl: "https://github.com/soniaemail",
  linkedinUrl: "https://www.linkedin.com/in/ruth-sonia-eone-728143252/",
  // Replace this placeholder once you have a Hugging Face profile.
  huggingfaceUrl: "#",
};

export const hero = {
  headline: "I Build Data-Driven Solutions & Intelligent ML Models",
  subheadline: `Hi, I'm ${profile.name.split(" ")[0]} ${profile.name.split(" ")[1]}, a ${profile.role}.`,
  tags: ["PYTHON", "SQL", "MACHINE LEARNING", "POWER BI", "GCP"],
  notes: [
    "Based in Île-de-France — open to remote & on-site collaboration",
    "Fluent in French & English, clear technical communication",
    "Comfortable embedded in cross-functional, agile teams",
  ],
};

export const about = {
  title: "Data enthusiast with a passion for turning raw data into decisions",
  paragraphs: [
    "I'm a data scientist and analyst who enjoys the full journey a dataset takes — from messy, inconsistent raw exports to clean pipelines, reliable models and dashboards people actually use to make decisions.",
    "I care about clean, documented code, sound data-quality rules and reproducible workflows. Whether I'm auditing a dataset, training a classifier or building a Power BI dashboard, I aim for work that is rigorous, well explained and easy for a team to build on.",
  ],
  ctaLabel: "Do you want to start a project together? Copy my email address",
};

export const skills = [
  "Python",
  "Pandas",
  "NumPy",
  "Scikit-learn",
  "SQL",
  "Power BI",
  "Tableau",
  "DAX & Power Query",
  "GCP (BigQuery)",
  "Cloud Storage",
  "Excel VBA",
  "Git",
];

export type Project = {
  title: string;
  description: string;
  tag: string;
  stack: string[];
  link: string;
};

export const projects: Project[] = [
  {
    title: "Matching & Deduplication Scripts",
    description:
      "Python (pandas) scripts to match records and detect inter-source duplicates on client data, with precision measurement and iterative tuning.",
    tag: "Data Quality — 2025",
    stack: ["Python", "Pandas", "SQL"],
    link: "#",
  },
  {
    title: "Industrialized ML Pipeline",
    description:
      "Automated ETL pipeline on GCP with preprocessing, automatic categorization, API deployment and performance monitoring.",
    tag: "Data Engineering — 2024",
    stack: ["GCP", "BigQuery", "Python", "API"],
    link: "#",
  },
  {
    title: "Churn Prediction — Classification",
    description:
      "Feature engineering and a supervised ML model (85% accuracy) with statistical and business evaluation, delivered through a Power BI dashboard.",
    tag: "Machine Learning — 2025",
    stack: ["Scikit-learn", "Python", "Power BI"],
    link: "#",
  },
  {
    title: "Customer Segmentation — K-means",
    description:
      "Clustering on behavioral data with automatic labeling and categorization, driving a +15% engagement uplift.",
    tag: "Data Analysis — 2024",
    stack: ["K-means", "Python", "Statistics"],
    link: "#",
  },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    company: "Rbconsulting",
    role: "Data Analyst",
    period: "January – June 2025",
    location: "Colombes",
    bullets: [
      "Audited and cleaned multi-source data — identifying inconsistencies, duplicates and missing values with Python (pandas) and SQL",
      "Built Python & Excel VBA automation scripts for data transformation, cutting processing time by 80%",
      "Ran advanced SQL queries on tabular data and documented data-quality rules",
      "Designed Power BI dashboards (DAX, Power Query) and presented insights to business teams",
    ],
  },
  {
    company: "PADI-DJA",
    role: "AI & Cloud Assistant",
    period: "June – August 2024",
    location: "Yaoundé",
    bullets: [
      "Built ETL pipelines on GCP (BigQuery, Cloud Storage) integrating and reconciling heterogeneous multi-source data",
      "Handled advanced preprocessing — cleaning, missing data, anomaly detection and feature engineering",
      "Explored automatic categorization and classification approaches (business rules, ML) on text and tabular data",
    ],
  },
  {
    company: "Binyame Consulting",
    role: "HR Data Analyst",
    period: "November 2023 – January 2024",
    location: "Yaoundé",
    bullets: [
      "Collected, structured and quality-controlled multi-source HR data (Excel VBA, SQL)",
      "Labeled and categorized data to support predictive turnover modeling",
      "Defined data-quality rules and presented recommendations to leadership",
    ],
  },
];

export const approach = [
  {
    phase: "Phase 1",
    title: "Discovery & Data Audit",
    description:
      "You explain your problem or data challenge, I analyze it and come back with possible solutions, scope and pricing.",
  },
  {
    phase: "Phase 2",
    title: "Modeling & Development",
    description:
      "Once we agree on the plan, I get to work and share progress along the way — pipelines, models or dashboard previews.",
  },
  {
    phase: "Phase 3",
    title: "Delivery & Monitoring",
    description:
      "Based on your feedback, I deliver the final solution and can set up monitoring so it keeps performing over time.",
  },
];

export const contact = {
  title: "Ready to turn your data into decisions?",
  description:
    "Reach out today and let's discuss how I can help you extract insight and value from your data.",
  ctaLabel: "Let's get in touch",
};
