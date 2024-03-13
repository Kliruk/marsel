import React from "react";
// import Image from "next/image";
import {star} from "@/types/star";

const Star = ({width}: star) => {
  return (
    <svg className="star" width={width} viewBox="0 0 12 12" fill="var(--color-black)" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 0L7.62054 4.37946L12 6L7.62054 7.62054L6 12L4.37946
        7.62054L0 6L4.37946 4.37946L6 0Z" />
    </svg>
  );
};

export default Star;
