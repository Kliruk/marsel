import React, {useState} from "react";
import {useSearchParams} from "next/navigation";
import styles from "@/styles/components/images-gallery.module.css";
import ImagesGrid from "@/UI's/ImagesGallery/ImagesGrid";
import LoadMore from "../UI's/LoadMore";
import {IImagesGallery} from "@/types/components/images-gallery";
import {ALL_IMAGES} from "@/constants/images-portfolio";
import {paramExists, updateParams} from "@/utils/params";

const ImagesGallery = ({images} : IImagesGallery) => {
  const searchParams = useSearchParams();

  const loadOn = 12;
  const [imagesInView, setImagesInView] = useState<number>(
      parseInt(paramExists(searchParams, "p")) || loadOn);
  // const [imagesInView, setImagesInView] = useState<number>(loadOn);

  const cutImages = () => {
    if (imagesInView <= images.length) {
      setImagesInView((prev) => prev + loadOn);

      updateParams("p", imagesInView/loadOn+1, searchParams);
    }
  };

  return (
    <div>
      <div className={styles.imagesGallery}>
        {images.slice(0, imagesInView).map((image: string, count : number) => {
          return (
            <React.Fragment key={count}>
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
            </React.Fragment>
          );
        })}
      </div>
      {imagesInView <= images.length &&
      <LoadMore action={cutImages} limit={images.length} current={imagesInView} />
      }
    </div>
  );
};

export default ImagesGallery;
