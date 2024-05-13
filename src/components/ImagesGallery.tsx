import ImagesGrid from "@/UI's/ImagesGallery/ImagesGrid";
import {IImagesGallery} from "@/types/components/images-gallery";
import styles from "@/styles/components/images-gallery.module.css";
import React, {useState} from "react";
import LoadMore from "../UI's/LoadMore";
import {ALL_IMAGES} from "@/constants/images-portfolio";
// import {getRandomNumber} from "@/utils/getRandomNumber";

const ImagesGallery = ({images} : IImagesGallery) => {
  const loadOn = 12;
  const [imagesInView, setImagesInView] = useState<number>(loadOn);

  const cutImages = () => {
    if (imagesInView <= images.length) {
      setImagesInView((prev) => prev + loadOn);
    }
  };

  return (
    <>
      <div className={styles.imagesGallery}>
        {images.slice(0, imagesInView).map((image: string, count : number) => {
          return (
            <>
              {(count != 0 && count % 32)=== 0 &&
                <ImagesGrid
                  image={ALL_IMAGES[count - loadOn]}
                  key={-count}
                  isContact={true} />
              }
              <ImagesGrid
                image={image}
                key={count}
                isContact={false} />
            </>
          );
        })}
      </div>
      {imagesInView <= images.length &&
      <LoadMore action={cutImages} limit={images.length} current={imagesInView} />
      }
    </>
  );
};

export default ImagesGallery;
