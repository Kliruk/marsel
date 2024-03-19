"use client";

import React, {useEffect, useRef} from "react";
import {customParagraph} from "@/types/custom-header";
import {motion, useAnimation, useInView} from "framer-motion";


const CustomAnimationHeaders = ({children, isYmoves, duration=.7, delay=.3} : customParagraph) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  });

  return (
    <motion.h3 ref={ref}
      variants={{
        hidden: {WebkitTextFillColor: "transparent", y: isYmoves === true ? 40 : 0,
          opacity: isYmoves === true ? 0 : 1,
          background:
          "linear-gradient(91.1deg, #343434 -44.14%, rgba(52, 52, 52, 0) 32.72%)",
          backgroundClip: "text"},
        visible: {WebkitTextFillColor: "transparent", y: 0,
          opacity: 1,
          background:
          "linear-gradient(91.1deg, #343434 97.12%, rgba(52, 52, 52, 0) 136.73%)",
          backgroundClip: "text"},
      }}
      initial="hidden"
      animate={mainControls}
      transition={{
        duration: duration,
        delay: delay,
        ease: "linear",
        y: {duration: duration - .2},
      }}
    >
      {children}
    </motion.h3>
  );
};

export default CustomAnimationHeaders;
