import React from "react";
import styles from "@/styles/components/portfolio-header.module.css";
import AnimOpcY from "@/animations/AnimOpcY";
import DropDownMenu from "@/UI's/DropDownMenu";
import Switches from "@/UI's/Switches";
import {LIST_OF_GENRES, PORTFOLIO_PAGES} from "@/constants/portfolio";
import CustomHeader from "@/hooks/CustomHeader";
import {IPortfolioHeader} from "@/types/components/portfolio-header";

const PortfolioHeader = ({currentPage,
  currentGenre, setCurrentGenre, checkAnimation, mainControls} : IPortfolioHeader) => {
  return (
    <>
      <Switches current={currentPage} handleChanges={checkAnimation}
        list={Object.values(PORTFOLIO_PAGES)}
        uniqueClassName={styles.switches} />
      <div className={styles.headerAndDropDown}>
        <div className={styles.header}>
          <AnimOpcY mainControls={mainControls} delay={.1} duration={.25}>
            <CustomHeader headerType={"h2"} isYMoves={true}
              initialY={40} duration={.6} yDuration={.9}>
              {currentPage === PORTFOLIO_PAGES.PORTFOLIO ? "Моменти, що" : "Не можете"}
            </CustomHeader>
          </AnimOpcY>
          <AnimOpcY mainControls={mainControls} delay={.15} duration={.25}>
            <CustomHeader headerType={"h2"} isYMoves={false}
              initialY={40} duration={.6} yDuration={.9}>
              {currentPage === PORTFOLIO_PAGES.PORTFOLIO ? "Зберiгаються" : "Обрати локацiю"}
            </CustomHeader>
          </AnimOpcY>
          <AnimOpcY mainControls={mainControls} delay={.2} duration={.25}>
            <CustomHeader headerType={"h2"} isYMoves={true}
              initialY={40} duration={.6} yDuration={.9}>
              {currentPage === PORTFOLIO_PAGES.PORTFOLIO ? "Назавжди" : "Для Зйомки?"}
            </CustomHeader>
          </AnimOpcY>
        </div>
        <AnimOpcY mainControls={mainControls} delay={.25} duration={.25}>
          {currentPage === PORTFOLIO_PAGES.PORTFOLIO &&
              <DropDownMenu current={currentGenre} setCurrent={setCurrentGenre}
                list={LIST_OF_GENRES} uniqueClassName={styles.dropDownMenu} />
          }
        </AnimOpcY>
      </div>
    </>
  );
};

export default PortfolioHeader;
