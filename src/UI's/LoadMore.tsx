import React, {useEffect, useRef} from "react";
import {ILoadMore} from "@/types/components/load-more";
import {useInView} from "framer-motion";
import styles from "@/styles/ui's/load-more.module.css";
import Star from "./Star";

const LoadMore = ({action, current, limit} : ILoadMore) => {
  const ref = useRef(null);
  const isInView = useInView(ref);


  useEffect(() => {
    if (isInView && current <= limit) {
      action();
    }
    // i do not need to run useEffect when setState changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);
  return (
    <div ref={ref} className={styles.stars}>
      <Star starAnimationDelayMin={.6} width={20} />
      <Star starAnimationDelayMin={.7} width={20} />
      <Star starAnimationDelayMin={.8} width={20} />
    </div>
  );
};

export default LoadMore;
