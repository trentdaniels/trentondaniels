<template>
  <div class="about">
    <app-navigation></app-navigation>
    <app-image-container :altCaption="alt" :srcImage="src"></app-image-container>
    <app-about-me></app-about-me>
    

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
  },
  data: function () {
    return {
      src: require('@/assets/logo.png'),
      alt: "New description"
    }
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
