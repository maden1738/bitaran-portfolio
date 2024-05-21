import TeachingCard from "../components/common/TeachingCard";
import { teachingsData } from "../data/teachings";

export default function Teachings() {
  return (
    <div className="pb-10 pt-16 md:ml-[20vw] md:px-6 lg:ml-[15vw]    lg:pl-[8%] lg:pr-[15%] 2xl:pl-[15%] 2xl:pr-[25%]">
      <h1 className="mb-10 font-montserrat text-3xl font-semibold">
        Teachings
      </h1>

      {teachingsData.map((el, idx) => (
        <TeachingCard
          key={idx}
          studyMaterial={el.studyMaterial}
          college={el.college}
          from={el.from}
          to={el.to}
          position={el.position}
          subjects={el.subjects}
          link={el.link}
        />
      ))}
    </div>
  );
}
