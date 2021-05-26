<template>
  <todo-list
    :renderedList="todoList"
    @todoStateTunnel="$emit('update-todo', todoID)"
  />
</template>

<script>
export default {
  emits: ["update-todo"],
  props: {
    todoList: Array,
  },
  methods: {
    eventTunnel(todoID) {
      // console.log("All todos page event:", todoID);
      this.$emit("update-todo", todoID);
    },
  },
};
</script>