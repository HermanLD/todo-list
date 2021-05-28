<template>
  <ul class="app-todos">
    <li class="todo-item" v-for="todo in renderedList" :key="todo.id">
      <label>
        <input
          class="sr-only"
          type="checkbox"
          @click="$emit('todo-state-tunnel', $event.target.value)"
          @keydown.enter="$emit('todo-state-tunnel', $event.target.value)"
          :value="todo.id"
          :checked="todo.isChecked"
        />
        <span class="checkbox">
          <svg class="check-icon"><use xlink:href="#check-icon" /></svg>
        </span>
        <span class="todo-value">
          {{ todo.value }}
        </span>
      </label>
      <button
        class="todo-delete"
        v-if="tabState"
        @click="$emit('delete-todo-tunnel', todo.id)"
        @keydown.enter="$emit('delete-todo-tunnel', todo.id)"
      >
        <svg class="delete-icon"><use xlink:href="#delete-trash" /></svg>
      </button>
    </li>
    <i data-fa-symbol="check-icon" class="fas fa-check"></i>
  </ul>
</template>

<script>
export default {
  emits: ["todo-state-tunnel", "delete-todo-tunnel"],
  props: {
    renderedList: Array,
    tabState: Boolean,
  },
};
</script>

<style scoped>
.app-todos {
  position: relative;
  margin-bottom: 1.4rem;
  font-size: 1.8rem;
  font-weight: 500;
  list-style: none;
}

.todo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem 0;
}

.todo-item > label {
  display: flex;
  flex: 1 0;
  cursor: pointer;
}

.todo-item .checkbox {
  --chkbox-size: 2.4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  height: var(--chkbox-size);
  width: var(--chkbox-size);
  margin-right: 0.8rem;
  border-radius: 4px;
  box-shadow: inset 0px 0px 0px 1px #bdbdbd;
}

[type="checkbox"]:focus + .checkbox {
  box-shadow: inset 0px 0px 0px 2px #2F80ED;
}

[type="checkbox"]:checked + .checkbox {
  box-shadow: inset 0px 0px 0px 1px #2F80ED;
  background-color: #2F80ED;
}

[type="checkbox"]:checked ~ .todo-value {
  text-decoration: line-through;
}

.todo-delete {
  margin-right: 1.6rem;
  cursor: pointer;
}

.check-icon {
  --check-icon-sizing: 1.6rem;
  width: var(--check-icon-sizing);
  height: var(--check-icon-sizing);
  color: white;
}

.sr-only {
  position: absolute;
  opacity: 0;
}
</style>