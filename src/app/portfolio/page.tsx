"use client";

import React, {useState} from "react";
import Switches from "@/UI's/Switches";
import styles from "@/styles/pages/portfolio.module.css";
import {LIST_PORTFOLIO_PAGES} from "@/constants/switches";
import {LIST_OF_GENRES} from "@/constants/portfolio-genres";
import CustomHeader from "@/hooks/CustomHeader";
import Menu from "@/UI's/Menu";
import BackgroundText from "@/hooks/BackgroundText";
import {ALL_IMAGES} from "@/constants/images-portfolio";
import ImagesGallery from "@/components/ImagesGallery";

const Home = () => {
  const [currentPage, setCurrentPage] = useState("Роботи");
  const [currentGenre, setCurrentGenre] = useState("");

  return (
    <div className={styles.portfolio}>
      <div className={styles.headerAndBackGroundText}>
        <div className={styles.controls}>
          <Switches current={currentPage} setCurrent={setCurrentPage} list={LIST_PORTFOLIO_PAGES}
            uniqueClassName={styles.switches}/>
          <div className={styles.headerAndDropDown}>
            <div className={styles.header}>
              <CustomHeader headerType={"h2"} isYMoves={true}
                initialY={40} duration={.6} yDuration={.9}>Моменти, що</CustomHeader>
              <CustomHeader headerType={"h2"} isYMoves={false}
                initialY={40} duration={.6} yDuration={.9}>Зберiгаються</CustomHeader>
              <CustomHeader headerType={"h2"} isYMoves={true}
                initialY={40} duration={.6} yDuration={.9}>Назавжди</CustomHeader>
            </div>
            <Menu current={currentGenre} setCurrent={setCurrentGenre}
              list={LIST_OF_GENRES} uniqueClassName={styles.dropDownMenu} />
          </div>
        </div>
        <BackgroundText size="regular" uniqueClassName={styles.portfolioBackText} isYMoves={false}>
          ПОРТ<br />ФОЛIО
        </BackgroundText>
        <BackgroundText size="regular" uniqueClassName={styles.momentsBackText} isYMoves={false}>
          МОМ<br />ЕНТИ
        </BackgroundText>
      </div>
      <ImagesGallery images={ALL_IMAGES} />
    </div>
  );
};

export default Home;
