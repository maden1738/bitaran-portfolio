import { NavLink } from "react-router-dom";
import { iconsData } from "../../icons";
import { IoMail } from "react-icons/io5";
import { PiNewspaperClippingFill } from "react-icons/pi";
import resume from "../../assets/bitaran resume.pdf";

export default function Navbar() {
  return (
    <div className="fixed  flex h-screen flex-col  items-center justify-between bg-primary py-10 md:w-[20vw] lg:w-[15vw]">
      <div className=" font-montserrat text-sm text-text2 ">
        <div className="mt-2 flex items-center gap-1">
          <PiNewspaperClippingFill className="text-text" />
          <a
            href={resume}
            target="_blank"
            className=" underline underline-offset-2  hover:text-accent"
          >
            My Resume
          </a>
        </div>
        <div className="mt-2 flex items-center gap-1">
          <IoMail className="text-text" />
          <p className="cursor-text">maden@uh.edu</p>
        </div>
      </div>
      <nav className="flex   flex-col  items-center justify-center  text-text2">
        <ul className="font-source flex flex-col gap-6  text-center text-lg">
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
      <div className="flex w-fit justify-center gap-1 text-3xl text-black lg:gap-2 xl:gap-3 2xl:gap-5">
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
