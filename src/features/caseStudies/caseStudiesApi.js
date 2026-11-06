const caseStudies=[
    {
    id: 1,
    title: "E-commerce Platform",
    category: "Web",
    summary: "A modern online shopping platform.",
    year: 2025,
  },
  {
    id: 2,
    title: "Mobile Banking App",
    category: "Mobile",
    summary: "A secure mobile banking experience.",
    year: 2024,
  },
  {
    id: 3,
    title: "AI Chat Assistant",
    category: "AI",
    summary: "An intelligent assistant powered by AI.",
    year: 2025,
  },
  {
    id: 4,
    title: "Blockchain Payment System",
    category: "Blockchain",
    summary: "A decentralized digital payment solution.",
    year: 2024,
  },
  {
    id: 5,
    title: "School Management Website",
    category: "Web",
    summary: "A platform for managing school activities.",
    year: 2025,
  },
  {
    id: 6,
    title: "Fitness Tracking App",
    category: "Mobile",
    summary: "A mobile application for tracking fitness.",
    year: 2023,
  },
  {
    id: 7,
    title: "AI Recommendation Engine",
    category: "AI",
    summary: "An AI system that recommends relevant products.",
    year: 2025,
  },
  {
    id: 8,
    title: "Smart Contract Platform",
    category: "Blockchain",
    summary: "A platform for executing smart contracts.",
    year: 2024,
  },
];
export const fetchCaseStudies=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(Math.random()<0.15){

                reject(new Error("Network failed"))
                return;
            }
            resolve(caseStudies);
        },800)
    })
}