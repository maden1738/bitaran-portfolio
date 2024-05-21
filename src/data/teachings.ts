type subject = {
  name: string;
  semester?: string;
  level?: string;
};

type teachings = {
  studyMaterial: boolean;
  college: string;
  position: string;
  from: number;
  to: number | "Present";
  subjects: subject[];
  link: string;
};

export const teachingsData: teachings[] = [
  {
    studyMaterial: true,
    college: "University of Houston",
    position: "Instructional Assistant Professor",
    from: 2023,
    to: "Present",
    subjects: [
      {
        name: "Principles of Macroeconomics",
        level: "Undergraduate",
        semester: "I/I",
      },
      {
        name: "Financial Economics",
        level: "Undergraduate",
        semester: "I/I",
      },
      {
        name: "Time-series Econometrics",
        level: "Graduate (Masters)",
        semester: "I/I",
      },
    ],
    link: "https://www.uh.edu/",
  },
  {
    studyMaterial: false,
    college: "Allegheny College",
    position: "Visiting Assistant Professor",
    from: 2022,
    to: 2023,
    subjects: [
      { name: "Intro to Macro" },
      { name: "Applied Economic Statistics" },
    ],
    link: "https://allegheny.edu/",
  },
  {
    studyMaterial: false,
    college: "Texas Tech University",
    position: "Graduate Part Time Instructor",
    from: 2019,
    to: 2022,
    subjects: [
      { name: "Principles of Microeconomics" },
      { name: "Principles of Macroeconomics" },
      { name: "Intermediate Macroeconomics" },
      { name: "Principles of Economics" },
    ],
    link: "https://www.ttu.edu/",
  },
  {
    studyMaterial: false,
    college: "Texas Tech University",
    position: "Graduate Teaching Assistant",
    from: 2016,
    to: 2018,
    subjects: [
      { name: "Principles of Microeconomics" },
      { name: "Principles of Macroeconomics" },
      { name: "Intermediate Macroeconomics" },
      { name: "Principles of Economics" },
    ],
    link: "https://www.ttu.edu/",
  },
];
