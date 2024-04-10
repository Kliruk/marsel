"use client";

import React, {useEffect, useState} from "react";
import styles from "@/styles/components/service.module.css";
import {IData, IService} from "@/types/service";
import {LIST_OF_SERVICES, SERVICES} from "@/constants/constants";
import CustomHeader from "@/hooks/CustomHeader";
import CustomImageAnim from "@/hooks/CustomImageAnim";
import ButtonSquared from "@/UI's/buttons/buttons-links/ButtonSquared";
import ListScrollContainer from "@/UI's/ListScrollContainer";
import {motion, useAnimationControls} from "framer-motion";

const Service = ({currentService}: IService) => {
  const service: Record<string, any> = SERVICES;
  const [prevService, setPrevService] = useState<string>(LIST_OF_SERVICES[2]);
  const data : IData = service[prevService];
  const mainControl = useAnimationControls();

  useEffect(() => {
    if (currentService != LIST_OF_SERVICES[2] || prevService != LIST_OF_SERVICES[2]) {
      mainControl.start("hidden");
      setTimeout(() => {
        setPrevService(currentService);
        mainControl.start("visible");
      }, 600);
    }
  }, [currentService, mainControl]);

  return (
    <motion.div
      className={styles.service}
      variants={{
        hidden: {opacity: 0, y: -10},
        visible: {opacity: 1, y: 0},
      }}
      animate={mainControl}
      transition={{
        duration: .3,
        ease: "easeIn",
      }}
    >
      <div className={styles.descriptionBlock}>
        <CustomImageAnim uniqueClassName={styles.image}
          src={"/photo/about-me/aboutme-coupleWithDonut-q20.webp"} alt={"Портрет"}
          width={651} height={1044} />
        <div className={styles.description}>
          <CustomHeader headerType={"h4"} isYMoves={false}>
            {data.header}
          </CustomHeader>
          <p className={`${styles.descriptionText} paragraphTypical`}>{data.description}</p>
          <ButtonSquared text={"ПОРТФОЛІО"} link={"/portfolio"} type={"none"} widthStar={12} />
        </div>
      </div>
      <div className={styles.advantagesBlock}>
        <div className={styles.advantages}>
          <div className={styles.advantagesBlockHeader}>
            <CustomHeader headerType={"h4"} isYMoves={false}>
              ЕКСКЛЮЗИВНА
            </CustomHeader>
            <CustomHeader headerType={"h4"} isYMoves={false}>
              Пропозиція
            </CustomHeader>
          </div>
          <ListScrollContainer uniqueClassName={styles.exclusiveScrollContainer}
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
            <ListScrollContainer uniqueClassName={styles.moreScrollContainer}
              data={data.more} />
          </div>
        </div>
      }
    </motion.div>
  );
};

export default Service;
