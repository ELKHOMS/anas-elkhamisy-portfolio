 // ─────────────────────────────────────────────────────────────
// EDIT YOUR PORTFOLIO HERE. Everything on the site reads from this file.
// Leave a field as "" to hide it (e.g. links, email, CV).
// Anything marked placeholder: true shows a "Placeholder" tag on the site.
// ─────────────────────────────────────────────────────────────
import facePhoto from "@/assets/face-photo.png";
import { Phone } from "lucide-react";
export const profile = {
name: "Anas Mohamed Rafiq Elkhamisy",

shortName: "Anas Elkhamisy",

identity: "Aspiring Data Analyst | Computer Science & AI Student",

location: "Damietta, Egypt",

availability: "Open to Internship Opportunities",

headline: "Turning Data Into Meaningful Insights",

subline:
"I analyze data, uncover patterns, and build interactive dashboards that turn complex information into actionable insights.",

intro:
"I'm a Computer Science and Artificial Intelligence student passionate about data analysis, business intelligence, and data visualization. I enjoy transforming raw data into meaningful insights that help people understand problems and make better decisions.",

education:
"B.Sc. in Computer Science and Artificial Intelligence | Damietta University | 2024–Present",

approach:
"My approach starts with understanding the problem and identifying the right questions. I then clean, explore, and analyze data using Python, SQL, and Excel. Finally, I communicate the findings through interactive dashboards and clear visualizations using Power BI and Tableau. I also validate my results to ensure accuracy and reliability.",

philosophy:
"I believe curiosity drives innovation and continuous learning creates progress. My goal is to transform complex data into clear insights and build practical solutions that create real value.",

photo: "/face-photo.png",

interests: [
"Data Analysis",
"Data Visualization",
"Business Intelligence",
"Python Programming",
"SQL & Databases",
"Power BI",
"Microsoft Excel",
"Tableau",
"Machine Learning",
"Software Development",
],
};
export const contact = {
  email: "234anas234@gmail.com",
  linkedin: "https://www.linkedin.com/in/anas-elkhamisy",
  github: "https://github.com/ELKHOMS",
  cv: "https://drive.google.com/file/d/1GMB41EojyZdtaxLPuiUfe4FdPhvoCKmJ/view?usp=drive_link",
  phone: "+201063641615"
};
export type Skill = { name: string; description: string; projects: string[]; level?: string };
export const skillGroups: { title: string; skills: Skill[] }[] = [
  {
    title: "Data Analysis",
    skills: [
      { name: "Python", description: "Cleaning, exploring and analysing data with pandas and friends. — edit", projects: ["Cairo Metro Data Analysis", "Crop Yield Prediction"] },
      { name: "SQL", description: "Querying and shaping relational data. — edit", projects: ["Sales Data Analysis & BI"] },
      { name: "Microsoft Excel", description: "Spreadsheets, pivots and quick analysis. — edit", projects: ["Sales Data Analysis & BI"] },
      { name: "Power BI", description: "Building interactive dashboards. — edit", projects: ["Sales Data Analysis & BI"] },
      { name: "Tableau", description: "Visual exploration and storytelling. — edit", projects: [] },
    ],
  },
  {
    title: "Programming & Databases",
    skills: [
      { name: "Python Programming", description: "General-purpose scripting and problem solving. — edit", projects: [] },
      { name: "SQL Server", description: "Working with Microsoft SQL Server databases. — edit", projects: [] },
      { name: "Database Fundamentals", description: "Modelling, keys, normalisation. — edit", projects: [] },
    ],
  },
  {
    title: "Additional Interests",
    skills: [
      { name: "Software Development", description: "Building small tools and apps. — edit", projects: [] },
      { name: "Data Storytelling", description: "Explaining findings clearly to any audience. — edit", projects: [] },
      { name: "Business Intelligence", description: "Turning data into decisions. — edit", projects: [] },
    ],
  },
];

export type Project = {
  title: string; category: string; cover: string; screenshots: string[];
  summary: string; problem: string; solution: string; tools: string[];
  findings: string; github: string; demo: string; video: string; placeholder?: boolean;
};
const todo = "Placeholder — describe this in your own words.";
export const projects: Project[] = [
  { title: "Cairo Metro Data Analysis", category: "Data Analysis", cover: "/projects/metro-cover.png", screenshots: ["/projects/metro-1.png", "/projects/metro-2.png"], summary: "Exploring Cairo Metro data to understand how the network is used.", problem: todo, solution: todo, tools: ["Python", "Pandas", "Visualization"], findings: todo, github: "", demo: "", video: "", placeholder: true },
  { title: "Netflix Data Analysis", category: "Data Analysis", cover: "/projects/netflix-1.png", screenshots: ["/projects/netflix-1.png", "/projects/netflix-2.png", "/projects/netflix-3.png", "/projects/netflix-4.png"], summary: "Exploring Netflix data and turning it into insights using Excel.", problem: todo, solution: todo, tools: ["Excel"], findings: todo, github: "", demo: "", video: "", placeholder: true },
  { title: "Airline Data Analysis", category: "Business Intelligence", cover: "/projects/airline-powerbi-1.png", screenshots: ["/projects/airline-powerbi-1.png", "/projects/airline-powerbi-2.png", "/projects/airline-powerbi-3.png", "/projects/airline-excel-1.png", "/projects/airline-excel-2.png"], summary: "Analysing airline data and presenting it through Excel and Power BI dashboards.", problem: todo, solution: todo, tools: ["Excel", "Power BI"], findings: todo, github: "", demo: "", video: "", placeholder: true },
  { title: "Bike Shop Sales Analysis", category: "Business Intelligence", cover: "/projects/bike-1.png", screenshots: ["/projects/bike-1.png", "/projects/bike-2.png", "/projects/bike-3.png"], summary: "Analysing sales of a bicycle and accessories shop to find the best-selling products and trends.", problem: todo, solution: todo, tools: ["Excel", "Power BI"], findings: todo, github: "", demo: "", video: "", placeholder: true },
];

export type Certificate = { name: string; issuer: string; date: string; skills: string[]; image: string; url: string; placeholder?: boolean; extra?: { label: string; image: string }[] };export const certificates: Certificate[] = [
  { name: "Summer Internship", issuer: "General Authority for Investment and Free Zones (GAFI)", date: "Jul 2026 – Aug 2026", skills: ["Administrative Support", "Business Support", "Investment & Free Zones"], image: "/certs/gafi.png", url: "" },
  { name: "Summer Internships Program – Data Analysis", issuer: "NTI", date: "Aug 2026", skills: ["Excel", "Power BI", "Tableau", "Python", "SQL", "Machine Learning Fundamentals"], image: "/certs/nti-summer.png", url: "" },
  { name: "Data Analysis Track", issuer: "NTI – Creativa Innovation Hubs", date: "Jul 2026 – Sep 2026", skills: ["Excel", "Power BI", "SQL", "Data Cleaning", "Data Visualization"], image: "/certs/nti-creativa.png", url: "" },
  { name: "Computer & Networking Training", issuer: "Damietta Port", date: "Aug 2026", skills: ["Computer Hardware", "Networking Fundamentals", "Network Infrastructure"], image: "/certs/damietta-port.png", url: "" },
  { name: "Data Analysis Track", issuer: "DEPI", date: "Dec 2025 – Aug 2026", skills: ["Python", "SQL", "Excel", "Power BI", "Data Cleaning", "Data Visualization"], image: "/certs/depi.png", extra: [{ label: "English Certificate", image: "/certs/depi-english.png" }, { label: "Team Leader Certificate", image: "/certs/depi-teamleader.png" }], url: "" },  { name: "Front-End Trainee", issuer: "IEEE", date: "Jul 2025 – Aug 2025", skills: ["HTML", "CSS", "JavaScript", "Responsive Design"], image: "/certs/ieee.png", url: "" },
  { name: "Flutter Trainee", issuer: "GDG", date: "Aug 2025 – Sep 2025", skills: ["Flutter", "Dart", "Mobile UI"], image: "/certs/gdg-flutter.png", url: "" },
  { name: "UI/UX Trainee", issuer: "NTI", date: "Jun 2025 – Jul 2025", skills: ["Figma", "Wireframing", "Prototyping"], image: "/certs/nti-uiux.png", url: "" },
  { name: "CS50x Student", issuer: "ITI", date: "Jan 2025 – Mar 2025", skills: ["C", "Python", "Problem Solving", "Algorithms"], image: "/certs/cs50x.png", url: "" },
];
export type Milestone = {
  title: string;
  kind: string;
  date: string;
  description: string;
  placeholder?: boolean;
};

export const milestones: Milestone[] = [
  {
    title: "CS50x – First steps in programming",
    kind: "Academic",
    date: "Jan 2025 – Mar 2025",
    description:
      "Learned programming fundamentals, problem solving and algorithmic thinking with C and Python through CS50x at ITI.",
  },
  {
    title: "UI/UX Training at NTI",
    kind: "Training",
    date: "Jun 2025 – Jul 2025",
    description:
      "Learned design principles, wireframing and prototyping in Figma.",
  },
  {
    title: "Front-End Training at IEEE",
    kind: "Training",
    date: "Jul 2025 – Aug 2025",
    description:
      "Built responsive web pages with HTML, CSS and JavaScript.",
  },
  {
    title: "Flutter Training at GDG",
    kind: "Training",
    date: "Aug 2025 – Sep 2025",
    description:
      "Built mobile interfaces and simple apps using Flutter and Dart.",
  },
  {
    title: "DEPI Data Analysis Track",
    kind: "Training",
    date: "Dec 2025 – Aug 2026",
    description:
      "Learned data analysis using real-world datasets, Python, SQL, Excel and Power BI.",
  },
  {
    title: "My data projects",
    kind: "Project",
    date: "2026",
    description:
      "Worked on Cairo Metro, Netflix, Airline and Bike Shop data analysis projects.",
  },
  {
    title: "Summer internships",
    kind: "Internship",
    date: "Jul 2026 – Aug 2026",
    description:
      "Interned at GAFI and joined the NTI Summer Internships Program in Data Analysis.",
  },
  {
    title: "NTI Creativa Innovation Hubs",
    kind: "Training",
    date: "Jul 2026 – Sep 2026",
    description:
      "Studied data analysis with Excel, Power BI and SQL.",
  },
  {
title: "NTI Creativa Innovation Hubs – Ras El Bar",
kind: "Training",
date: "Sep 2026 – Present",
description:
"Continuing the Data Analysis track at NTI Creativa Innovation Hubs in Ras El Bar, developing practical skills in Excel, Power BI, SQL, data cleaning, analysis, and visualization.",
},
];export const education = {
  institution: "Damietta University",
  degree: "Bachelor's degree",
  field: "Computer Science",
  start: "2024",
  graduation: "2028",
  coursework: ["Data Structures", "Databases", "Statistics", "Machine Learning"],
  projects: ["Cairo Metro Data Analysis", "Netflix Data Analysis", "Airline Data Analysis", "Bike Shop Sales Analysis"],
};
export type Service = {
  title: string;
  description: string;
  deliverables: string[];
  tools: string[];
  image: string; // صورة بتوضح الخدمة
};

export const services: Service[] = [
  {
    title: "Data Cleaning",
    description:
      "أحوّل البيانات الخام الفوضوية إلى بيانات نظيفة وجاهزة للتحليل.",
    deliverables: [
      "Handling missing values & duplicates",
      "Fixing data types & inconsistent formats",
      "Outlier detection",
      "Cleaned dataset + cleaning log",
    ],
    tools: ["Python", "Pandas", "Excel", "SQL"],
    image: "/services/data-cleaning.png",
  },
  {
    title: "Data Analysis",
    description:
      "أستكشف البيانات وأطلع منها الأنماط والتريندات والإجابات على أسئلة البزنس.",
    deliverables: [
      "Exploratory Data Analysis (EDA)",
      "KPIs & trend analysis",
      "Statistical summaries",
      "Insights report",
    ],
    tools: ["Python", "SQL", "Excel"],
    image: "/services/data-analysis.png",
  },
  {
    title: "Data Visualization",
    description:
      "أعمل رسومات واضحة بتحكي قصة البيانات بشكل سهل الفهم.",
    deliverables: [
      "Charts & visual reports",
      "Storytelling with data",
      "Clean, readable design",
    ],
    tools: ["Power BI", "Tableau", "Excel"],
    image: "/services/data-visualization.png",
  },
  {
    title: "Interactive Dashboards",
    description:
      "أبني داشبورد تفاعلي يخلّي صاحب القرار يشوف الأرقام المهمة ويفلتر بنفسه.",
    deliverables: [
      "Interactive Power BI / Tableau dashboards",
      "Filters, slicers & drill-down",
      "Executive summary view",
    ],
    tools: ["Power BI", "Tableau"],
    image: "/services/dashboards.png",
  },
  {
    title: "SQL Querying & Reporting",
    description:
      "أكتب استعلامات SQL لاستخراج وتجميع البيانات من قواعد البيانات.",
    deliverables: [
      "Joins, aggregations & CTEs",
      "Reusable queries",
      "Reports ready for BI tools",
    ],
    tools: ["SQL Server", "SQL"],
    image: "/services/sql-reporting.png",
  },
];