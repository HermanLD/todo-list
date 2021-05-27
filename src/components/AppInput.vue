<template>
  <label class="app-input">
    <span class="label">{{ label }}</span>
    <input type="text" :placeholder="label" v-model="todo" />

    <button @click="submitTodo">Add</button>
  </label>
</template>

<script>
import { v4 as uuidv4 } from "uuid";

export default {
  emit: ["on-click"],
  data() {
    return {
      todo: null,
    };
  },
  props: {
    label: String,
  },
  methods: {
    submitTodo() {
      if (this.todo === null) {
        alert("Input Empty");
        return;
      }
      // uuidv4() will generate '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
      const newTodo = { id: uuidv4(), value: this.todo, isChecked: false };
      this.$emit("on-click", newTodo);

      this.todo = null;
    },
  },
};
</script>

<style>
.app-input {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.8rem;
  font-size: 1.4rem;
  font-weight: 400;
}

.app-input > .label {
  position: absolute;
  opacity: 0;
}

.app-input > input,
.app-input > button {
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.app-input > input {
  padding-right: 1.2rem;
  padding-left: 1.2rem;
  flex-grow: 1;
  flex-shrink: 1;
  border-radius: 12px;
  box-shadow: inset 0px 0px 0px 1px #bdbdbd;
}

.app-input > button {
  margin-left: 2.5rem;
  padding-right: 4rem;
  padding-left: 4rem;
  border-radius: 12px;
  font-weight: 600;
  color: #ffffff;
  background-color: #2F80ED;
  cursor: pointer;
}

.app-input > button:hover {
  background-color: #266ac4;
}
</style>