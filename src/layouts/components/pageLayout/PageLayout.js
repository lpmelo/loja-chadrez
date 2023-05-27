import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { ChessContextProvider } from "@/context/ChessContext";
import AppBar from "../appBar/AppBar";

const PageLayout = ({ children }) => {
  return (
    <ChakraProvider>
      <AppBar />
      <ChessContextProvider>{children}</ChessContextProvider>
    </ChakraProvider>
  );
};

export default PageLayout;
