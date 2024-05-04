import avatar from "../assets/bitaran.jpeg";
import resume from "../assets/bitaran resume.pdf";

export default function Home() {
  return (
    <>
      <div className="relative  ml-[15vw] grid h-screen grid-cols-2 gap-6 px-[5%]  text-text">
        <div className="font-montserrat absolute right-[10%] flex gap-5  text-sm text-text2 lg:bottom-3 xl:bottom-10">
          <p>bitaran@gmail.com</p>
          <a
            href={resume}
            target="_blank"
            className=" underline underline-offset-2 hover:text-accent"
          >
            My Resume
          </a>
        </div>

        <div className="font-barlowCondensed my-auto flex flex-col items-center justify-self-center">
          <img
            src={avatar}
            alt=""
            className="aspect-square  rounded-full object-cover lg:h-[250px]"
          />
          <h1 className="  mt-4 text-4xl font-medium  ">Bitaran Jang Maden</h1>
          <p className="font-montserrat mt-2 text-center text-lg  text-text2">
            Professor
          </p>
          <a
            href="https://www.uh.edu/"
            target="_blank"
            rel="noreferrer noopener"
            className="font-montserrat hover-underline-animation  mt-1 text-center text-xl font-light text-accent"
          >
            University of Houston
          </a>
        </div>

        <div className="my-auto">
          <div>
            <h3 className="font-barlowCondensed text-3xl font-medium text-text">
              Biography
            </h3>
            <p className="font-montserrat mt-2 max-w-[50ch]  text-text2">
              Bitaran Jang Maden is a Visiting Assistant Professor of economics
              at the Allegheny College. His research interests include monetary
              economics, time-series econometrics and applied macroeconomics. He
              has worked as Graduate Part-Time Insturctor and teaching assistant
              for various faculty at Texas Tech University.
            </p>
          </div>
          <div className="mt-5">
            <h3 className="font-barlowCondensed text-3xl font-medium">
              Interests
            </h3>
            <ul className="font-montserrat mt-2  list-disc pl-7 text-text">
              <li className="text-text2">Monetary Economics</li>
              <li className="text-text2">Time series econometrics</li>
              <li className="text-text2">Applied macro economics</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
