import React from "react";
import styles from "@/styles/ui's/buttons-scrolls.module.css";
import Star from "../../Star";
import {IButtonsScrolls} from "@/types/buttons";
import {STAR_DELAY_DEFAULT} from "@/constants/constants";

/**
 *  Return a button which used for scroll-links
 * @param {size} size of the button, both width and height values
 * @param {widthArrow} width of arrow, only width
 * @param {widthStar} size_star of the star, both width and height values
 * @param {orientation} orientation of the arrow, only "downward" or "upward" values
 * @param {starAnimationDelayMin} star animation delay, lowest value(min)
 * @param {uniqueClassName} unique class name in order to control css of element,
 * adaptation for example
 * @return {JSX.Element}
 */
const ButtonScroll = (
    {size, widthArrow, widthStar, orientation, starAnimationDelayMin=STAR_DELAY_DEFAULT,
      uniqueClassName, star, scrollTo}
  : IButtonsScrolls) : JSX.Element => {
  return (
    <a href={scrollTo}>
      <button className={`${styles.buttonScroll} ${uniqueClassName}`}
        style={{width: size, height: size}}>
        <div className={styles.wrapper}>
          <svg className={styles.buttonScroll_arrow} style={{transform: orientation === "upward" ? "scale(-1, -1)" : ""}} width={widthArrow} viewBox="0 0 52 76" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 32.5793C14.5764 32.5793 25.9348 51.8452 25.9348
              75.6441M51.3242 32.5793C37.2932 32.5793 25.9348 51.8452 25.9348 75.6441M25.9348
              75.6441L25.9348 0.745361" stroke="#343434" strokeWidth="2" strokeMiterlimit="10" />
          </svg>
          {star &&
          <Star width={widthStar} starAnimationDelayMin={starAnimationDelayMin}/>
          }
        </div>
      </button>
    </a>
  );
};

export default ButtonScroll;
