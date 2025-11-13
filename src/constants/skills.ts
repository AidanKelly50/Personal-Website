type SkillType = "language" | "stack" | "tool";

export interface Skill {
  name: string;
  type: SkillType;
}

// Reminder when adding: Put in the order you want them to show up.
export const skills: Skill[] = [
  { name: "Python", type: "language" },
  { name: "Typescript", type: "language" },
  { name: "Javascript", type: "language" },
  { name: "Java", type: "language" },
  { name: "SQL", type: "language" },
  { name: "C", type: "language" },
  { name: "HTML", type: "language" },
  { name: "CSS", type: "language" },
  { name: "Racket", type: "language" },
  { name: "Visual Basic", type: "language" },
  { name: "Assembly", type: "language" },

  { name: "React", type: "stack" },
  { name: "Tailwind", type: "stack" },
  { name: "TanStack Query", type: "stack" },
  { name: "AWS", type: "stack" },
  { name: "Pandas", type: "stack" },
  { name: "NumPy", type: "stack" },
  { name: "FastAPI", type: "stack" },
  { name: "Poetry", type: "stack" },
  { name: "Node.js", type: "stack" },
  { name: "Flask", type: "stack" },
  { name: "Bootstrap", type: "stack" },
  { name: "Selenium Web Driver", type: "stack" },
  { name: "Streamlit", type: "stack" },

  { name: "GitHub", type: "tool" },
  { name: "Visual Studio Code", type: "tool" },
  { name: "Claude", type: "tool" },
  { name: "IntelliJ", type: "tool" },
  { name: "PyCharm", type: "tool" },
  { name: "Docker", type: "tool" },
  { name: "Microsoft Excel", type: "tool" },
  { name: "Eclipse", type: "tool" },
  { name: "Linear", type: "tool" },
  { name: "Figma", type: "tool" },
  { name: "Automation Anywhere", type: "tool" },
];
