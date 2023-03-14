import axios from "axios";

const apiKey = "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";

export const api = axios.create({
  baseURL: "https://api.openai.com/v1",
});

api.defaults.headers.common["Authorization"] = `Bearer ${apiKey}`;
