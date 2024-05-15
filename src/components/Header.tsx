import React from "react";
import styles from "@/styles/components/header.module.css";
import CustomImageAnim from "@/hooks/CustomImageAnim";
import NameCircle from "@/UI's/NameCircle";
import ButtonScroll from "@/UI's/buttons/buttons-scrolls/ButtonScroll";
import CustomHeader from "@/hooks/CustomHeader";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.textAndDoublePhoto}>
        <div className={`block ${styles.textAndPhoto}`}>
          <CustomHeader headerType="h2" isYMoves={true} delay={0}>
            PHOTO&VIDEO
          </CustomHeader>
          <div className={styles.headerPartWithDescr}>
            <CustomHeader headerType="h2" isYMoves={true} delay={0}>
              MAKER
            </CustomHeader>
            <p className={`paragraphTypical text-left ${styles.descr}`}>
              Мої кадри - це поєднання технічної майстерності, естетичного сприйняття та
              глибокого розуміння емоцій, що робить кожен проєкт унікальним</p>
          </div>
        </div>
        <div className={styles.rightDoublePhoto}>
          <div className={styles.doublePhoto}>
            <CustomImageAnim src="/photo/header/header-DRMargo-q8.1.webp"
              uniqueClassName={styles.doubleLeftPhoto}
              alt="Замовниця" width={236} height={355}
              sizes="(min-width: 1440px) 236px, (min-width: 700px)
                calc(50vw - 59px), calc(46.32vw - 22px)" />
            <CustomImageAnim src="/photo/header/header-DLMargo-q8.4.webp"
              uniqueClassName={styles.doubleRightPhoto}
              alt="Замовниця" width={211} height={316}
              sizes="(min-width: 1600px) 211px, (min-width: 700px)
                calc(50vw - 59px), calc(46.32vw - 22px)"/>
          </div>
          <p className={styles.backgroundTextDP}>MARG<br />ARITA</p>
        </div>
      </div>
      <div className={styles.photoAndCircleArrow}>
        <CustomImageAnim src="/photo/header/header-LMargo-q10.webp"
          uniqueClassName={styles.mainPhoto}
          alt="Замовниця" width={662} height={400}
          sizes="(min-width: 1220px) 662px, 534px" />
        <div className={styles.circleAndArrow}>
          <NameCircle text={new Date().getFullYear()} size={132}
            uniqueClassName={styles.nameCircle}/>
          <ButtonScroll scrollTo="#aboutme"
            size={132} widthArrow={50} widthStar={12} orientation="downward"
            uniqueClassName={styles.headerArrow} uniqueClassNameArrow={styles.headerArrowArrow}
            starAnimationDelayMin={1} star={false} />
        </div>
      </div>
      <div id="aboutme"></div>
    </div>
  );
};

export default Header;
