type teachings = {
  college: string;
  position: string;
  from: number;
  to: number | "Present";
  subjects: string[];
  link: string;
};

export const teachingsData: teachings[] = [
  {
    college: "University of Houston",
    position: "Instructional Assistant Professor",
    from: 2023,
    to: "Present",
    subjects: ["Intro to Macro", "Applied Economic Statistics"],
    link: "https://www.uh.edu/",
  },
  {
    college: "Allegheny College",
    position: "Visiting Assistant Professor",
    from: 2022,
    to: 2023,
    subjects: ["Intro to Macro", "Applied Economic Statistics"],
    link: "https://allegheny.edu/",
  },
  {
    college: "Texas Tech University",
    position: "Graduate Part Time Instructor",
    from: 2019,
    to: 2022,
    subjects: [
      "Principles of Microeconomics",
      "Principles of Macroeconomics",
      "Intermediate Macroeconomics",
      "Principles of Economics",
    ],
    link: "https://www.ttu.edu/",
  },
  {
    college: "Texas Tech University",
    position: "Graduate Teaching Assistant",
    from: 2016,
    to: 2018,
    subjects: [
      "Principles of Microeconomics",
      "Principles of Macroeconomics",
      "Intermediate Macroeconomics",
      "Principles of Economics",
    ],
    link: "https://www.ttu.edu/",
  },
];
