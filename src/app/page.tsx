import {Header, AboutMe, Portfolio,
  Services, Advantages} from "@/components";
import React from "react";
import Reviews from "@/components/Reviews";

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
      <Reviews />
    </>
  );
}
