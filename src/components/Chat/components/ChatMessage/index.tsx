import * as S from "./styles";

interface ChatMessageProps {
  fromMe: boolean;
  message: string;
  date?: string;
}

const ChatMessage = ({ fromMe, message, date }: ChatMessageProps) => {
  return (
    <>
      <S.Container
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 25,
        }}
        fromMe={fromMe}
      >
        <S.Message fromMe={fromMe}>{message}</S.Message>
        <S.Date>{date}</S.Date>
      </S.Container>
    </>
  );
};

export default ChatMessage;
