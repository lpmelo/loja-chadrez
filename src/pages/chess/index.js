import React, { useContext, useEffect } from "react";
import { Grid, GridItem, Button } from "@chakra-ui/react";
import * as ChakraIcon from "@chakra-ui/icons";
import DefaultCard from "@/layouts/components/card/DefaultCard";
import style from "src/styles/pages/chess/style.module.css";
import { getPieces } from "src/api/chess/chessApi";
import { ChessContext } from "@/context/ChessContext";
import LoadingProvider from "@/layouts/components/loadingProvider/LoadingProvider";
import {
  amount,
  clearAll,
  firstStep,
  secondStep,
  thirdStep,
  total,
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
            <GridItem colSpan={[4, 4, 4, 4, 4, 2]} rowSpan={2} minH={"350px"}>
              <DefaultCard title={firstStep} scrollable>
                <LoadingProvider isLoading={loadingChess}>
                  <ChessCards
                    data={chessPieces}
                    selectedData={selectedPieces}
                    onSelect={(piece, pieceId) =>
                      handleAddPiece(piece, pieceId)
                    }
                  />
                </LoadingProvider>
              </DefaultCard>
            </GridItem>
            <GridItem colSpan={[4, 4, 4, 4, 2]} minH="350px">
              <DefaultCard title={secondStep} scrollable>
                <ChessRows
                  data={selectedPieces}
                  onClickRemove={(pieceId) => handleClickRemove(pieceId)}
                />
              </DefaultCard>
            </GridItem>
            <GridItem colSpan={[4, 4, 4, 4, 2]} maxH="170px">
              <DefaultCard title={thirdStep}>
                <div className={style.thirdStepContainer}>
                  <div className={style.pieceAmountContainer}>
                    <DefaultText>{amount}</DefaultText>
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
                    <DefaultText>{total}</DefaultText>
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
                    {clearAll}
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
