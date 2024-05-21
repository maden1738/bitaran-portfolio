import { Link } from "react-router-dom";
import { researchData } from "../../data/research";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

type OtherResearchProps = { id: number };

export default function OtherResearch({ id }: OtherResearchProps) {
  return (
    <div className="w-[600px]  pr-4">
      <h2 className=" font-montserrat text-2xl font-medium ">
        Other Researches:
      </h2>
      <div className="mt-4 ">
        {researchData
          .filter((el) => el.id !== id)
          .map((data, idx) => (
            <h3
              key={idx}
              className="flex items-center gap-4 pb-5 font-source font-medium  text-text2 hover:text-accent hover:underline hover:underline-offset-4"
            >
              <span>
                <MdOutlineKeyboardArrowRight className="text-text" />
              </span>
              <Link to={data.to}>{data.title}</Link>
            </h3>
          ))}
      </div>
    </div>
  );
}
