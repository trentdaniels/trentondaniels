<template>
  <div class="project-list">
    <h1>{{ msg }}</h1>
    <transition name="fade-slide" mode="out-in" appear>
      <div class="project" v-for="project in projects" :key="project.id" v-if="project.id === currentProjects">
        <h2><span>{{ project.id }}.</span> {{ project.name }}</h2>
        <p>{{ project.description }}</p>

      </div>
    </transition>
    <slot></slot>

  </div>
</template>

<script>
export default {
  name: 'ProjectList',
  props: {
    msg: String,
  },
  computed: {
    currentProject() {
      return this.$store.state.currentProject;
    },
    projects() {
      return this.$store.state.projects;
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
.fade-slide-enter {
  opacity: 0;
}

.fade-slide-enter-active {
  animation: fade-slide .65s ease normal;
}

.fade-slide-leave {
  opacity: 1;
}

.fade-slide-leave-active {
  animation: fade-slide .65s ease-in-out reverse;
}

@keyframes fade-slide {
  from {transform: translateY(15px); opacity: 0}
  to {transform: translateY(0px); opacity: 1}
}

</style>
