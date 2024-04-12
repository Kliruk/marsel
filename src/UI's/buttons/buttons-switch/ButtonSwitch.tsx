"use client";

import Star from "@/UI's/Star";
import {IButtonsLinksSwitch} from "@/types/ui/buttons";
import styles from "@/styles/ui's/buttons-switches.module.css";
import {STAR_DELAY_DEFAULT} from "@/constants/default-values";
import React from "react";

/**
 *  ButtonSwitch creates a arrow with star, which used for changing something
 * @param {action} action what will happen when we click on item
 * @param {orientation} orientation of arrow: left or right
 * @param {widthStar} width of the star near arrow
 * @param {starAnimationDelayMin} star animation delay, lowest value(min)
 * @param {uniqueClassName} unique class name in order to control css of element,
 * adaptation for example
 * @return {JSX.Element}
 */
const ButtonSwitch = ({action, orientation, widthStar, starAnimationDelayMin=STAR_DELAY_DEFAULT,
  uniqueClassName}
  : IButtonsLinksSwitch) : JSX.Element => {
  return (
    <button className={`${uniqueClassName} ${styles.buttonSwitches}`}
      onClick={action}>
      <svg className={styles.buttonSwitchesArrow} style={{transform: orientation === "left" ? "scale(-1, -1)" : ""}} viewBox="0 0 36 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.1729 24.9148C15.1729 18.0305 24.3556 12.4574 35.6988
        12.4574M15.1729 0C15.1729 6.88436 24.3556 12.4574 35.6988 12.4574M35.6988 12.4574L0 12.4574"
        stroke="#343434" strokeWidth="2" strokeMiterlimit="10" />
      </svg>
      <div className={styles.wrapper}>
        <Star width={widthStar} starAnimationDelayMin={starAnimationDelayMin}/>
      </div>
    </button>
  );
};

export default ButtonSwitch;
