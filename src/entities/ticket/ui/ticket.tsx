import React from "react";
import { ITicket, useTicketStore, Currency, currencies, exchangeRates, carriers } from "../model";
import { Container, CustomButton, Flex } from "../../../shared/ui";
import { Head, Time, City, Date, Stops, Line } from "./style";
import { PlaneSvg } from "../../../shared/ui/icon";

export const Ticket: React.FC<ITicket> = ({ ...props }) => {
  // // Функция для форматирования даты
  //   const formatDate = (date: string): string => {
  //   const [day, month, year] = date.split(".");

  //   // Создание строки в формате ISO и передача в Date
  //   const isoString = `20${year}-${month}-${day}`;
  //   const dateObj = new Date(isoString);

  //   return new Intl.DateTimeFormat("ru-RU", {
  //     day: "numeric",
  //     month: "short",
  //     year: "numeric",
  //     weekday: "short",
  //   }).format(dateObj);
  // };

  const { activeCurrency } = useTicketStore();

  // Функция для форматирования цены
  const formatPrice = (price: number, currency: Currency) => {
    const convertedPrice = price * exchangeRates[currency];
    return `${convertedPrice.toLocaleString("ru-RU", {
      minimumFractionDigits: 2,
    })} ${currencies[currency]}`;
  };

  const carrier = carriers.find((e) => e.name === props.carrier);

  return (
    <Container $width={"100%"} $padding={[0]}>
      <Head>
      {carrier && <img src={carrier.image} alt={`logo ${props.carrier}`} />}

        <CustomButton $style={"orange"} $width={"100%"}>
          Купить
          <br />
          за {formatPrice(props.price, activeCurrency)}
        </CustomButton>
      </Head>

      <Flex $width={"70%"} $direction={"row"}>
        <Flex $align={"flex-start"}>
          <Time>{props.departure_time}</Time>
          <City>
            {props.origin}, {props.origin_name}
          </City>
          <Date>{props.departure_date}</Date>
        </Flex>

        <Flex
          $width={"50%"}
          $height={"25px"}
          $justify={"flex-end"}
          $align={"center"}
        >
          <Stops>
            {props.stops === 0
              ? ""
              : props.stops === 1
              ? `${props.stops} пересадка`
              : `${props.stops} пересадки`}
          </Stops>

          <Line>
            <PlaneSvg />
          </Line>
        </Flex>

        <Flex $align={"flex-end"}>
          <Time>{props.arrival_time}</Time>
          <City>
            {props.destination}, {props.destination_name}
          </City>
          <Date>{props.arrival_date}</Date>
        </Flex>
      </Flex>
    </Container>
  );
};
