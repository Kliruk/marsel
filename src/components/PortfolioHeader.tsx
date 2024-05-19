import React from "react";
import styles from "@/styles/components/portfolio-header.module.css";
import AnimOpcY from "@/animations/AnimOpcY";
import DropDownMenu from "@/UI's/DropDownMenu";
import Switches from "@/UI's/Switches";
import {LIST_OF_GENRES, PORTFOLIO_PAGES} from "@/constants/portfolio";
import CustomHeader from "@/hooks/CustomHeader";
import {IPortfolioHeader} from "@/types/components/portfolio-header";

const PortfolioHeader = ({currentChapter,
  currentGenre, setCurrentGenre, checkForAnimationGoes, mainControls,
  currentChapterText} : IPortfolioHeader) => {
  return (
    <>
      <Switches current={currentChapter} handleChanges={checkForAnimationGoes}
        list={PORTFOLIO_PAGES.map((v) => v.name)}
        uniqueClassName={styles.switches} />
      <div className={styles.headerAndDropDown}>
        <div className={styles.header}>
          {currentChapterText.map((headerLine: string, _: number) => (
            <AnimOpcY
              mainControls={mainControls}
              delay={.1}
              duration={.25}
              queueOrder={_ + 1}
              delayMultiplier={.05}
              key={_}>
              <CustomHeader headerType={"h2"} isYMoves={false}
                initialY={40} duration={.6} yDuration={.9}>
                {headerLine}
              </CustomHeader>
            </AnimOpcY>
          ))}

        </div>
        <AnimOpcY mainControls={mainControls} delay={.25} duration={.25}>
          {/* {currentChapter === "p" &&
              <DropDownMenu current={currentGenre} setCurrent={setCurrentGenre}
                list={LIST_OF_GENRES} uniqueClassName={styles.dropDownMenu} />
          } */}
          .
        </AnimOpcY>
      </div>
    </>
  );
};

export default PortfolioHeader;
