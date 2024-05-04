import { Link, NavLink } from "react-router-dom";
import {
  FaEnvelope,
  FaGraduationCap,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="fixed  h-screen bg-primary md:w-[20vw] lg:w-[15vw]">
      <nav className="flex  h-full flex-col  items-center justify-center pb-20  text-text2">
        <ul className="font-barlowCondensed flex flex-col gap-6  text-center text-lg">
          <li className="hover-underline-animation">
            <NavLink
              to="/"
              className={({ isActive }) => {
                return isActive ? "text-accent " : "";
              }}
            >
              Biography
            </NavLink>
          </li>
          <li className="hover-underline-animation">
            <NavLink
              to="/research"
              className={({ isActive }) => {
                return isActive ? "text-accent " : "";
              }}
            >
              Research
            </NavLink>
          </li>
          <li className="hover-underline-animation">
            <NavLink
              to="/teachings"
              className={({ isActive }) => {
                return isActive ? "text-accent " : "";
              }}
            >
              Teachings
            </NavLink>
          </li>
          <li className="hover-underline-animation">
            <NavLink
              to="/contact"
              className={({ isActive }) => {
                return isActive ? "hover: text-accent" : "";
              }}
            >
              Contact me
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="absolute bottom-10 flex w-full justify-center gap-1 text-2xl text-black lg:gap-2 xl:gap-3 2xl:gap-5">
        <Link to="/contact">
          <FaEnvelope className="hover:text-accent" />
        </Link>
        <a
          href="https://www.linkedin.com/in/bitaran-maden-23333795/ "
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaLinkedin className="hover:text-accent" />
        </a>
        <a
          href="https://scholar.google.com/citations?user=LIQwuRoAAAAJ"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaGraduationCap className="hover:text-accent" />
        </a>
        <a
          href="https://github.com/Bitaran"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaGithub className="hover:text-accent" />
        </a>
      </div>
    </div>
  );
}
