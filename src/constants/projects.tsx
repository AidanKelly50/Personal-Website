import { CalendarDays, Code2, Earth, Grid2x2Check } from "lucide-react";

export interface Skill {
  title: string;
  icon: React.ReactElement;
  description: string;
  tech: string[];
  link?: string;
  repo?: string;
}

export const projects = [
  {
    title: "Northeastern Schedule Generator",
    icon: <CalendarDays size={28} className="text-primary mr-auto" />,
    description:
      "Generates all possible class schedules for NU students with breaks and section choices.",
    tech: ["Python", "Typescript", "React", "FastAPI"],
    link: "nu-schedule-generator.aidanjkelly.com",
    repo: "https://github.com/AidanKelly50/NUScheduleMaker",
  },
  {
    title: "EuroTour Web App",
    icon: <Earth size={28} className="text-primary" />,
    description:
      "Machine Learning web app to help users determine which countries in Europe to travel to based on their preferences.",
    tech: ["Python", "MySQL", "Streamlit", "Pandas"],
    repo: "https://github.com/swbehan/EuroTour",
  },
  {
    title: "Automated Quordle Solver",
    icon: <Grid2x2Check size={28} className="text-primary" />,
    description: "Uses web automation to automatically solve Merriam Webster Quordle games.",
    tech: ["Python", "Selenium"],
    repo: "https://github.com/AidanKelly50/AutomatedQuordleSolver",
  },
];
