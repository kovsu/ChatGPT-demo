import { createApp } from "vue";
import "./style.css";
import "uno.css";
import { routes } from "./router";
import App from "./App.vue";

const app = createApp(App);
app.use(routes);
app.mount("#app");
