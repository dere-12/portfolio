import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiHtml5,
  DiCss3,
  DiGit,
  DiPython,
  DiGithub,
} from "react-icons/di";
import { SiPostgresql, SiRedux, SiWebpack } from "react-icons/si";

export const allSkills = [
  { name: "HTML5", icon: DiHtml5, category: "frontend" },
  { name: "CSS3", icon: DiCss3, category: "frontend" },
  { name: "JavaScript (ES6+)", icon: DiJavascript1, category: "frontend" },
  { name: "React", icon: DiReact, category: "frontend" },
  { name: "Redux", icon: SiRedux, category: "frontend" },
  { name: "Node.js", icon: DiNodejs, category: "backend" },
  { name: "Express.js", icon: DiNodejs, category: "backend" },
  { name: "Python", icon: DiPython, category: "backend" },
  { name: "MongoDB", icon: DiMongodb, category: "database" },
  { name: "PostgreSQL", icon: SiPostgresql, category: "database" },
  { name: "Git", icon: DiGit, category: "tools" },
  { name: "GitHub", icon: DiGithub, category: "tools" },
  { name: "Webpack", icon: SiWebpack, category: "tools" },
];
