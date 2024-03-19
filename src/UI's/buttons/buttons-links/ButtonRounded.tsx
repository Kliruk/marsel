"use client";

import {ButtonsLinks} from "@/types/buttons-links";
import {useRouter} from "next/navigation";
import React from "react";
import Star from "../../Star";
import styles from "@/styles/buttons-links.module.css";
import {STAR_DELAY_DEFAULT} from "@/constants/constants";


/**
 *  ButtonRounded creates a button with text, border which is rounded and star, which used for links
 * @return {JSX.Element}
 */
const ButtonRounded =
  ({text, link, type, widthStar, starAnimationDelayMin=STAR_DELAY_DEFAULT}
   : ButtonsLinks) : JSX.Element => {
    const router = useRouter();

    return (
      <button
        className={type === "big" ? styles.buttonLinksRoundedB : styles.buttonLinksRoundedS}
        onClick={() => router.push(`${link}`)}>
        <span>{text}</span>
        <Star width={widthStar} starAnimationDelayMin={starAnimationDelayMin}/>
      </button>
    );
  };

export default ButtonRounded;
