<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { chatData as data, generateDate, num } from "../composable/utils";

const mask = ref(false);
const router = useRouter();

const remove = (index: number) => {
  data.splice(index, 1);
};

const newChat = () => {
  mask.value = true;
  data.push({
    name: `Chat ${num.value}`,
    created: generateDate(),
    messages: [],
  });
  num.value++;
  mask.value = false;
};

const toChat = (index: number) => {
  router.push(`/chat/${index}`);
};
</script>

<template>
  <Teleport v-if="mask" to="body">
    <div fixed top-0 left-0 right-0 bottom-0 bg-black />
    <div fixed z-50 max-w-max flex flex-col items-center gap-4 text-note-cl class="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <div text-5xl class="i-mdi-loading loading" />
      <p text-2xl>
        Creating New Chat ...
      </p>
    </div>
  </Teleport>
  <div py-4 my-4 flex flex-col gap-4>
    <div text-note-cl flex items-center cursor-pointer duration-150 max-w-max hover="text-chat-cl dark:text-chat-cl-dark" @click="newChat">
      <div class="i-mdi-plus" text-8 />
      <p>New Chat</p>
    </div>
    <TransitionGroup name="chats">
      <div v-for="(i, index) in data" :key="i.name" p-6 border border-chat-cl dark:border-chat-cl-dark border-solid rounded-xl flex justify-between items-center>
        <div cursor-pointer @click="toChat(index)">
          <p text-8 font-medium mb-2>
            {{ i.name }}
          </p>
          <p text-4 text-note-cl>
            {{ i.created }}
          </p>
        </div>
        <div text-8 cursor-pointer class="i-mdi-close" @click="remove(index)" />
      </div>
    </TransitionGroup>
  </div>
</template>

<style scoped>
.chats-enter-active,
.chats-leave-active {
  transition: all 0.5s ease;
}
.chats-enter-from,
.chats-leave-to {
  opacity: 0;
  transform: translateX(-50px);
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.loading {
  animation: spin 1s linear infinite;
}
</style>
