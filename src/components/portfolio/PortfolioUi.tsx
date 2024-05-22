import AnimOpcY from "@/animations/AnimOpcY";
import {CHAPTER_PARAM_NAME_DEFAULT} from "@/constants/default-values";
import {CHAPTER_PORTFOLIO_VALUE, CHAPTER_LOCATIONS_VALUE, ALL_IMAGES} from "@/constants/portfolio";
import BackgroundText from "@/hooks/BackgroundText";
import React, {useEffect} from "react";
import ImagesGallery from "../ImagesGallery";
import Locations from "../Locations";
import PortfolioHeader from "../PortfolioHeader";
import styles from "@/styles/pages/portfolio.module.css";
import {IPortfolioUi} from "@/types/components/portfolio/portfolio-ui";
import {shuffleArray} from "@/utils/services";


const PortfolioUi = ({mainControls, currentGenreName, chaptersWasTriggered,
  genresWasTriggered, currentChapter, shuffledImages, setShuffledImages, returnGenre,
  currentGenreParam}: IPortfolioUi) => {
  useEffect(() => {
    console.log(currentGenreParam);
    if (!currentGenreParam) {
      setShuffledImages(shuffleArray(ALL_IMAGES));
    } else {
      returnGenre(currentGenreParam, "param");
    }
  }, []);

  return (
    <div className={styles.portfolio}>
      <div className={styles.headerAndBackGroundText}>
        <div className={styles.controls}>
          <PortfolioHeader
            mainControls={mainControls} currentGenre={currentGenreName}
            triggerAnimation={chaptersWasTriggered} triggerGenres={genresWasTriggered}
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
            <ImagesGallery images={shuffledImages} />
        }
        {currentChapter === CHAPTER_LOCATIONS_VALUE &&
            <Locations />
        }
      </AnimOpcY>
    </div>
  );
};

export default PortfolioUi;
