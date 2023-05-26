import React from "react";
import { Container, Grid, GridItem, Image } from "@chakra-ui/react";
import DefaultCard from "../card/DefaultCard";
import DefaultText from "../text/DefaultText";
import style from "./styles/style.module.css";

const ChessCards = ({ data, onSelect }) => {
  return (
    <>
      {data?.length ? (
        <Grid
          templateColumns="repeat(3, 1fr)"
          templateRows="repeat(2, 1fr)"
          gap={4}
          className={style.container}
        >
          {data.map((item, index) => {
            return (
              <GridItem
                key={`chess-card-${index}`}
                onClick={onSelect ? () => {onSelect(item)} : ""}
              >
                <DefaultCard className={style.card}>
                  <Container className={style.container}>
                    <div className={style.description}>
                      <DefaultText fontWeight={"bolder"}>
                        {item.name}
                      </DefaultText>
                      <DefaultText>{item.description}</DefaultText>
                    </div>
                    <div className={style.image}>
                      <Image src={item.image} alt={item.name} height="60%" />
                    </div>
                    <div className={style.value}>
                      <DefaultText fontWeight={"bolder"} fontSize={"20px"}>
                        {item.value}
                      </DefaultText>
                    </div>
                  </Container>
                </DefaultCard>
              </GridItem>
            );
          })}
        </Grid>
      ) : (
        <></>
      )}
    </>
  );
};

export default ChessCards;
