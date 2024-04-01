import {Navbar, Header, AboutMe, Portfolio, Services, Advantages, Contacts} from "@/components";
import React from "react";

/**
 * Home Page of the Application
 * @return {JSX.Element}
 */
export default function Home(): JSX.Element {
  return (
    <>
      <Navbar />
      <Header />
      <AboutMe />
      <Advantages />
      <Portfolio />
      <Services />
      <Contacts />
    </>
  );
}
