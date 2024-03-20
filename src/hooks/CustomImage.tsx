"use client";

import styles from "@/styles/customImage.module.css";
import React, {useEffect, useRef, useState} from "react";
import {motion, useScroll} from "framer-motion";
import Image from "next/image";
import {ICustomImage} from "@/types/custom-image";


const ImageFading = ({src, alt, width, height, uniqueClassName}: ICustomImage) => {
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
    <motion.div
      className={`${styles.wrapper} ${uniqueClassName}`}
      ref={ref}
      style={{filter: `saturate(${valueBefore === 1 ? valueAfter : valueBefore})`,
        width: width,
        height: height}}
    >
      <Image className={styles.image}
        src={src} alt={alt} sizes="100%"
        fill />
    </motion.div>
  );
};

export default ImageFading;
