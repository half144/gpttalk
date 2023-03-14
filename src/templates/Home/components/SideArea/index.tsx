"use client";
import Button from "@/components/Button";
import Header from "@/components/Header";
import Switch from "@/components/Switch";
import { useGptStore } from "@/store/useGptStore";
import Robot from "./components/Robot";
import Welcome from "./components/Welcome";
import * as S from "./styles";
import { FaHeadphonesAlt } from "react-icons/fa";

interface SideAreaProps {
  start: () => void;
  stop: () => void;
  isStarted: boolean;
}

const SideArea = ({ start, stop, isStarted }: SideAreaProps) => {
  const isTalking = useGptStore((state) => state.isTalking);
  const setIsHeadphone = useGptStore((state) => state.setIsHeadphone);

  return (
    <S.Container>
      <Header />
      <Welcome />
      {/* {isStarted && !isTalking && <Alert />} */}
      <Robot isTalking={isTalking} />
      <S.Select>
        <FaHeadphonesAlt size={22} />
        <Switch onChange={setIsHeadphone} />
      </S.Select>
      <S.Buttons>
        <Button disabled={isStarted} theme="black" onClick={start}>
          START
        </Button>
        <Button disabled={!isStarted} onClick={stop}>
          STOP
        </Button>
      </S.Buttons>
    </S.Container>
  );
};

export default SideArea;
