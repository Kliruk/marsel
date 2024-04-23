"use client";

import React, {useEffect, useRef, useState} from "react";
import {useScroll} from "framer-motion";
import Image from "next/image";
import {ICustomImage} from "@/types/hooks/custom-image";
import {customLazyLoading} from "../utils/customLazyLoading";
import {roundDecimalNumber} from "@/utils/roundDecimalNumber";
import styles from "@/styles/hooks/custom-image-anim.module.css";


/**
 * Because of the disadvantage of tag <Image> from NextJS namely adaptation resizing, that component
 * helps eliminate this disadvantage with stunning saturation changing effect.
 * In order to change width and height you need to provide width and height css rules
 * inside {uniqueClassName} that you passed with "!important" option
 * @param {src} src is the source of image
 * @param {alt} alt is the alternative text if image cannot load
 * @param {width} width is the default width of the image
 * @param {height} heigth is the default height of the image
 * @param {uniqueClassName} unique class name in order to control css of element,
 * adaptation for example
 * @return {JSX.Element}
 */
const CustomImageAnim = ({src, alt, width, height, uniqueClassName}: ICustomImage) => {
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
      // if saturate already ain't done and
      if (e <= 1) {
        setValueBefore(roundDecimalNumber(e, 1));
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
        setValueAfter(roundDecimalNumber(e, 1));
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
    <div
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
      {/* https://www.youtube.com/shorts/AT70PVbdfBI */}
      {/* @ts-ignore */}
      <Image className={styles.image} placeholder={customLazyLoading(width, height)}
        src={src} alt={alt} sizes="50vw" quality={100}
        fill />
    </div>
  );
};

export default CustomImageAnim;
