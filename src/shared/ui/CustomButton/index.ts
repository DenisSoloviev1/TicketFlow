import styled from "styled-components";
import "../../variables.scss";

export const CustomButton = styled.button<{
  $style?: "orange" | "blue";
  $width?: string;
}>`
  display: flex;
  width: ${(props) => (props.$width ? `${props.$width}` : ``)};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
  gap: 15px;
  padding: 10px;

  ${(props) =>
    props.$style === "orange" &&
    `
      color: var(--color-background-container);
      background-color: #FF6D00;

      &:hover {
        background-color: #FB7A17;
      }
  `}

  ${(props) =>
    props.$style === "blue" &&
    `
      color: var(--color-background);
      background-color: var(--color-action);

      &:hover {
        background-color: #167ff6;
      }
  `}
`;
