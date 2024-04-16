import React from "react";
import {motion} from "framer-motion";
import {IAnimOpcY} from "@/types/anim/anim-opc-y";


const AnimOpcY = ({
  children,
  mainControls,
  queueOrder = 0,
  delay = .3,
  delayMultiplier = .1,
  duration = .3,
  ease = "easeIn",
  yStart = 10,
  yEnd = 0,
  opacityStart = 0,
  opacityEnd = 1,
  uniqueClassName,
}: IAnimOpcY) => {
  return (
    <motion.div
      variants={{
        hidden: {opacity: opacityStart, y: yStart},
        visible: {opacity: opacityEnd, y: yEnd},
      }}
      initial="hidden"
      animate={mainControls}
      transition={{
        duration: duration,
        delay: delay + ( queueOrder * delayMultiplier),
        ease: ease,
      }}
      className={uniqueClassName}
    >
      { children}
    </motion.div>
  );
};


export default AnimOpcY;
