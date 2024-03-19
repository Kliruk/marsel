"use client";

import {useRouter} from "next/navigation";
import {ButtonsLinks} from "@/types/buttons-links";
import styles from "@/styles/buttons-links.module.css";
import {STAR_DELAY_DEFAULT} from "@/constants/constants";
import React from "react";
import Star from "../../Star";

/**
 *  ButtonSquared creates a button with text, backgroundColor and star, which used for links
 * @return {JSX.Element}
 */
const ButtonSquared = ({text, link, type, widthStar, starAnimationDelayMin=STAR_DELAY_DEFAULT}
   : ButtonsLinks): JSX.Element => {
  const router = useRouter();

  return (
    <button className={styles.buttonLinksSquared} onClick={() => router.push(`${link}`)}>
      <span>{text}</span>
      <Star width={widthStar} starAnimationDelayMin={starAnimationDelayMin}/>
    </button>
  );
};

export default ButtonSquared;
