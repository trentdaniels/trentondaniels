<template>
    <div class="img-container">
        <transition name="fade-slide" mode="out-in">
          <div class="image-container">
            <img alt="Project Image" v-for="project in projects" :key="project.id" :src="project.secondaryImage" class="image" v-if="currentProject === project.id">
          </div>  
        </transition>
    </div>
</template>

<script>
export default {
  name: 'SecondaryImageContainer',
  props: {
    currentProject: Number,
    projects: Array
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

.img-container {
  width: 100%;
  height: 100%;
  z-index: 0;
  .image-container {
    width: 100%;
    height: 100%;
    text-align: center;
    overflow: hidden;
    .image {
      display: inline-block;
      object-fit: cover;
      width: 100%;
      min-height: 100%;
    }
  }
  
}
</style>
