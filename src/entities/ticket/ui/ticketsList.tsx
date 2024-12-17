import React from "react";
import { Ticket } from "./ticket";
import ticketData from "../api/tickets.json";
import { Flex } from "../../../shared/ui";

export const TicketsList: React.FC = () => {
  return (
    <Flex $gap={20} $width={"75%"}>
      {ticketData.tickets.map((ticket, index) => (
        <Ticket key={index} {...ticket} />
      ))}
    </Flex>
  );
};
