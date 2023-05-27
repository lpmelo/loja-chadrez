import { createContext, useEffect, useState } from "react";

const ChessContext = createContext({
  states: {
    chessPieces: "",
    setChessPieces: "",
    loadingChess: "",
    setLoadingChess: "",
    selectedPieces: "",
    setSelectedPieces: "",
    piecesAmount: "",
    setPiecesAmount: "",
    piecesTotalPrice: "",
    setPiecesTotalPrice: "",
  },
  handlers: {
    handleAddPiece: "",
    handleClickRemove: "",
    handleClickClear: "",
  },
});

const ChessContextProvider = ({ children }) => {
  const [chessPieces, setChessPieces] = useState([]);
  const [loadingChess, setLoadingChess] = useState(false);
  const [selectedPieces, setSelectedPieces] = useState([]);
  const [piecesAmount, setPiecesAmount] = useState(0);
  const [piecesTotalPrice, setPiecesTotalPrice] = useState(0);

  const handleAddPiece = (piece, pieceId) => {
    if (selectedPieces.length) {
      if (selectedPieces.find((item) => item.id === pieceId)) {
        const index = selectedPieces.findIndex((item) => item.id === pieceId);
        let newSelectedPieces = [...selectedPieces];
        newSelectedPieces.splice(index, 1);
        return setSelectedPieces(newSelectedPieces);
      }
    }
    return setSelectedPieces([{ ...piece }, ...selectedPieces]);
  };

  const handleClickRemove = (pieceId) => {
    const pieceArray = selectedPieces.filter((item) => item.id != pieceId);

    setSelectedPieces(pieceArray);
  };

  const handleClickClear = () => {
    setSelectedPieces([]);
    setPiecesAmount(0);
    setPiecesTotalPrice(0);
  };

  const incrementTotal = () => {
    if (selectedPieces.length) {
      let total = 0;
      selectedPieces.map((item) => {
        total += item.value;
      });
      setPiecesTotalPrice(total);
    } else {
      if (piecesTotalPrice) {
        setPiecesTotalPrice(0);
      }
    }
  };

  const values = {
    states: {
      chessPieces,
      setChessPieces,
      loadingChess,
      setLoadingChess,
      selectedPieces,
      setSelectedPieces,
      piecesAmount,
      setPiecesAmount,
      piecesTotalPrice,
      setPiecesTotalPrice,
    },
    handlers: {
      handleAddPiece,
      handleClickRemove,
      handleClickClear,
    },
  };

  useEffect(() => {
    setPiecesAmount(selectedPieces.length);
    incrementTotal();
  }, [selectedPieces]);

  return (
    <ChessContext.Provider value={values}>{children}</ChessContext.Provider>
  );
};

export { ChessContext, ChessContextProvider };
