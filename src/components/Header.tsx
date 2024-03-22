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
          <CustomHeader headerType="h2" isYmoves={true} delay={0}>
            PHOTO&VIDEO
          </CustomHeader>
          <div className={styles.headerPartWithDescr}>
            <CustomHeader headerType="h2" isYmoves={true} delay={0}>
              MAKER
            </CustomHeader>
            <p className={`paragraphMain text-left ${styles.descr}`}>Вже більше 5 років я знімаю
              персональні та комерційні проєкти для малого та середнього бізнесу</p>
          </div>
        </div>
        <div className={styles.rightDoublePhoto}>
          <div className={styles.doublePhoto}>
            <CustomImageAnim src="/photo/header-DLMargo-q8.4.webp"
              uniqueClassName={styles.doubleRightPhoto}
              alt="Замовниця" width={211} height={316} />
            <CustomImageAnim src="/photo/header-DRMargo-q8.1.webp"
              uniqueClassName={styles.doubleRightPhoto}
              alt="Замовниця" width={236} height={355} />
          </div>
          {/* <Image src="/photo/header-DPLMargo-~q5.webp" uniqueClassName={styles.doubleRightPhoto}
          alt="Замовниця" width={236} height={355}/> */}
          <p className={styles.backgroundTextDP}>MARG<br />ARITA</p>
        </div>
      </div>
      <div className={styles.photoAndCircleArrow}>
        <CustomImageAnim src="/photo/header-LMargo-q10.webp"
          uniqueClassName={styles.doubleRightPhoto}
          alt="Замовниця" width={662} height={400} />
        <div className={styles.circleAndArrow}>
          <NameCircle text={new Date().getFullYear()} size={132}/>
          <ButtonScroll size={132} widthArrow={50} widthStar={12} orientation="downward"
            uniqueClassName={styles.headerArrow} starAnimationDelayMin={1} star={false} />
        </div>
      </div>
    </div>
  );
};

export default Header;
