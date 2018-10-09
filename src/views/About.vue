<template>
  <div class="about">
    <div class="intro">
      <h1>Trenton.</h1>
    </div>
    <about-toggle @changed="changeCategory"></about-toggle>
    <navigation></navigation>
    <image-container :category="activeCategory"></image-container>
    <me :category=activeCategory></me>
    <social-media></social-media>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import ImageContainer from '@/components/About/ImageContainer.vue'
import Me from '@/components/About/Me.vue'
import SocialMedia from '@/components/SocialMedia.vue'
import AboutToggle from '@/components/About/AboutToggle.vue'

export default {
  name: 'About',
  components: {
    Navigation,
    ImageContainer,
    Me,
    SocialMedia,
    AboutToggle
  },
  data() {
    return {
      activeCategory: 0
    }
  },
  methods: {
    changeCategory(index) {
      this.activeCategory = index
    }
  }
}
</script>

<style lang="scss" scoped>
.about {
    display: grid;
    grid-template: 15% 1fr 15% / 20% 40% 40%;
    height: 100vh;
    width: 100vw;
    #navigation {
      grid-area: 1 / 3 / span 1 / span 1;
    }
    #imageContainer {
      grid-area: 1 / 2 / span 3 / span 1;
    }
    #social-media {
      grid-area: 3 / 3 / span 1 / span 1;
    }
    .intro {
      grid-area: 1 / 1 / span 1 / span 1;
      z-index: 10;
      h1 {
        color: white;
      }
    }
    #aboutToggle {
      grid-area: 1 / 1 / span 3 / span 1;
    }
}
  
</style>
