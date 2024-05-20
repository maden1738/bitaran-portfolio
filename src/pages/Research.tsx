import { researchData } from "../data/research";
import { Link } from "react-router-dom";

export default function Research() {
  return (
    <div className="h-screen px-[8%] pt-16 md:ml-[20vw]  lg:ml-[15vw]">
      <h1 className="mb-10 font-montserrat text-3xl font-semibold">Research</h1>
      {researchData.map((research, idx) => (
        <div className="mb-14" key={idx}>
          <h2 className="w-fit max-w-[70ch] cursor-pointer font-montserrat text-xl font-medium text-text hover:text-accent hover:underline hover:underline-offset-4">
            <Link to={research.to}>{research.title}</Link>
          </h2>
          <div className="mt-2 flex font-source  text-sm text-text2">
            <div className="flex">
              {research.author.map((author, idx) => (
                <div className="flex" key={idx}>
                  <p className="pr-2">{author}</p>
                  <p className="pr-2 font-bold text-text2">|</p>
                </div>
              ))}
            </div>
            <div className="pr-2 text-text2">({research.year})</div>
            {research.publication && (
              <div className="pr-2 text-text2">{research.publication}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
