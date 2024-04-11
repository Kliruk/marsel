import React from "react";
import {Josefin_Sans as josefinSansGoogleFont} from "next/font/google";
import styles from "@/styles/developed-by-webelefont.module.css";

const josefinSans = josefinSansGoogleFont({
  subsets: ["latin"],
  weight: "400",
});

const DevelopedByWebElefont = () => {
  return (
    <a href="https://www.instagram.com/webelefont.blog/" className={styles.developedBy}>
      <p className={styles.developedByText}>DEVELOPED BY</p>
      <p className={`${styles.developedByComp} ${josefinSans.className}`}>WEB ELEFONT</p>
    </a>
  );
};

export default DevelopedByWebElefont;
