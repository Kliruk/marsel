// import {Raleway as ralewayGoogleFont} from "next/font/google";
import localFont from "next/font/local";

// const raleway = ralewayGoogleFont({
//   subsets: ["latin"],
//   style: ["italic"],
//   weight: "300",
//   variable: "--font-base",
// });

const raleway = localFont({
  src: [
    {
      path: "../../public/fonts/Raleway-LightItalic.ttf",
      weight: "300",
    },
  ],
  variable: "--font-basic"}
);

const bergamasco = localFont({
  src: [
    {
      path: "../../public/fonts/bergamasco/Bergamasco Thin.ttf",
      weight: "100",
    },
    {
      path: "../../public/fonts/bergamasco/Bergamasco Light.ttf",
      weight: "300",
    },
    {
      path: "../../public/fonts/bergamasco/Bergamasco Semibold.ttf",
      weight: "600",
    },
  ],
  variable: "--font-header",
});

const mak = localFont({
  src: [
    {
      path: "../../public/fonts/Mak.otf",
      weight: "100",
    },
  ],
  variable: "--font-accent",
});

export {raleway, bergamasco, mak};
