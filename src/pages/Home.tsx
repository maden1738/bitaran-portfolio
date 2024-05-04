import React from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/bitaran.jpeg";
import {
  FaEnvelope,
  FaGraduationCap,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function Home() {
  return (
    <>
      <div className="fixed  h-screen bg-primary md:w-[20vw] lg:w-[15vw]">
        <nav className="flex  h-full flex-col  items-center justify-center pb-20  text-text2">
          <ul className="flex flex-col gap-6 pr-4 text-lg">
            <li className="hover-underline-animation">
              <Link to="/">Biography</Link>
            </li>
            <li className="hover-underline-animation">
              <Link to="/research">Research</Link>
            </li>
            <li className="hover-underline-animation">
              <Link to="/teachings">Teachings</Link>
            </li>
            <li className="hover-underline-animation">
              <Link to="/contact">Contact me</Link>
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
      <div className="relative  ml-[15vw] grid h-screen grid-cols-2 gap-6 px-[5%] font-helvetica text-text">
        <div className="absolute bottom-10 right-[10%] text-text2 underline underline-offset-4 hover:text-accent ">
          My Resume
        </div>
        <div className="my-auto flex flex-col items-center justify-self-center">
          <img
            src={avatar}
            alt=""
            className="aspect-square h-[300px] rounded-full object-cover lg:h-[250px]"
          />
          <h1 className="mt-4 text-4xl font-semibold ">Bitaran Jang Maden</h1>
          <h2 className="mt-2 text-center text-2xl font-light text-text2">
            Professor
          </h2>
          <a
            href="https://www.uh.edu/"
            target="_blank"
            rel="noreferrer noopener"
            className="hover-underline-animation my-auto mt-1 text-center text-xl font-light text-accent"
          >
            University of Houston
          </a>
        </div>

        <div className="my-auto">
          <h1 className="text-4xl font-semibold">Biography</h1>
          <p className="mt-7 max-w-[50ch] text-lg text-text2">
            <span className="font-semibold">Bitaran Jang Maden </span>
            is a Visiting Assistant Professor of economics at the Allegheny
            College. His research interests include monetary economics,
            time-series econometrics and applied macroeconomics. He has worked
            as Graduate Part-Time Insturctor and teaching assistant for various
            faculty at Texas Tech University.
          </p>
        </div>
      </div>
    </>
  );
}
