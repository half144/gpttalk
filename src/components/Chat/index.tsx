import { Message } from "@/@types";
import { useGptStore } from "@/store/useGptStore";
import { useEffect, useRef } from "react";
import ChatMessage from "./components/ChatMessage";
import * as S from "./styles";
import { motion, AnimatePresence } from "framer-motion";

interface ChatProps {
  messages: Message[];
}

const Chat = ({ messages }: ChatProps) => {
  const isThinking = useGptStore((state) => state.isThinking);
  const chatRef = useRef<HTMLDivElement>(null);

  function scrollToBottom() {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }
  // atualiza o scroll do chat sempre que houver uma nova mensagem
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <S.Container>
      <S.Messages ref={chatRef}>
        {!messages.length && (
          <>
            <ChatMessage fromMe={false} message="Olá, bem vindo ao GPT TALK!" />
            <ChatMessage
              fromMe={false}
              message="Clique em START para começar e testar a ferramenta."
            />
          </>
        )}
        {messages?.map((message) => (
          <ChatMessage
            key={message.id}
            fromMe={message.fromMe}
            message={message.text}
            date={message.date}
          />
        ))}
        {isThinking && <ChatMessage fromMe={false} message="..." />}
      </S.Messages>
    </S.Container>
  );
};

export default Chat;
