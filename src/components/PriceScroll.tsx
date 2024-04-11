import ButtonScroll from "@/UI's/buttons/buttons-scrolls/ButtonScroll";
import React from "react";
import styles from "@/styles/components/price-scroll.module.css";


const PriceScroll = () => {
  return (
    <div className={styles.priceScroll}>
      <div className={styles.leftBoxText}>
        <p className="paragraphSmaller">Фільмую вас</p>
        <p className={`${styles.firstBlockSecondText} paragraphSmaller`}>та ваші спогади</p>
      </div>
      <ButtonScroll uniqueClassNameArrow={styles.scrollButtonArrow}
        uniqueClassName={styles.scrollButton} size={124} widthArrow={40} widthStar={13}
        orientation={"upward"} star={true} scrollTo={"#list-of-prices"}/>
      <div className={styles.rightBoxText}>
        <p className="paragraphSmaller">Створюю креативний</p>
        <p className={`${styles.secondBlockSecondText} paragraphSmaller`}>контент</p>
      </div>
    </div>
  );
};

export default PriceScroll;
