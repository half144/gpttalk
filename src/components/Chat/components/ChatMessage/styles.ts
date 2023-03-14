import styled from "styled-components";
import { motion } from "framer-motion";

type MessageForm = {
  fromMe: boolean;
};

export const Container = styled(motion.div)<MessageForm>`
  display: flex;
  justify-content: ${({ fromMe }) => (fromMe ? "flex-end" : "flex-start")};
  padding: 8px;
  align-items: flex-end;
  gap: 5px;
`;

export const Message = styled.div<MessageForm>`
  padding: 12px;
  background-color: ${({ fromMe }) => (fromMe ? "#FFFFFF" : "#63A0FB")};
  color: ${({ fromMe }) => (fromMe ? "#000000" : "#FFFFFF")};
  width: auto;
  font-weight: 500;
  border-radius: 5px;
  max-width: 80%;
`;

export const Date = styled.div`
  font-size: 10px;
  color: ${({ theme }) => theme.textSecondary};
  margin-top: 4px;
  text-align: right;
`;
