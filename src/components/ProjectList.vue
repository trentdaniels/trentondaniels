<template>
  <div class="project-list">
    <h1>{{ msg }}</h1>
    <div class="project" v-for="project in projects" :key="project.id" v-if="project.id === projectNumber">
      <h2>{{ project.name }}</h2>
      <p>{{ project.description }}</p>
    </div>
    <button @click="nextProject">Next Project</button>
    <button @click="prevProject">Previous Project</button>
  </div>
</template>

<script>
export default {
  name: 'ProjectList',
  props: {
    msg: String,
    projects: Array,
    projectNumber: Number
  },
  methods: {
    nextProject: function () {
      this.$emit('increaseId')
    },
    prevProject: function () {
      this.$emit('decreaseId')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h2 {
  text-align: center;
  margin: 40px 0 auto;
}
p {
  text-align: center;
  width: 50%;
  margin: auto;
}
.project {
  text-align: center;
}
</style>
