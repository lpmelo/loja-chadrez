import { Button, Grid, IconButton, Image } from "@chakra-ui/react";
import React from "react";
import DefaultCard from "../card/DefaultCard";
import DefaultText from "../text/DefaultText";
import style from "./styles/style.module.css";
import * as ChakraIcons from "@chakra-ui/icons";

const ChessRows = ({ data, onClickRemove }) => {
  return (
    <>
      {data.length ? (
        <>
          <Grid rowGap={1}>
            {data.map((item, index) => (
              <DefaultCard
                className={style.card}
                maxHeight={"100px"}
                flexBody
                key={`chess-row-${index}`}
              >
                <div className={style.imageContainer}>
                  <Image src={item.image} alt="piece" height="10" width="7" />
                </div>
                <div className={style.textContainer}>
                  <DefaultText fontWeight={"bolder"}>{item.name}</DefaultText>
                  <DefaultText>{item.description}</DefaultText>
                </div>
                <div className={style.valueContainer}>
                  <DefaultCard className={style.cardValue} maxHeight={"35px"}>
                    <DefaultText fontWeight={"bolder"}>
                      {item.value}
                    </DefaultText>
                  </DefaultCard>
                </div>
                <div className={style.buttonContainer}>
                  <IconButton
                    backgroundColor={"#5a5867"}
                    color={"white"}
                    icon={<ChakraIcons.DeleteIcon />}
                    onClick={() => onClickRemove(item.id)}
                  />
                </div>
              </DefaultCard>
            ))}
          </Grid>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default ChessRows;
