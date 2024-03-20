import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
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
    </>
  );
}
