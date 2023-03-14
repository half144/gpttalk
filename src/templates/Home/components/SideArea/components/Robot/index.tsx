import { useGptStore } from "@/store/useGptStore";
import { Variants } from "framer-motion";
import Image from "next/image";
import * as S from "./styles";

const variants: Variants = {
  start: {
    scale: [1, 1.04],

    transition: {
      repeat: Infinity,
      repeatType: "reverse",

      duration: 0.12,
    },
  },
  stop: {
    scale: 1,

    transition: {
      when: "afterChildren",
    },
  },
};

interface RobotProps {}

const Robot = ({}: RobotProps) => {
  const isTalking = useGptStore((state) => state.isTalking);

  console.log("isTalking", isTalking);

  return (
    <S.Robot
      animate={isTalking ? "start" : "stop"}
      variants={variants}
      transition={{}}
    >
      <Image src="/robot.png" width={200} height={260} alt="robot" />
    </S.Robot>
  );
};

export default Robot;
