type Social = {
  label: string;
  link: string;
};

type Presentation = {
  name: string;
  mail: string;
  location: string;
  role: string;
  intro: string;
  about: string[];
  offClock: string;
  resume: string;
  education: {
    institution: string;
    degree: string;
    location: string;
    graduated: string;
    coursework: string[];
  };
  skills: { label: string; items: string[] }[];
  socials: Social[];
};

const presentation: Presentation = {
  name: "Aarham Haider",
  mail: "aarham.haider@gmail.com",
  location: "Vancouver, BC",
  role: "Software Engineer at Harris Computer",
  intro:
    "I build the billing platform, test infrastructure, and LLM agent pipelines that a utility billing team ships with every day.",
  about: [
    "I’m most interested in backend development, distributed systems and infrastructure, AI/ML, and databases: the parts of a system that have to stay correct and fast as it grows. Most of my work is in Go and Rust, and I still enjoy writing Haskell for fun.",
  ],
  offClock: "Apart from software, I’m usually listening to classical music, playing video games, cooking, working out, or playing basketball.",
  resume: "https://docsend.com/v/ywyxn/aarham-haider-resume",
  education: {
    institution: "Simon Fraser University",
    degree: "B.Sc. Computer Science",
    location: "Burnaby, BC",
    graduated: "May 2026",
    coursework: [
      "Data Structures and Algorithms",
      "Database Systems",
      "Object-Oriented Programming",
      "Linear Algebra",
    ],
  },
  skills: [
    { label: "Languages", items: ["Go", "Rust", "TypeScript", "Python", "SQL", "C++", "C#", "Java"] },
    {
      label: "Backend and frameworks",
      items: ["GraphQL", "gRPC", "REST", "Tokio", "React", "Next.js", "ASP.NET", "Tauri"],
    },
    {
      label: "AI and ML",
      items: ["LLM agents", "Model Context Protocol", "RAG", "LLM evals", "LangChain", "PyTorch", "TensorFlow"],
    },
    {
      label: "Cloud and DevOps",
      items: ["Docker", "Kubernetes", "Azure", "AWS", "GitHub Actions", "Linux", "Git"],
    },
    {
      label: "Data and testing",
      items: ["PostgreSQL", "SQL Server", "SQLite", "Redis", "Playwright", "Jest"],
    },
  ],
  socials: [
    { label: "GitHub", link: "https://github.com/AarhamH" },
    { label: "LinkedIn", link: "https://ca.linkedin.com/in/aarham-haider-5a0a4a1bb" },
  ],
};

export default presentation;
