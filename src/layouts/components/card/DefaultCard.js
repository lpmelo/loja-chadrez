import React from "react";
import { Card, CardBody, Text } from "@chakra-ui/react";
import style from "./styles/style.module.css";

const DefaultCard = ({ children, title }) => {
  return (
    <Card className={style.card}>
      <CardBody>
        {title && (
          <Text color="white" fontFamily="sans-serif" fontSize={"14px"}>
            {title}
          </Text>
        )}
        {children}
      </CardBody>
    </Card>
  );
};

export default DefaultCard;
