import React from "react";
import {useSearchParams} from "next/navigation";
import styles from "@/styles/components/images-gallery.module.css";
import ImagesGrid from "@/UI's/ImagesGallery/ImagesGrid";
import LoadMore from "../UI's/LoadMore";
import {IImagesGallery} from "@/types/components/images-gallery";
import {ALL_IMAGES} from "@/constants/images-portfolio";
import {convertToParams} from "@/utils/params";
import {useRouter} from "next/navigation";
import {PORTFOLIO_PAGES_PARAM_NAME_DEFAULT}
  from "@/constants/default-values";

const ImagesGallery = ({images} : IImagesGallery) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const loadOn = 12;
  // `+` sign makes from string an int number
  const currentPage = +(searchParams.get(PORTFOLIO_PAGES_PARAM_NAME_DEFAULT) || 1);
  const imagesInView = currentPage * loadOn;


  const cutImages = () => {
    if (imagesInView <= images.length) {
      const paramsForPages = convertToParams(PORTFOLIO_PAGES_PARAM_NAME_DEFAULT,
          currentPage + 1, searchParams);
      router.push(`?${paramsForPages}`, {scroll: false});
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
