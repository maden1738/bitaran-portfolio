export type Research = {
  id: number;
  title: string;
  author: string[];
  publication?: string;
  pdf?: string;
  year: number;
  to: string;
  description: string;
};

export const researchData: Research[] = [
  {
    id: 0,
    title: "Unemployment insurance generosity and crime",
    author: ["Hamid NoghaniBehambari", "Bitaran Jang Maden"],
    publication: "Applied Economics Letters ",
    year: 2020,
    to: "/research1",
    pdf: "https://www.tandfonline.com/doi/pdf/10.1080/13504851.2020.1798337?casa_token=zUfxgbSi_SQAAAAA:uhNpvpNc-10tkIfeEKJALM24hKbwhtPE3aDND-Z83bw5Pe-hXWX9aLL-eG31nJcGbqHWKtpLolWr",
    description:
      "Previous studies show that unemployment has a positive effect on crime rates; however, unemployment insurance (UI) benefits could mitigate these effects. Using county-level unemployment and crime data and taking advantage of the UI law changes across states and over time (1990-2016), we provide new evidence that the UI benefits act as a buffer against local labor market shocks. A one-standard-deviation increase in benefits is associated with 2.4% and 1.9% lower property and violent crime rates for a county at average unemployment.",
  },
  {
    id: 1,
    title: "Addressing Price Puzzle- SVAR, FAVAR and SVEC Approach ",
    author: ["Bitaran Jang Maden"],
    year: 2021,
    to: "/research2",
    description:
      "Price puzzle is an anomaly in empirical VAR analysis that suggest an increase in output and inflation in response to a contractionary monetary policy (rising interest rates). In order to study the effects of monetary policy on output and inflation, I use three different model setups - a SVAR with Cholseki decompsition, Factor-Augmented VAR model (with three factors) and a Vector Error Correction(VEC) model. The SVAR with Choleski decomposition as suggested in the literature shows that there is a significant price puzzle problem. Hence, we see that both output and inflation rises in response to a contractionary monetary policy. Results from FAVAR model suggests that it is a signifiacant improvement over the SVAR model as it suppresses the responses of the output and inflation and produces IRFs which are closer to the theoretical models. This result is similar to the results of Bernanke et al. (2005). Finally, I use a Vector Error Correction (VEC) model approach to model the effects of a contractionary monetary policy. I use GDP growth, trade openness, inflation, exchange rate and federal funds rate in the VEC model. The results demonstrate that imposing restrictions using a long-run cointegrating relationship can resolve the price puzzle problem. The GDP and inflation drops in response to the rising interest rates. This result is similar to Krusec (2010). However, the difference is that Krusec (2010) uses a three variable in his model while I consider the effects of exchange and trade openness along with other variables. Inclusion of trade openness and exchange is crucial as we are trying to build the response of inflation and output. In doing so, I find two long run-cointegrating relationship among the variable as opposed to Krusec (2010)’s one. And the restrictions in the model changes. However, we come to similar conclusion that the considering a long run cointegrating VAR model solves the anomaly of the price puzzle",
  },
  {
    id: 2,
    title:
      "The effect of monetary policy tightening on inflation an estimated DSGE model with cost channel",
    author: ["Bitaran Jang Maden"],
    year: 2021,
    to: "/research3",
    description:
      "This paper simulates of the supply side effect of monetary policy using cost channel in a New Keynesian business cycle model. I use a standard DSGE framework based on Smets & Wouters (2003) to model the effect of a contractionary monetary shock on inflation. I introduce a cost channel through Rabanal (2007) forcing some proportion of firms to borrow in order to make the wage payments. This setup increases the marginal cost following a contractionary monetary policy. This increased marginal cost puts upward pressure on inflation. I use two sample periods for estimation- pre-recession (Jan 1980-Dec 2008), and post-recession (Jan 2008- Sep 2020). In doing so, I control for the post recession interest rates- often argued to be in the zero lower bound (ZLB) regime. The estimation results from pre- and post-recession data suggests that for both time frames, the demand side effects are stronger than the supply side. Hence, the cost channel is not significant enough for the supply side to dominate the demand side. Thus, prices must fall in response to a rise in interest rates. It should also be noted that estimates suggested that the proportion of firms subject to cost channel is small for both data sets. As part of robustness check, I restrict all firms to be subject to the cost channel and it can be concluded that even with those restrictions, the supply side effects through cost channel approach was not significant enough to produce an increased prices in response to a contractionary monetary policy.",
  },
];
