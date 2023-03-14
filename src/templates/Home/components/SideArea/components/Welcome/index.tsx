import * as S from "./styles";

interface WelcomeProps {}

const Welcome = ({}: WelcomeProps) => {
  return (
    <S.Container>
      <h1>
        Bem vindos ao GPT <span>TALK</span>
      </h1>
      <S.CreatedBy>CREATED BY HALF144</S.CreatedBy>
    </S.Container>
  );
};

export default Welcome;
