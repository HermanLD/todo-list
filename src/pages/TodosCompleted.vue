<template>
  <todo-list
    :renderedList="todoList"
    :tabState="isCompleted"
    @todoStateTunnel="eventTunnel"
    @deleteTodoTunnel="deleteTunnel"
  >
  </todo-list>
</template>

<script>
export default {
  emits: ["update-todo", "delete-todo"],
  props: {
    todoList: Array,
    isCompleted: Boolean,
  },
  methods: {
    eventTunnel(todoID) {
      // console.log("All todos page event:", todoID);
      this.$emit("update-todo", todoID);
    },
    deleteTunnel(todoID) {
      // console.log("Delete todo", todoID);
      this.$emit("delete-todo", todoID);
    },
  },
};
</script>

<style>
.delete-icon {
  --trash-svg-sizing: 1.4rem;
  width: var(--trash-svg-sizing);
  height: var(--trash-svg-sizing);

  color: #EB5757;
}
</style>