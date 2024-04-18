import React from "react";
import styles from "@/styles/ui's/switches.module.css";
import {IListOfServices} from "@/types/ui/switches";
import SwitchStar from "@/UI's/SwitchStar";

const ListOfServices = ({current, setCurrent, list, uniqueClassName} : IListOfServices) => {
  return (
    <div className={`${styles.listOfService} ${uniqueClassName}`}>
      <ul className={styles.list}>
        {list.map((serviceName) => (
          <li
            className={styles.service}
            onClick={() => setCurrent(serviceName)}
            style={{
              color: current === serviceName ?
                  "var(--color-black)" : "var(--color-list-unactive)",
            }}
            key={serviceName}>
            {serviceName}
            {serviceName === current &&
                <SwitchStar widthStar={15} uniqueClassName={styles.starDivWithAnimation} />
            }
          </li>
        ))}
      </ul>
      <div className={styles.leftFade} />
      <div className={styles.rightFade} />
    </div>
  );
};

export default ListOfServices;
