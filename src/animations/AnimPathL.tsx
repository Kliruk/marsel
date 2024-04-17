import React from "react";
import {motion} from "framer-motion";
import {IAnimPathLAllParams} from "@/types/anim/anim-pathL";

const AnimPathL = ({
  children,
  mainControls,
  initialPathLength = 0,
  pathLenght = 1,
  duration = 1.5,
  delay = .2,
  ease = [.71, 0, 0, 1],
} : IAnimPathLAllParams) => {
  return (
    <motion.div
      variants={{
        hidden: {pathLength: initialPathLength},
        visible: {pathLength: pathLenght},
      }}
      initial="hidden"
      animate={mainControls}
      transition={{
        duration: duration,
        delay: delay,
        ease: ease,
        // ease: "linear",
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimPathL;
