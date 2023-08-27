<template>
  <nav>
    <span class="filter-option">
      <input type="checkbox" id="all" checked @change="setFilter" />
      <label for="all">All</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="incomplete" checked @change="setFilter" />
      <label for="incomplete">Incomplete</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="completed" checked @change="setFilter" />
      <label for="completed">Complete</label>
    </span>
  </nav>

  <button @click="showForm">Add Task</button>
  >
</template>
<script>
export default {
  data() {
    return {
      filters: {
        completed: true,
        incomplete: true,
        all: true,
      },
    };
  },
  emits: ["filters-changed"],
  methods: {
    showForm() {
      this.$router.replace("/task-form");
    },
    setFilter(event) {
      const inputId = event.target.id;
      const isActive = event.target.checked;
      const updatedFilters = {
        ...this.filters,
        [inputId]: isActive,
      };
      this.filters = updatedFilters;
      this.$emit("filters-changed", updatedFilters);
    },
  },
};
</script>
<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>
