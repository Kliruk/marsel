import ButtonLink from "@/UI's/buttons/buttons-links/ButtonLink";
import ButtonRounded from "@/UI's/buttons/buttons-links/ButtonRounded";
import styles from "@/styles/components/navbar.module.css";
import React from "react";
import {INSTAGRAM} from "@/constants/urls";

const Navbar = () => {
  return (
    <div id="header" className={styles.navbar}>
      <div className={styles.buttonLinks}>
        <ButtonLink starAnimationDelayMin={0.8} text="Prices"
          link="#prices" type="none" widthStar={12} />
        <ButtonLink starAnimationDelayMin={0.8} text="Reviews"
          link="#reviews" type="none" widthStar={12} />
        <ButtonLink starAnimationDelayMin={0.8} text="Portfolio"
          link="/portfolio" type="none" widthStar={12} />
      </div>
      <ButtonRounded uniqueClassName={styles.instButton} text="INST" type="small" link={INSTAGRAM}
        widthStar={12}/>
    </div>
  );
};

export default Navbar;
