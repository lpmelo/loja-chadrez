import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import AppBar from "../appBar/AppBar";

const PageLayout = ({ children }) => {
  return (
    <ChakraProvider>
      <AppBar />
      {children}
    </ChakraProvider>
  );
};

export default PageLayout;
