import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  position: relative;
  height: 22px;
  width: 40px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 20px;
  display: flex;
  align-items: center;
`;

type BallProps = {
  active: boolean;
};

export const Ball = styled(motion.div)<BallProps>`
  height: 18px;
  width: 18px;
  background-color: white;
  border-radius: 50%;

  position: absolute;
`;
