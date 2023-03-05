<script setup lang="ts">
import { onMounted } from "vue";

const env = import.meta.env;

onMounted(async () => {
  const res = await (await fetch("https://api.openai.com/v1/chat/completions", {
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${env.VITE_OPENAI_API_KEY}`,
    },
    method: "POST",
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: "Hello!" }],
    }),
  })).json();
  console.log(res);
});
</script>

<template>
  <h1>Hi</h1>
</template>
