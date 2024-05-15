import React from "react";
import styles from "@/styles/components/locations.module.css";
import {LOCATIONS} from "@/constants/locations";
import Location from "./Location";

const Locations = () => {
  return (
    <div className={styles.locations}>
      {LOCATIONS.map((location, _) => (
        <Location key={_} location={location} />
      ))}
    </div>
  );
};

export default Locations;
