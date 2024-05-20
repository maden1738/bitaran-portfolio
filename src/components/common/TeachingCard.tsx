type teachingCardProps = {
  college: string;
  position: string;
  from: number;
  to: number | "Present";
  subjects: string[];
  link: string;
};

export default function TeachingCard({
  college,
  position,
  from,
  to,
  subjects,
  link,
}: teachingCardProps) {
  return (
    <div className=" group  max-w-[70ch] rounded-lg border border-gray-200 p-8 hover:bg-gray-50 hover:shadow-lg ">
      <div className="flex items-center justify-between">
        <div>
          <a href={link} target="_blank" rel="noreferrer noopener">
            <h2 className="font-montserrat text-2xl font-medium text-text underline-offset-4 hover:text-accent group-hover:underline">
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
      <div className="mt-4 flex flex-wrap justify-center gap-3">
        {subjects.map((subject, idx) => (
          <div
            key={idx}
            className=" cursor-default rounded-lg bg-primary px-2 py-1 font-source text-sm text-text2"
          >
            {subject}
          </div>
        ))}
      </div>
    </div>
  );
}
