import React from "react";
import { Card, CardBody, Text } from "@chakra-ui/react";
import style from "./styles/style.module.css";
import DefaultText from "../text/DefaultText";

const DefaultCard = ({
  children,
  title,
  className,
  scrollable,
  maxHeight,
  flexBody,
  bodyPadding,
  height,
}) => {
  return (
    <Card
      className={className ? className : style.card}
      overflowY={scrollable ? "auto" : "unset"}
      maxHeight={maxHeight}
      h={height}
    >
      <CardBody
        display={flexBody ? "flex" : "unset"}
        padding={bodyPadding ? bodyPadding : "20px"}
      >
        {title && <DefaultText>{title}</DefaultText>}
        {children}
      </CardBody>
    </Card>
  );
};

export default DefaultCard;
