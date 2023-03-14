import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  max-width: 100vw;
  overflow: hidden;
  background-color: ${({ theme }) => theme.background};

  color: ${({ theme }) => theme.text};

  @media (max-width: 800px) {
    flex-direction: column-reverse;
    height: auto;
    gap: 20px;
  }
`;
