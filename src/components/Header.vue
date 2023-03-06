<script setup lang="ts">
import { useToggle } from "@vueuse/core";
import { isDark } from "../composable/dark";

const toggleDark = useToggle(isDark);
</script>

<template>
  <header py flex items-center justify-between>
    <h1 text-14>
      <span text-transparent bg-clip-text bg-gradient-to-r from-primary-cl to-secondary-cl dark:from-primary-cl-dark dark:to-secondary-cl-dark>ChatGPT</span> Demo
    </h1>
    <div @click="toggleDark()">
      <button v-if="isDark" class="i-mdi-white-balance-sunny" cursor-pointer text-7 />
      <button v-else class="i-mdi-moon-last-quarter" cursor-pointer text-7 />
    </div>
  </header>
  <p text-6 text-note-cl>
    Based on gpt-3.5-turbo, ❤️ <a text-note-cl underline-wavy href="https://openai.com/" target="_blank">OpenAI</a>
  </p>
</template>
