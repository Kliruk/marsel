"use client";

import React from "react";
import styles from "@/styles/hooks/image-carousel.module.css";
import RegularImage from "@/hooks/RegularImage";
import {IMAGE_CAROUSEL, IMAGE_CAROUSEL_SPEED_DEFAULT} from "@/constants/constants";
import {useRef} from "react";
import {motion, useScroll, useSpring, useTransform, useMotionValue,
  useVelocity, useAnimationFrame} from "framer-motion";
import {wrap} from "@motionone/utils";
import {IImageCarousel} from "@/types/image-carousel";

// !!!!!!!!!!!!!!!!!!!
// додати можливість налаштування різної швидкості для адаптації
// !!!!!!!!!!!!!!!!!!!

/**
 * Returns images carousel with paralax effect
 * the carousel will scroll infinitely, if you
 * scroll the page, the speed of the carousel scroll
 * will increase and the direction of the carousel scroll
 * will change according to the direction of the page scroll
 * @param {width} width of image
 * @param {height} height of image
 * @param {uniqueClassName} unique class name in order to control css of element,
 * adaptation for example
 * @param {speed} speed of self scrolling carousel
 * @return {JSX.Element}
 */
const ImageCarousel = ({width, height, uniqueClassName,
  speed=IMAGE_CAROUSEL_SPEED_DEFAULT, images} : IImageCarousel)
  : JSX.Element => {
  const widthOfImage = useRef<HTMLDivElement | null>(null);
  const baseVelocity = speed;
  const baseX = useMotionValue(0);
  const {scrollY} = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });


  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   * transform start from 0 to width of image * (number of photos divided by half)
   */
  const x = useTransform(baseX, (v) =>
    `${wrap(0, -(widthOfImage.current ?
      widthOfImage.current.offsetWidth * (IMAGE_CAROUSEL.length / 2) : 0), v)}px`
  );

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });


  return (
  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * we have four children (100% / 4). This would also want deriving from the
   * dynamically generated number of children.
   */
    <div className={styles.paralax}>
      <motion.div className={styles.carousel} style={{x}}>
        {images.map((image, _) => (
          <div key={_} ref={widthOfImage}>
            <RegularImage uniqueClassName={uniqueClassName}
              src={image} alt={"Портрет"} width={width} height={height}/>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ImageCarousel;
