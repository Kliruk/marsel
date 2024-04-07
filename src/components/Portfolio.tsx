import React from "react";
import styles from "@/styles/components/portfolio.module.css";
import CustomHeader from "@/hooks/CustomHeader";
import ButtonRounded from "@/UI's/buttons/buttons-links/ButtonRounded";
import CustomImageAnim from "@/hooks/CustomImageAnim";

const Portfolio = () => {
  return (
    <div className={styles.portfolio}>
      <div className={styles.headers}>
        <CustomHeader headerType="h1" isYMoves={true} delay={.1}>
        МИСТЕЦТВО
        </CustomHeader>
        <CustomHeader headerType="h1" isYMoves={true} delay={.2}>
        МОМЕНТIВ
        </CustomHeader>
      </div>
      <p className={`paragraphTypical ${styles.paragraph}`}>Кожен мій кадр - це окрема історія, а
        кожна фотографія - це краплинка емоції та почуттів </p>
      <ButtonRounded text={"портфолiо"} link={"/portfolio"} type={"small"} widthStar={12} />
      <div className={styles.gridAndBacktext}>
        <div className={styles.gridWithPhotos}>
          <CustomImageAnim uniqueClassName={styles.leftTopPhoto}
            src={"/photo/portfolio/portfolio-TLWithDog-q31.1.webp"} alt={"Дівчина з песиком"}
            width={772} height={1155} />
          <CustomImageAnim uniqueClassName={styles.rightTopPhoto}
            src={"/photo/portfolio/portfolio-TRAnna-q58.webp"} alt={"Дівчина з квіточкою"}
            width={772} height={1155} />
          <CustomImageAnim uniqueClassName={styles.leftBottomPhoto}
            src={"/photo/test.jpg"} alt={"Портрет"}
            width={772} height={677} />
          <CustomImageAnim uniqueClassName={styles.leftBottomPhoto}
            src={"/photo/portfolio/portfolio-BRGirlInForest-q47.9.webp"} alt={"Портрет"}
            width={772} height={677} />
        </div>
        <p className={styles.backText}>PORT<br/>RET</p>
      </div>
    </div>
  );
};

export default Portfolio;
