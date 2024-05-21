import { FaGreaterThan } from "react-icons/fa";

type StudyMaterialProps = {
  name: string;
  fileName: string[]; // store pdfs in public directory
};

export default function StudyMaterial({ name, fileName }: StudyMaterialProps) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <FaGreaterThan className="text-xs font-light text-text2" />
      <div>
        <h3 className=" font-montserrat text-xl font-medium text-text">
          {name}
        </h3>
        {fileName.map((name, idx) => (
          <a
            key={idx}
            href={`/${name}`}
            target="_blank"
            className="pr-3 font-source text-sm text-text2 underline underline-offset-2 hover:text-accent"
          >
            {name}
          </a>
        ))}
      </div>
    </div>
  );
}
