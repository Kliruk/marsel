"use client";

import {useRouter} from "next/navigation";
import {ButtonsLinks} from "@/types/buttons-links";
import styles from "@/styles/buttons-links.module.css";
import React from "react";
import Star from "../../Star";

const ButtonLink = ({text, link, type, widthStar} : ButtonsLinks) => {
  const router = useRouter();

  return (
    <button className={styles.buttonLink} onClick={() => router.push(`${link}`)}>
      <span>{text}</span>
      <Star width={widthStar} />
    </button>
  );
};

export default ButtonLink;
