import React, {useEffect, useRef} from "react";
import {useInView, useAnimation} from "framer-motion";
import AnimOpcY from "@/animations/AnimOpcY";
import {IImageGridAnim} from "@/types/ui/image-grid-anim";
import ImageGrid from "./ImageGrid";


const ImagesGridAnim = ({image, columnIdx, rowIdx, columns} : IImageGridAnim) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});
  const mainControls = useAnimation();
  const pos = rowIdx * columns + columnIdx;


  // count after how many tiles to display contact
  const afterEachContact = () => {
    if (columns === 3) {
      return 23;
    } else if (columns === 2) {
      return 19;
    } else if (columns === 1) {
      return 16;
    } else {
      return 19;
    }
  };

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [mainControls, isInView]);

  return (
    <AnimOpcY
      mainControls={mainControls}
      delay={0}
      duration={.4}
      opacityStart={0}
      yStart={50}
    >
      <>
        {/* <p>{image}</p> */}
        {/* <p>{columnIdx+1}</p>
        <p>{rowIdx+1}</p>
        <p>{pos}</p> */}
        <ImageGrid
          refTrans={ref}
          image={image}
          isContact={((pos) % afterEachContact()) === 0 && pos !== 0 ? true : false} />
      </>
    </AnimOpcY>
  );
};

export default ImagesGridAnim;
