import styled from "styled-components";

export const Container = styled.div`
  width: 40%;
  background-color: #eef6ff;
`;

export const Messages = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  max-height: 100vh;
  padding-bottom: 1.5em;
  padding-top: 1.5em;

  &::-webkit-scrollbar {
    width: 5px;
  }
`;
