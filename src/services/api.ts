import axios from "axios";

const apiKey = "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";

export const api = axios.create({
  baseURL: "https://api.openai.com/v1",
});

api.defaults.headers.common["Authorization"] = `Bearer ${apiKey}`;
