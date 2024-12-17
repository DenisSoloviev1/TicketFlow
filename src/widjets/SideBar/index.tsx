import React, { useState } from "react";
import { ButtonContainer, CurrencyButton, CheckboxContainer, Checkbox } from "./style";
import { Container, Flex } from "../../shared/ui";
import { PlainTitle } from "../../shared/ui/PlainTitle";

const currencies = ["RUB", "USD", "EUR"];

const stops = [
  { label: "Все", id: "all", checked: false },
  { label: "Без пересадок", id: "noStops", checked: false },
  { label: "1 пересадка", id: "oneStop", checked: false },
  { label: "2 пересадки", id: "twoStops", checked: false },
  { label: "3 пересадки", id: "threeStops", checked: false },
];

const SideBar: React.FC = () => {
  const [activeCurrency, setActiveCurrency] = useState<string>("RUB");
  const [selectedStops, setSelectedStops] = useState(stops);

  // Обработчик смены валюты
  const handleCurrencyClick = (currency: string) => {
    setActiveCurrency(currency);
  };

  // Обработчик для чекбоксов
  const handleCheckboxChange = (id: string) => {
    setSelectedStops((prevStops) =>
      prevStops.map((stop) =>
        stop.id === id ? { ...stop, checked: !stop.checked } : stop
      )
    );
  };
  return (
    <Container $width={"25%"} $padding={[20, 0]}>
      <Flex $width={"100%"} $gap={20}>
        <Flex $width={"100%"} $gap={15}>
          <PlainTitle>валюта</PlainTitle>

          <ButtonContainer>
            {currencies.map((currency) => (
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

        <Flex $width={"100%"} >
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
