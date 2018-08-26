<template>
    <div class="img-container">
        <transition name="fade-slide" mode="out-in">
            <img alt="Project Image" v-for="project in projects" :key="project.id" :src="project.image" v-if="currentProject === project.id">
        </transition>
    </div>
</template>

<script>
export default {
  name: 'HomeImageContainer',
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

<style lang="scss" scoped>
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
