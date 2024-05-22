import Image from "next/image";
import React from "react";
import styles from "@/styles/hooks/regular-image.module.css";
import {ICustomImage} from "@/types/hooks/custom-image";
import {lazyLoading} from "@/utils/lazy-loading";

/**
 * Because of the disadvantage of tag <Image> from NextJS namely adaptation resizing, that component
 * helps eliminate this disadvantage. In order to change width and height
 * you need to provide width and height css rules inside {uniqueClassName}
 * that you passed with "!important" option
 * @param {src} src is the source of image
 * @param {alt} alt is the alternative text if image cannot load
 * @param {width} width is the default width of the image
 * @param {height} heigth is the default height of the image
 * @param {uniqueClassName} unique class name in order to control css of element,
 * adaptation for example
 * @return {JSX.Element}
 */
const RegularImage = ({src, alt, width, height,
  uniqueClassName, sizes, quality=100}: ICustomImage)
  : JSX.Element => {
  return (
    <div className={`${styles.wrapper} ${uniqueClassName}`}>
      {/* no error here, because function {lazyLoading} returns string
      and {placeholder} requires to be string*/}
      {/* https://www.youtube.com/shorts/AT70PVbdfBI */}
      {/* @ts-ignore */}
      <Image placeholder={lazyLoading(width, height)} className={styles.image}
        src={src} alt={alt} sizes={sizes} quality={quality}
        fill={width && height ? false : true} width={width} height={height}/>
    </div>
  );
};

export default RegularImage;
