"use client";

import React, {useEffect, useRef} from "react";
import styles from "@/styles/hooks/background-text.module.css";
import {useAnimation, useInView} from "framer-motion";
import {IBackgroundText} from "@/types/hooks/background-props";
import AnimOpcBack from "@/animations/AnimOpcBack";


/**
 * Returns a background text with appearing animation
 * @param {children} text of this
 * @param {size} size of text, only two option avaliable: small(100px or big(200px)
 * @return {JSX.Element}
 */
const BackgroundText = ({children, size="big", uniqueClassName,
  color="var(--color-almost-transparent)", isYMoves=false, duration, delay,
  initialY, y, initialOpacity, opacity, initialBackground, background, ease}
  : IBackgroundText): JSX.Element => {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [mainControls, isInView]);

  const sizeReturns = () => {
    switch (size) {
      case "big":
        return styles.backgroundTextBig;
      case "regular":
        return styles.backgroundTextRegular;
      case "small":
        return styles.backgroundTextSmall;
    }
  };

  return (
    <AnimOpcBack
      color={color}
      isYMoves={isYMoves}
      mainControls={mainControls}
      duration={duration}
      delay={delay}
      initialY={initialY}
      y={y}
      initialOpacity={initialOpacity}
      opacity={opacity}
      initialBackground={initialBackground}
      background={background}
      ease={ease}
      uniqueClassName={`${sizeReturns()} ${uniqueClassName}`}>
      <p ref={ref}
      >
        {children}
      </p>
    </AnimOpcBack>
  );
};

export default BackgroundText;
