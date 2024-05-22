"use client";

import React, {useEffect, useState} from "react";
import styles from "@/styles/pages/portfolio.module.css";
import {CHAPTER_LOCATIONS_VALUE,
  CHAPTER_PORTFOLIO_VALUE, LIST_OF_GENRES, PORTFOLIO_PAGES} from "@/constants/portfolio";
import BackgroundText from "@/hooks/BackgroundText";
import {ALL_IMAGES} from "@/constants/portfolio";
import ImagesGallery from "@/components/ImagesGallery";
import Locations from "@/components/Locations";
import PortfolioHeader from "@/components/PortfolioHeader";
import {useAnimationControls} from "framer-motion";
import AnimOpcY from "@/animations/AnimOpcY";
import {convertToParams} from "@/utils/params";
import {useSearchParams, useRouter} from "next/navigation";
import {CHAPTER_PARAM_NAME_DEFAULT,
  GENRE_PARAM_NAME_DEFAULT,
  PORTFOLIO_PAGES_PARAM_NAME_DEFAULT,
  PORTFOLIO_PAGES_VALUE_DEFAULT} from "@/constants/default-values";
import {findObject, shuffleArray} from "@/utils/services";
import {IListOfGenres, IPortfolioPages} from "@/types/pages/portfolio";


// ПЕРЕНЕСТИ ВСЕ В Portfolio Header
const Home = ({searchParams} : {searchParams : any}) => {
  const searchParam = useSearchParams();
  const router = useRouter();

  const [shuffledImages, setShuffledImages] = useState(ALL_IMAGES);
  const currentChapter = searchParam.get(CHAPTER_PARAM_NAME_DEFAULT);
  const currentGenreParam = searchParam.get(GENRE_PARAM_NAME_DEFAULT);
  // eslint-disable-next-line max-len
  const currentGenreName = findObject<IListOfGenres>(LIST_OF_GENRES, "param", currentGenreParam)?.name;

  const [animationGoes, setAnimationGoes] = useState<boolean>(false);
  const mainControls = useAnimationControls();

  // animation controls
  useEffect(() => {
    if (!currentChapter) {
      setShuffledImages(shuffleArray(ALL_IMAGES));
    } else {
      returnGenre(currentChapter, "param");
    }

    mainControls.start("visible");
  }, []);

  const getChapterParams = (value : string) => {
    return convertToParams(
        CHAPTER_PARAM_NAME_DEFAULT,
        (findObject<IPortfolioPages>(PORTFOLIO_PAGES, "name", value)?.param || PORTFOLIO_PAGES[0].param),
        searchParam);
  };

  const getPortfolioPagesParams = (value : string) => {
    if (value === PORTFOLIO_PAGES[0].name &&
      searchParam.get(PORTFOLIO_PAGES_PARAM_NAME_DEFAULT) === null) {
      return "&" + convertToParams(
          PORTFOLIO_PAGES_PARAM_NAME_DEFAULT,
          PORTFOLIO_PAGES_VALUE_DEFAULT,
          searchParam);
    }

    return "";
  };

  const getGenresParams = (value : string) => {
    if (value === LIST_OF_GENRES[0].name) {
      return returnAllImages();
    }

    return returnGenre(value, "name");
  };

  const returnAllImages = () => {
    // eslint-disable-next-line no-unused-vars
    const {g, ...restOfObj} = searchParams;

    const paramsWithoutGenre = Object.entries(restOfObj).map(([key, value]) => {
      return `${key}=${value}&`;
    });

    return paramsWithoutGenre.join("");
  };

  const returnGenre = (value: string, objParam: keyof IListOfGenres) => {
    const obj = findObject<IListOfGenres>(LIST_OF_GENRES, objParam, value);
    const param = obj?.param;
    if (param) {
      setShuffledImages(shuffleArray(obj.list || []));
      const params = convertToParams(GENRE_PARAM_NAME_DEFAULT, param, searchParam);
      return params;
    }

    return "";
  };

  const triggerChapterPages = (value: string) => {
    const chapterParams = getChapterParams(value);
    const portfolioPagesParams = getPortfolioPagesParams(value);

    router.push(`?${chapterParams}${portfolioPagesParams}`, {scroll: false});
  };

  const triggerGenres = (value : string) => {
    const genresParams = getGenresParams(value);

    router.push(`?&${genresParams}`, {scroll: false});
  };

  const triggerAnimation = (value: string, whatTriggered: "genres" | "chapters") => {
    if (!animationGoes) {
      setAnimationGoes((prev) => !prev);
      mainControls.start("hidden");
      setTimeout(() => {
        if (whatTriggered === "genres") {
          triggerGenres(value);
        } else if (whatTriggered === "chapters") {
          triggerChapterPages(value);
        }
        mainControls.start("visible");

        setAnimationGoes((prev) => !prev);
      }, 700);
    }
  };

  const genresWasTriggered = (value: string) => {
    triggerAnimation(value, "genres");
  };
  const chaptersWasTriggered = (value: string) => {
    triggerAnimation(value, "chapters");
  };


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

export default Home;
