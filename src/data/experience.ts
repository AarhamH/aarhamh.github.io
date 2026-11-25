export type Metric = {
  value: string;
  label: string;
};

export type Experience = {
  title: string;
  company: string;
  location: string;
  start: string;
  end: string;
  blurb: string;
  metrics?: Metric[];
  stack?: string[];
};

const experience: Experience[] = [
  {
    title: "Software Engineer",
    company: "Harris Computer",
    location: "Burnaby, BC",
    start: "Jan 2025",
    end: "Present",
    blurb:
      "I build the utility billing platform and the tooling around it: an LLM agent pipeline that takes product screens from spec to tested code with human review gates, ATDD as our department standard, and a test platform that scales horizontally. I also designed and shipped 3 core billing domains end to end.",
    metrics: [
      { value: "60%", label: "fewer QA-reported defects than conventionally built features" },
      { value: "~70%", label: "shorter release feedback cycles across 429 tests" },
      { value: "19", label: "product screens delivered from spec to tested code" },
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Harris Computer",
    location: "Burnaby, BC",
    start: "May 2024",
    end: "Dec 2024",
    blurb:
      "I shipped type-safe GraphQL APIs in Go for 120+ internal users, made the pipeline run end-to-end tests selectively and in parallel, and set the team's testing practices.",
    metrics: [
      { value: "85%", label: "less CI/CD compute" },
      { value: "93%", label: "unit-test coverage held across backend services" },
    ],
    stack: ["Go", "GraphQL", "React", "TypeScript", "Playwright", "Docker"],
  },
  {
    title: "Junior Application Developer",
    company: "Modrinth",
    location: "Chandler, AZ (remote)",
    start: "Jan 2023",
    end: "Aug 2023",
    blurb:
      "I led the flagship desktop app's migration from Electron to Tauri, built Rust APIs for a platform serving 15M users, and added automated testing with Docker-based dev environments.",
    metrics: [
      { value: "67%", label: "less desktop client memory" },
      { value: "79%", label: "end-to-end test coverage" },
    ],
    stack: ["Rust", "Tauri", "Vue", "TypeScript", "Docker"],
  },
  {
    title: "Undergraduate Teaching Assistant",
    company: "Simon Fraser University",
    location: "Burnaby, BC",
    start: "Sep 2022",
    end: "Dec 2022",
    blurb: "I led weekly CMPT 125 tutorials for 30+ students and built automated grading scripts in C++ and Python.",
    metrics: [{ value: "95%", label: "approval rating from students" }],
    stack: ["C++", "Python", "Linux"],
  },
];

export default experience;
