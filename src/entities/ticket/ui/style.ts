import styled from "styled-components";
import "../../../shared/variables.scss";

export const Head = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border-right: 2px solid var(--color-font-disable);
  padding-right: 20px;

  img{
   width: 80%;}
`;

export const BigText = styled.span`
  font-size: 23px;
  line-height: 30px;
  white-space: nowrap;
  color: var(--color-font);
`;

export const SmallText = styled.span`
  font-size: 13px;
  line-height: 17px;
  white-space: nowrap;
  color: var(--color-font-disable);
`;

export const Line = styled.div`
  width: 95%;
  height: 5px;
  border-radius: 5px;
  background-color: var(--color-font-disable);
  position: relative;

  svg {
    position: absolute;
    top: -8px;
    right: -22px;
    width: 20px;
    height: 20px;
    fill: var(--color-font-disable);
  }
`;
