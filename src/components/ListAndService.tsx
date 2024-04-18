"use client";

import React, {useState} from "react";
import {Service} from ".";
import Switches from "@/UI's/Switches";
import styles from "@/styles/components/list-and-service.module.css";
import {LIST_OF_SERVICES} from "@/constants/services";

const ListAndService = () => {
  const [currentService, setCurrentService] = useState<string>(LIST_OF_SERVICES[2]);

  return (
    <div className={styles.list}>
      <Switches current={currentService}
        setCurrent={setCurrentService} list={LIST_OF_SERVICES} />
      <Service currentService={currentService} />
    </div>
  );
};

export default ListAndService;
