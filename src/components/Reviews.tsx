"use client";

import React, {useState, useEffect} from "react";
import CustomHeader from "@/hooks/CustomHeader";
import {LIST_OF_REVIEWS} from "@/constants/reviews";
import styles from "@/styles/components/reviews.module.css";
import ButtonSwitch from "@/UI's/buttons/buttons-switch/ButtonSwitch";
import CustomImageAnim from "@/hooks/CustomImageAnim";
import {useAnimationControls} from "framer-motion";
import AnimOpcY from "@/animations/AnimOpcY";

const Reviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const reviewControls = useAnimationControls();

  useEffect(() => {
    reviewControls.start("visible");
  }, []);

  const Previous = () => {
    if (currentIndex > 0) {
      reviewControls.start("hidden");
      setTimeout(() => {
        setCurrentIndex(currentIndex - 1);
        reviewControls.start("visible");
      }, 600);
    }
  };

  const Next = () => {
    if (currentIndex < LIST_OF_REVIEWS.length - 1) {
      reviewControls.start("hidden");
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
        reviewControls.start("visible");
      }, 600);
    }
  };

  const currentReview = LIST_OF_REVIEWS[currentIndex];
  const currentImage = currentReview.images[currentIndex];

  return (
    <AnimOpcY
      mainControls={reviewControls}
      yStart={-10}
      delay={0}
      uniqueClassName={styles.reviews}
    >
      <div>
        <div className={styles.header}>
          <CustomHeader headerType={"h3"} isYMoves={true}>
              Слова
          </CustomHeader>
          <CustomHeader headerType={"h3"} isYMoves={false}>
              вдячностi
          </CustomHeader>
          <CustomHeader headerType={"h3"} isYMoves={true}>
            {currentReview.name}
          </CustomHeader>
          <div className={styles.switchButtons}>
            <ButtonSwitch widthStar={13} orientation={"left"} action={Previous} />
            {currentIndex + 1}/{LIST_OF_REVIEWS.length}
            <ButtonSwitch widthStar={13} orientation={"right"} action={Next} />
          </div>
        </div>
        <div className={styles.comment}>{currentReview.comment}</div>
        <div className={styles.photo}>
          <CustomImageAnim uniqueClassName={styles.images} src={currentImage} alt={"Фото"}
            width={748} height={1202}/>
          <CustomImageAnim uniqueClassName={styles.images} src={currentImage} alt={"Фото"}
            width={748} height={1202}/>
        </div>
      </div>
    </AnimOpcY>
  );
};

export default Reviews;
