import {ICircle} from "@/types/circle";
import styles from "@/styles/ui's/nameCircle.module.css";
import Image from "next/image";
import React from "react";

const NameCircle = ({text, size} : ICircle) => {
  return (
    <div className={styles.nameCircle} style={{width: size, height: size}}>
      <p className={styles.text}>{text}</p>
      <Image className={styles.circle} src={"/MargaritaTkachukCircle.svg"}
        alt="Коло" fill sizes="100%"/>
    </div>
  );
};

export default NameCircle;
