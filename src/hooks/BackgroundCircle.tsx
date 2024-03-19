import React, {useEffect, useRef} from "react";
import styles from "@/styles/backGroundText.module.css";
import {motion, useAnimation, useInView} from "framer-motion";
import {IBackgroundCircle} from "@/types/background-props";

const BackgroundCircle = ({size, uniqueClassName} : IBackgroundCircle) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [mainControls, isInView]);

  return (
    <motion.svg ref={ref}
      className={"---------"}>
    </motion.svg>
  );
};

export default BackgroundCircle;
