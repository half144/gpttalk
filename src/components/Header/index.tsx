import * as S from "./styles";

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  return (
    <S.Container>
      <S.Header>
        <S.Links>
          <S.Link
            href="https://github.com/half144/gpttalk"
            target="_blank"
            rel="noreferrer"
          >
            GITHUB
          </S.Link>
          <S.Link
            href="https://www.linkedin.com/in/rafael-vinicius-pinheiro-de-sousa/"
            target="_blank"
            rel="noreferrer"
          >
            LINKEDIN
          </S.Link>
          <S.Link
            href="https://www.rafacodes.me/"
            target="_blank"
            rel="noreferrer"
          >
            PORTIFÓLIO
          </S.Link>
        </S.Links>
      </S.Header>
    </S.Container>
  );
};

export default Header;
