<template>
  <ul class="wrapper">
    <li v-for="todo in renderedList" :key="todo.id">
      <label
        ><input
          type="checkbox"
          @click="$emit('todo-state-tunnel', $event.target.value)"
          :value="todo.id"
          :checked="todo.isChecked"
        />{{ todo.value }}</label
      >
    </li>
  </ul>
</template>

<script>
export default {
  emits: ["todo-state-tunnel"],
  props: {
    renderedList: Array,
  },
};
</script>