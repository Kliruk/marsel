"use client";

import React from "react";
import styles from "@/styles/components/list-of-services.module.css";
import {LIST_OF_SERVICES} from "@/constants/services";
import {motion} from "framer-motion";
import Star from "@/UI's/Star";
import {IListOfServices} from "@/types/list-of-services";

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
              <motion.div
                className={styles.starDivWithAnimation}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: .3,
                  ease: "easeIn",
                }}
              >
                <Star width={15} />
              </motion.div>
          }
        </li>
      ))}
    </ul>
  );
};

export default ListOfServices;
