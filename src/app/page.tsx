import {Navbar, Header, AboutMe, Portfolio,
  Services, Advantages, Contacts, Footer} from "@/components";
import React from "react";
import Reviews from "@/components/Reviews";

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
      <Reviews />
      <Contacts />
      <Footer />
    </>
  );
}
