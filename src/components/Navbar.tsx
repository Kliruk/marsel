"use client";

import ButtonLink from "@/UI's/buttons/buttons-links/ButtonLink";
import ButtonRounded from "@/UI's/buttons/buttons-links/ButtonRounded";
import styles from "@/styles/components/navbar.module.css";
import React from "react";
import {INSTAGRAM} from "@/constants/urls";
import {usePathname} from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div id="header" className={styles.navbar}>
      {pathname !== "/portfolio" &&
      <div className={styles.buttonLinks}>
        <ButtonLink starAnimationDelayMin={0.8} text="prices"
          link="#list-of-prices" type="none" widthStar={12} />
        <ButtonLink starAnimationDelayMin={0.8} text="Reviews"
          link="#reviews" type="none" widthStar={12} />
        <ButtonLink starAnimationDelayMin={0.8} text="Portfolio"
          link="/portfolio" type="none" widthStar={12} />
      </div>
      }
      <div className={`${styles.buttons} ${pathname === "/portfolio" ? "w-full" : ""}`}>
        {pathname === "/portfolio" &&
          <ButtonRounded uniqueClassName={styles.test} text="НАЗАД" type="small" link={"/"}
            widthStar={12}/>
        }
        <ButtonRounded uniqueClassName={styles.instButton} text="INST" type="small" link={INSTAGRAM}
          widthStar={12}/>
      </div>
    </div>
  );
};

export default Navbar;
