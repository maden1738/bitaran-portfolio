import { IconType } from "react-icons";
import { FaGithub, FaGraduationCap, FaLinkedin } from "react-icons/fa";

interface iconsData {
  icon: IconType;
  href: string;
}

export const iconsData: iconsData[] = [
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/bitaran-maden-23333795/",
  },
  {
    icon: FaGraduationCap,
    href: "https://scholar.google.com/citations?user=LIQwuRoAAAAJ",
  },
  {
    icon: FaGithub,
    href: "https://github.com/Bitaran",
  },
];
