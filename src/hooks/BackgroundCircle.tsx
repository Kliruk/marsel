"use client";

import React, {useEffect, useRef} from "react";
import styles from "@/styles/hooks/background-circle.module.css";
import {motion, useAnimation, useInView} from "framer-motion";
import {IBackgroundCircle} from "@/types/hooks/background-props";


/**
 * Returns a circle with appearing animation
 * @param {size} size of the circle, both width and height values
 * @param {uniqueClassName} unique class name in order to control css of element,
 * adaptation for example
 * @return {JSX.Element}
 */
const BackgroundCircle = ({size, uniqueClassName}: IBackgroundCircle) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [mainControls, isInView]);

  return (
    <motion.div>
      <motion.svg className={`${styles.circle} ${uniqueClassName}`}
        width={size} height={size} viewBox="0 0 875 875" stroke="var(--color-circle-stroke)" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.circle
          variants={{
            hidden: {pathLength: 0},
            visible: {pathLength: 1},
          }}
          initial="hidden"
          animate={mainControls}
          transition={{
            duration: 1.5,
            delay: .2,
            ease: [.71, 0, 0, 1],
            // ease: "linear",
          }}
          ref={ref}
          opacity="0.2" cx="437.5" cy="437.5" r="434.5" />
      </motion.svg>
    </motion.div>
  );
};

export default BackgroundCircle;
