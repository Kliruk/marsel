import React from "react";
import BackgroundText from "@/hooks/BackgroundText";
import styles from "@/styles/components/footer.module.css";
import CustomHeader from "@/hooks/CustomHeader";
import ButtonScroll from "@/UI's/buttons/buttons-scrolls/ButtonScroll";
import DevelopedByWebElefont from "@/DevelopedByWebElepfont/DevelopedByWebElefont";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <BackgroundText size="small" uniqueClassName={styles.tkachyk}>TKACHUK</BackgroundText>
      <BackgroundText size="small" uniqueClassName={styles.margarita}>MARGARITA</BackgroundText>
      <div className={styles.header}>
        <CustomHeader headerType="h3" isYMoves={false}>MARSELIN.</CustomHeader>
      </div>
      <ButtonScroll uniqueClassName={styles.scrollbutton} size={100} widthArrow={30} widthStar={11}
        orientation={"upward"} star={true} scroll={"#header"} />
      <div className={styles.developedBy}>
        <DevelopedByWebElefont />
      </div>
    </div>
  );
};

export default Footer;
