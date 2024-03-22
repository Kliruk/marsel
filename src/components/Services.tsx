import React from "react";
import styles from "@/styles/components/services.module.css";
import CustomHeader from "@/hooks/CustomHeader";
import BackgroundText from "@/hooks/BackgroundText";
import {ListAndService} from ".";

const Services = () => {
  return (
    <div className={styles.prices}>
      <div className={styles.headerWithBackText}>
        <div className={styles.header}>
          <CustomHeader delay={0.1} headerType={"h3"} isYmoves={true}>
            Оберiть свою
          </CustomHeader>
          <CustomHeader delay={0.1} headerType={"h3"} isYmoves={false}>
            Естетику
          </CustomHeader>
          <CustomHeader delay={0.1} headerType={"h3"} isYmoves={true}>
            кадрів
          </CustomHeader>
        </div>
        <BackgroundText size={"big"} uniqueClassName={styles.backTextMoments} >
          Моментiв
        </BackgroundText>
        <BackgroundText size={"big"} uniqueClassName={styles.backTextMagic} >
          магiя
        </BackgroundText>
      </div>
      <ListAndService />
    </div>
  );
};

export default Services;
