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
