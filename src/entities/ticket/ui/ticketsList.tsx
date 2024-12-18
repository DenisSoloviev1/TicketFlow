import React from "react";
import { Ticket } from "./ticket";
import { ITicket } from "../model";
import ticketData from "../api/tickets.json";
import { Flex, Skeleton } from "../../../shared/ui";

interface TicketListProps {
  stops: ITicket["stops"][];
}

export const TicketsList: React.FC<TicketListProps> = ({ stops }) => {
  // Фильтрация билетов на основе выбранных пересадок
  const filteredTickets = ticketData.tickets.filter((ticket) => {
    if (stops.length === 0) return true; // Если фильтры пустые, отображаем все билеты
    return stops.includes(ticket.stops);
  });

  return (
    <Flex $gap={20} $width={"100%"}>
      {filteredTickets.length === 0
        ? Array.from({ length: 3 }).map((_, index) => (
            <Skeleton key={index} $height="150px" />
          ))
        : filteredTickets.map((ticket, index) => (
            <Ticket key={index} {...ticket} />
          ))}
    </Flex>
  );
};
