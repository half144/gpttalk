import { speak } from "@/funtions";
import { useEffect } from "react";
import { useGpt } from "./useGpt";
import { useSpeechApi } from "./useSpeech";

export const useGptTalk = () => {
  const { start, stop, speechInstance, result, isEnd } = useSpeechApi();
  const { sendPrompt, lastMessages, clearConversationHistory } = useGpt();

  useEffect(() => {
    if (!speechInstance) return;
    if (isEnd) return clearConversationHistory();
    const gpt = async () => {
      if (!result) return;
      try {
        const responseFromGpt = await sendPrompt(result);
        speak(responseFromGpt as string);
      } catch (error) {
        console.log(error);
      }
    };
    gpt();

    speechInstance.onend = () => {
      if (isEnd) return clearConversationHistory();
      speechInstance.start();
    };

    return () => {
      speechInstance.onend = null;
    };
  }, [result, speechInstance, isEnd]);

  return {
    start,
    stop,
    lastMessages,
  };
};
