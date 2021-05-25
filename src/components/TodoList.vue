<template>
  <ul class="wrapper">
    <li v-for="todo in todoList" :key="todo.id">
      <label><input type="checkbox" :value="todo.id" />{{ todo.value }}</label>
    </li>
  </ul>
</template>

<script>
export default {
  emits: ["update-list"],
  props: {
    todoList: Array,
  },
  methods: {},
};
</script>