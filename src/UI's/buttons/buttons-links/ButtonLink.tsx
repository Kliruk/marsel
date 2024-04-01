"use client";

import {useRouter} from "next/navigation";
import {IButtonsLinks} from "@/types/buttons";
import styles from "@/styles/ui's/buttons-links.module.css";
import {STAR_DELAY_DEFAULT} from "@/constants/constants";
import React from "react";
import Star from "../../Star";


/**
 *  Returns a non background functional button which used for links to another or external pages
 * @param {text} text of the button
 * @param {link} link to the page
 * @param {widthStar} size of the star, both width and height values
 * @param {starAnimationDelayMin} star animation delay, lowest value(min)
 * @return {JSX.Element}
 */
const ButtonLink = ({text, link, widthStar, starAnimationDelayMin=STAR_DELAY_DEFAULT,
  uniqueClassName}
   : IButtonsLinks): JSX.Element => {
  const router = useRouter();

  return (
    <button className={`${uniqueClassName} ${styles.buttonLink}`}
      onClick={() => router.push(`${link}`)}>
      <span>{text}</span>
      <Star width={widthStar} starAnimationDelayMin={starAnimationDelayMin}/>
    </button>
  );
};

export default ButtonLink;
