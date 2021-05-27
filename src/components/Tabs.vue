<template>
  <ul class="app-tabs">
    <li>
      <label class="app-tab"
        ><input
          type="radio"
          name="tabs"
          value="all-todos"
          checked
          @click="updateTab"
        /><span class="label">All</span></label
      >
    </li>
    <li>
      <label class="app-tab"
        ><input
          type="radio"
          name="tabs"
          value="active-todos"
          @click="updateTab"
        /><span class="label">Active</span></label
      >
    </li>
    <li>
      <label class="app-tab"
        ><input
          type="radio"
          name="tabs"
          value="completed-todos"
          @click="updateTab"
        /><span class="label">Completed</span></label
      >
    </li>
  </ul>
</template>

<script>
export default {
  emits: ["tab-selection"],
  methods: {
    updateTab(event) {
      // console.log(event.target.value);
      this.$emit("tab-selection", event.target.value);
    },
  },
};
</script>

<style scoped>
.app-tabs {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 1.8rem;
  box-shadow: 0px 1px 0px 0px #bdbdbd;
  list-style: none;
}

.app-tab > [type="radio"] {
  position: absolute;
  opacity: 0;
}

[type="radio"] + .label {
  padding: 1.8rem;
  font-size: 1.4rem;
  font-weight: 600;
  cursor: pointer;
}

[type="radio"]:checked + .label {
  display: inline-block;
  border-radius: 1px;
  box-shadow: 0px 1px 0px 0px #2F80ED;
}
</style>