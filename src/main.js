import { createApp } from "vue";
import App from "./App.vue";

import TodoList from "./components/TodoList";
import TodoAll from "./pages/TodosAll";
import TodoActive from "./pages/TodosActive";
import TodoCompleted from "./pages/TodosCompleted";

// BASE STYLES
import "./assets/main.css";

const app = createApp(App);

app.component("todo-list", TodoList);
app.component("all-todos", TodoAll);
app.component("active-todos", TodoActive);
app.component("completed-todos", TodoCompleted);

app.mount("#app");
