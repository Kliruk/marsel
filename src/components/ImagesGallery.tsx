import React from "react";
import {useSearchParams, useRouter} from "next/navigation";
import styles from "@/styles/components/images-gallery.module.css";
import {Masonry} from "@/hooks/MansoryLayout";
import {IImagesGallery} from "@/types/components/images-gallery";
import LoadMore from "../UI's/LoadMore";
import ImagesGridAnim from "@/UI's/ImagesGrid/ImagesGridAnim";
import {convertToParams} from "@/utils/params";
import {PORTFOLIO_PAGES_PARAM_NAME_DEFAULT} from "@/constants/default-values";

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
    <div className={styles.imagesGalleryAndLoadMore}>
      <div className={styles.imagesGallery}>
        <Masonry
          items={images.slice(0, imagesInView)}
          config={{
            // columns: 3,
            // gap: 27,
            columns: [1, 2, 2, 3],
            gap: [24, 12, 27, 27],
            media: [770, 992, 1250, 1350],
          }}
          render={(item, rowIdx, columnIdx, columns) => (
            <ImagesGridAnim
              key={rowIdx}
              image={item}
              columnIdx={columnIdx}
              rowIdx={rowIdx}
              columns={columns} />
          )}
        />
      </div>
      {imagesInView >= images.length &&
        <LoadMore action={cutImages} limit={images.length} current={imagesInView} />
      }
    </div>
  );
};

export default ImagesGallery;
