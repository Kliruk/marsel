"use client";

import {ButtonsLinks} from "@/types/buttons-links";
import {useRouter} from "next/navigation";
import React from "react";
import Star from "../../Star";
import styles from "@/styles/buttons-links.module.css";


const ButtonRoundedS =
  ({text, link, type, widthStar}
   : ButtonsLinks) => {
    const router = useRouter();

    return (
      <button
        className={type === "big" ? styles.buttonLinksRoundedB : styles.buttonLinksRoundedS}
        onClick={() => router.push(`${link}`)}>
        <span>{text}</span>
        <Star width={widthStar} />
      </button>
    );
  };

export default ButtonRoundedS;
