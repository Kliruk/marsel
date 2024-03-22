import {LIST_OF_SERVICES} from "@/constants/constants";
import React from "react";

const ListOfServices = () => {
  return (
    <div>
      {LIST_OF_SERVICES.map((serviceName, _) => (
        <p key={_}>{serviceName}</p>
      ))}
    </div>
  );
};

export default ListOfServices;
