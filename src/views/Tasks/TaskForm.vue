<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{ invalid: !taskName.isValid }">
      <label for="firstName">Task Name</label>
      <input
        type="text"
        id="firstName"
        v-model.trim="taskName.value"
        @blur="clearValidity('taskName')"
      />
      <p v-if="!taskName.isValid">Task Name cannot be empty</p>
    </div>
    <div class="form-control">
      <label for="description">Description</label>
      <textarea
        name="description"
        id="description"
        cols="30"
        rows="5"
        v-model="description.value"
      ></textarea>
    </div>
    <p v-if="!formIsValid">
      Please fix the above errors and try to add the task again !!
    </p>
    <v-btn variant="outlined" elevation="16" size="x-large">Add Task</v-btn>
    <v-btn
      variant="outlined"
      elevation="16"
      size="x-large"
      @click="$router.replace('/')"
      >Back to Tasks</v-btn
    >
  </form>
</template>
<script>
export default {
  data() {
    return {
      description: {
        value: "",
      },
      taskName: {
        value: "",
        isValid: true,
      },
      formIsValid: true,
    };
  },
  methods: {
    // to clear the red colour when user enters in input field and input field's focus is blurred
    clearValidity(input) {
      this[input].isValid = true;
    },
    validateForm() {
      if (this.taskName.value === "") {
        this.taskName.isValid = false;
        this.formIsValid = false;
      }
    },
    submitForm() {
      console.log("called");
      this.validateForm();
      if (!this.formIsValid) return;
      const formData = {
        id: Date.now(),
        name: this.taskName.value,
        description: this.description.value,
        completed: false,
      };
      this.$store.commit("addTask", formData);
      this.$router.replace("/");
    },
  },
};
</script>
<style scoped>
.form-control {
  margin: 2.5rem auto;
}
form {
  max-width: 50%;
  margin: 8rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type="checkbox"] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #2ca00f;
}

input[type="checkbox"] {
  display: inline;
  width: auto;
  border: none;
}

input[type="checkbox"]:focus {
  outline: #2ca00f solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
