import {IScrollContainer} from "@/types/ui/scroll-container";
import React, {useEffect, useRef} from "react";
import styles from "@/styles/ui's/list-scroll-container.module.css";
import {useAnimation, useInView} from "framer-motion";
import AnimOpcY from "@/animations/AnimOpcY";

/**
 * Return a vertical scrollable div with bunch of elements
 * provided with appearing animation
 * @param {uniqueClassName} unique class name in order to control css of element,
 * adaptation for example
 * @param {data} array of the desired list
 * @return {JSX.Element}
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
    <div ref={ref} className={styles.wrapper}>
      <div className={`${styles.listScrollContainer} ${uniqueClassName}`}>
        {data.map((item, _) => (
          <React.Fragment key={_}>
            <div className={styles.textWrapper}>
              <AnimOpcY mainControls={mainControls}>
                <p className={`${styles.text} paragraphTypical`}>{item}</p>
              </AnimOpcY>
            </div>
            <div className={styles.lineWrapper}>
              <AnimOpcY
                mainControls={mainControls}
                queueOrder={_}
                delay={.5}
                delayMultiplier={.1}>
                <div className={styles.line} />
              </AnimOpcY>
            </div>
          </React.Fragment>
        ))}
        <div className={styles.marginTop} />
      </div>
      <div className={styles.shading} />
    </div>
  );
};

export default ScrollContainer;
