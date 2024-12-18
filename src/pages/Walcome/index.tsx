import React, { useState } from "react";
import { Wrapper } from "./style";
import { TicketsList, ITicket } from "../../entities/ticket";
import SideBar from "../../widjets/SideBar";
import { Flex } from "../../shared/ui";

export const Welcome: React.FC = () => {
  const [filteredStops, setFilteredStops] = useState<ITicket["stops"][]>([]);

  return (
    <Wrapper>
      <Flex $align={"center"} $gap={30} $width={"100%"}>
        <img
          src="/logo.png"
          alt="logo"
          width={"100px"}
        />

        <Flex $direction={"row"} $width={"100%"} $gap={20}>
          <SideBar onFilterChange={setFilteredStops} />

          <TicketsList stops={filteredStops} />
        </Flex>
      </Flex>
    </Wrapper>
  );
};
