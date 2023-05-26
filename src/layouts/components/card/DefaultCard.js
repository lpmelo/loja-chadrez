import React from "react";
import { Card, CardBody, Text } from "@chakra-ui/react";
import style from "./styles/style.module.css";
import DefaultText from "../text/DefaultText";

const DefaultCard = ({ children, title, className }) => {
  return (
    <Card className={className ? className : style.card}>
      <CardBody>
        {title && <DefaultText>{title}</DefaultText>}
        {children}
      </CardBody>
    </Card>
  );
};

export default DefaultCard;
