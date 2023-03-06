import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import UnoCSS from "unocss/vite";
import presetIcons from "@unocss/preset-icons";
import presetAttributify from "@unocss/preset-attributify";
import presetUno from "@unocss/preset-uno";

export default defineConfig({
  plugins: [
    vue(),
    UnoCSS({
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons(),
      ],
      theme: {
        colors: {
          noteCl: "#7F8C8D",
          chatBg: "#C3D6BD",
          chatInputBg: "#ADD8E6",
          primaryCl: "#2F7DED",
          secondaryCl: "#B8D9B8",
          chatCl: "#333",
          primaryClDark: "#7FB2F0",
          secondaryClDark: "#659E29",
          chatClDark: "#FFF",
        },
      },
    }),
  ],
  server: {
    port: 3000,
  },
});
