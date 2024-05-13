import React, {useEffect} from "react";
import {useInView, useAnimation} from "framer-motion";
import AnimOpcY from "@/animations/AnimOpcY";
import {IImageGridAnim} from "@/types/ui/ImagesGrid/image-grid-anim";
import ImagesFromGridGallery from "@/UI's/ImagesGallery/ImageFromGridGallery";


const ImagesGridAnim = ({image, refTrans, dimensions, isContact=false} : IImageGridAnim) => {
  const isInView = useInView(refTrans, {once: true});

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [mainControls, isInView]);

  return (
    <AnimOpcY
      mainControls={mainControls}
      delay={0}
      duration={.2}
      opacityStart={1}
      yStart={20}
    >
      <ImagesFromGridGallery image={image} dimensions={dimensions} isContact={isContact} />
    </AnimOpcY>
  );
};

export default ImagesGridAnim;
