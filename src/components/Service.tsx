"use client";

import React, {useEffect, useState} from "react";
import styles from "@/styles/components/service.module.css";
import {IData, IService} from "@/types/components/service";
import {LIST_OF_SERVICES, SERVICES} from "@/constants/services";
import CustomHeader from "@/hooks/CustomHeader";
import CustomImageAnim from "@/hooks/CustomImageAnim";
import ButtonSquared from "@/UI's/buttons/buttons-links/ButtonSquared";
import ScrollContainer from "@/UI's/ScrollContainer";
import {useAnimationControls} from "framer-motion";
import AnimOpcY from "@/animations/AnimOpcY";

const Service = ({currentService}: IService) => {
  const service: Record<string, any> = SERVICES;
  const [prevService, setPrevService] = useState<string>(LIST_OF_SERVICES[2]);
  const data : IData = service[prevService];
  const mainControl = useAnimationControls();

  useEffect(() => {
    if ((currentService != LIST_OF_SERVICES[2] || prevService != LIST_OF_SERVICES[2]) &&
      (currentService != prevService)) {
      mainControl.start("hidden");
      setTimeout(() => {
        setPrevService(currentService);
        mainControl.start("visible");
      }, 600);
    }
    // no error, it is just no need to run useEffect on prevService
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentService, mainControl]);

  useEffect(() => {
    mainControl.start("visible");
  }, []);

  return (
    <AnimOpcY
      mainControls={mainControl}
      yStart={-10}
      delay={0}
      uniqueClassName={styles.service}
    >
      <div className={styles.descriptionBlock}>
        <CustomImageAnim uniqueClassName={styles.image}
          src={"/photo/about-me/aboutme-coupleWithDonut-q20.webp"} alt={"Портрет"}
          width={651} height={1044} />
        <div className={styles.description}>
          <div className={styles.descriptionHeader}>
            <CustomHeader headerType={"h4"} isYMoves={false}>
              {data.header}
            </CustomHeader>
          </div>
          <p className={`${styles.descriptionText} paragraphTypical`}>{data.description}</p>
          <ButtonSquared text={"ПОРТФОЛІО"} link={"/portfolio"} type={"none"} widthStar={12} />
        </div>
      </div>
      <div className={styles.advantagesBlock}>
        <div className={styles.advantages}>
          <div className={styles.headerAndQuickAdvantages}>
            <div className={styles.advantagesBlockHeader}>
              <CustomHeader headerType={"h4"} isYMoves={false}>
                ЕКСКЛЮЗИВНА
              </CustomHeader>
              <CustomHeader headerType={"h4"} isYMoves={false}>
                Пропозиція
              </CustomHeader>
            </div>
            <div className={styles.quickAdvantages}>
              <p className={styles.price}>{data.mainadvantages.price}uah</p>
              <p className={styles.durationService}>{data.mainadvantages.duration}</p>
            </div>
          </div>
          <ScrollContainer uniqueClassName={styles.exclusiveScrollContainer}
            data={data.advantages} />
          <ButtonSquared text={"ЗАМОВИТИ"} link={"#contacts"} type={"none"} widthStar={12} />
        </div>
        <CustomImageAnim uniqueClassName={styles.image}
          src={"/photo/about-me/aboutme-coupleWithDonut-q20.webp"} alt={"Портрет"}
          width={651} height={1044} />
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
            <ScrollContainer uniqueClassName={styles.moreScrollContainer}
              data={data.more} />
          </div>
        </div>
      }
    </AnimOpcY>
  );
};

export default Service;
