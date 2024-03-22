import type {Metadata} from "next";
import {Raleway as ralewayGoogleFont} from "next/font/google";
import localFont from "next/font/local";
import "@/styles/globals.css";


const inter = ralewayGoogleFont({
  subsets: ["latin"],
  style: ["italic"],
  weight: "300",
  variable: "--font-raleway",
});

const bergamasco = localFont({
  src: [
    {
      path: "../../public/fonts/Bergamasco Thin.ttf",
      weight: "100",
    },
    {
      path: "../../public/fonts/Bergamasco Light.ttf",
      weight: "300",
    },
    {
      path: "../../public/fonts/Bergamasco Semibold.ttf",
      weight: "600",
    },
  ],
  variable: "--font-bergamasco",
});

const mak = localFont({
  src: [
    {
      path: "../../public/fonts/Mak.otf",
      weight: "100",
    },
  ],
  variable: "--font-mak",
});

export const metadata: Metadata = {
  title: "Відео-фотографиня | Маргарита Ткачук",
  description: "-----------",
};

/**
 * A layout is UI that is shared between routes.
 * @param {children} Layout components should accept and use a
 * children prop. During rendering,
 * children will be populated with the route
 * segments the layout is wrapping. These will primarily be the
 * component of a child Layout (if it exists) or Page,
 * but could also be other special files like Loading
 * or Error when applicable.
 * @return {JSX.Element}
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <body className={`${inter.variable} 
            ${bergamasco.variable} ${mak.variable}`}>
        {children}
      </body>
    </html>
  );
}
