import CustomHeader from "@/hooks/CustomHeader";
import Image from "next/image";
import styles from "@/styles/root/global-not-found.module.css";
import ButtonSquared from "@/UI's/buttons/buttons-links/ButtonSquared";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: " · Маргарита Ткачук",
  description: "-----------",
};


/**
 * Global page 404, that will appear when it is unknown route
 * @return {JSX.Element}
 */
export default function NotFound(): JSX.Element {
  return (
    <div>
      <div className={styles.main}>
        {/* ФОТО - ТЕСТОВІ */}
        <Image className={styles.leftPhoto} src={"/photo/test.jpg"}
          width={281} height={438} alt="Помилка" />
        <div className={styles.textAndbutton}>
          <CustomHeader headerType={"h2"} isYMoves={true} >
            ЩОСЬ ПIШЛО НЕ ТАК
          </CustomHeader>
          <ButtonSquared text={"повернутися назад"} link={""} type={"previous"} widthStar={12} />
        </div>
        {/* ФОТО - ТЕСТОВІ */}
        <Image className={styles.rightPhoto} src={"/photo/test.jpg"}
          width={281} height={438} alt="Помилка" />
      </div>
    </div>
  );
}
