import { Research } from "../../data/research";

export default function Article({
  title,
  author,
  publication,
  year,
  description,
  pdf,
}: Research) {
  return (
    <div className="pb-10  pt-[6%] ">
      <main>
        <h1 className="max-w-[30ch]  font-montserrat text-3xl font-medium text-text">
          {title}
        </h1>
        <div className="mt-4 flex w-fit font-source text-sm text-text2">
          <div className="flex">
            {author.map((author, idx) => (
              <div className="flex" key={idx}>
                <p className="pr-2">{author}</p>
                <p className="pr-2 font-bold text-text2">|</p>
              </div>
            ))}
          </div>
          <div className="pr-2 text-text2">({year})</div>
          {publication && <div className="pr-2 text-text2">{publication}</div>}
        </div>
        <p className="mt-6  max-w-[70ch] font-source   text-text2">
          {description}
        </p>
        {pdf && (
          <a
            href="https://www.tandfonline.com/doi/pdf/10.1080/13504851.2020.1798337?casa_token=zUfxgbSi_SQAAAAA:uhNpvpNc-10tkIfeEKJALM24hKbwhtPE3aDND-Z83bw5Pe-hXWX9aLL-eG31nJcGbqHWKtpLolWr"
            target="_blank"
            rel="noreferrer noopener"
          >
            <button className=" mt-5 rounded-3xl bg-text px-4 py-2 text-sm text-white shadow-sm contrast-75 transition-colors duration-200 ease-out hover:bg-primary hover:text-text ">
              View Pdf
            </button>
          </a>
        )}
      </main>
    </div>
  );
}
