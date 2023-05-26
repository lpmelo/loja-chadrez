import { createContext, useState } from "react";

const ChessContext = createContext({
  states: {
    chessPieces: "",
    setChessPieces: "",
    loadingChess: "",
    setLoadingChess: "",
    selectedPieces: "",
    setSelectedPieces: "",
  },
  handlers: {
    handleAddPiece: "",
    handleClickRemove: ""
  },
});

const ChessContextProvider = ({ children }) => {
  const [chessPieces, setChessPieces] = useState([]);
  const [loadingChess, setLoadingChess] = useState(false);
  const [selectedPieces, setSelectedPieces] = useState([]);

  const handleAddPiece = (piece) => {
    setSelectedPieces([
      { ...piece, pieceId: selectedPieces.length + 1 },
      ...selectedPieces,
    ]);
  };

  const handleClickRemove = (pieceId) =>{
    const pieceArray = selectedPieces.filter((item)=> item.pieceId != pieceId)

    setSelectedPieces(pieceArray)
  }

  const values = {
    states: {
      chessPieces,
      setChessPieces,
      loadingChess,
      setLoadingChess,
      selectedPieces,
      setSelectedPieces,
    },
    handlers: {
      handleAddPiece,
      handleClickRemove,
    },
  };

  return (
    <ChessContext.Provider value={values}>{children}</ChessContext.Provider>
  );
};

export { ChessContext, ChessContextProvider };
