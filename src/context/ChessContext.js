import { createContext, useState } from "react";

const ChessContext = createContext({
  states: {
    chessPieces: "",
    setChessPieces: "",
    loadingChess: "",
    setLoadingChess: "",
  },
});

const ChessContextProvider = ({ children }) => {
  const [chessPieces, setChessPieces] = useState([]);
  const [loadingChess, setLoadingChess] = useState(false);

  const values = {
    states: {
      chessPieces,
      setChessPieces,
      loadingChess,
      setLoadingChess,
    },
  };

  return (
    <ChessContext.Provider value={values}>{children}</ChessContext.Provider>
  );
};

export { ChessContext, ChessContextProvider };
