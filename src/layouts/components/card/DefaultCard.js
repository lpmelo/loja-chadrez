import React from "react";
import { Card, CardBody, Text } from "@chakra-ui/react";
import style from "./styles/style.module.css";
import DefaultText from "../text/DefaultText";

const DefaultCard = ({ children, title, className, scrollable, maxHeight, flexBody }) => {
  return (
    <Card
      className={className ? className : style.card}
      overflowY={scrollable ? "auto" : "unset"}
      maxHeight={maxHeight ? maxHeight : ""}
    >
      <CardBody display={flexBody ? 'flex' : 'unset'}>
        {title && <DefaultText>{title}</DefaultText>}
        {children}
      </CardBody>
    </Card>
  );
};

export default DefaultCard;
