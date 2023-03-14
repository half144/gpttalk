import { speak } from "@/funtions";
import { useGptStore } from "@/store/useGptStore";
import { useEffect } from "react";
import { useGpt } from "./useGpt";
import { useSpeechApi } from "./useSpeech";

export const useGptTalk = () => {
  const { start, stop, speechInstance, result, isEnd, clearResult } =
    useSpeechApi();
  const { sendPromptWithHistory, lastMessages, clearConversationHistory } =
    useGpt();
  const isTalking = useGptStore((state) => state.isTalking);
  const isStarted = useGptStore((state) => state.isStarted);
  const isHeadphone = useGptStore((state) => state.isHeadphone);

  useEffect(() => {
    if (!speechInstance) return;
    if (isEnd) return clearConversationHistory();

    const gpt = async () => {
      if (!result) return;
      if (isTalking && !isHeadphone) return;
      try {
        const responseFromGpt = await sendPromptWithHistory(result);
        speak(responseFromGpt as string, captureMicAgain);
        clearResult();
      } catch (error) {
        console.log(error);
      }
    };

    const captureMicAgain = () => {
      if (isHeadphone) return;
      speechInstance.start();
    };

    gpt();
  }, [result, speechInstance, isEnd, isHeadphone]);

  useEffect(() => {
    if (!speechInstance) return;
    if (isEnd) return;
    if (isTalking && !isHeadphone) return speechInstance.stop();

    const handleEnd = () => {
      if (isTalking && !isHeadphone) return;
      speechInstance.start();
    };

    speechInstance.onend = () => {
      handleEnd();
    };

    return () => {
      speechInstance.onend = null;
    };
  }, [isTalking, speechInstance, isEnd, isStarted, isHeadphone]);

  return {
    start,
    stop,
    lastMessages,
  };
};
