import TeachingCard from "../components/common/TeachingCard";
import { teachingsData } from "../data/teachings";

export default function Teachings() {
  return (
    <div className="px-[8%] pb-10 pt-16 md:ml-[20vw]  lg:ml-[15vw]">
      <h1 className="mb-10 font-montserrat text-3xl font-semibold">
        Teachings
      </h1>
      <div className="grid  gap-8 2xl:grid-cols-2 2xl:gap-4">
        {teachingsData.map((el, idx) => (
          <TeachingCard
            key={idx}
            college={el.college}
            from={el.from}
            to={el.to}
            position={el.position}
            subjects={el.subjects}
            link={el.link}
          />
        ))}
      </div>
    </div>
  );
}
