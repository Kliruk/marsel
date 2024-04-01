import React from "react";
import styles from "@/styles/components/contacts.module.css";
import CustomHeader from "@/hooks/CustomHeader";
import ButtonRounded from "@/UI's/buttons/buttons-links/ButtonRounded";
import ImageCarousel from "@/hooks/ImageCarousel";

const Contacts = () => {
  return (
    <div>
      <div>
        <CustomHeader headerType={"h1"} isYMoves={false}>fffffff</CustomHeader>
        <ButtonRounded uniqueClassName={styles.test} type="big" />
      </div>
      <ImageCarousel />
    </div>
  );
};

export default Contacts;
