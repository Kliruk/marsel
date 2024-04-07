import ButtonScroll from "@/UI's/buttons/buttons-scrolls/ButtonScroll";
import React from "react";

const PriceScroll = () => {
  return (
    <div>
      <ButtonScroll size={124} widthArrow={50} widthStar={0}
        orientation={"downward"} star={false} scrollTo={"#list-of-prices"} />
    </div>
  );
};

export default PriceScroll;
