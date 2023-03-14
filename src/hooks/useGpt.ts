import { Message } from "@/@types";
import { getPureText } from "@/funtions";
import { GptServices } from "@/services/http/gpt";
import { useGptStore } from "@/store/useGptStore";
import { useState } from "react";

const getMessage = (text: string, fromMe: boolean): Message => ({
  id: new Date().getTime().toString(),
  text,
  fromMe,
  date: new Date().toLocaleTimeString(),
});

export const useGpt = () => {
  const [conversationHistory, setConversationHistory] = useState<string[]>([]);
  const [lastMessages, setLastMessages] = useState<Message[]>([]);
  const setIsThinking = useGptStore((state) => state.setIsThinking);

  const sendPrompt = async (prompt: string) => {
    try {
      setIsThinking(true);
      const promptMessage = getMessage(prompt, true);
      setLastMessages((lastMessages) => [...lastMessages, promptMessage]);
      const promptQuestion = `Q: ${prompt}?`;
      const promptTratedWithHistory = `${conversationHistory.join(
        " "
      )} ${promptQuestion}`;
      const result = await GptServices.getResponse(promptTratedWithHistory);

      const pureText = getPureText(result.choices[0].text);
      const responseMessage = getMessage(pureText, false);

      setConversationHistory((conversationHistory) => [
        ...conversationHistory,
        promptQuestion,
        `A: ${pureText}`,
      ]);
      setLastMessages((lastMessages) => [...lastMessages, responseMessage]);

      return pureText;
    } catch (error) {
      console.log(error);
    } finally {
      setIsThinking(false);
    }
  };

  const clearConversationHistory = () => {
    setConversationHistory([]);
    setLastMessages([]);
  };

  return {
    lastMessages,
    sendPrompt,
    clearConversationHistory,
  };
};
