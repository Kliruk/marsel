import React from "react";
import styles from "@/styles/components/list-of-services.module.css";
import {LIST_OF_SERVICES} from "@/constants/constants";
import {IListOfServices} from "@/types/list-of-services";
import SwitchStar from "@/UI's/SwitchStar";

const ListOfServices = ({currentService, setCurrentService} : IListOfServices) => {
  return (
    <ul className={styles.list}>
      {LIST_OF_SERVICES.map((serviceName) => (
        <li
          className={styles.service}
          onClick={() => setCurrentService(serviceName)}
          style={{
            color: currentService === serviceName ?
                "var(--color-black)" : "var(--color-list-unactive)",
          }}
          key={serviceName}>
          {serviceName}
          {serviceName === currentService &&
              <SwitchStar widthStar={15} uniqueClassName={styles.starDivWithAnimation} />
          }
        </li>
      ))}
    </ul>
  );
};

export default ListOfServices;
