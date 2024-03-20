import React from "react";
import styles from "@/styles/components/header.module.css";
import Image from "@/hooks/Image";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={`block ${styles.textAndPhoto}`}>
        <h2>PHOTO&VIDEO</h2>
        <div className={styles.headerPartWithDescr}>
          <h2 className="">MAKER</h2>
          <p className={`paragraphMain text-left ${styles.descr}`}>Вже більше 5 років я знімаю
           персональні та комерційні проєкти для малого та середнього бізнесу</p>
        </div>
      </div>
      <div className={styles.doublePhoto}>
        <Image src="/photo/header-DPRMargo-q10.webp" uniqueClassName={styles.doubleLeftPhoto}
          alt="Замовниця" width={210} height={316}/>
        <Image src="/photo/header-DPLMargo-~q5.webp" uniqueClassName={styles.doubleRightPhoto}
          alt="Замовниця" width={236} height={355}/>
        <p className={styles.backgroundTextDP}>MARG<br />ARITA</p>
      </div>
    </div>
  );
};

export default Header;
