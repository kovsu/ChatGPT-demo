<script setup lang="ts">
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { chatData } from "../composable/utils";
import Loading from "../components/Loading.vue";

const route = useRoute();
const router = useRouter();

const state = chatData[+route.params.id];
const disable = ref(false);
const message = ref("");
const container = ref<HTMLElement | null>(null);

if (state === undefined)
  router.push("/list");

const back = () => {
  router.push("/");
};

const clear = () => {
  state.messages = [];
};

const sendMessage = () => {
  disable.value = true;
  state.messages.push({
    role: "user",
    content: message.value,
  });
  message.value = "";
  disable.value = false;

  setTimeout(() => {
    container.value?.scrollTo({
      top: container.value.scrollHeight,
      behavior: "smooth",
    });
  });
};
</script>

<template>
  <div py-4 my-6>
    <header flex items-center justify-between>
      <div flex items-center gap-2 cursor-pointer text-2xl @click="back">
        <div class="i-mdi-arrow-u-left-bottom" />
        <p>Back</p>
      </div>
      <p text-4xl font-bold>
        {{ state?.name }}
      </p>
      <div text-3xl cursor-pointer class="i-mdi-trash-can-outline" @click="clear" />
    </header>
    <div ref="container" h-4xl p-4 my-4 flex flex-col gap-4 overflow-y-scroll overflow-x-hidden>
      <Loading />
      <TransitionGroup name="message">
        <div v-for="(message, index) in state?.messages" :key="index" w-max :class="message.role === 'user' ? 'self-end' : 'self-start'">
          <div p-4 bg-chat-bg max-w-xl w-max rounded-lg>
            <p text-6 break-words>
              {{ message.content }}
            </p>
          </div>
        </div>
      </TransitionGroup>
    </div>
    <div flex items-center bg-chat-input-bg rounded-lg px-4>
      <input v-model="message" type="text" :disabled="disable" placeholder="..." border-none outline-none bg-transparent px-4 py-6 text-2xl text-chat-cl dark:text-chat-cl-dark grow class="placeholder: text-chat-cl placeholder:dark:text-chat-cl-dark" @keydown.enter="sendMessage">
      <div text-4xl ml-auto class="i-mdi-send-variant -rotate-45" cursor-pointer @click="sendMessage" />
    </div>
  </div>
</template>

<style scoped>
.message-enter-active,
.message-leave-active {
  transition: all 0.75s ease;
}
.message-enter-from,
.message-leave-to {
  opacity: 0;
}
</style>
