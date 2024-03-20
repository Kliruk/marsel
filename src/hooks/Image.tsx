import Image from "next/image";
import React from "react";
import styles from "@/styles/hooks/images.module.css";
import {ICustomImage} from "@/types/custom-image";

const Images = ({src, alt, width, height, uniqueClassName} : ICustomImage) => {
  return (
    <div className={`${styles.wrapper} ${uniqueClassName}`}
      style={{
        width: width,
        height: height,
      }}>
      <Image placeholder="blur" className={styles.image} src={src} alt={alt} sizes="100%" fill/>

    </div>
  );
};

export default Images;
