import styled from "styled-components";

export const ThemeContainer = styled.div`

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const ThemeButton = styled.button`
  margin: 5px 5px;
  padding: 10px;
  font-size: 0.5rem;
  border: 3px solid ${({ theme }) => theme.colors.border};
  border-radius: 5px;
  width: 8rem;
  height: 8rem;
  cursor: pointer;

  &:hover {
    box-shadow: 2px 2px 2px ${({ theme }) => theme.colors.border};
`;
export const FontButton = styled.button`
  // margin: 5px 5px;
  // padding: 10px;
  // font-size: 0.5rem;
  // border: 3px solid ${({ theme }) => theme.colors.border};
  // border-radius: 5px;
  // width: 8rem;
  // height: 8rem;
  // cursor: pointer;

  // &:hover {
  //   box-shadow: 2px 2px 2px ${({ theme }) => theme.colors.border};
`;
