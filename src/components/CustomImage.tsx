"use client";

import styles from "@/styles/CustomImage.module.css";
import React, {useEffect, useRef, useState} from "react";
import {motion, useScroll} from "framer-motion";
import Image from "next/image";
import {ICustomImage} from "@/types/custom-image";


const ImageFading = ({src, alt, width, height}: ICustomImage) => {
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


  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // зробити з цього компонента заміщення Image nextjs (назвати його ICustomImage
  // чи щось типу такого) та перенести <Image /> всередину цього компонента та
  // в пропси додати {src}
  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  return (
    <div className={styles.fading}>
      <motion.div
        ref={ref}
        style={{filter: `saturate(${valueBefore === 1 ? valueAfter : valueBefore})`}}
      >
        <Image src={src} alt={alt} width={width} height={height} />
      </motion.div>
    </div>
  );
};

export default ImageFading;
