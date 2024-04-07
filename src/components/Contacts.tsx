import React from "react";
import styles from "@/styles/components/contacts.module.css";
import CustomHeader from "@/hooks/CustomHeader";
import ButtonRounded from "@/UI's/buttons/buttons-links/ButtonRounded";
import ImageCarousel from "@/hooks/ImageCarousel";
import {IMAGE_CAROUSEL, INSTAGRAM, STAR_DELAY_DEFAULT, TELEGRAM} from "@/constants/constants";


const Contacts = () => {
  return (
    <div className={styles.main}>
      <div className={styles.uniqueOffer}>
        <CustomHeader headerType={"h2"} isYMoves={true} color="var(--color-white)" >
            отримайте
        </CustomHeader>
        <CustomHeader headerType={"h2"} isYMoves={false} color="var(--color-white)" >
            УНIКАЛЬНУ
        </CustomHeader>
        <CustomHeader headerType={"h2"} isYMoves={true} color="var(--color-white)" >
            ПРопозицiю
        </CustomHeader>
        <div className={styles.buttons}>
          <ButtonRounded uniqueClassName={styles.instagram} type="big" widthStar={13}
            starAnimationDelayMin={STAR_DELAY_DEFAULT} text="inst" link={INSTAGRAM}/>
          <ButtonRounded uniqueClassName={styles.telegram} type="big" widthStar={13}
            starAnimationDelayMin={STAR_DELAY_DEFAULT} text="tlgr" link={TELEGRAM}/>
        </div>
      </div>
        <div className={styles.carousel}>
            <ImageCarousel width={732} height={751} uniqueClassName={styles.images}
                           images={IMAGE_CAROUSEL} speed={-65} />
            <ImageCarousel width={732} height={751} uniqueClassName={styles.senondimages}
                           images={IMAGE_CAROUSEL} speed={-65} />
        </div>

    </div>
  );
};

export default Contacts;
