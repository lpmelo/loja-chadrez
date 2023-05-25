import React from "react";
import { Divider, Image } from "@chakra-ui/react";
import style from "./style/style.module.css";

const AppBar = () => {
  return (
    <>
      <div className={style.container}>
        <Image
          src="envolve-logo.png"
          alt="envolve-logo"
          height="16"
          className={style.logoImage}
        />
      </div>
      <div className={style.dividerContainer}>
        <Divider orientation="horizontal" className={style.divider} />
      </div>
    </>
  );
};

export default AppBar;
