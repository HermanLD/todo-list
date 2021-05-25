<template>
  <ul>
    <li>
      <label><input type="radio" checked="true" value="all" />All</label>
    </li>
    <li>
      <label><input type="radio" checked="false" value="active" />Active</label>
    </li>
    <li>
      <label
        ><input
          type="radio"
          checked="false"
          value="completed"
        />Completed</label
      >
    </li>
  </ul>
</template>

<script>
export default {
  emits: ["update-active-tab"],
  methods: {
    updateTab(event) {
      this.$emit("update-active-tab", event.target.value);
    },
  },
};
</script>