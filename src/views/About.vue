<template>
  <div class="about">
    <navigation></navigation>
    <image-container></image-container>
    <me></me>
    <social-media></social-media>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import ImageContainer from '@/components/About/ImageContainer.vue'
import Me from '@/components/About/Me.vue'
import SocialMedia from '@/components/SocialMedia.vue'

export default {
  name: 'About',
  components: {
    Navigation,
    ImageContainer,
    Me,
    SocialMedia
  },
  data: function () {
    return {
     
    }
  }
}
</script>

<style lang="scss" scoped>
.about {
    display: grid;
    grid-template: 15% 1fr 15% / 65% 35%;
    height: 100vh;
    width: 100vw;
    #navigation {
      grid-area: 1 / 2 / span 1 / span 1;
    }
    #imageContainer {
      grid-area: 1 / 1 / span 3 / span 1;
    }
    #social-media {
      grid-area: 3 / 2 / span 1 / span 1;
    }
}
  
</style>
