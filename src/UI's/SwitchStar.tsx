import React from "react";
import Star from "./Star";
import styles from "@/styles/ui's/switch-star.module.css";
import {IStarSwitch} from "@/types/ui/star-switch";
import AnimSclOpc from "@/animations/AnimSclOpc";


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
const SwitchStar = ({opacity, scale, duration, ease,
  widthStar=15, uniqueClassName, initialOpacity, initialScale} : IStarSwitch) : JSX.Element => {
  return (
    <AnimSclOpc
      opacity={opacity}
      scale={scale}
      duration={duration}
      ease={ease}
      initialOpacity={initialOpacity}
      initialScale={initialScale}>
      <div className={`${styles.starSwitch} ${uniqueClassName}`}>
        <Star width={widthStar} />
      </div>
    </AnimSclOpc>
  );
};

export default SwitchStar;
