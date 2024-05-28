/* eslint-disable max-len */
import type {Metadata} from "next";
import {raleway, bergamasco, mak} from "@/utils/fonts";
import "@/styles/globals.css";
import {Contacts, Footer, Navbar} from "@/components";

export const metadata: Metadata = {
  title: "Відео-фотографиня · Маргарита Ткачук",
  description: "Мої кадри - це поєднання технічної майстерності,естетичного сприйняття та глибокого розуміння емоцій, що робить кожен проєкт унікальним",
  authors: {
    name: "Web Elefont",
    url: "https://www.instagram.com/webelefont.blog/",
  },
  openGraph: {
    title: "Відео-фотографиня · Маргарита Ткачук",
    description: "Мої кадри - це поєднання технічної майстерності, естетичного сприйняття та глибокого розуміння емоцій, що робить кожен проєкт унікальним",
    type: "website",
    url: "",
    images: {
      url: "photo/header/header-LMargo-q10.webp",
      alt: "Фотографиня Ткачук Марго",
      type: "Photo",
      width: "6000",
      height: "4000",
    },
  },
  alternates: {
    canonical: "",
  },
  twitter: {
    card: "summary",
    title: "Відео-фотографиня · Маргарита Ткачук",
    description: "Мої кадри - це поєднання технічної майстерності, естетичного сприйняття та глибокого розуміння емоцій, що робить кожен проєкт унікальним",
    images: {
      url: "photo/header/header-LMargo-q10.webp",
      alt: "Фотографиня Ткачук Марго",
      type: "Photo",
      width: "6000",
      height: "4000",
    },
  },

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
      <body id="top" className={`${raleway.className} 
            ${bergamasco.variable} ${mak.variable}`}>
        <Navbar />
        {children}
        <Contacts />
        <Footer />
      </body>
    </html>
  );
}
