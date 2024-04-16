"use client";

import React, {ReactNode, useEffect, useRef} from "react";
import {ICustomParagraph} from "@/types/hooks/custom-header";
import {useAnimation, useInView} from "framer-motion";
import AnimOpcBack from "@/animations/AnimOpcBack";


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
const CustomHeader = ({children, headerType, color, isYMoves,
  duration, delay, initialY, y, initialOpacity, opacity, initialBackground,
  background, ease}
   : ICustomParagraph): JSX.Element => {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [mainControls, isInView]);

  return (
    <div ref={ref}>
      <AnimOpcBack
        mainControls={mainControls}
        isYMoves={isYMoves}
        color={color}
        duration={duration}
        delay={delay}
        initialY={initialY}
        y={y}
        initialOpacity={initialOpacity}
        opacity={opacity}
        initialBackground={initialBackground}
        background={background}
        ease={ease}
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
      </AnimOpcBack>
    </div>
  );
};

export default CustomHeader;
