"use client";
import Chat from "@/components/Chat";
import { speak } from "@/funtions";
import { useGptTalk } from "@/hooks/useGptTalk";
import { useGptStore } from "@/store/useGptStore";
import SideArea from "./components/SideArea";
import * as S from "./styles";

interface HomeProps {}

const Home = ({}: HomeProps) => {
  const { start, stop, lastMessages } = useGptTalk();
  const isStarted = useGptStore((state) => state.isStarted);

  return (
    <S.Container>
      <Chat messages={lastMessages} />
      <SideArea start={start} stop={stop} isStarted={isStarted} />
    </S.Container>
  );
};

export default Home;
