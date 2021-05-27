<template>
  <div>
    <header class="main-header">
      <h1 class="header-logo">#todo</h1>

      <!-- PLACE TAB COMPONENT HERE -->
      <tab-component @tabSelection="updateActiveTab" />
    </header>
    <section class="main-section">
      <!-- PLACE INPUT COMPONENT HERE - only when COMPLETED tab NOT active -->
      <app-input
        label="add details"
        v-if="!isCompletedTab"
        @onClick="addTodo"
      />

      <!-- PLACE TODO ITEM LIST COMPONENT HERE -->
      <component
        :is="activeTab"
        :todoList="renderedTodos"
        :isCompleted="isCompletedTab"
        @updateTodo="changeTodoState"
        @deleteTodo="deleteSingleTodo"
      />

      <!-- DELETE COMPLETED ITEMS BUTTON - only shown when COMPLETED Tab active -->
      <button
        class="app-delete-button"
        v-if="isCompletedTab"
        @click="deleteAllTodo"
      >
        <svg class="delete-all-icon"><use xlink:href="#delete-trash" /></svg>
        delete all
      </button>
    </section>
    <i data-fa-symbol="delete-trash" class="fas fa-trash"></i>
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
    deleteSingleTodo(todoID) {
      this.todos.forEach((el, index) => {
        if (el.id === todoID) {
          this.todos.splice(index, 1);
          return;
        }
      });
    },
    deleteAllTodo() {
      const newArr = this.todos.filter((todo) => todo.isChecked === false);

      this.todos = newArr;
    },
    // Update Todo 'isChecked' state
    changeTodoState(todoID) {
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
  color: #2c3e50;
  margin: 6rem auto;
  max-width: 60.8rem;
}

.delete-all-icon {
  --delete-all-sizing: 1rem;
  width: var(--delete-all-sizing);
  height: var(--delete-all-sizing);
}

.main-header {
  text-align: center;
}

.main-section {
  display: flex;
  flex-direction: column;
}

.header-logo {
  font-family: "Raleway", sans-serif;
  font-size: 3.6rem;
  font-weight: 700;
  margin-bottom: 4rem;
}

.app-delete-button {
  cursor: pointer;
  align-self: flex-end;
  padding: 1.2rem 2.6rem;
  border-radius: 4px;
  color: white;
  background-color: #EB5757;
  font-size: 1.2rem;
  letter-spacing: 1px;
}

.app-delete-button:hover {
  background-color: #cf4a4a;
}
</style>
