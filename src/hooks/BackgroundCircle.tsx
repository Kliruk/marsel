import React, {useEffect, useRef} from "react";
import styles from "@/styles/background-circle.module.css";
import {motion, useAnimation, useInView} from "framer-motion";
import {IBackgroundCircle} from "@/types/background-props";

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
        width={size} height={size} viewBox="0 0 875 875" stroke="var(--circle-stroke)" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.circle
          variants={{
            hidden: {pathLength: 0},
            visible: {pathLength: 1},
          }}
          initial="hidden"
          animate={mainControls}
          transition={{
            duration: 3,
            ease: [.71, 0, 0, 1],
          }}
          ref={ref}
          opacity="0.2" cx="437.5" cy="437.5" r="434.5" />
      </motion.svg>
    </motion.div>
  );
};

export default BackgroundCircle;
