<template>
  <div class="wrapper">
    <header>
      <h1 class="header-logo">#todo</h1>

      <!-- PLACE TAB COMPONENT HERE -->
      <tab-component @tabSelection="updateActiveTab" />
    </header>
    <section>
      <!-- PLACE INPUT COMPONENT HERE - only when COMPLETED tab NOT active -->
      <app-input
        label="add details"
        v-if="!isCompletedTab"
        @onClick="addTodo"
      />

      <!-- PLACE TODO ITEM LIST COMPONENT HERE -->

      {{ activeTab }}
      <component
        :is="activeTab"
        :todoList="renderedTodos"
        @updateTodo="changeTodoState"
      />

      <!-- DELETE COMPLETED ITEMS BUTTON - only shown when COMPLETED Tab active -->
      <button class="app-delete-button" v-if="isCompletedTab">
        delete all
      </button>
    </section>
  </div>
</template>

<script>
import AppInput from "./components/AppInput";
import Tabs from "./components/Tabs";

export default {
  components: {
    "app-input": AppInput,
    "tab-component": Tabs,
  },
  name: "App",
  data() {
    return {
      todos: [
        { id: "1234-1234-1234", value: "shop for dinner", isChecked: false },
        { id: "4321-4321-4321", value: "cook for dinner", isChecked: false },
        { id: "5678-5678-5678", value: "run off dinner", isChecked: false },
      ],
      activeTab: "all-todos", // all, active, completed
    };
  },
  methods: {
    // Add todo
    addTodo(newTodo) {
      // console.log(newTodo);
      this.todos.push(newTodo);
    },
    // Delete todo
    // Update Todo 'isChecked' state
    changeTodoState(todoID) {
      console.log(todoID);

      this.todos.forEach((el) => {
        if (el.id === todoID) {
          el.isChecked = !el.isChecked;
        }
      });
      // console.log(this.todos);
    },
    // Update activeTab
    updateActiveTab(newState) {
      this.activeTab = newState;
    },
  },
  computed: {
    isCompletedTab() {
      return this.activeTab === "completed-todos" ? true : false;
    },
    renderedTodos() {
      if (this.isCompletedTab) {
        return this.todos.filter((todo) => todo.isChecked === true);
      }
      if (this.activeTab === "active-todos") {
        return this.todos.filter((todo) => todo.isChecked === false);
      }
      return this.todos;
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
