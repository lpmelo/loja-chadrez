import React from "react";
import { Spinner } from "@chakra-ui/react";
import style from "./style/style.module.css";

const DefaultSpinner = ({speed, size, color}) => {
  return (
    <>
        <div className={style.spinner}>
          <Spinner size={size} color={color} speed={speed} />
        </div>
    </>
  );
};

export default DefaultSpinner;
