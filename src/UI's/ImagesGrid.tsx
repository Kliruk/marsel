import React, {useState} from "react";
import styles from "@/styles/ui's/images-grid.module.css";
import Image from "next/image";

const ImagesGrid = ({images}) => {
  const [cuttedImages, setCuttedImages] = useState<string[]>([]);

  return (
    <div className={styles.imageScrolls}>
      {cuttedImages.map((image : string, _ : number) => (
        <Image src={image} sizes="50vw" alt="Роботи фотографині"
          style={{width: "100%", height: "auto"}} key={_} />
      ))}
    </div>
  );
};

export default ImagesGrid;
