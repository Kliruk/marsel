"use client";

import React, {useState} from "react";
import Switches from "@/UI's/Switches";
import styles from "@/styles/pages/portfolio.module.css";
import {LIST_PORTFOLIO_PAGES} from "@/constants/switches";
import {LIST_OF_GENRES} from "@/constants/portfolio-genres";
import CustomHeader from "@/hooks/CustomHeader";
import DropDownMenu from "@/UI's/DropDownMenu";

const Home = () => {
  const [currentPage, setCurrentPage] = useState("Роботи");
  const [currentGenre, setCurrentGenre] = useState("");

  return (
    <div>
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
        <DropDownMenu current={currentGenre} setCurrent={setCurrentGenre}
          list={LIST_OF_GENRES} uniqueClassName={styles.dropDownMenu} />
      </div>
    </div>
  );
};

export default Home;
