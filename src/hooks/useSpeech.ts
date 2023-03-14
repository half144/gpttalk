import { useGptStore } from "@/store/useGptStore";
import { useState, useEffect, useRef } from "react";

declare global {
  interface Window {
    webkitSpeechRecognition: any;
    webkitSpeechSynthesis: any;
  }
}

const createSpeechRecognition = () => {
  const SpeechRecognition = window.webkitSpeechRecognition;
  return new SpeechRecognition();
};

export const useSpeechApi = () => {
  const [speechInstance, setSpeechInstance] = useState<any | null>(null);
  const [result, setResult] = useState<string>("");
  const [isEnd, setIsEnd] = useState(false);
  const setIsStarted = useGptStore((state) => state.setIsStarted);
  const isTalking = useGptStore((state) => state.isTalking);

  useEffect(() => {
    const speechRecognition = createSpeechRecognition();
    speechRecognition.lang = "pt-BR";
    setSpeechInstance(speechRecognition);

    speechRecognition.onresult = (event: any) => {
      const resultEvent = event.results[event.resultIndex];
      const transcript = resultEvent[0].transcript;

      setResult(transcript);
    };
  }, []);

  const start = () => {
    setIsEnd(false);
    setIsStarted(true);
    speechInstance.start();
  };

  const stop = () => {
    setIsEnd(true);
    setIsStarted(false);
    setResult("");
    speechInstance.stop();
  };

  const clearResult = () => {
    setResult("");
  };

  return {
    start,
    stop,
    result,
    isEnd,
    speechInstance,
    clearResult,
  };
};
