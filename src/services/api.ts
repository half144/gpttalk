import axios from "axios";

const apiKey = "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";

export const api = axios.create({
  baseURL: "https://api.openai.com/v1",
});

api.defaults.headers.common["Authorization"] = `Bearer ${apiKey}`;
