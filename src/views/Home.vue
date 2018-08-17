<template>
  <div class="home">
    <app-navigation></app-navigation>
    <app-image-container></app-image-container>
    <app-project-list msg="Creative Developer"></app-project-list>
  </div>
</template>

<script>
// @ is an alias to /src
import ProjectList from '@/components/ProjectList.vue'
import Navigation from '@/components/Navigation.vue'
import ImageContainer from '@/components/ImageContainer.vue'

export default {
  name: 'Home',
  components: {
    'app-project-list': ProjectList,
    'app-navigation': Navigation,
    'app-image-container': ImageContainer
  }
}
</script>

<style lang="scss" scoped>
  img {
    width: 100%;
  }
  .home {
    display: grid;
    grid-template: 100vh / 10vw 45vw 45vw;
    width: 100vw;
    height: 100vh;
    align-items:center;
  }
  #nav {
    width: 100%;
    grid-column: 1 / span 1;
    grid-row: 1 / span 1;
  }
  .img-container {
    grid-column: 2 / span 1;
    grid-row: 1 / span 1;
    width: 100%;
  }
  .project-list {
    grid-column: 3 / span 1;
    grid-row: 1 / span 1;
    width: 100%;
  }



</style>
