import {IScrollContainer} from "@/types/ui/scroll-container";
import React, {useEffect, useRef} from "react";
import styles from "@/styles/ui's/list-scroll-container.module.css";
import {motion, useAnimation, useInView} from "framer-motion";

/**
 * Return a vertical scrollable div with bunch of elements
 * provided with appearing animation
 * @param {uniqueClassName} unique class name in order to control css of element,
 * adaptation for example
 * @param {data} array of the desired list
 * @return {JSX.Element}
 */
const ListScrollContainer = ({uniqueClassName, data}: IScrollContainer)
  : JSX.Element => {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} className={styles.wrapper}>
      <div className={`${styles.listScrollContainer} ${uniqueClassName}`}>
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

export default ListScrollContainer;
