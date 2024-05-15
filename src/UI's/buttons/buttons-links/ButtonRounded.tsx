import {IButtonsLinks} from "@/types/ui/buttons";
import React from "react";
import Star from "../../Star";
import styles from "@/styles/ui's/buttons-links.module.css";
import {STAR_DELAY_DEFAULT} from "@/constants/default-values";
import Link from "next/link";


/**
 *  Returns a rounded functional button which used for links to another or external pages
 * @param {text} text of the button
 * @param {link} link to the page
 * @param {type} type of the button, in this case is only: "small" or "big"
 * @param {widthStar} size of the star, both width and height values
 * @param {starAnimationDelayMin} star animation delay, lowest value(min)
 * @return {JSX.Element}
 */
const ButtonRounded =
  ({text, link, type, widthStar, starAnimationDelayMin=STAR_DELAY_DEFAULT, uniqueClassName}
   : IButtonsLinks) : JSX.Element => {
    return (
      <Link href={link}
        className={` ${uniqueClassName}
          ${type === "big" ? styles.buttonLinksRoundedB : styles.buttonLinksRoundedS}`}>
        <span>{text}</span>
        <Star width={widthStar} starAnimationDelayMin={starAnimationDelayMin}/>
      </Link>
    );
  };

export default ButtonRounded;
