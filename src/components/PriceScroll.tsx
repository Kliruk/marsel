import ButtonScroll from "@/UI's/buttons/buttons-scrolls/ButtonScroll";
import React from "react";
import styles from "@/styles/components/price-scroll.module.css";


const PriceScroll = () => {
  return (
    <div className={styles.buttonScroll}>
      <div>
        <p className="paragraphSmaller">Фільмую вас</p>
        <p className="paragraphSmaller">та ваші спогади</p>
      </div>
      <ButtonScroll size={124} widthArrow={40} widthStar={13}
        orientation={"upward"} star={true} scrollTo={"#list-of-prices"}/>
      <div>
        <p className="paragraphSmaller">Створюю креативний</p>
        <p className="paragraphSmaller">контент</p>
      </div>
    </div>
  );
};

export default PriceScroll;
