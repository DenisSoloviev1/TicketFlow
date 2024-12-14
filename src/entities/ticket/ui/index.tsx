import React from "react";
import { ITicket } from "../model";
import { Container, CustomButton, Flex } from "../../../shared/ui";
import { Head, BigText, SmallText, Line } from "./style";
import { PlaneSvg } from "../../../shared/ui/icon";

export const Ticket: React.FC<ITicket> = ({ id, cost, from, to, transfer }) => {
  return (
    <Container $width={"100%"} id={id}>
      <Head>
        <img src="/TurkishAirlines.png" alt="logo" />

        <CustomButton $style={"orange"} $width={"100%"}>
          Купить
          <br />
          за {cost}
        </CustomButton>
      </Head>

      <Flex
        $width={"70%"}
        $direction={"row"}
        $justify={"space-around"}
        $align={"center"}
      >
        <Flex $align={"flex-start"}>
          <BigText>{from.time}</BigText>
          <SmallText>{from.city}</SmallText>
          <SmallText>{from.date}</SmallText>
        </Flex>

        <Flex $align={"center"} $width={"50%"}>
          <SmallText>
            {transfer === 0
              ? ""
              : transfer === 1
              ? `${transfer} пересадка`
              : `${transfer} пересадки`}
          </SmallText>

          <Line>
            <PlaneSvg />
          </Line>
        </Flex>

        <Flex $align={"flex-end"}>
          <BigText>{to.time}</BigText>
          <SmallText>{to.city}</SmallText>
          <SmallText>{to.date}</SmallText>
        </Flex>
      </Flex>
    </Container>
  );
};
