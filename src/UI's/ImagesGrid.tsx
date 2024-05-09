import React from "react";
import styles from "@/styles/ui's/images-grid.module.css";
// import Image from "next/image";
import {IImagesGrid} from "@/types/ui/images-grid";
import RegularImage from "@/hooks/RegularImage";

const ImagesGrid = ({image} : IImagesGrid) => {
  return (
    <>
      <RegularImage
        uniqueClassName={styles.imageWrapper}
        src={image}
        alt={"Робота фотографині"}
        sizes={`(min-width: 2800px) calc(16.5vw - 41px), (min-width: 2360px)
          calc(20vw - 49px), (min-width: 1900px) calc(25vw - 54px), (min-width: 1460px)
          calc(33.33vw - 62px), (min-width: 1000px) calc(50vw - 76px),
          (min-width: 580px) calc(100vw - 122px), calc(6.92vw + 399px)`} />
      {/* </div> */}
    </>
  );
};

export default ImagesGrid;
