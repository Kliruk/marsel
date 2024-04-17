import React from "react";
import styles from "@/styles/components/advantages.module.css";
import CustomImageAnim from "@/hooks/CustomImageAnim";
import BackgroundText from "@/hooks/BackgroundText";
import CustomHeader from "@/hooks/CustomHeader";


/* поправити відступи по сторонам в адаптації комп'ютер - планшет */


const Advantages = () => {
  return (
    <div className={styles.main}>
      <div className={styles.headerAndFirstAdv}>
        <BackgroundText uniqueClassName={`${styles.backText} ${styles.backTextHistory}`}
          delay={.1} isYMoves={false}>
          IСТ<br />ОРII
        </BackgroundText>
        <div className={styles.firstAdvAndPhoto}>
          <div className={`${styles.photoAndNum} ${styles.firstPhotoAndNum}`}>
            <CustomImageAnim uniqueClassName={styles.firstPhoto} src={"/photo/test.jpg"}
              alt={"Стояння на гводзях"} width={519} height={828} />
            <p className={styles.bigNum}>1</p>
          </div>
          <p className={styles.firstAdv}>Індивідуальний підхід та створення креативних рішень</p>
        </div>

        <div className={styles.headerAndPhoto}>
          <div className={`${styles.headerAdvantages} ${styles.header}`}>
            <CustomHeader headerType={"h3"} isYMoves={true}>ПЕРЕВАГИ</CustomHeader>
            <CustomHeader headerType={"h3"} isYMoves={false}>РОБОТИ</CustomHeader>
            <CustomHeader headerType={"h3"} isYMoves={true}>ЗI МНОЮ</CustomHeader>
          </div>
          <div className={`${styles.secondPhotoAndNum} ${styles.photoAndNum}`}>
            <CustomImageAnim uniqueClassName={styles.secondPhoto} src={"/photo/test.jpg"}
              alt={"Портрет"} width={519} height={828} />
            <p className={styles.bigNum}>1</p>
          </div>
        </div>
      </div>
      <div className={styles.secondThirdAdv}>
        <BackgroundText uniqueClassName={`${styles.backText} ${styles.backTextMoments}`}
          delay={.1} isYMoves={false}>
          МОМ<br />ЕНТИ
        </BackgroundText>
        <BackgroundText uniqueClassName={`${styles.backText} ${styles.backTextMemories}`}
          delay={.1} isYMoves={false}>
          СПО<br />ГАДИ
        </BackgroundText>
        <div className={styles.thirdAdvAndPhoto}>
          <div className={`${styles.thirdPhotoAndNum} ${styles.photoAndNum}`}>
            <CustomImageAnim uniqueClassName={styles.thirdPhoto} src={"/photo/test.jpg"}
              alt={"Портрет"} width={513} height={818} />
            <p className={styles.bigNum}>2</p>
          </div>
          <p className={styles.thirdAdv}>Організація та планування зйомки</p>
        </div>

        <div className={styles.secondAdvAdnPhoto}>
          <BackgroundText uniqueClassName={`${styles.backText} ${styles.backTextFeelings}`}
            delay={.1} isYMoves={false}>
          ПОЧУ<br />ТТЯ
          </BackgroundText>
          <p className={styles.secondAdv}>Повний спектр послуг по створенню контенту
            та його оптимізації</p>
          <div className={`${styles.fourthPhotoAndNum} ${styles.photoAndNum}`}>
            <CustomImageAnim uniqueClassName={styles.fourthPhoto} src={"/photo/test.jpg"}
              alt={"Портрет"} width={513} height={818} />
            <p className={styles.bigNum}>3</p>
          </div>
        </div>
      </div>
      <div className={`${styles.lastPhotoAndText} ${styles.photoAndNum}`}>
        <BackgroundText uniqueClassName={`${styles.backText} ${styles.backTextMarselin}`}
          delay={.1} isYMoves={false}>
          MARS<br />ELIN
        </BackgroundText>
        <div className={`${styles.lastPhotoAndNum} ${styles.photoAndNum}`}>
          <CustomImageAnim uniqueClassName={styles.lastPhoto} src={"/photo/test.jpg"}
            alt={"Декорації"} width={513} height={818} />
          <p className={styles.bigNum}>3</p>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
