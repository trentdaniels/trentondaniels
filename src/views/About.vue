<template>
  <div class="about">
    <app-navigation></app-navigation>
    <app-image-container></app-image-container>
    <app-about-me></app-about-me>
    <h1>This is an about page</h1>

  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import ImageContainer from '@/components/ImageContainer.vue'
import AboutMe from '@/components/AboutMe.vue'

export default {
  name: 'About',
  components: {
    'app-navigation': Navigation,
    'app-image-container': ImageContainer,
    'app-about-me': AboutMe
  }
}
</script>

<style lang="scss" scoped>
  img {
    width: 100%;
  }
  .about {
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
  .about-me{
    grid-column: 3 / span 1;
    grid-row: 1 / span 1;
  }
</style>
