import styled from "styled-components";
import "../../Variables.scss";

export const Container = styled.div<{
  $width?: string;
  $border?: number;
  $gap?: number;
  $padding?: number | number[];
}>`
  width: ${(props) => props.$width};
  max-width: 700px;
  height: fit-content;
  display: flex;
  align-items: center;
  background-color: var(--color-background-container);
  border: 2px solid var(--color-border);
  border-radius: ${(props) => (props.$border ? `${props.$border}px` : "8px")};
  gap: ${(props) => (props.$gap ? `${props.$gap}px` : "5px")};
  padding: ${(props) => {
    if (Array.isArray(props.$padding)) {
      const [top, right = top, bottom = top, left = right] = props.$padding;
      return `${top}px ${right}px ${bottom}px ${left}px`;
    }
    return `${props.$padding || 20}px`;
  }};
  transition: all 0.3s ease-in-out;
`;
