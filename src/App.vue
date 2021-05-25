<template>
  <div class="wrapper">
    <header>
      <h1 class="header-logo">#todo</h1>

      <!-- PLACE TAB COMPONENT HERE -->
      <tab-component @updateTab="updateActiveTab(newState)" />
    </header>
    <section>
      <!-- PLACE INPUT COMPONENT HERE - only when COMPLETED tab NOT active -->
      <app-input />

      <!-- PLACE TODO ITEM LIST COMPONENT HERE -->
      <todo-list :todoList="todos" />

      <!-- DELETE COMPLETED ITEMS BUTTON - only shown when COMPLETED Tab active -->
      <button class="app-delete-button">delete all</button>
    </section>
  </div>
</template>

<script>
import AppInput from "./components/AppInput";
import Tabs from "./components/Tabs";
import TodoList from "./components/TodoList";

export default {
  components: {
    "app-input": AppInput,
    "tab-component": Tabs,
    "todo-list": TodoList,
  },
  name: "App",
  data() {
    return {
      todos: [
        { id: "1234-1234-1234", value: "shop for dinner", isChecked: false },
        { id: "4321-4321-4321", value: "cook for dinner", isChecked: false },
        { id: "5678-5678-5678", value: "run off dinner", isChecked: false },
      ],
      activeTab: "all", // all, active, completed
    };
  },
  methods: {
    // Add todo
    // Delete todo
    // Update Todo 'isChecked' state
    // Update activeTab
    updateActiveTab(newState) {
      this.activeTab = newState;
    },
  },
};
</script>

<style>
#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 6rem;
  max-width: 60.8rem;
}

.header-logo {
  font-family: "Raleway", sans-serif;
  font-size: 3.6rem;
}
</style>
