import axios from "axios";

const apiKey = "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";

export const api = axios.create({
  baseURL: "https://api.openai.com/v1",
});

api.defaults.headers.common["Authorization"] = `Bearer ${apiKey}`;
