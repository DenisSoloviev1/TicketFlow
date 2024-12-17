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

export const Time = styled.span`
  font-size: 30px;
  line-height: 30px;
  white-space: nowrap;
  color: var(--color-font);
`;

export const City = styled.span`
  font-size: 13px;
  line-height: 17px;
  white-space: nowrap;
  color: var(--color-font);
`;

export const Date = styled.span`
  font-size: 13px;
  line-height: 17px;
  white-space: nowrap;
  color: var(--color-font-disable);
`;

export const Stops = styled.span`
  font-size: 13px;
  line-height: 17px;
  white-space: nowrap;
  color: var(--color-font-disable);
`;

export const Line = styled.div`
  width: 80%;
  height: 2px;
  border-radius: 5px;
  background-color: var(--color-font-disable);
  position: relative;

  svg {
    position: absolute;
    top: -9px;
    right: -22px;
    width: 20px;
    height: 20px;
    fill: var(--color-font-disable);
  }
`;
