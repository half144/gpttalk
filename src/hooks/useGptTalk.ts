import { speak } from "@/funtions";
import { useGptStore } from "@/store/useGptStore";
import { useEffect } from "react";
import { useGpt } from "./useGpt";
import { useSpeechApi } from "./useSpeech";

export const useGptTalk = () => {
  const { start, stop, speechInstance, result, isEnd } = useSpeechApi();
  const { sendPrompt, lastMessages, clearConversationHistory } = useGpt();
  const isTalking = useGptStore((state) => state.isTalking);
  const isStarted = useGptStore((state) => state.isStarted);

  useEffect(() => {
    if (!speechInstance) return;
    if (isEnd) return clearConversationHistory();

    const gpt = async () => {
      if (!result) return;
      if (isTalking) return;
      try {
        const responseFromGpt = await sendPrompt(result);
        speak(responseFromGpt as string, captureMicAgain);
      } catch (error) {
        console.log(error);
      }
    };

    const captureMicAgain = () => {
      speechInstance.start();
    };

    gpt();
  }, [result, speechInstance, isEnd]);

  useEffect(() => {
    if (!speechInstance) return;
    if (isEnd) return;
    if (isTalking) return speechInstance.stop();

    const handleEnd = () => {
      if (isTalking) return;
      speechInstance.start();
    };

    speechInstance.onend = () => {
      handleEnd();
    };

    return () => {
      speechInstance.onend = null;
    };
  }, [isTalking, speechInstance, isEnd, isStarted]);

  return {
    start,
    stop,
    lastMessages,
  };
};
