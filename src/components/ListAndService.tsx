"use client";

import React, {useState} from "react";
import {ListOfServices, Service} from ".";
import styles from "@/styles/components/list-and-service.module.css";

const ListAndService = () => {
  const [currentService, setCurrentService] = useState<string>("Фотозйомка");

  return (
    <div className={styles.list}>
      <ListOfServices currentService={currentService}
        setCurrentService={setCurrentService} />
      <Service currentService={currentService} />
    </div>
  );
};

export default ListAndService;
