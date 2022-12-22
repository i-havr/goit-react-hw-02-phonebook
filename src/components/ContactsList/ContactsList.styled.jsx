import styled from 'styled-components';

export const ContactsListStyled = styled.ul`
  padding-left: 20px;
  color: black;
`;

export const MarkerStyled = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 5px;
  max-width: 100%
  padding-right: 20px;
  color: #07c;
  &::before {
    content: '';
    width: 10px;
    height: 8px;
    margin-right: 10px;
    border-radius:999px;
    background-color: #07c;
  }
`;
export const ItemListStyled = styled.span`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-right: 20px;
  color: black;
`;
