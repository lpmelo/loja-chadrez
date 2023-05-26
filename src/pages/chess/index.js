import React, { useContext, useEffect } from "react";
import { Grid, GridItem, Text } from "@chakra-ui/react";
import DefaultCard from "@/layouts/components/card/DefaultCard";
import style from "src/styles/pages/chess/style.module.css";
import { getPieces } from "./api/chessApi";
import { ChessContext } from "@/context/ChessContext";
import LoadingProvider from "@/layouts/components/loadingProvider/LoadingProvider";
import { firstStep, secondStep, thirdStep } from "@/constants/pages/chess/constants";
import ChessCards from "@/layouts/components/chessCards/ChessCards";

const Home = () => {
  const {
    states: { chessPieces, setChessPieces, loadingChess, setLoadingChess },
  } = useContext(ChessContext);

  useEffect(() => {
    if (!chessPieces.length) {
      getPieces(setChessPieces, setLoadingChess);
    }
  }, []);

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
              <DefaultCard title={firstStep}>
                <LoadingProvider isLoading={loadingChess}>
                  <ChessCards data={chessPieces}/>
                </LoadingProvider>
              </DefaultCard>
            </GridItem>
            <GridItem colSpan={2}>
              <DefaultCard title={secondStep}></DefaultCard>
            </GridItem>
            <GridItem colSpan={2}>
              <DefaultCard title={thirdStep}></DefaultCard>
            </GridItem>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default Home;
