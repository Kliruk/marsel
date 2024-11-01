import React from "react";
import styles from "@/styles/components/location.module.css";
import CustomHeader from "@/hooks/CustomHeader";
import {ILocation} from "@/types/components/location";
import ButtonSquared from "@/UI's/buttons/buttons-links/ButtonSquared";
import CustomImageAnim from "@/hooks/CustomImageAnim";

const Location = ({location} : ILocation) => {
  return (
    <div className={styles.location}>
      <div className={styles.topImages}>
        <CustomImageAnim src={location.images[0]} alt={"Локація"}
          width={374} height={560} uniqueClassName={`${styles.image} ${styles.imageTL}`} />
        <CustomImageAnim src={location.images[1]} alt={"Локація"}
          width={374} height={560} uniqueClassName={`${styles.image} ${styles.imageTC}`} />
        <CustomImageAnim src={location.images[2]} alt={"Локація"}
          width={374} height={560} uniqueClassName={`${styles.image} ${styles.imageTR}`} />
      </div>
      <div className={styles.header}>
        <CustomHeader headerType={"h3"} delay={.1} isYMoves={true}>
          {location.companyName}
        </CustomHeader>
        <p className={`${styles.room} paragraphTypical`}>Кімната: {location.room}</p>
        <ButtonSquared text={"Дізнатися більше"} link={location.link} type={"big"} widthStar={12} />
      </div>
      <div className={styles.bottomImagesAndAddress}>
        <div className={styles.bottomImages}>
          <CustomImageAnim src={location.images[3]} alt={"Локація"}
            width={374} height={560} uniqueClassName={`${styles.image} ${styles.imageBL}`} />
          <CustomImageAnim src={location.images[4]} alt={"Локація"}
            width={374} height={560} uniqueClassName={`${styles.image} ${styles.imageBR}`} />
        </div>
        <div className={`${styles.addresses} paragraphTypical`}>
          <p className={styles.subway}>
            <span className={styles.subwySign}>М</span>
            {location.subway}
          </p>
          <p className={styles.address}>{location.address}</p>
          <p className={styles.city}>м. {location.city}</p>
        </div>
      </div>
    </div>
  );
};

export default Location;
