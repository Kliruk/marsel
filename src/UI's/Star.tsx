import React from "react";
import {star} from "@/types/star";
import {getRandomNumber} from "@/constants/getRandomNumber";

const Star = ({width, starAnimationDelayMin=1}: star) => {
  const isRandom = () => {
    if (starAnimationDelayMin != 1) {
      return getRandomNumber(starAnimationDelayMin);
    } else {
      return getRandomNumber();
    }
  };

  return (
    <svg className="star" style={{animationDelay: `${isRandom()}s`}} width={width} viewBox="0 0 12 12" fill="var(--color-black)" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 0L7.62054 4.37946L12 6L7.62054 7.62054L6 12L4.37946
        7.62054L0 6L4.37946 4.37946L6 0Z" />
    </svg>
  );
};

export default Star;
