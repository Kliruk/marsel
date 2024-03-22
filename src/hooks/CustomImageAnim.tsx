"use client";

import React, {useEffect, useRef, useState} from "react";
import {motion, useScroll} from "framer-motion";
import Image from "next/image";
import {ICustomImage} from "@/types/custom-image";
import {customLazyLoading} from "./customLazyLoading";
import styles from "@/styles/hooks/custom-image-anim.module.css";


const CustomImageAnim = ({src, alt, width, height, uniqueClassName}: ICustomImage) => {
  const ref = useRef(null);
  const [valueBefore, setValueBefore] = useState(0);
  const [valueAfter, setValueAfter] = useState(0);

  /**
   * Cut off decimal number to certain numbers after decimal point
   * @param {value} value , digit that you want to round to {digits} after decimal point
   * @param {precision} precision of numbers after decimal point
   * @return {number} with certain {precisions} after decimal point
   */
  function round(value : number, precision : number): number {
    const multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
  }

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
      // if saturate already ain't done and
      if (e <= 1) {
        setValueBefore(round(e, 1));
        if (e > 0 && valueAfter !== 1) {
          setValueAfter(1);
        }
      }
    });

    // no errors, this UseEffect should reload only on scrollYProgressBefore
    // and valueBefore should check when scrollYProgressBefore changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollYProgressBefore]);

  useEffect(() => {
    scrollYProgressAfter.on("change", (e) => {
      if (e <= 1) {
        setValueAfter(round(e, 1));
        if (e > 0 && valueBefore !== 1) {
          setValueBefore(1);
        }
      }
    });

    // no errors, this UseEffect should reload only on scrollYProgressAfter
    // and valueBefore should check when scrollYProgressBefore changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollYProgressAfter]);

  return (
    <motion.div
      className={`${styles.wrapper} ${uniqueClassName}`}
      ref={ref}
      style={{filter: `saturate(${valueBefore === 1 ? valueAfter : valueBefore})`,
        width: width,
        height: height,
        transition: "all 0.1s ease",
      }}
    >
      {/* no error here, because function {customLazyLoading} returns string
      and {placeholder} requires to be string*/}
      {/* @ts-ignore */}
      <Image className={styles.image} placeholder={customLazyLoading(width, height)}
        src={src} alt={alt} sizes="100%"
        fill />
    </motion.div>
  );
};

export default CustomImageAnim;
