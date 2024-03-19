"use client";

import {useRouter} from "next/navigation";
import {ButtonsLinks} from "@/types/buttons-links";
import styles from "@/styles/buttons-links.module.css";
import {STAR_DELAY_DEFAULT} from "@/constants/constants";
import React from "react";
import Star from "../../Star";


/**
 *  ButtonLinks creates a button with text and star, which used for links
 * @return {JSX.Element}
 */
const ButtonLink = ({text, link, type, widthStar, starAnimationDelayMin=STAR_DELAY_DEFAULT}
   : ButtonsLinks): JSX.Element => {
  const router = useRouter();

  return (
    <button className={styles.buttonLink} onClick={() => router.push(`${link}`)}>
      <span>{text}</span>
      <Star width={widthStar} starAnimationDelayMin={starAnimationDelayMin}/>
    </button>
  );
};

export default ButtonLink;
