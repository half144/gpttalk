import axios from "axios";

const apiKey = "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";

export const api = axios.create({
  baseURL: "https://api.openai.com/v1",
});

api.defaults.headers.common["Authorization"] = `Bearer ${apiKey}`;
