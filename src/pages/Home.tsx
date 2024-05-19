import avatar from "../assets/bitaran.jpeg";

export default function Home() {
  return (
    <>
      <div className=" flex h-screen items-center justify-center  gap-8  text-text  md:ml-[15vw]  md:px-[10%] lg:ml-[20vw] lg:gap-16 lg:px-[5%]">
        <div className=" flex flex-col items-center justify-self-center font-montserrat">
          <img
            src={avatar}
            alt="picture of bitaran"
            className=" aspect-[3.3/4] h-[250px] rounded-r-xl   object-cover  shadow-lg brightness-110 lg:h-[280px] xl:h-[290px] 2xl:h-[310px] "
          />
          <h1 className="  mt-5 text-center text-2xl font-medium">
            Dr. Bitaran Jang Maden
          </h1>
          <div className=" font-source  mt-1  text-center text-lg text-text2">
            <p>Instructional Assistant Professor</p>
            <p>Department of Economics</p>
          </div>
        </div>

        <div>
          <div>
            <h3 className=" font-montserrat text-xl font-medium text-text">
              Biography
            </h3>
            <div className="font-source mt-2 max-w-[60ch]  pb-20 text-text2">
              <p>
                Dr. Bitaran Jang Maden is an Instructional Assistant Professor
                of Economics at the{" "}
                <a
                  href="https://www.uh.edu/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="underline underline-offset-1 hover:text-accent"
                >
                  {" "}
                  University of Houston
                </a>
                . With a robust academic foundation that includes a Ph.D. from
                Texas Tech University and an MBA and engineering degrees from
                Tribhuvan University, Nepal. Dr. Maden brings a wealth of
                knowledge and expertise to his field.
              </p>
              <p className="mt-2">
                His research interests span{" "}
                <span className="text-accent opacity-90">
                  monetary economics, time-series econometrics, and applied
                  macroeconomics,{" "}
                </span>
                reflecting his commitment to advancing economic understanding
                through rigorous analysis and innovative methodologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
