import { Link } from "react-router-dom";
import { researchData } from "../../research";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

type OtherResearchProps = { id: number };

export default function OtherResearch({ id }: OtherResearchProps) {
  return (
    <div className=" w-[600px]">
      <h2 className=" font-montserrat text-2xl font-medium ">
        Other Researches:
      </h2>
      <div className="mt-4 ">
        {researchData
          .filter((el) => el.id !== id)
          .map((data) => (
            <h3 className="font-source flex items-center gap-4 pb-5 font-medium  text-text2 hover:text-accent hover:underline hover:underline-offset-4">
              <span>
                <MdOutlineKeyboardArrowRight />
              </span>
              <Link to={data.to}>{data.title}</Link>
            </h3>
          ))}
      </div>
    </div>
  );
}
