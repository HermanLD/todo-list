<template>
  <ul>
    <li>
      <label
        ><input
          type="radio"
          name="tabs"
          value="all-todos"
          checked
          @click="updateTab"
        /><span>All</span></label
      >
    </li>
    <li>
      <label
        ><input
          type="radio"
          name="tabs"
          value="active-todos"
          @click="updateTab"
        /><span>Active</span></label
      >
    </li>
    <li>
      <label
        ><input
          type="radio"
          name="tabs"
          value="completed-todos"
          @click="updateTab"
        /><span>Completed</span></label
      >
    </li>
  </ul>
</template>

<script>
export default {
  emits: ["tab-selection"],
  methods: {
    updateTab(event) {
      console.log(event.target.value);
      this.$emit("tab-selection", event.target.value);
    },
  },
};
</script>

<style scoped>
[type="radio"]:checked + span {
  color: red;
}
</style>