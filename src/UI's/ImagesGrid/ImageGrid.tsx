import React from "react";
import styles from "@/styles/ui's/image-grid.module.css";
import {INSTAGRAM, TELEGRAM} from "@/constants/urls";
import ButtonRounded from "../buttons/buttons-links/ButtonRounded";
import {IImageGrid} from "@/types/ui/image-grid";

const ImageGrid = ({isContact=false, refTrans, image} : IImageGrid) => {
  return (
    <div className={styles.imageGrid}>
      <div className={styles.imageContainer}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          ref={refTrans}
          src={image}
          style={{width: "100%", height: "auto"}}
          alt="Роботи фотографині"/>
        {isContact &&
        <div className={styles.fadeOut}></div>
        }
      </div>
      {isContact &&
    <div className={styles.contact}>
      <div className={styles.text}>
        <p className={styles.header}>Сподобались<br />роботи?</p>
        <p className="paragraphTypical">Напишіть мені та ми створимо історію,
          що буде захоплювати інших</p>
      </div>
      <div className={styles.buttons}>
        <ButtonRounded uniqueClassName={styles.instagram} type="big" widthStar={13}
          starAnimationDelayMin={.8} text="inst" link={INSTAGRAM}/>
        <ButtonRounded uniqueClassName={styles.telegram} type="big" widthStar={13}
          starAnimationDelayMin={.7} text="tlgr" link={TELEGRAM}/>
      </div>
    </div>
      }
    </div>
  );
};

export default ImageGrid;
