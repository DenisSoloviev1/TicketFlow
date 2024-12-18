import { Currency } from "./types";

export const stops = [
  { label: "Все", id: "all", checked: true },
  { label: "Без пересадок", id: "0", checked: false },
  { label: "1 пересадка", id: "1", checked: false },
  { label: "2 пересадки", id: "2", checked: false },
  { label: "3 пересадки", id: "3", checked: false },
];

export const carriers = [
    {name: "TK", image: "/TurkishAirlines.png"},
    {name: "S7", image: "/S7.png"},
    {name: "SU", image: "/RussianAirlines.png"},
    {name: "BA", image: "/BritishAirways.png"},
]

export const currencies: Record<Currency, string> = {
  RUB: "₽",
  USD: "$",
  EUR: "€",
};

export const exchangeRates: Record<Currency, number> = {
  RUB: 1,
  USD: 0.011,
  EUR: 0.01,
};

