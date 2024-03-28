import ButtonLink from "@/UI's/buttons/buttons-links/ButtonLink";
import ButtonRounded from "@/UI's/buttons/buttons-links/ButtonRounded";
import styles from "@/styles/components/navbar.module.css";
import React from "react";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.buttonLinks}>
        <ButtonLink starAnimationDelayMin={0.8} text="Prices"
          link="#prices" type="none" widthStar={12} />
        <ButtonLink starAnimationDelayMin={0.8} text="Reviews"
          link="#reviews" type="none" widthStar={12} />
        <ButtonLink starAnimationDelayMin={0.8} text="Portfolio"
          link="/portfolio" type="none" widthStar={12} />
      </div>
      <ButtonRounded uniqueClassName={styles.instButton} text="INST" type="small" link="https://www.instagram.com/tkachuk_margarita_/"
        widthStar={12}/>
    </div>
  );
};

export default Navbar;
