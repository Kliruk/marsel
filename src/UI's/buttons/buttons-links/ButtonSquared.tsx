"use client";

import {useRouter} from "next/navigation";
import {IButtonsLinks} from "@/types/buttons";
import styles from "@/styles/ui's/buttons-links.module.css";
import {STAR_DELAY_DEFAULT} from "@/constants/constants";
import React from "react";
import Star from "../../Star";

/**
 *  ButtonSquared creates a button with text, backgroundColor and star, which used for links
 * @return {JSX.Element}
 */
const ButtonSquared = ({text, link, type, widthStar, starAnimationDelayMin=STAR_DELAY_DEFAULT,
  uniqueClassName}
   : IButtonsLinks): JSX.Element => {
  const router = useRouter();

  return (
    <button className={`${uniqueClassName} ${styles.buttonLinksSquared}`}
      onClick={() => router.push(`${link}`)}>
      <span>{text}</span>
      <Star width={widthStar} starAnimationDelayMin={starAnimationDelayMin}/>
    </button>
  );
};

export default ButtonSquared;
