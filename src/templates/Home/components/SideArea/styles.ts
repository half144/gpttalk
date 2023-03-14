import styled from "styled-components";

export const Container = styled.div`
  width: 57%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 10px;
`;

export const Select = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
