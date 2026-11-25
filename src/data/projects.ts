import piano from "../content/images/piano.png";
import chamber from "../content/images/chamber.png";
import reggie from "../content/images/reggie-fsm.jpg";
import lambda from "../content/images/lambda.png";

export type Project = {
  title: string;
  techs: string[];
  link: string;
  year: string;
  tagline?: string;
  summary?: string;
  note?: string;
  image?: { src: string; width: number; height: number; alt: string; fit: "logo" | "cover" | "contain"; background: string };
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "chamber",
    note: "a concurrent rust core, decoupled from the UI",
    tagline: "Concurrent audio toolkit",
    summary:
      "One lightweight desktop app for five media workflows. A concurrent, non-blocking Rust processing core does the heavy work, decoupled from the TypeScript interface so the UI stays responsive.",
    techs: ["Rust", "TypeScript", "Tauri", "SQLite"],
    link: "https://github.com/AarhamH/chamber",
    year: "2024",
    featured: true,
    image: { src: chamber, width: 426, height: 293, alt: "chamber logo, a striped cube above the word chamber", fit: "logo", background: "#09090b" },
  },
  {
    title: "reggie",
    note: "zero dependencies, built from automata theory",
    tagline: "Regular expression engine",
    summary:
      "A dependency-free regex engine built from first principles. reggie compiles patterns into nondeterministic finite automata and runs them on its own runtime.",
    techs: ["Go"],
    link: "https://github.com/AarhamH/reggie",
    year: "2024",
    featured: true,
    image: {
      src: reggie,
      width: 2266,
      height: 1488,
      alt: "Hand-drawn NFA with four states, q0 to q3, and labelled transitions including an epsilon move",
      fit: "cover",
      background: "#0a0a0b",
    },
  },
  {
    title: "MyPiano",
    note: "plays right in the browser",
    tagline: "Browser piano with recording",
    summary:
      "Play from your keyboard, record with sustain and a metronome, then replay or download saved takes. Accounts use JWT authentication backed by an ASP.NET API and PostgreSQL.",
    techs: ["C#", "ASP.NET", "Vue", "PostgreSQL", "Docker"],
    link: "https://github.com/AarhamH/MyPiano",
    year: "2023",
    featured: true,
    image: {
      src: piano,
      width: 2560,
      height: 1248,
      alt: "MyPiano interface with a keyboard, record, sustain and metronome toggles, and a table of recorded songs",
      fit: "contain",
      background: "#171717",
    },
  },
  {
    title: "happy(lang)",
    note: "a lisp, written in haskell",
    tagline: "A verbose, expressive Lisp",
    techs: ["Haskell", "Lisp"],
    link: "https://github.com/AarhamH/happylang",
    year: "2024",
    featured: true,
    image: {
      src: lambda,
      width: 2480,
      height: 2556,
      alt: "happy(lang) logo, a lambda symbol made of laughing-face emoji",
      fit: "contain",
      background: "#09090b",
    },
  },
  {
    title: "Multithread Chat Program",
    tagline: "Terminal chat over UDP sockets",
    techs: ["C", "Linux", "Pthreads", "UDP"],
    link: "https://github.com/AarhamH/multithread-chat-cli",
    year: "2023",
  },
  {
    title: "MVVM Music Player",
    techs: ["C#", "WPF", "Entity Framework Core", "SQLite", "NUnit"],
    link: "https://github.com/AarhamH/MVVM-MusicPlayer",
    year: "2023",
  },
  {
    title: "NBA Quicksearch",
    techs: ["JavaScript", "React Native", "Expo"],
    link: "https://github.com/AarhamH/NBA-Quicksearch",
    year: "2023",
  },
  {
    title: "MenuMap",
    techs: ["JavaScript", "React", "Jest", "Netlify"],
    link: "https://github.com/AarhamH/MenuMap",
    year: "2023",
  },
  {
    title: "Portfolio",
    techs: ["Astro", "TypeScript"],
    link: "https://github.com/AarhamH/aarhamh.github.io",
    year: "2023",
  },
  {
    title: "Travelling Salesman Solver",
    techs: ["C++"],
    link: "https://github.com/AarhamH/tsp-solver",
    year: "2022",
  },
  {
    title: "Image Editor",
    techs: ["Python", "Pygame", "NumPy"],
    link: "https://github.com/AarhamH/python-image-manipulator",
    year: "2021",
  },
];

export const byYear = (list: Project[]) => [...list].sort((a, b) => Number(b.year) - Number(a.year));

export default projects;
