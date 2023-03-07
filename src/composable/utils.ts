import { reactive } from "vue";
import dayjs from "dayjs";

interface Message {
  role: "user" | "assistant"
  content: string
}

interface Chat {
  name: string
  created: string
  messages: Message[]
}

export const chatData = reactive<Chat[]>([]);

export const generateDate = () => dayjs().format("YYYY.MM.DD HH:mm");

export const chatWithAssistant = async (messages: Message[]) => {
  const res = await (await fetch("https://api.openai.com/v1/chat/completions", {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
    },
    method: "POST",
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages,
    }),
  })).json();

  return res.choices[0].message;
};
