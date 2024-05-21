type material = {
  name: string;
  fileName: string[]; // store pdfs in public directory // note that the file name will be the name shown so rename files accrodingly
};

type subject = {
  name: string;
  material: material[];
};

export const subject: subject[] = [
  {
    name: "Time-series Econometrics",
    material: [
      {
        name: "Nonstationary Time Series",
        fileName: ["Nonstationarity.pdf"],
      },
    ],
  },
];
