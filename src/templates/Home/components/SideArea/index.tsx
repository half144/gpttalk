import Alert from "@/components/Alert";
import Button from "@/components/Button";
import Header from "@/components/Header";
import { useGptStore } from "@/store/useGptStore";
import Robot from "./components/Robot";
import Welcome from "./components/Welcome";
import * as S from "./styles";

interface SideAreaProps {
  start: () => void;
  stop: () => void;
  isStarted: boolean;
}

const SideArea = ({ start, stop, isStarted }: SideAreaProps) => {
  const isTalking = useGptStore((state) => state.isTalking);
  return (
    <S.Container>
      <Header />
      <Welcome />
      <Robot isTalking={isTalking} />
      <S.Buttons>
        <Button disabled={isStarted} theme="black" onClick={start}>
          START
        </Button>
        <Button disabled={!isStarted} onClick={stop}>
          STOP
        </Button>
      </S.Buttons>
      {isStarted && !isTalking && <Alert />}
    </S.Container>
  );
};

export default SideArea;
