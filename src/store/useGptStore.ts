import { create } from "zustand";

type GptStore = {
  isStarted: boolean;
  isThinking: boolean;
  isTalking: boolean;
  setIsStarted: (isStarted: boolean) => void;
  setIsThinking: (isThinking: boolean) => void;
  setIsTalking: (isTalking: boolean) => void;
};

export const useGptStore = create<GptStore>((set) => ({
  isStarted: false,
  isThinking: false,
  isTalking: false,
  setIsStarted: (isStarted: boolean) => set({ isStarted }),
  setIsThinking: (isThinking: boolean) => set({ isThinking }),
  setIsTalking: (isTalking: boolean) => set({ isTalking }),
}));
