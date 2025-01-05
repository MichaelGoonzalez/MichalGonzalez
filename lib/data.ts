import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Diplomado en Desarrollo de Software",
    location: "Universidad Tecnologica de Pereira | Ministerio de Tecnologias",
    description:
      "Formación ofrecida por el Ministerio de Tecnologías y la Universidad Tecnológica de Pereira, complementada con varios ciclos de estudio y práctica. Además, reforcé mis habilidades mediante aprendizaje autodidacta, lo que me permitió comenzar a trabajar.",
    icon: React.createElement(LuGraduationCap),
    date: "2020 2022",
  },
  {
    title: "Ingenieria De Sistemas Y Computacion",
    location: "Universidad Tecnologica de Pereira",
    description:
      "Carrera que he continuado mientras trabajo en diversos proyectos, impulsado por mi interés en profundizar en la tecnología, una de mis grandes pasiones. He participado en semilleros de investigación y Game Jams de programación de videojuegos organizados por la universidad.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - present",
  },
  {
    title: "S.A.F",
    location: "Full-Stack Developer",
    description:
      "Me ocupé del mantenimiento y correcto funcionamiento de la aplicación de la empresa, trabajando en el desarrollo tanto del backend como del frontend. Diseñé soluciones eficientes para satisfacer los requerimientos de la lógica de negocio y las necesidades de la organización.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "IPSERVICES",
    location: "Front-End Developer",
    description:
      "En mi rol en la empresa, gestioné operaciones y satisfice los requerimientos de la organización y sus clientes. Mi principal responsabilidad fue garantizar la calidad del software en diversos proyectos, asegurando tanto su funcionalidad como su estética. Diseñé y desarrollé soluciones innovadoras y páginas web atractivas y eficientes para clientes como Ecopetrol, Fenalco, Movistar Arena, Colsubsidio y KataSoftware, entre otros contribuyendo al éxito de sus eventos y proyectos con soluciones interactivas clave.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "TypeScript",
  "Javascript",
  "Python",
  "PHP",
  "C C# C++",

  "React",
  "Next.js",
  "Node.js",
  "Angular",
  "Laravel",

  "PostgreSql",
  "SQL",
  "MongoDb"
] as const;
