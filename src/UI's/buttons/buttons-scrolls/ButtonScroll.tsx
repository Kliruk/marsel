import React from "react";
import styles from "@/styles/ui's/buttons-scrolls.module.css";
import Star from "../../Star";
import {IButtonsScrolls} from "@/types/buttons";
import {STAR_DELAY_DEFAULT} from "@/constants/constants";

/**
 *  ButtonScroll creates a circle button with arrow and border
 *  which is rounded and star, which used for links
 * @return {JSX.Element}
 */
const ButtonScroll = (
    {width, height, widthArrow, widthStar, orientation, starAnimationDelayMin=STAR_DELAY_DEFAULT,
      uniqueClassName}
  : IButtonsScrolls) : JSX.Element => {
  return (
    <button className={`${styles.buttonScroll} ${uniqueClassName}`}
      style={{width: width, height: height}}>
      <div className={styles.wrapper}>
        <svg className={styles.buttonScroll_arrow} style={{transform: orientation === "upward" ? "scale(-1, -1)" : ""}} width={widthArrow} viewBox="0 0 52 76" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 32.5793C14.5764 32.5793 25.9348 51.8452 25.9348
              75.6441M51.3242 32.5793C37.2932 32.5793 25.9348 51.8452 25.9348 75.6441M25.9348
              75.6441L25.9348 0.745361" stroke="#343434" strokeWidth="2" strokeMiterlimit="10" />
        </svg>
        <Star width={widthStar} starAnimationDelayMin={starAnimationDelayMin}/>
      </div>
    </button>
  );
};

export default ButtonScroll;
