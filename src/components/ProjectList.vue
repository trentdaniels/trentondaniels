<template>
  <div class="project-list">
    <h1>{{ msg }}</h1>
    <transition name="fade-up" mode="out-in">
      <div class="project" v-for="project in projects" :key="project.id" v-if="project.id === projectNumber">
        <h2>{{ project.name }}</h2>
        <p>{{ project.description }}</p>
      </div>
    </transition>
    <button @click="nextProject">Next</button>
    <button @click="prevProject">Previous</button>
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

.project {
  text-align: center;
  h2 {
  text-align: center;
  margin: 40px 0 auto;
  }
  p {
  text-align: center;
  width: 50%;
  margin: auto;
  }
}
.fade-up-enter {
  opacity: 0;
}

.fade-up-enter-active {
  transition: opacity .5s;
}

.fade-up-leave {
  opacity: 1;
}

.fade-up-leave-active {
  transition: opacity .5s;
  opacity: 0;
}

@keyframes fade-up {
  0% {transfrom: translateY(0px); opacity: 1}
  100% {transform: translateY(10px); opacity: 0}
}


</style>
