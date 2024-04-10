import {IScrollContainer} from "@/types/scroll-container";
import React, {useEffect, useRef} from "react";
import styles from "@/styles/ui's/scroll-container.module.css";
import {motion, useAnimation, useInView} from "framer-motion";

/**
 *
 * @param param0
 * @returns
 */
const ScrollContainer = ({uniqueClassName, data}: IScrollContainer)
  : JSX.Element => {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [mainControls, isInView]);

  return (
    <div className={styles.wrapper}>
      <div ref={ref} className={`${styles.scrollContainer} ${uniqueClassName}`}>
        {data.map((item, _) => (
          <React.Fragment key={_}>
            <motion.p
              variants={{
                hidden: {opacity: 0, y: 10},
                visible: {opacity: 1, y: 0},
              }}
              initial="hidden"
              animate={mainControls}
              transition={{
                duration: .3,
                delay: 0.3 + (_ * 0.1),
                ease: "easeIn",
              }}
              className={`${styles.text} paragraphTypical`}
            >{item}</motion.p>
            <motion.div
              variants={{
                hidden: {opacity: 0, y: 10},
                visible: {opacity: 1, y: 0},
              }}
              initial="hidden"
              animate={mainControls}
              transition={{
                duration: .3,
                delay: 0.5 + (_ * 0.1),
                ease: "easeIn",
              }}
              className={styles.line} />
          </React.Fragment>
        ))}
      </div>
      <div className={styles.shading}/>
    </div>
  );
};

export default ScrollContainer;
