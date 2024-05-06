"use client";

import React, {useState, useEffect} from "react";
import CustomHeader from "@/hooks/CustomHeader";
import {LIST_OF_REVIEWS} from "@/constants/reviews";
import styles from "@/styles/components/reviews.module.css";
import ButtonSwitch from "@/UI's/buttons/buttons-switch/ButtonSwitch";
import CustomImageAnim from "@/hooks/CustomImageAnim";
import {useAnimationControls} from "framer-motion";
import AnimOpcY from "@/animations/AnimOpcY";
import BackgroundText from "@/hooks/BackgroundText";

const Reviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [animationGoes, setAnimationGoes] = useState<boolean>(false);
  const mainControls = useAnimationControls();

  useEffect(() => {
    mainControls.start("visible");
  // it is supposed to be this way, because it needs to run only once
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const Previous = () => {
    if (currentIndex > 0 && !animationGoes) {
      changeIndex("-");
    }
  };

  const Next = () => {
    if (currentIndex < LIST_OF_REVIEWS.length - 1 && !animationGoes) {
      changeIndex("+");
    }
  };

  const changeIndex = (how: "+" | "-") => {
    setAnimationGoes(true);
    mainControls.start("hidden");
    setTimeout(() => {
      if (how === "-") {
        setCurrentIndex(currentIndex - 1);
      } else if (how === "+") {
        setCurrentIndex(currentIndex + 1);
      }

      mainControls.start("visible");
    }, 600);
    setAnimationGoes(false);
  };

  const currentReview = LIST_OF_REVIEWS[currentIndex];

  return (
    <div className={styles.reviews}>
      <BackgroundText size="big" uniqueClassName={styles.backTextReviews} isYMoves={false}>
        ВIДГ<br />УКИ
      </BackgroundText>
      <BackgroundText size="big" uniqueClassName={styles.backTextMemories} isYMoves={false}>
        СПОГ<br />АДИ
      </BackgroundText>
      <div className={styles.headerAndSwitches}>
        <div className={styles.header}>
          <AnimOpcY mainControls={mainControls} delay={.1}
            duration={.25}>
            <CustomHeader headerType={"h3"} isYMoves={true}>
              Слова
            </CustomHeader>
          </AnimOpcY>
          <AnimOpcY mainControls={mainControls} delay={.15}
            duration={.25}>
            <CustomHeader headerType={"h3"} isYMoves={false}>
              вдячностi
            </CustomHeader>
          </AnimOpcY>
          <AnimOpcY mainControls={mainControls} delay={.2}
            duration={.25}>
            <CustomHeader headerType={"h3"} isYMoves={true}>
              {currentReview.name}
            </CustomHeader>
          </AnimOpcY>
        </div>
        <div className={styles.switchButtonsAndCount}>
          <ButtonSwitch widthStar={13} orientation={"left"} action={Previous}
            starAnimationDelayMin={.8} />
          <p className={styles.count}>
            {currentIndex + 1}
            <span className={styles.countMaxLength}>/{LIST_OF_REVIEWS.length}</span>
          </p>
          <ButtonSwitch widthStar={13} orientation={"right"} action={Next}
            starAnimationDelayMin={.8} />
        </div>
      </div>
      <AnimOpcY mainControls={mainControls} yStart={10} delay={.25} duration={.25}
        uniqueClassName={styles.commentAnim}>
        <p className={styles.comment}>{currentReview.comment}</p>
      </AnimOpcY>
      <AnimOpcY mainControls={mainControls} delay={.3} duration={.25}
        uniqueClassName={styles.imagesAnim}>
        <div className={styles.images}>
          <CustomImageAnim uniqueClassName={styles.leftImage} src={currentReview.images[0]}
            alt={"Фото"}
            width={748} height={1202} />
          <CustomImageAnim uniqueClassName={styles.rightImage} src={currentReview.images[1]}
            alt={"Фото"} width={764} height={1133} />
        </div>
      </AnimOpcY>
    </div>
  );
};

export default Reviews;
