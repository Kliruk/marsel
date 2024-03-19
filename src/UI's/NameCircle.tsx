import {ICircle} from "@/types/circle";
import styles from "@/styles/nameCircle.module.css";
import Image from "next/image";
import React from "react";

const NameCircle = ({text, height, width} : ICircle) => {
  return (
    <div className={styles.nameCircle}>
      <p className={styles.text}>{text}</p>
      <Image className={styles.circle} src={"/MargaritaTkachukCircle.svg"}
        alt="Коло" width={width} height={height}/>
    </div>
  );
};

export default NameCircle;
