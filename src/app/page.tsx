import AboutMe from "@/components/AboutMe";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
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
      <Portfolio />
    </>
  );
}
