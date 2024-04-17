"use client";

import {IAnimSclOpcAllParam} from "@/types/anim/anim-scl-opc";
import React from "react";
import {motion} from "framer-motion";

/**
 * Apply animation of appearing for {children} with opacity, scale
 * @param {props} props includes all of the passed parameters to this function
 * @return {JSX.Element}
 */
const AnimSclOpc = ({
  children,
  opacity = 1,
  scale = 1,
  duration = .2,
  ease = "easeIn",
  initialOpacity = 0,
  initialScale = 0,
  uniqueClassName,
}
  : IAnimSclOpcAllParam): JSX.Element => {
  return (
    <motion.div
      initial={{opacity: initialOpacity, scale: initialScale}}
      animate={{
        opacity: opacity,
        scale: scale,
      }}
      transition={{
        duration: duration,
        ease: ease,
      }}
      className={uniqueClassName}
    >
      {children}
    </motion.div>
  );
};

export default AnimSclOpc;
