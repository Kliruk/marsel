import RegularImage from "@/hooks/RegularImage";
import {IImageFromGridGallery} from "@/types/ui/ImagesGrid/image-from-grid-gallery";
import styles from "@/styles/ui's/image-from-grid-gallery.module.css";
import React from "react";
import ButtonRounded from "../buttons/buttons-links/ButtonRounded";
import {INSTAGRAM, TELEGRAM} from "@/constants/urls";

const ImageFromGridGallery = ({image, dimensions, isContact} : IImageFromGridGallery) => {
  return (
    <>
      <div className={styles.imageContainer}>
        <RegularImage
          uniqueClassName={isContact ? styles.imageBlur : styles.image}
          src={image}
          alt={"Робота фотографині"}
          sizes={"426px"}
          width={426}
          height={dimensions ? dimensions.height : 680}
        />
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
    </>
  );
};

export default ImageFromGridGallery;
