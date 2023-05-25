import React from "react";
import { Card, CardBody, Grid, GridItem } from "@chakra-ui/react";
import style from "src/styles/pages/chess/style.module.css";

const Home = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.cardContainer}>
          <Grid
            templateColumns="repeat(4, 1fr)"
            templateRows="repeat(2, 1fr)"
            gap={4}
            className={style.grid}
          >
            <GridItem colSpan={2} rowSpan={2}>
              <Card className={style.card}>
                <CardBody></CardBody>
              </Card>
            </GridItem>
            <GridItem colSpan={2}>
              <Card className={style.card}>
                <CardBody></CardBody>
              </Card>
            </GridItem>
            <GridItem colSpan={2}>
              <Card className={style.card}>
                <CardBody></CardBody>
              </Card>
            </GridItem>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default Home;
