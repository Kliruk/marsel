"use client";

import {useRouter} from "next/navigation";
import {IButtonsLinks} from "@/types/ui/buttons";
import styles from "@/styles/ui's/buttons-links.module.css";
import {STAR_DELAY_DEFAULT} from "@/constants/default-values";
import React from "react";
import Star from "../../Star";

/**
 *  Returns a squared functional button which used for links to another or external pages
 * @param {text} text of the button
 * @param {link} link to the page
 * @param {type} type of the button, in this case is only: "previous" or "none"
 * @param {widthStar} size of the star, both width and height values
 * @param {starAnimationDelayMin} star animation delay, lowest value(min)
 * @return {JSX.Element}
 */
const ButtonSquared = ({text, link, type, widthStar, starAnimationDelayMin=STAR_DELAY_DEFAULT,
  uniqueClassName}
   : IButtonsLinks): JSX.Element => {
  const router = useRouter();

  const onClick = () => {
    if (type === "previous") {
      router.back();
    } else {
      router.push(`${link}`);
    }
  };

  return (
    <button className={`${uniqueClassName} ${styles.buttonLinksSquared}`}
      onClick={onClick}>
      <span>{text}</span>
      <Star width={widthStar} starAnimationDelayMin={starAnimationDelayMin}/>
    </button>
  );
};

export default ButtonSquared;
