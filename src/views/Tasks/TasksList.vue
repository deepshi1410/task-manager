<template>
  <div>
    <section>
      <task-filter @filters-changed="updateFilters"></task-filter>
    </section>
    <section>
      <!-- <div v-if="isLoading">
        <base-spinner></base-spinner>
      </div> -->
      <ul
        style="
          display: flex;
          flex-direction: row;
          gap: 15px;
          align-items: center;
        "
      >
        <task-item
          v-for="task in tasks"
          :key="task.id"
          :id="task.id"
          :taskName="task.taskName"
          :description="task.description"
          :isComplete="task.complete"
          @change-status="changeStatus"
        ></task-item>
      </ul>
    </section>
  </div>
</template>
<script>
import TaskItem from "../../components/Tasks/TaskItem.vue";
import TaskFilter from "../../components/Tasks/TaskFilter.vue";
export default {
  components: { TaskItem, TaskFilter },
  data() {
    return {
      activeFilters: {
        complete: true,
        incomplete: true,
        all: true,
      },
      isLoading: false,
      error: null,
      fTasks: [],
    };
  },
  watch: {
    tasks() {
      let allTasks = JSON.parse(localStorage.getItem("tasks"));
      console.log(allTasks, "all tasks in task list");
      if (allTasks) {
        return allTasks.filter((element) => {
          if (this.activeFilters.complete && element.completed) {
            return true;
          } else if (this.activeFilters.incomplete && !element.completed) {
            return true;
          }
        });
      }
      return [];
    },
  },
  computed: {
    allTasks() {
      console.log(this.$store.getters.tasks);
      return this.$store.getters.tasks;
    },
  },
  methods: {
    updateFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
    handleError() {
      this.error = null;
    },
    changeStatus(data) {
      console.log(data);
      const id = data.id;
      const tasks = this.$store.getters.tasks;
      console.log(tasks);
      tasks.map((element) => {
        if (element.id == id) {
          element.completed = true;
          this.$store.commit("setCompleteTask", element);
        }
      });
    },
  },
};
</script>
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
