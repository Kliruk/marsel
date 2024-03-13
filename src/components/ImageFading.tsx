"use client";

import {Childrens} from "@/types/ReactTypes";
import styles from "@/styles/imageFading.module.css";
import React, {useEffect, useRef, useState} from "react";
import {motion, useScroll} from "framer-motion";


const ImageFading = ({children}: Childrens) => {
  const ref = useRef(null);
  const [valueBefore, setValueBefore] = useState(0);
  const [valueAfter, setValueAfter] = useState(0);
  const {scrollYProgress: scrollYProgressBefore} = useScroll({
    target: ref,
    offset: ["0.3 1", "0.8 1"],
  });
  const {scrollYProgress: scrollYProgressAfter} = useScroll({
    target: ref,
    offset: ["0.8 0", "1 1"],
  });

  useEffect(() => {
    scrollYProgressBefore.on("change", (e) => {
      setValueBefore(e);
    });
  }, [scrollYProgressBefore]);

  useEffect(() => {
    scrollYProgressAfter.on("change", (e) => {
      setValueAfter(e);
    });
  }, [scrollYProgressAfter]);

  return (
    <div className={styles.fading}>
      <motion.div
        ref={ref}
        style={{filter: `saturate(${valueBefore === 1 ? valueAfter : valueBefore})`}}
      >{children}
      </motion.div>
    </div>
  );
};

export default ImageFading;
