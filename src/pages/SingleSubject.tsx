import { useParams } from "react-router-dom";
import { subject } from "../data/studyMaterial";
import StudyMaterial from "../components/common/StudyMaterial";
import Assignments from "../components/common/Assignments";

type material = {
  name: string;
  fileName: string[]; // store pdfs in src/assets/study materials
};

type subjectType = {
  name: string;
  material: material[];
};

export default function SingleSubject() {
  const { slug } = useParams();

  const search = (subjectArr: subjectType[], subjectName: string) => {
    for (let i = 0; i < subjectArr.length; i++) {
      if (subjectArr[i].name === subjectName) {
        return subjectArr[i].material;
      }
      return null;
    }
  };

  if (slug) {
    let studyMaterial = search(subject, slug);
    return (
      <div className=" pb-10 pl-[8%] pr-[12%] pt-16 md:ml-[20vw] md:px-6 lg:ml-[15vw] lg:pl-[8%]  lg:pr-[15%] ">
        <h1 className="mb-10 font-montserrat text-2xl font-semibold">{slug}</h1>
        <div className="flex">
          <Assignments />
          <div>
            {studyMaterial ? (
              studyMaterial.map((material, idx) => (
                <StudyMaterial
                  key={idx}
                  name={material.name}
                  fileName={material.fileName}
                />
              ))
            ) : (
              <div className="flex h-full flex-col items-center justify-center font-source  text-xl text-accent">
                <p>Nothing has been uploaded for this subject</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
