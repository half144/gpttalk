import * as S from "./styles";

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  return (
    <S.Container>
      <S.Header>
        <S.Links>
          <S.Link>GITHUB</S.Link>
          <S.Link>LINKEDIN</S.Link>
          <S.Link>PORTIFÓLIO</S.Link>
        </S.Links>
      </S.Header>
    </S.Container>
  );
};

export default Header;
