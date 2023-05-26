import React, { useContext, useEffect } from "react";
import { Grid, GridItem, Text } from "@chakra-ui/react";
import DefaultCard from "@/layouts/components/card/DefaultCard";
import style from "src/styles/pages/chess/style.module.css";
import { getPieces } from "./api/chessApi";
import { ChessContext } from "@/context/ChessContext";
import LoadingProvider from "@/layouts/components/loadingProvider/LoadingProvider";
import {
  firstStep,
  secondStep,
  thirdStep,
} from "@/constants/pages/chess/constants";
import ChessCards from "@/layouts/components/chessCards/ChessCards";
import ChessRows from "@/layouts/components/chessRows/ChessRows";

const Home = () => {
  const {
    states: {
      chessPieces,
      setChessPieces,
      loadingChess,
      setLoadingChess,
      selectedPieces,
    },
    handlers: { handleAddPiece, handleClickRemove },
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
                  <ChessCards
                    data={chessPieces}
                    onSelect={(piece) => handleAddPiece(piece)}
                  />
                </LoadingProvider>
              </DefaultCard>
            </GridItem>
            <GridItem colSpan={2}>
              <DefaultCard title={secondStep} scrollable maxHeight={"350px"}>
                <ChessRows
                  data={selectedPieces}
                  onClickRemove={(pieceId) => handleClickRemove(pieceId)}
                />
              </DefaultCard>
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
