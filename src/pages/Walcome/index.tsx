import React from "react";
import { Wrapper } from "./style";
import { ITicket, Ticket } from "../../entities/ticket";

export const Welcome: React.FC = () => {
  const ticketList: ITicket[] = [
    {
      id: "1",
      cost: "2 222 r",
      from: { time: "09:11", city: "Москва", date: "6 янв 2025, пн" },
      to: { time: "19:11", city: "Осло", date: "7 янв 2025, вт" },
      transfer: 2,
    },
  ];
  return (
    <Wrapper>
      {ticketList.map((ticket) => (
        <Ticket key={ticket.id} {...ticket} />
      ))}
    </Wrapper>
  );
};
