import Article from "../components/common/Article";
import OtherResearch from "../components/common/OtherResearch";
import { researchData } from "../data/research";

const ID = 1;
const data = researchData[ID];

export default function Research2() {
  return (
    <div className="flex flex-col items-center md:ml-[20vw] lg:ml-[15vw]">
      <Article
        id={ID}
        title={data.title}
        author={data.author}
        publication={data.publication}
        description={data.description}
        year={data.year}
        to={data.to}
      />
      <OtherResearch id={ID} />
    </div>
  );
}
