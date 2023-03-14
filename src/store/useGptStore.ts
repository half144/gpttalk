import { create } from "zustand";

type GptStore = {
  isStarted: boolean;
  isThinking: boolean;
  isTalking: boolean;
  isHeadphone: boolean;
  setIsStarted: (isStarted: boolean) => void;
  setIsThinking: (isThinking: boolean) => void;
  setIsTalking: (isTalking: boolean) => void;
  setIsHeadphone: (isHeadphone: boolean) => void;
};

export const useGptStore = create<GptStore>((set) => ({
  isStarted: false,
  isThinking: false,
  isTalking: false,
  isHeadphone: true,
  setIsStarted: (isStarted: boolean) => set({ isStarted }),
  setIsThinking: (isThinking: boolean) => set({ isThinking }),
  setIsTalking: (isTalking: boolean) => set({ isTalking }),
  setIsHeadphone: (isHeadphone: boolean) => set({ isHeadphone }),
}));
