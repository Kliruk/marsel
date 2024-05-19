"use client";

import React, {useEffect, useState} from "react";
import styles from "@/styles/pages/portfolio.module.css";
import {PORTFOLIO_PAGES} from "@/constants/portfolio";
import BackgroundText from "@/hooks/BackgroundText";
import {ALL_IMAGES} from "@/constants/images-portfolio";
import ImagesGallery from "@/components/ImagesGallery";
import Locations from "@/components/Locations";
import PortfolioHeader from "@/components/PortfolioHeader";
import {useAnimationControls} from "framer-motion";
import AnimOpcY from "@/animations/AnimOpcY";
import {updateParams} from "@/utils/params";
import {useSearchParams} from "next/navigation";

const Home = () => {
  const searchParam = useSearchParams();
  const chaptersParam = "c";
  const [currentGenre, setCurrentGenre] = useState<string>("");
  const [currentChapter, setCurrentChapter] = useState(
      PORTFOLIO_PAGES.find(
          (v) => v.param === searchParam.get(chaptersParam)) || PORTFOLIO_PAGES[0]
  );
  const [animationGoes, setAnimationGoes] = useState<boolean>(false);
  const mainControls = useAnimationControls();

  // animation controls
  useEffect(() => {
    mainControls.start("visible");
  // it is supposed to be this way, because it needs to run only once
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkForAnimationGoes= (value: string) => {
    if (!animationGoes) {
      handleChange(value);
    }
  };

  const handleChange = (value: string) => {
    setAnimationGoes((prev) => !prev);
    mainControls.start("hidden");
    setTimeout(() => {
      setCurrentChapter(PORTFOLIO_PAGES.find((v) => v.name === value) || PORTFOLIO_PAGES[0]);
      updateParams(chaptersParam,
          (PORTFOLIO_PAGES.find((v) => v.name === value) || PORTFOLIO_PAGES[0]).param,
          searchParam);
      mainControls.start("visible");

      setAnimationGoes((prev) => !prev);
    }, 600);
  };


  return (
    <div className={styles.portfolio}>
      <div className={styles.headerAndBackGroundText}>
        <div className={styles.controls}>
          <PortfolioHeader currentChapter={currentChapter.name}
            currentGenre={currentGenre} setCurrentGenre={setCurrentGenre}
            mainControls={mainControls} checkForAnimationGoes={checkForAnimationGoes}
            currentChapterText={currentChapter.text}/>
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
        {currentChapter.param === "p" &&
          <ImagesGallery images={ALL_IMAGES} />
        }
        {currentChapter.param === "l" &&
          <Locations />
        }
      </AnimOpcY>
    </div>
  );
};

export default Home;
