import { api } from "@/services/api";

export const GptServices = {
  getResponse: async (text: string) => {
    try {
      const response = await api.post("/completions", {
        model: "text-davinci-003",
        prompt: text,
        temperature: 0,
        max_tokens: 200,
        top_p: 1,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
      });
      return response.data;
    } catch (error: any) {
      throw new Error(error.message);
    }
  },
};
