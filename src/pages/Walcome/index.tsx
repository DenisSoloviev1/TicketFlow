import React from "react";
import { Wrapper } from "./style";
import { TicketsList } from "../../entities/ticket";
import SideBar from "../../widjets/SideBar";
import { Flex } from "../../shared/ui";

export const Welcome: React.FC = () => {
  return (
    <Wrapper>
      <Flex $align={"center"} $gap={30}>
        <img src="/logo.png" alt="logo" width={"100px"} />

        <Flex $direction={"row"} $width={"100%"} $gap={20}>
          <SideBar />
          <TicketsList />
        </Flex>
      </Flex>
    </Wrapper>
  );
};
