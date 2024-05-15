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

const Home = () => {
  const [currentPage, setCurrentPage] = useState<string>(PORTFOLIO_PAGES.PORTFOLIO);
  const [currentGenre, setCurrentGenre] = useState<string>("");
  const [animationGoes, setAnimationGoes] = useState<boolean>(false);
  const mainControls = useAnimationControls();

  // animation controls
  useEffect(() => {
    mainControls.start("visible");
  // it is supposed to be this way, because it needs to run only once
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkAnimation = (value: string) => {
    if (!animationGoes) {
      handleChange(value);
    }
  };

  const handleChange = (value: string) => {
    setAnimationGoes(true);
    mainControls.start("hidden");
    setTimeout(() => {
      setCurrentPage(value);
      mainControls.start("visible");
    }, 600);
    setAnimationGoes(false);
  };

  return (
    <div className={styles.portfolio}>
      <div className={styles.headerAndBackGroundText}>
        <div className={styles.controls}>
          <PortfolioHeader currentPage={currentPage}
            currentGenre={currentGenre} setCurrentGenre={setCurrentGenre}
            mainControls={mainControls} checkAnimation={checkAnimation}/>
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
        {currentPage === PORTFOLIO_PAGES.PORTFOLIO &&
          <ImagesGallery images={ALL_IMAGES} />
        }
        {currentPage === PORTFOLIO_PAGES.LOCATIONS &&
          <Locations />
        }
      </AnimOpcY>
    </div>
  );
};

export default Home;
