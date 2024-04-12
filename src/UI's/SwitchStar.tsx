"use client";

import {motion} from "framer-motion";
import React from "react";
import Star from "./Star";
import styles from "@/styles/ui's/switch-star.module.css";
import {IStarSwitch} from "@/types/ui/star-switch";


/**
 *
 * @param param0
 * @returns
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
