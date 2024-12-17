import styled from "styled-components";
import "../../shared/variables.scss";

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  border-radius: 8px;
      padding: 0 20px;


  button:first-child {
    border-radius: 8px 0 0 8px;
    border-right: 1px;
  }

  button:last-child {
    border-radius: 0 8px 8px 0;
    border-left: 1px;
  }
`;

export const CurrencyButton = styled.button`
  width: calc(100% / 3);
  padding: 16px 0;
  background-color: transparent;
  border: 2px solid #e0e0e0;
  color: var(--color-action);
  cursor: pointer;
  transition: all 0.3s;
  font-weight: 500;

  &.active {
    background-color: var(--color-action);
    color: var(--color-background);
    border: 2px solid var(--color-action);

    &:hover {
      background-color: var(--color-action);
    }
  }

  &:hover {
    background-color: #f2fcff;
    border: 2px solid var(--color-action);
  }
`;

export const CheckboxContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
`
export const Checkbox = styled.label`
  width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 10px 20px;

  input {
    margin-right: 8px;
    width: 20px;
    height: 20px;
  }
  span {
    font-size: 14px;
    color: #333;
  }
  &:hover {
    background-color: #e8f4ff;
    border-radius: 4px;
    color: #5a95db;
    font-size: 12px;
    text-decoration: none;
  }
`;
