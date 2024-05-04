import { NavLink } from "react-router-dom";
import { iconsData } from "../icons";

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
        </ul>
      </nav>
      <div className="absolute flex w-full justify-center gap-1 text-3xl text-black lg:bottom-3 lg:gap-2 xl:bottom-10 xl:gap-3 2xl:gap-5">
        {iconsData.map((icon, idx) => (
          <a
            key={idx}
            href={icon.href}
            target="_blank"
            rel="noreferrer noopener"
          >
            {
              <icon.icon className="transition-all duration-75 ease-in hover:-translate-y-1 hover:text-accent " />
            }
          </a>
        ))}
      </div>
    </div>
  );
}
