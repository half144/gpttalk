import axios from "axios";

const apiKey = "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";

export const api = axios.create({
  baseURL: "https://api.openai.com/v1",
});

api.defaults.headers.common["Authorization"] = `Bearer ${apiKey}`;
