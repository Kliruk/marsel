import ImagesGrid from "@/UI's/ImagesGrid";
import {IImagesGallery} from "@/types/components/images-gallery";
import styles from "@/styles/components/images-gallery.module.css";
import React from "react";

const ImagesGallery = ({images} : IImagesGallery) => {
  return (
    <div className={styles.imagesGallery}>
      {images.map((image: string, _ : number) => (
        <ImagesGrid image={image} key={_}/>
      ))}
    </div>
  );
};

export default ImagesGallery;
