"use client";

import React, {ReactNode, useEffect, useRef} from "react";
import {ICustomParagraph} from "@/types/custom-header";
import {motion, useAnimation, useInView} from "framer-motion";
import {HOOKS_DELAY_DEFAULT, HOOKS_DURATION_DEFAULT} from "@/constants/constants";


/**
 * Returns a header with appearing animation
 * !Add your header separately, one line after another!
 * because animation idea is in appear middle text without sliding up
 * @param {children} text of the header
 * @param {color} color of the header
 * @param {headerType} header type of text, reference to default html header tags
 * @param {isYMoves} isYMoves if it is true - text will appear with slightly sliding up
 * if it is false - it will just appear without sliding up
 * @param {duration} duration of the animation, provided with default value
 * @param {delay} delay of the animation, provided with default value
 * @return {JSX.Element}
 */
const CustomHeader = ({children, color="var(--color-black)", headerType, isYMoves,
  duration=HOOKS_DURATION_DEFAULT, delay=HOOKS_DELAY_DEFAULT}
   : ICustomParagraph) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [mainControls, isInView]);

  return (
    <motion.div ref={ref}
      variants={{
        hidden: {WebkitTextFillColor: "transparent", y: isYMoves === true ? 40 : 0,
          opacity: 0,
          background:
          `linear-gradient(91.1deg, ${color} -44.14%, rgba(52, 52, 52, 0) 32.72%)`,
          backgroundClip: "text"},
        visible: {WebkitTextFillColor: "transparent", y: 0,
          opacity: 1,
          background:
          `linear-gradient(91.1deg, ${color} 97.12%, rgba(52, 52, 52, 0) 136.73%)`,
          backgroundClip: "text"},
      }}
      initial="hidden"
      animate={mainControls}
      transition={{
        duration: duration,
        delay: delay,
        ease: "linear",
        y: {duration: duration !== .7 ? duration - .2 : duration},
      }}
    >
      {(() : ReactNode => {
        switch (headerType) {
          case "h1":
            return <h1>{children}</h1>;
          case "h2":
            return <h2>{children}</h2>;
          case "h3":
            return <h3>{children}</h3>;
          case "h4":
            return <h4>{children}</h4>;
        }
      })()}
    </motion.div>
  );
};

export default CustomHeader;
