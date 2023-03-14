import axios from "axios";

const apiKey = "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";

export const api = axios.create({
  baseURL: "https://api.openai.com/v1",
});

api.defaults.headers.common["Authorization"] = `Bearer ${apiKey}`;
