import { useGptStore } from "@/store/useGptStore";

export const getPureText = (text: string): string => {
  const resultTratedWithNoA = text.replace("A:", "");
  const resultTratedWithNoR = resultTratedWithNoA.replace("R:", "");
  const resultWithNoLineBreak = resultTratedWithNoR.replace(
    /(\r\n|\n|\r)/gm,
    ""
  );
  return resultWithNoLineBreak.trim();
};

export const speak = (text: string, callback: () => void) => {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 2.5;
  useGptStore.setState({ isTalking: true });
  speechSynthesis.speak(utterance);
  utterance.onend = () => {
    useGptStore.setState({ isTalking: false });
    callback();
  };
};
