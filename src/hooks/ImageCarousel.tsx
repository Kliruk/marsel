"use client";

import React from "react";
import styles from "@/styles/hooks/image-carousel.module.css";
import RegularImage from "@/hooks/RegularImage";
import {IMAGE_CAROUSEL} from "@/constants/constants";
import {useRef} from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import {wrap} from "@motionone/utils";

interface ParallaxProps {
  images: string[];
  baseVelocity: number;
}

function ParallaxText({images, baseVelocity = 100}: ParallaxProps) {
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

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <motion.div className={styles.scroller} style={{x: useTransform(baseX, (v) =>`${wrap(-30, 225, v)}%`)}}>
      {images.map((imageUrl, index) => (
        <img key={index} src={imageUrl} alt={`Image ${index}`} />
      ))}
    </motion.div>
  );
}

const ImageCarousel = () => {
  return (
    <div className={styles.carousel}>
      {/* {IMAGE_CAROUSEL.map((link, index) => (*/}
      {/*    <RegularImage uniqueClassName={styles.image} src={link} alt={`Фотосесія`} width={732} height={751} key={index} />*/}
      {/* ))}*/}
      <div className={styles.paralax}>
        <ParallaxText baseVelocity={8} images={["http://localhost:3000/photo/portfolio/portfolio-BLGirlWithCar-q29.5.webp"]} />
        <ParallaxText baseVelocity={8} images={["http://localhost:3000/photo/portfolio/portfolio-BLGirlWithCar-q29.5.webp"]} />
        <ParallaxText baseVelocity={8} images={["http://localhost:3000/photo/portfolio/portfolio-BLGirlWithCar-q29.5.webp"]} />
      </div>
    </div>
  );
};

export default ImageCarousel;
