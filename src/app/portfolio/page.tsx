"use client";

import React, {useState} from "react";
import Switches from "@/UI's/Switches";
import styles from "@/styles/pages/portfolio.module.css";
import {LIST_PORTFOLIO_PAGES} from "@/constants/switches";
import {LIST_OF_GENRES} from "@/constants/portfolio-genres";
import CustomHeader from "@/hooks/CustomHeader";
import DropDownMenu from "@/UI's/DropDownMenu";
import BackgroundText from "@/hooks/BackgroundText";
import {ALL_IMAGES} from "@/constants/images-portfolio";
import ImagesGallery from "@/components/ImagesGallery";
import Locations from "@/components/Locations";

const Home = () => {
  const [currentPage, setCurrentPage] = useState("Роботи");
  const [currentGenre, setCurrentGenre] = useState("");

  return (
    <div className={styles.portfolio}>
      <div className={styles.headerAndBackGroundText}>
        <div className={styles.controls}>
          <Switches current={currentPage} setCurrent={setCurrentPage} list={LIST_PORTFOLIO_PAGES}
            uniqueClassName={styles.switches} />
          <div className={styles.headerAndDropDown}>
            <div className={styles.header}>
              <CustomHeader headerType={"h2"} isYMoves={true}
                initialY={40} duration={.6} yDuration={.9}>
                {currentPage === LIST_PORTFOLIO_PAGES[0] ? "Моменти, що" : "Не можете"}
              </CustomHeader>
              <CustomHeader headerType={"h2"} isYMoves={false}
                initialY={40} duration={.6} yDuration={.9}>
                {currentPage === LIST_PORTFOLIO_PAGES[0] ? "Зберiгаються" : "Обрати локацiю"}
              </CustomHeader>
              <CustomHeader headerType={"h2"} isYMoves={true}
                initialY={40} duration={.6} yDuration={.9}>
                {currentPage === LIST_PORTFOLIO_PAGES[0] ? "Назавжди" : "Для Зйомки?"}
              </CustomHeader>
            </div>
            {currentPage === LIST_PORTFOLIO_PAGES[0] &&
              <DropDownMenu current={currentGenre} setCurrent={setCurrentGenre}
                list={LIST_OF_GENRES} uniqueClassName={styles.dropDownMenu} />
            }
          </div>
        </div>
        <BackgroundText size="regular" uniqueClassName={styles.portfolioBackText} isYMoves={false}>
          ПОРТ<br />ФОЛIО
        </BackgroundText>
        <BackgroundText size="regular" uniqueClassName={styles.momentsBackText} isYMoves={false}>
          МОМ<br />ЕНТИ
        </BackgroundText>
      </div>
      {currentPage === LIST_PORTFOLIO_PAGES[0] &&
        <ImagesGallery images={ALL_IMAGES} />
      }
      {currentPage === LIST_PORTFOLIO_PAGES[1] &&
        <Locations />
      }
    </div>
  );
};

export default Home;
