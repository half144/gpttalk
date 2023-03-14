import * as S from "./styles";

interface AlertProps {}

const Alert = ({}: AlertProps) => {
  return (
    <S.Container>
      Estamos usando seu microfone, para parar aperte em STOP
    </S.Container>
  );
};

export default Alert;
