import {Header, AboutMe, Portfolio,
  Services, Advantages} from "@/components";
import React from "react";

/**
 * Home Page of the Application
 * @return {JSX.Element}
 */
export default function Home(): JSX.Element {
  return (
    <>
      <Header />
      <AboutMe />
      <Advantages />
      <Portfolio />
      <Services />
    </>
  );
}
