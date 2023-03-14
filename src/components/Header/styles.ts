import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 100%;
`;

export const Header = styled.div`
  width: 70%;
  background-color: #fbfbfb;
  padding: 10px;
  border-radius: 20px;
`;

export const Links = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-evenly;
  align-items: center;
`;

export const Link = styled.li`
  cursor: pointer;
  color: #000000;
  font-weight: 700;
  font-size: 14px;
  transition: 0.2s;
  &:hover {
    color: #63a0fb;
  }
`;
