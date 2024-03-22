import React from "react";
import styles from "@/styles/components/about-me.module.css";
import CustomImageAnim from "@/hooks/CustomImageAnim";
import BackgroundCircle from "@/hooks/BackgroundCircle";
import BackgroundText from "@/hooks/BackgroundText";

const AboutMe = () => {
  return (
    <div className={styles.aboutMe}>
      <div className={styles.photoForMeSection}>
        <div className={styles.photoForMe__leftTextRightPhoto}>
          <div className={styles.photoForMe__HeaderWithText}>
            <p className={styles.photoForMe__Header}>Фотографія для мене -
              це спосіб виразити свою творчість</p>
            <p className={`paragraphSmaller ${styles.photoForMe__comment}`}>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              та взаємодії зі світом через об'єктив камери.</p>
          </div>
          <CustomImageAnim uniqueClassName={styles.photoForMe__coupleCandy}
            src={"/photo/aboutme-coupleInGrass-q28.7.webp"}
            alt={"Фотографія закоханих"} width={726} height={884} />
        </div>
        <BackgroundCircle size={875} uniqueClassName={styles.photoForMe__backgroundCircle} />
      </div>
      <div className={styles.myPassionSection}>
        <div className={styles.myPassionSection__HeaderWithText}>
          <p className={styles.myPassion__Header}>Моя пристрасть до фотографії полягає у
            тому, щоб зачаровувати деталями і передати унікальний погляд на кожну подію</p>
          <p className={`paragraphSmaller ${styles.myPassion__comment}`}>
            Я вірю, що кожен момент має свою власну красу</p>
        </div>
        <BackgroundText size="big" uniqueClassName={styles.myPassion__leftBackText}>
          LOVE<br />STORY
        </BackgroundText>
        <BackgroundText size="big" uniqueClassName={styles.myPassion__rightBackText}>
          LOVE<br />STORY
        </BackgroundText>
      </div>
      <div className={styles.finalSection}>
        <div className={styles.finalSection__leftTextRightPhoto}>
          <div className={styles.finalSection__HeaderWithText}>
            <p className={styles.finalSection__Header}>Кожен раз я намагаюся зафіксувати цю
             красу в кожній своїй роботі</p>
            <p className={`paragraphSmaller ${styles.finalSection__comment}`}>- Маргарита Ткачук</p>
          </div>
          <CustomImageAnim uniqueClassName={styles.finalSection__coupleCandy}
            src={"/photo/aboutme-coupleWithDonut-q20.webp"}
            alt={"Фотографія закоханих"} width={726} height={884} />
        </div>
        <BackgroundCircle size={875} uniqueClassName={styles.finalSection__backgroundCircle} />
      </div>
    </div>
  );
};

export default AboutMe;
