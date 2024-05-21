import { Link } from "react-router-dom";

type subject = {
  name: string;
  semester?: string;
  level?: string;
};

type teachingCardProps = {
  studyMaterial: boolean;
  college: string;
  position: string;
  from: number;
  to: number | "Present";
  subjects: subject[];
  link: string;
};

export default function TeachingCard({
  college,
  position,
  from,
  to,
  subjects,
  link,
  studyMaterial,
}: teachingCardProps) {
  return (
    <div className=" group  mb-6 rounded-lg border border-gray-200 px-10 py-6 hover:bg-gray-50 hover:shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <a href={link} target="_blank" rel="noreferrer noopener">
            <h2 className="font-montserrat text-2xl font-medium text-text2  hover:text-accent ">
              {college}
            </h2>
          </a>
          <h3 className="mt-1 font-montserrat font-medium text-accent">
            {position}
          </h3>
        </div>
        <div className="font-montserrat text-text">
          {from} - {to}
        </div>
      </div>
      <ul className="text mt-2 list-disc pl-4 font-source  text-text">
        {subjects.map((subject, idx) => (
          <li key={idx}>
            {studyMaterial ? (
              <Link to={subject.name}>
                <span className="text-lg hover:text-accent">
                  {subject.name}
                </span>
              </Link>
            ) : (
              <span className="text-lg">{subject.name}</span>
            )}
            <span className="pl-4">
              <span className="  pr-2 text-text2">{subject.level}</span>
              <span className=" text-text2">{subject.semester}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
