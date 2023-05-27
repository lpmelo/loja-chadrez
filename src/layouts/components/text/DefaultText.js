import React from "react";
import { Text } from "@chakra-ui/react";

const DefaultText = ({ children, fontWeight, fontSize }) => {
  return (
    <Text
      color="white"
      fontFamily="sans-serif"
      fontSize={fontSize ? fontSize : "14px"}
      fontWeight={fontWeight}
    >
      {children}
    </Text>
  );
};

export default DefaultText;
