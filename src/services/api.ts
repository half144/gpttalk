import axios from "axios";

const apiKey = "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";

export const api = axios.create({
  baseURL: "https://api.openai.com/v1",
});

api.defaults.headers.common["Authorization"] = `Bearer ${apiKey}`;
