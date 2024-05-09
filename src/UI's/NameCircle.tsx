import {ICircle} from "@/types/ui/circle";
import styles from "@/styles/ui's/nameCircle.module.css";
import Image from "next/image";
import React from "react";


/**
 * Retrun rotating circle with text in it
 * @param {text} text inside the circle
 * @param {size} size of circle
 * @return {JSX.Element}
 */
const NameCircle = ({text, size, uniqueClassName} : ICircle): JSX.Element => {
  return (
    <div className={`${styles.nameCircle} ${uniqueClassName}`} style={{width: size, height: size}}>
      <p className={styles.text}>{text}</p>
      <Image className={styles.circle} src={"/svg/MargaritaTkachukCircle.svg"}
        alt="Коло" fill sizes="100%"/>
    </div>
  );
};

export default NameCircle;
