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

export const speak = (text: string) => {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 3;
  useGptStore.setState({ isTalking: true });
  speechSynthesis.speak(utterance);

  // when stop talking set isTalking to false
  utterance.onend = () => {
    useGptStore.setState({ isTalking: false });
  };
};
