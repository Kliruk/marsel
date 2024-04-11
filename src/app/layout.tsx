import type {Metadata} from "next";
// import {Raleway as ralewayGoogleFont} from "next/font/google";
// import localFont from "next/font/local";
import {raleway, bergamasco, mak} from "@/utils/fonts";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Відео-фотографиня · Маргарита Ткачук",
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
      <body className={`${raleway.className} 
            ${bergamasco.variable} ${mak.variable}`}>
        {children}
      </body>
    </html>
  );
}
