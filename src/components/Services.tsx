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
          <CustomHeader delay={0.1} headerType={"h3"} isYMoves={true}>
            Оберiть вашу
          </CustomHeader>
          <CustomHeader delay={0.1} headerType={"h3"} isYMoves={false}>
            Iсторiю
          </CustomHeader>
        </div>
        <BackgroundText duration={1} delay={0}
          uniqueClassName={styles.backTextMoments} >
          Моментiв
        </BackgroundText>
        <BackgroundText delay={.2} uniqueClassName={styles.backTextMagic} >
          магiя
        </BackgroundText>
      </div>
      <ListAndService />
    </div>
  );
};

export default Services;
