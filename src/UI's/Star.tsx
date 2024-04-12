"use client";

import React from "react";
import {IStar} from "@/types/ui/star";
import {getRandomNumber} from "@/utils/getRandomNumber";
import styles from "@/styles/ui's/star.module.css";
import {STAR_DELAY_DEFAULT} from "@/constants/default-values";


/**
 * Return a star with animation
 * @param {width} width of star
 * @param {starAnimationDelayMin} starAnimationDelayMin is number for star delay for animation
 * @return {JSX.Element}
 */
const Star = ({width, starAnimationDelayMin=STAR_DELAY_DEFAULT}: IStar): JSX.Element => {
  const isRandom = () => {
    if (starAnimationDelayMin != STAR_DELAY_DEFAULT) {
      return getRandomNumber(starAnimationDelayMin);
    } else {
      return getRandomNumber();
    }
  };

  return (
    <svg className={styles.star} style={{animationDelay: `${isRandom()}s`}} width={width} viewBox="0 0 12 12" fill="var(--color-black)" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 0L7.62054 4.37946L12 6L7.62054 7.62054L6 12L4.37946
        7.62054L0 6L4.37946 4.37946L6 0Z" />
    </svg>
  );
};

export default Star;
