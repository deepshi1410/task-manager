<template>
  <v-card
    class="mx-auto"
    max-width="30%"
    min-width="20%"
    :style="
      isComplete
        ? { backgroundColor: '#80BC72' }
        : { backgroundColor: '#F09B9B' }
    "
  >
    <v-card-text>
      <div>{{ isComplete ? "Completed" : "Incomplete" }}</div>
      <p class="text-h4 text--primary">
        {{ name }}
      </p>
      <div class="text--primary">
        {{ description }}
      </div>
    </v-card-text>
    <v-card-actions>
      <!-- <v-btn variant="text" color="teal-accent-4" @click="completed = true">
        <span>{{ isComplete ? "" : "Mark Complete" }}</span>
      </v-btn>

      <v-btn variant="text" color="teal-accent-4">
        <span>Delete Task</span>
      </v-btn> -->
      <v-row justify="center">
        <v-col cols="auto">
          <v-btn height="72" min-width="164" @click="completed = true">
            <span>{{ isComplete ? "" : "Mark Complete" }}</span>
          </v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn height="72" @click="deleteTask" min-width="164">
            <span>Delete Task</span>
          </v-btn>
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ["id", "name", "description", "isComplete"],
  data() {
    return {
      complete: this.isComplete,
    };
  },
  methods: {
    changeStatus() {
      console.log(this.id);
      this.completed = true;
      this.$emit("change-status", { completed: this.completed, id: this.id });
    },
    deleteTask() {
      this.$store.commit("deleteTask", this.id);
      this.$router.replace("/");
    },
  },
};
</script>
<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>
