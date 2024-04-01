"use client";

import React, {useEffect, useRef} from "react";
import styles from "@/styles/hooks/background-text.module.css";
import {motion, useAnimation, useInView} from "framer-motion";
import {IBackgroundText} from "@/types/background-props";
import {HOOKS_DELAY_DEFAULT, HOOKS_DURATION_DEFAULT} from "@/constants/constants";


/**
 * Returns a background text with appearing animation
 * @param {children} text of this
 * @param {size} size of text, only two option avaliable: small(100px or big(200px)
 * @return {JSX.Element}
 */
const BackgroundText = ({children, size="big", uniqueClassName, delay=HOOKS_DELAY_DEFAULT,
  duration=HOOKS_DURATION_DEFAULT}
  : IBackgroundText) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [mainControls, isInView]);

  return (
    <motion.p ref={ref}
      variants={{
        hidden: {
          opacity: 0,
          WebkitTextFillColor: "transparent",
          background:
          // eslint-disable-next-line max-len
          "linear-gradient(91.1deg, var(--color-almost-transparent) -44.14%, rgba(52, 52, 52, 0) 32.72%)",
          backgroundClip: "text",
        },
        visible: {
          opacity: 1,
          WebkitTextFillColor: "transparent",
          background:
          // eslint-disable-next-line max-len
          "linear-gradient(91.1deg, var(--color-almost-transparent) 97.12%, rgba(52, 52, 52, 0) 136.73%)",
          backgroundClip: "text",
        },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{
        duration: duration,
        delay: delay,
        ease: "linear",
      }}
      className={`${size === "big" ? styles.backgroundTextBig :
    styles.backgroundTextSmall} ${uniqueClassName}`}>
      {children}
    </motion.p>
  );
};

export default BackgroundText;
