import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.openai.com/v1",
});

api.defaults.headers.common[
  "Authorization"
] = `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`;
