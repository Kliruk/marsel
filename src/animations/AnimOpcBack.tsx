import React from "react";
import {motion} from "framer-motion";
import {HOOKS_DELAY_DEFAULT, HOOKS_DURATION_DEFAULT} from "@/constants/default-values";
import {IAnimOpcBackAllParams} from "@/types/anim/anim-opc-back";

const AnimOpcBack = ({
  children,
  mainControls,
  color = "var(--color-black)",
  isYMoves,
  duration = HOOKS_DURATION_DEFAULT,
  delay = HOOKS_DELAY_DEFAULT,
  initialY = 40,
  y = 0,
  initialOpacity = 0,
  opacity = 1,
  initialBackground = `linear-gradient(91.1deg, ${color} -44.14%, rgba(52, 52, 52, 0) 32.72%)`,
  background = `linear-gradient(91.1deg, ${color} 97.12%, rgba(52, 52, 52, 0) 136.73%)`,
  ease = "easeIn",
  uniqueClassName,
} : IAnimOpcBackAllParams) : JSX.Element => {
  return (
    <motion.div
      variants={{
        hidden: {
          WebkitTextFillColor: "transparent",
          y: isYMoves === true ? initialY : 0,
          opacity: initialOpacity,
          background: initialBackground,
          backgroundClip: "text"},
        visible: {
          WebkitTextFillColor: "transparent",
          y: y,
          opacity: opacity,
          background: background,
          backgroundClip: "text"},
      }}
      className={uniqueClassName}
      initial="hidden"
      animate={mainControls}
      transition={{
        duration: duration,
        delay: delay,
        ease: ease,
        y: {duration: duration !== .7 ? duration - .2 : duration},
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimOpcBack;
