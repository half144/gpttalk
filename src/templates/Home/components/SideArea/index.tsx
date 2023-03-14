import Alert from "@/components/Alert";
import Button from "@/components/Button";
import Header from "@/components/Header";
import Robot from "./components/Robot";
import Welcome from "./components/Welcome";
import * as S from "./styles";

interface SideAreaProps {
  start: () => void;
  stop: () => void;
  isStarted: boolean;
}

const SideArea = ({ start, stop, isStarted }: SideAreaProps) => {
  return (
    <S.Container>
      <Header />
      {isStarted && <Alert />}
      <Welcome />
      <Robot />
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
