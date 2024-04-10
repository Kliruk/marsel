"use client";

import React, {useState} from "react";
import {ListOfServices, Service} from ".";
import styles from "@/styles/components/list-and-service.module.css";
import {LIST_OF_SERVICES} from "@/constants/constants";

const ListAndService = () => {
  const [currentService, setCurrentService] = useState<string>(LIST_OF_SERVICES[2]);


  return (
    <div className={styles.list}>
      <ListOfServices currentService={currentService}
        setCurrentService={setCurrentService} />
      <Service currentService={currentService} />
    </div>
  );
};

export default ListAndService;
