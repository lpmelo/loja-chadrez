import React, { useContext, useEffect } from "react";
import { Grid, GridItem, Button } from "@chakra-ui/react";
import * as ChakraIcon from "@chakra-ui/icons";
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
import DefaultText from "@/layouts/components/text/DefaultText";

const Home = () => {
  const {
    states: {
      chessPieces,
      setChessPieces,
      loadingChess,
      setLoadingChess,
      selectedPieces,
      piecesAmount,
      piecesTotalPrice,
    },
    handlers: { handleAddPiece, handleClickRemove, handleClickClear },
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
            templateColumns={"repeat(4, 1fr)"}
            templateRows={"repeat(2,1fr)"}
            gap={4}
            className={style.grid}
          >
            <GridItem colSpan={[4, 4, 4, 4, 4, 2]} rowSpan={2}>
              <DefaultCard title={firstStep} scrollable>
                <LoadingProvider isLoading={loadingChess}>
                  <ChessCards
                    data={chessPieces}
                    onSelect={(piece) => handleAddPiece(piece)}
                  />
                </LoadingProvider>
              </DefaultCard>
            </GridItem>
            <GridItem colSpan={[4, 4, 4, 4, 2]}>
              <DefaultCard title={secondStep} scrollable maxHeight={"350px"}>
                <ChessRows
                  data={selectedPieces}
                  onClickRemove={(pieceId) => handleClickRemove(pieceId)}
                />
              </DefaultCard>
            </GridItem>
            <GridItem colSpan={[4, 4, 4, 4, 2]}>
              <DefaultCard title={thirdStep} maxHeight="170px">
                <div className={style.thirdStepContainer}>
                  <div className={style.pieceAmountContainer}>
                    <DefaultText>Quantidade de peças selecionadas:</DefaultText>
                    <DefaultCard
                      className={style.amountCard}
                      flexBody
                      bodyPadding={"3px 20px 0px 20px"}
                    >
                      <DefaultText fontWeight="bolder">
                        {piecesAmount ? piecesAmount : "--"}
                      </DefaultText>
                    </DefaultCard>
                  </div>
                  <div className={style.totalContainer}>
                    <DefaultText>Total:</DefaultText>
                    <DefaultCard className={style.totalCard}>
                      <DefaultText fontWeight="bolder">
                        {piecesTotalPrice ? piecesTotalPrice : "--"}
                      </DefaultText>
                    </DefaultCard>
                  </div>
                </div>
                <div className={style.buttonContainer}>
                  <Button
                    onClick={handleClickClear}
                    leftIcon={<ChakraIcon.DeleteIcon />}
                    className={style.clearButton}
                  >
                    Limpar Tudo
                  </Button>
                </div>
              </DefaultCard>
            </GridItem>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default Home;
