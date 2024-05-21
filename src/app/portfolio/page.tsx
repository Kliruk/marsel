"use client";

import React, {useEffect, useState} from "react";
import styles from "@/styles/pages/portfolio.module.css";
import {CHAPTER_LOCATIONS_VALUE,
  CHAPTER_PORTFOLIO_VALUE, PORTFOLIO_PAGES} from "@/constants/portfolio";
import BackgroundText from "@/hooks/BackgroundText";
import {ALL_IMAGES} from "@/constants/images-portfolio";
import ImagesGallery from "@/components/ImagesGallery";
import Locations from "@/components/Locations";
import PortfolioHeader from "@/components/PortfolioHeader";
import {useAnimationControls} from "framer-motion";
import AnimOpcY from "@/animations/AnimOpcY";
import {convertToParams} from "@/utils/params";
import {useSearchParams, useRouter} from "next/navigation";
import {CHAPTER_PARAM_NAME_DEFAULT,
  PORTFOLIO_PAGES_PARAM_NAME_DEFAULT,
  PORTFOLIO_PAGES_VALUE_DEFAULT} from "@/constants/default-values";


// ПЕРЕНЕСТИ ВСЕ В Portfolio Header
const Home = () => {
  const searchParam = useSearchParams();
  const router = useRouter();
  const currentChapter = searchParam.get(CHAPTER_PARAM_NAME_DEFAULT);
  const [currentGenre, setCurrentGenre] = useState<string>("");

  const [animationGoes, setAnimationGoes] = useState<boolean>(false);
  const mainControls = useAnimationControls();

  // animation controls
  useEffect(() => {
    mainControls.start("visible");
  }, []);

  const triggerAnimation= (value: string) => {
    if (!animationGoes) {
      setAnimationGoes((prev) => !prev);
      mainControls.start("hidden");
      setTimeout(() => {
        saveChanges(value);
        mainControls.start("visible");

        setAnimationGoes((prev) => !prev);
      }, 700);
    }
  };

  const saveChanges = (value: string) => {
    const params = convertToParams(CHAPTER_PARAM_NAME_DEFAULT,
        (PORTFOLIO_PAGES.find((v) => v.name === value) || PORTFOLIO_PAGES[0]).param,
        searchParam);

    if (value === PORTFOLIO_PAGES[0].name &&
        searchParam.get(PORTFOLIO_PAGES_PARAM_NAME_DEFAULT) === null) {
      // eslint-disable-next-line max-len
      return router.push(`?${params}&${PORTFOLIO_PAGES_PARAM_NAME_DEFAULT}=${PORTFOLIO_PAGES_VALUE_DEFAULT}`, {scroll: false});
    }

    return router.push(`?${params}`, {scroll: false});
  };


  return (
    <div className={styles.portfolio}>
      <div className={styles.headerAndBackGroundText}>
        <div className={styles.controls}>
          <PortfolioHeader
            currentGenre={currentGenre} setCurrentGenre={setCurrentGenre}
            mainControls={mainControls} checkForAnimationGoes={triggerAnimation}
            chaptersParam={CHAPTER_PARAM_NAME_DEFAULT} />
        </div>
      </div>
      <BackgroundText size="regular" uniqueClassName={styles.portfolioBackText} isYMoves={false}>
          ПОРТ<br />ФОЛIО
      </BackgroundText>
      <BackgroundText size="regular" uniqueClassName={styles.momentsBackText} isYMoves={false}>
          МОМ<br />ЕНТИ
      </BackgroundText>
      <AnimOpcY mainControls={mainControls} delay={.3} duration={.25}
        uniqueClassName={styles.animDivForGallery}>
        {(currentChapter === CHAPTER_PORTFOLIO_VALUE || currentChapter === null) &&
          <ImagesGallery images={ALL_IMAGES} />
        }
        {currentChapter === CHAPTER_LOCATIONS_VALUE &&
          <Locations />
        }
      </AnimOpcY>
    </div>
  );
};

export default Home;
