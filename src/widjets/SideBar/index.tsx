import React, { useState } from "react";
import {
  ButtonContainer,
  CurrencyButton,
  CheckboxContainer,
  Checkbox,
} from "./style";
import { Container, Flex } from "../../shared/ui";
import { PlainTitle } from "../../shared/ui/PlainTitle";
import { Currency, currencies, useTicketStore } from "../../entities/ticket";

const stops = [
  { label: "Все", id: "all", checked: true }, // По умолчанию "Все" включено
  { label: "Без пересадок", id: "0", checked: false },
  { label: "1 пересадка", id: "1", checked: false },
  { label: "2 пересадки", id: "2", checked: false },
  { label: "3 пересадки", id: "3", checked: false },
];

interface SideBarProps {
  onFilterChange: (selectedStops: (number | null)[]) => void; // Использование типа number | null
}

const SideBar: React.FC<SideBarProps> = ({ onFilterChange }) => {
  const { activeCurrency, setActiveCurrency } = useTicketStore();
  const [selectedStops, setSelectedStops] = useState(stops);

  // Обработчик смены валюты
  const handleCurrencyClick = (currency: Currency) => {
    setActiveCurrency(currency);
  };

  // Обработчик для чекбоксов
  const handleCheckboxChange = (id: string) => {
    const updatedStops = selectedStops.map((stop) => {
      if (stop.id === "all") {
        return stop.id === id ? { ...stop, checked: true } : { ...stop, checked: false };
      }
      return stop.id === id
        ? { ...stop, checked: !stop.checked }
        : { ...stop, checked: stop.checked && id !== "all" };
    });

    setSelectedStops(updatedStops);

    // Собираем ID всех выбранных пересадок
    const selectedIds = updatedStops
      .filter((stop) => stop.checked)
      .map((stop) => stop.id);

    // Если выбрано "Все", передаём пустой массив (для отображения всех билетов)
    onFilterChange(selectedIds.includes("all") ? [] : selectedIds.map(Number));
  };

  const currencyKeys = Object.keys(currencies) as Currency[];

  return (
    <Container $width={"25%"} $padding={[20, 0]}>
      <Flex $width={"100%"} $gap={20}>
        <Flex $width={"100%"} $gap={15}>
          <PlainTitle>валюта</PlainTitle>

          <ButtonContainer>
            {currencyKeys.map((currency) => (
              <CurrencyButton
                key={currency}
                onClick={() => handleCurrencyClick(currency)}
                className={currency === activeCurrency ? "active" : ""}
              >
                {currency}
              </CurrencyButton>
            ))}
          </ButtonContainer>
        </Flex>

        <Flex $width={"100%"}>
          <PlainTitle>количество пересадок</PlainTitle>

          <CheckboxContainer>
            {selectedStops.map((stop) => (
              <Checkbox key={stop.id}>
                <input
                  type="checkbox"
                  checked={stop.checked}
                  onChange={() => handleCheckboxChange(stop.id)}
                />
                <span>{stop.label}</span>
              </Checkbox>
            ))}
          </CheckboxContainer>
        </Flex>
      </Flex>
    </Container>
  );
};

export default SideBar;
