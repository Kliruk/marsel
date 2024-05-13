import React, {useRef} from "react";
import styles from "@/styles/ui's/images-grid.module.css";
import {IImagesGrid} from "@/types/ui/ImagesGrid/images-grid";
import {useImageSize} from "react-image-size";
import ImagesGridAnim from "./ImagesGridAnim";
import {getEnvUrl} from "@/utils/getEnvUrl";

const ImagesGrid = ({image, isContact=false} : IImagesGrid) => {
  const ref = useRef(null);
  const [dimensions] = useImageSize(`${getEnvUrl()}${image}`);

  // @ts-ignore: Object is possibly 'null'.
  const widthHeightRatio = dimensions?.height / dimensions?.width;
  const galleryHeight = Math.ceil(426 * widthHeightRatio);
  const photoSpans = Math.ceil(galleryHeight / 10) + 1;

  return (
    <div className={styles.imageWrapper}
      style={{gridRow: `span ${photoSpans}`}}
      ref={ref}>
      <ImagesGridAnim
        image={image}
        refTrans={ref}
        dimensions={dimensions}
        isContact={isContact} />
    </div>
  );
};

export default ImagesGrid;
