import React from "react";
import styles from "@/styles/components/service.module.css";
import {IData, IService} from "@/types/service";
import {SERVICES} from "@/constants/constants";
import CustomImageAnim from "@/hooks/CustomImageAnim";
import CustomHeader from "@/hooks/CustomHeader";
import ButtonSquared from "@/UI's/buttons/buttons-links/ButtonSquared";

const Service = ({currentService}: IService) => {
  const service: Record<string, any> = SERVICES;
  const data: IData = service[currentService];

  return (
    <div>
      <div className={styles.descriptionBlock}>
        <CustomImageAnim uniqueClassName={styles.image}
          src={"/photo/about-me/aboutme-coupleWithDonut-q20.webp"} alt={"Портрет"}
          width={651} height={1044} />
        <div className={styles.description}>
          <CustomHeader headerType={"h4"} isYMoves={false}>
            {data.header}
          </CustomHeader>
          <p className={styles.descriptionText}>{data.description}</p>
          <ButtonSquared text={"ПОРТФОЛІО"} link={"/portfolio"} type={"none"} widthStar={12} />
        </div>
      </div>
      <div className={styles.advantagesBlock}>
        <CustomImageAnim uniqueClassName={styles.image}
          src={"/photo/about-me/aboutme-coupleWithDonut-q20.webp"} alt={"Портрет"}
          width={651} height={1044} />
        <div className={styles.advantages}>
          <div className={styles.advantagesBlockHeader}>
            <CustomHeader headerType={"h4"} isYMoves={false}>
              ЕКСКЛЮЗИВНА
            </CustomHeader>
            <CustomHeader headerType={"h4"} isYMoves={false}>
              Пропозиція
            </CustomHeader>
          </div>
          <p>SCROLL</p>
          <ButtonSquared text={"ЗАМОВИТИ"} link={"#contacts"} type={"none"} widthStar={12} />
        </div>
      </div>
      {data.more &&
        <div className={styles.moreBlock}>
          <CustomImageAnim uniqueClassName={styles.image}
            src={"/photo/about-me/aboutme-coupleWithDonut-q20.webp"} alt={"Портрет"}
            width={651} height={1044} />
          <div className={styles.moreTextBlock}>
            <CustomHeader headerType={"h4"} isYMoves={false}>
              Детальніше
            </CustomHeader>
            <p>SCROLL</p>
          </div>
        </div>
      }
    </div>
  );
};

export default Service;
