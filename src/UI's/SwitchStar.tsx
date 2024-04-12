"use client";

import {motion} from "framer-motion";
import React from "react";
import Star from "./Star";
import styles from "@/styles/ui's/switch-star.module.css";
import {IStarSwitch} from "@/types/ui/star-switch";


/**
 * Returns star, which uses for indicate current option between options,
 * in future: multiply animations
 * @param {opacity} opacity of star after the animation
 * @param {scale} scale of star after the animation
 * @param {duration} duration of animation
 * @param {ease} type of animation
 * @param {widthStar} width of the star (size, both height and width values)
 * @param {uniqueClassName} unique class name in order to control css of element,
 * adaptation for example
 * @return {JSX.Element}
 */
const SwitchStar = ({opacity=1, scale=1, duration=.2, ease="easeIn",
  widthStar=15, uniqueClassName} : IStarSwitch) : JSX.Element => {
  return (
    <motion.div
      className={`${styles.starSwitch} ${uniqueClassName}`}
      animate={{
        opacity: opacity,
        scale: scale,
      }}
      transition={{
        duration: duration,
        ease: ease,
      }}
    >
      <Star width={widthStar} />
    </motion.div>
  );
};

export default SwitchStar;
